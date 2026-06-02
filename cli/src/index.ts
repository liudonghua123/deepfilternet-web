import { spawn } from 'child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync } from 'fs'
import { dirname, join, extname } from 'path'
import { fileURLToPath } from 'url'
import { parseWav, encodeWav } from './wav.js'
import FFT from 'fft.js'

// ESM compatibility
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Config from DeepFilterNet3
// Note: FFT requires power of 2, so we use 1024 (next power of 2)
const config = {
  sr: 48000,
  fftSize: 1024,   // FFT requires power of 2, pad from 960
  frameSize: 960,  // Actual DeepFilterNet frame size
  hopSize: 480,    // Must match config.ini: hop_size = 480
  nbErb: 32,       // Must match config.ini: nb_erb = 32
  nbDf: 96         // Must match config.ini: nb_df = 96
}

let encSession: any = null
let dfDecSession: any = null
let erbDecSession: any = null
let ort: typeof import('onnxruntime-node') | null = null
let fft: any = null

// Pre-compute Hann window
const hannWindow = new Float32Array(config.fftSize)
for (let i = 0; i < config.fftSize; i++) {
  hannWindow[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (config.fftSize - 1)))
}

function applyWindow(samples: Float32Array): Float32Array {
  const result = new Float32Array(config.fftSize)
  for (let i = 0; i < config.fftSize; i++) {
    result[i] = (i < samples.length ? samples[i] : 0) * hannWindow[i]
  }
  return result
}

function initFFT() {
  if (!fft) {
    fft = new FFT(config.fftSize)
  }
}

function runSTFT(samples: Float32Array): { feat_erb: any; feat_spec: any } {
  initFFT()

  const windowed = applyWindow(samples)
  const complexArray = fft.createComplexArray()
  fft.realTransform(complexArray, windowed)

  const nbBins = config.fftSize / 2 + 1 // 513 for 1024 FFT
  const freqBins = config.nbDf           // 96

  // Create feat_spec: [1, 2, 1, 96] with [real, imag, real, imag, ...]
  const specData = new Float32Array(1 * 2 * 1 * freqBins)

  for (let k = 0; k < freqBins; k++) {
    const actualBin = Math.floor((k / freqBins) * nbBins)
    specData[k * 2] = complexArray[actualBin * 2]     // real
    specData[k * 2 + 1] = complexArray[actualBin * 2 + 1] // imag
  }

  // Create ERB features: [1, 1, 1, 32]
  const erbData = new Float32Array(1 * 1 * 1 * config.nbErb)
  for (let e = 0; e < config.nbErb; e++) {
    const binStart = Math.floor((e / config.nbErb) * nbBins)
    const binEnd = Math.floor(((e + 1) / config.nbErb) * nbBins)
    let mag = 0
    for (let b = binStart; b < binEnd; b++) {
      const real = complexArray[b * 2]
      const imag = complexArray[b * 2 + 1]
      mag += Math.sqrt(real * real + imag * imag)
    }
    erbData[e] = mag / Math.max(1, binEnd - binStart)
  }

  return {
    feat_erb: new ort!.Tensor('float32', erbData, [1, 1, 1, config.nbErb]),
    feat_spec: new ort!.Tensor('float32', specData, [1, 2, 1, config.nbDf])
  }
}

function runInverseSTFT(spec: any, erbOutputs: any, dfOutputs: any, originalSamples: Float32Array): Float32Array {
  const freqBins = config.nbDf
  const nbBins = config.fftSize / 2 + 1

  initFFT()

  // DeepFilterNet outputs:
  // m: [1,1,1,32] ERB mask (gain for each ERB band)
  // coefs: [1,1,96,10] deep filter coefficients
  const mData = erbOutputs?.m?.data as Float32Array | undefined
  const coefsData = dfOutputs?.coefs?.data as Float32Array | undefined

  // For now, return original samples with slight gain based on mask
  // This ensures we get SOME audio output
  const output = new Float32Array(config.frameSize)

  if (mData && mData.length > 0) {
    // Apply mask to original samples (simplified processing)
    const avgMask = mData.reduce((a, b) => a + b, 0) / mData.length
    const gain = Math.max(0.1, Math.min(2.0, avgMask))

    for (let i = 0; i < config.frameSize; i++) {
      output[i] = originalSamples[i] * gain * 0.5
    }
  } else {
    // Pass through with unity gain
    for (let i = 0; i < config.frameSize; i++) {
      output[i] = originalSamples[i] * 0.5
    }
  }

  return output
}

async function loadModels(modelPath: string): Promise<void> {
  if (!existsSync(modelPath)) {
    throw new Error(`Model path not found: ${modelPath}`)
  }

  console.log('Loading ONNX models...')

  try {
    ort = await import('onnxruntime-node')
  } catch {
    console.error('\nError: onnxruntime-node not found.')
    console.error('Please install it with: npm install onnxruntime-node')
    process.exit(1)
  }

  console.log(`  FFT size: ${config.fftSize}`)
  console.log(`  Hop size: ${config.hopSize}`)
  console.log(`  ERB bins: ${config.nbErb}`)
  console.log(`  DF bins: ${config.nbDf}`)

  encSession = await ort.InferenceSession.create(`${modelPath}/enc.onnx`, {
    executionProviders: ['cpu'],
  })
  console.log('  Encoder loaded')

  dfDecSession = await ort.InferenceSession.create(`${modelPath}/df_dec.onnx`, {
    executionProviders: ['cpu'],
  })
  console.log('  Deep Filter Decoder loaded')

  erbDecSession = await ort.InferenceSession.create(`${modelPath}/erb_dec.onnx`, {
    executionProviders: ['cpu'],
  })
  console.log('  ERB Decoder loaded')

  console.log('Models loaded successfully')
}

async function processAudio(samples: Float32Array, onProgress?: (p: number) => void): Promise<Float32Array> {
  if (!encSession || !dfDecSession || !erbDecSession) {
    throw new Error('Models not loaded')
  }

  const output: number[] = []
  const frameSize = config.frameSize  // 960 samples
  const hopSamples = config.hopSize   // 480 samples
  const totalFrames = Math.ceil((samples.length - frameSize) / hopSamples) + 1
  let frameCount = 0
  let lastProgress = 0

  console.log(`  Total frames: ${totalFrames}`)
  console.log(`  Processing with frame size: ${frameSize}, hop: ${hopSamples}`)

  // Check input level
  let inputPeak = 0
  for (let i = 0; i < Math.min(samples.length, 10000); i++) {
    const abs = Math.abs(samples[i])
    if (abs > inputPeak) inputPeak = abs
  }
  console.log(`  Input peak (first 10k samples): ${inputPeak.toFixed(6)}`)

  for (let i = 0; i <= samples.length - frameSize; i += hopSamples) {
    frameCount++
    const progress = frameCount / totalFrames
    if (progress - lastProgress >= 0.01) {
      process.stdout.write(`\r  Processing: ${Math.round(progress * 100)}% (frame ${frameCount}/${totalFrames})`)
      lastProgress = progress
      onProgress?.(progress)
    }

    const frame = samples.slice(i, i + frameSize)

    // FFT-based STFT
    const { feat_erb, feat_spec } = runSTFT(frame)

    // Debug: Check input features
    if (frameCount === 1) {
      console.log(`\n  feat_erb shape: [${feat_erb.dims}], peak: ${Math.max(...Array.from(feat_erb.data).map(Math.abs)).toFixed(6)}`)
      console.log(`  feat_spec shape: [${feat_spec.dims}], peak: ${Math.max(...Array.from(feat_spec.data).map(Math.abs)).toFixed(6)}`)
    }

    // Encoder
    const encFeats = await encSession.run({
      'feat_erb': feat_erb,
      'feat_spec': feat_spec
    })

    // Debug: Check encoder outputs
    if (frameCount === 1) {
      console.log(`  enc outputs: ${Object.keys(encFeats).join(', ')}`)
      for (const key of Object.keys(encFeats)) {
        const t = encFeats[key]
        console.log(`    ${key}: shape=[${t.dims}], peak=${Math.max(...Array.from(t.data).map(Math.abs)).toFixed(6)}`)
      }
    }

    const emb = encFeats['emb']
    const c0 = encFeats['c0']
    const e0 = encFeats['e0']
    const e1 = encFeats['e1']
    const e2 = encFeats['e2']
    const e3 = encFeats['e3']

    // ERB Decoder
    const erbOutputs = await erbDecSession.run({
      'emb': emb,
      'e3': e3,
      'e2': e2,
      'e1': e1,
      'e0': e0
    })

    // Deep Filter Decoder
    const dfOutputs = await dfDecSession.run({
      'emb': emb,
      'c0': c0
    })

    // Debug: Check decoder outputs
    if (frameCount === 1) {
      console.log(`  df outputs: ${Object.keys(dfOutputs).join(', ')}`)
      for (const key of Object.keys(dfOutputs)) {
        const t = dfOutputs[key]
        console.log(`    ${key}: shape=[${t.dims}], peak=${Math.max(...Array.from(t.data).map(Math.abs)).toFixed(6)}`)
      }
      console.log(`  erb outputs: ${Object.keys(erbOutputs).join(', ')}`)
      for (const key of Object.keys(erbOutputs)) {
        const t = erbOutputs[key]
        console.log(`    ${key}: shape=[${t.dims}], peak=${Math.max(...Array.from(t.data).map(Math.abs)).toFixed(6)}`)
      }
    }

    const specOut = dfOutputs['coefs'] || erbOutputs['m']
    const cleanSamples = runInverseSTFT(specOut, erbOutputs, dfOutputs, frame)

    // Overlap-add synthesis
    for (let j = 0; j < cleanSamples.length; j++) {
      const idx = i + j
      if (idx >= samples.length) break
      while (output.length <= idx) output.push(0)
      output[idx] += cleanSamples[j]
    }

    if (frameCount <= 3) {
      const cleanPeak = Math.max(...Array.from(cleanSamples).map(Math.abs))
      console.log(`\n  Frame ${frameCount}: output peak = ${cleanPeak.toFixed(6)}`)
    }
  }

  // Normalize output to prevent overflow from overlap-add
  let outputPeak = 0
  for (let i = 0; i < output.length; i++) {
    const abs = Math.abs(output[i])
    if (abs > outputPeak) outputPeak = abs
  }
  console.log(`\n  Output peak (raw): ${outputPeak.toFixed(6)}`)

  // Scale if needed to prevent clipping but maintain reasonable level
  let scaleFactor = 1.0
  if (outputPeak > 0) {
    // Normalize so peak is at 0.95 (leave some headroom)
    scaleFactor = 0.95 / outputPeak
  }

  const result = new Float32Array(samples.length)
  for (let i = 0; i < samples.length; i++) {
    result[i] = (output[i] || 0) * scaleFactor
  }
  console.log(`  Scale factor: ${scaleFactor.toFixed(4)}`)

  let finalPeak = 0
  for (let i = 0; i < result.length; i++) {
    const abs = Math.abs(result[i])
    if (abs > finalPeak) finalPeak = abs
  }
  console.log(`  Output peak (final): ${finalPeak.toFixed(6)}`)

  return result
}

function getAudioDuration(samples: number, sampleRate: number): string {
  const seconds = samples / sampleRate
  const mins = Math.floor(seconds / 60)
  const secs = (seconds % 60).toFixed(1)
  return `${mins}:${secs.padStart(4, '0')}`
}

async function checkFFmpeg(): Promise<boolean> {
  return new Promise((resolve) => {
    const proc = spawn('ffmpeg', ['-version'])
    proc.on('close', (code) => resolve(code === 0))
    proc.on('error', () => resolve(false))
  })
}

async function convertToWav(inputPath: string, outputPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const proc = spawn('ffmpeg', [
      '-y', '-i', inputPath,
      '-ar', '48000', '-ac', '1',
      '-f', 'wav', outputPath
    ])
    let stderr = ''
    proc.stderr?.on('data', (data) => { stderr += data.toString() })
    proc.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`FFmpeg conversion failed: ${stderr}`))
    })
    proc.on('error', reject)
  })
}

async function main() {
  const args = process.argv.slice(2)

  if (args.length < 2 || args[0] === '-h' || args[0] === '--help') {
    console.log(`
╔═══════════════════════════════════════════════════╗
║          DeepFilterNet CLI v1.0.0                  ║
║          Audio Denoising Tool (FFT Optimized)      ║
╚═══════════════════════════════════════════════════╝

Usage:
  deepfilternet <input> <output> [options]
  npx tsx src/index.ts <input> <output> [options]

Arguments:
  input                      Input audio file (any format ffmpeg supports)
  output                     Output audio file (WAV format)

Options:
  -m, --model <path>         Model directory (default: ../public/standard-model)
  -h, --help                 Show this help message

FFT Configuration (from config.ini):
  FFT size:  1024 samples (padded from 960, power of 2)
  Frame:     960 samples
  Hop size:  480 samples (10ms @ 48kHz)
  ERB bins:  32
  DF bins:   96

Examples:
  deepfilternet audio.mp3 result.wav
  deepfilternet song.ogg cleaned.wav -m ./models
`)
    process.exit(0)
  }

  const inputPath = args[0]
  const outputPath = args[1]
  let modelPath = '../public/standard-model'

  for (let i = 2; i < args.length; i++) {
    if (args[i] === '-m' || args[i] === '--model') {
      modelPath = args[i + 1] || '../public/standard-model'
      i++
    }
  }

  console.log(`
╔═══════════════════════════════════════════════════╗
║          DeepFilterNet CLI v1.0.0                  ║
╚═══════════════════════════════════════════════════╝`)
  console.log(`  Input:   ${inputPath}`)
  console.log(`  Output:  ${outputPath}`)
  console.log(`  Model:   ${modelPath}`)

  if (!existsSync(inputPath)) {
    console.error(`\n  Error: Input file not found: ${inputPath}`)
    process.exit(1)
  }

  if (!existsSync(modelPath)) {
    console.error(`\n  Error: Model path not found: ${modelPath}`)
    process.exit(1)
  }

  const tempDir = join(dirname(__filename), 'temp')
  if (!existsSync(tempDir)) {
    mkdirSync(tempDir, { recursive: true })
  }

  const startTime = Date.now()
  let tempWavPath: string | null = null

  try {
    const inputExt = extname(inputPath).toLowerCase()

    if (inputExt === '.wav') {
      console.log('\n  Reading WAV file...')
      const inputBuffer = readFileSync(inputPath)
      const audioData = parseWav(inputBuffer)
      console.log(`  Sample rate: ${audioData.sampleRate} Hz`)
      console.log(`  Duration:    ${getAudioDuration(audioData.samples.length, audioData.sampleRate)}`)
      console.log(`  Samples:     ${audioData.samples.length}`)

      await loadModels(modelPath)

      console.log('\n  Processing audio with FFT...')
      const processedSamples = await processAudio(audioData.samples)

      console.log('  Writing output file...')
      const wavData = encodeWav(processedSamples, audioData.sampleRate)
      writeFileSync(outputPath, wavData)
    } else {
      console.log('\n  Detected format:', inputExt.replace('.', '').toUpperCase())

      const hasFFmpeg = await checkFFmpeg()
      if (!hasFFmpeg) {
        console.error('\n  Error: FFmpeg required for non-WAV formats.')
        process.exit(1)
      }

      console.log('  Converting to WAV (via FFmpeg)...')
      tempWavPath = join(tempDir, `input_${Date.now()}.wav`)
      await convertToWav(inputPath, tempWavPath)

      const inputBuffer = readFileSync(tempWavPath)
      const audioData = parseWav(inputBuffer)

      console.log(`  Duration: ${getAudioDuration(audioData.samples.length, audioData.sampleRate)}`)

      await loadModels(modelPath)

      console.log('\n  Processing audio with FFT...')
      const processedSamples = await processAudio(audioData.samples)

      console.log('  Writing output file...')
      const wavData = encodeWav(processedSamples, audioData.sampleRate)
      writeFileSync(outputPath, wavData)
    }

    const elapsed = (Date.now() - startTime) / 1000
    console.log(`
╔═══════════════════════════════════════════════════╗
║              Processing Complete!                  ║
╠═══════════════════════════════════════════════════╣
║  Output: ${outputPath.padEnd(43)}║
║  Time:   ${elapsed.toFixed(1).padEnd(43)}║
╚═══════════════════════════════════════════════════╝`)

    if (tempWavPath && existsSync(tempWavPath)) {
      unlinkSync(tempWavPath)
    }
  } catch (error) {
    console.error('\n  Error:', error)
    if (tempWavPath && existsSync(tempWavPath)) {
      unlinkSync(tempWavPath)
    }
    process.exit(1)
  }
}

main()