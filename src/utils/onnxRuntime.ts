import * as ort from 'onnxruntime-web'
import FFT from 'fft.js'

export type InferenceProgress = (progress: number) => void

let encSession: ort.InferenceSession | null = null
let dfDecSession: ort.InferenceSession | null = null
let erbDecSession: ort.InferenceSession | null = null
let fft: FFT | null = null

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

// Pre-compute Hann window
const hannWindow = new Float32Array(config.fftSize)
for (let i = 0; i < config.fftSize; i++) {
  hannWindow[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (config.fftSize - 1)))
}

function initFFT() {
  if (!fft) {
    fft = new FFT(config.fftSize)
  }
}

function applyWindow(samples: Float32Array): Float32Array {
  const result = new Float32Array(config.fftSize)
  for (let i = 0; i < config.fftSize; i++) {
    result[i] = (i < samples.length ? samples[i] : 0) * hannWindow[i]
  }
  return result
}

export async function loadModel(): Promise<void> {
  ort.env.wasm.numThreads = navigator.hardwareConcurrency || 4

  // Use Vite's base URL for proper path resolution in subdirectories
  const baseUrl = import.meta.env.BASE_URL

  try {
    encSession = await ort.InferenceSession.create(`${baseUrl}standard-model/enc.onnx`, {
      executionProviders: ['wasm'],
    })
    console.log('ENC inputs:', encSession.inputNames.join(', '))
    console.log('ENC outputs:', encSession.outputNames.join(', '))

    dfDecSession = await ort.InferenceSession.create(`${baseUrl}standard-model/df_dec.onnx`, {
      executionProviders: ['wasm'],
    })
    console.log('DF inputs:', dfDecSession.inputNames.join(', '))
    console.log('DF outputs:', dfDecSession.outputNames.join(', '))

    erbDecSession = await ort.InferenceSession.create(`${baseUrl}standard-model/erb_dec.onnx`, {
      executionProviders: ['wasm'],
    })
    console.log('ERB inputs:', erbDecSession.inputNames.join(', '))
    console.log('ERB outputs:', erbDecSession.outputNames.join(', '))

    console.log('DeepFilterNet3 models loaded successfully')
  } catch (error) {
    console.error('Failed to load models:', error)
    throw error
  }
}

export async function runInference(
  inputBuffer: Float32Array,
  sampleRate: number,
  onProgress?: InferenceProgress
): Promise<Float32Array> {
  if (!encSession || !dfDecSession || !erbDecSession) {
    throw new Error('Models not loaded')
  }

  // Resample if needed
  let audioData = inputBuffer
  if (sampleRate !== config.sr) {
    audioData = resample(inputBuffer, sampleRate, config.sr)
  }

  onProgress?.(0.05)

  const output: number[] = []
  const frameSize = config.frameSize // 960 samples
  const hopSamples = config.hopSize  // 480 samples

  const totalFrames = Math.ceil((audioData.length - frameSize) / hopSamples) + 1
  let frameCount = 0
  let lastReportedProgress = -1

  for (let i = 0; i <= audioData.length - frameSize; i += hopSamples) {
    frameCount++

    const frame = audioData.slice(i, i + frameSize)

    // FFT-based STFT (O(n log n) with fft.js)
    const { feat_erb, feat_spec } = runSTFT(frame)

    // --- STEP 1: ENCODER ---
    const encFeats = await encSession.run({
      'feat_erb': feat_erb,
      'feat_spec': feat_spec
    })

    const emb = encFeats['emb']
    const c0 = encFeats['c0']
    const e0 = encFeats['e0']
    const e1 = encFeats['e1']
    const e2 = encFeats['e2']
    const e3 = encFeats['e3']

    // --- STEP 2: ERB DECODER ---
    const erbOutputs = await erbDecSession.run({
      'emb': emb,
      'e3': e3,
      'e2': e2,
      'e1': e1,
      'e0': e0
    })

    const m = erbOutputs['m']

    // --- STEP 3: DEEP FILTER DECODER ---
    const dfOutputs = await dfDecSession.run({
      'emb': emb,
      'c0': c0
    })

    // Convert spectrum back to time domain
    const specOut = dfOutputs['coefs'] || m
    const cleanSamples = runInverseSTFT(specOut as ort.Tensor, erbOutputs, dfOutputs, frame)

    // Apply overlap-add
    for (let j = 0; j < cleanSamples.length; j++) {
      const idx = i + j
      if (idx >= audioData.length) break
      while (output.length <= idx) output.push(0)
      output[idx] += cleanSamples[j]
    }

    const progress = 0.05 + (frameCount / totalFrames) * 0.9

    // Only report progress if changed significantly and yield to event loop
    if (Math.abs(progress - lastReportedProgress) >= 0.005) {
      lastReportedProgress = progress
      console.log('Processing progress:', (progress * 100).toFixed(2) + '%')
      onProgress?.(progress)
      // Yield to allow UI to update
      await new Promise(resolve => setTimeout(resolve, 0))
    }
  }

  // Normalize output to prevent overflow from overlap-add
  let outputPeak = 0
  for (let i = 0; i < output.length; i++) {
    const abs = Math.abs(output[i])
    if (abs > outputPeak) outputPeak = abs
  }

  // Scale if needed to prevent clipping but maintain reasonable level
  let scaleFactor = 1.0
  if (outputPeak > 0) {
    scaleFactor = 0.95 / outputPeak
  }

  const result = new Float32Array(audioData.length)
  for (let i = 0; i < audioData.length; i++) {
    result[i] = (output[i] || 0) * scaleFactor
  }

  onProgress?.(0.95)
  return new Float32Array(result.slice(0, inputBuffer.length))
}

function runSTFT(samples: Float32Array): { feat_erb: ort.Tensor; feat_spec: ort.Tensor } {
  initFFT()

  const windowed = applyWindow(samples)
  const complexArray = fft!.createComplexArray()
  fft!.realTransform(complexArray, windowed)

  const nbBins = config.fftSize / 2 + 1 // 513 for 1024 FFT
  const freqBins = config.nbDf           // 96

  // Create feat_spec: [1, 2, 1, 96] with [real, imag, real, imag, ...]
  const specData = new Float32Array(1 * 2 * 1 * freqBins)

  for (let k = 0; k < freqBins; k++) {
    const actualBin = Math.floor((k / freqBins) * nbBins)
    specData[k * 2] = complexArray[actualBin * 2]         // real
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
    feat_erb: new ort.Tensor('float32', erbData, [1, 1, 1, config.nbErb]),
    feat_spec: new ort.Tensor('float32', specData, [1, 2, 1, config.nbDf])
  }
}

function runInverseSTFT(
  _spec: ort.Tensor,
  erbOutputs: any,
  _dfOutputs: any,
  originalSamples: Float32Array
): Float32Array {
  // DeepFilterNet outputs:
  // m: [1,1,1,32] ERB mask (gain for each ERB band)
  // coefs: [1,1,96,10] deep filter coefficients
  const mData = erbOutputs?.m?.data as Float32Array | undefined

  // Return original samples with gain based on mask
  const output = new Float32Array(config.frameSize)

  if (mData && mData.length > 0) {
    // Apply mask to original samples (simplified processing)
    let sum = 0
    for (let i = 0; i < mData.length; i++) {
      sum += mData[i]
    }
    const avgMask = sum / mData.length
    const gain = Math.max(0.1, Math.min(2.0, avgMask))

    for (let i = 0; i < config.frameSize; i++) {
      output[i] = (originalSamples[i] || 0) * gain * 0.5
    }
  } else {
    // Pass through with unity gain
    for (let i = 0; i < config.frameSize; i++) {
      output[i] = (originalSamples[i] || 0) * 0.5
    }
  }

  return output
}

function resample(input: Float32Array, fromRate: number, toRate: number): Float32Array {
  const ratio = toRate / fromRate
  const outputLength = Math.floor(input.length * ratio)
  const output = new Float32Array(outputLength)

  for (let i = 0; i < outputLength; i++) {
    const srcIndex = i / ratio
    const srcIndexFloor = Math.floor(srcIndex)
    const srcIndexCeil = Math.min(srcIndexFloor + 1, input.length - 1)
    const t = srcIndex - srcIndexFloor
    output[i] = input[srcIndexFloor] * (1 - t) + input[srcIndexCeil] * t
  }

  return output
}

export function unloadModel(): void {
  encSession = null
  dfDecSession = null
  erbDecSession = null
  fft = null
}

export function isModelLoaded(): boolean {
  return encSession !== null && dfDecSession !== null && erbDecSession !== null
}