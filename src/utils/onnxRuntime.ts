import * as ort from 'onnxruntime-web'

export type InferenceProgress = (progress: number) => void

let encSession: ort.InferenceSession | null = null
let dfDecSession: ort.InferenceSession | null = null
let erbDecSession: ort.InferenceSession | null = null

const config = {
  sr: 48000,
  fftSize: 960,
  hopSize: 480,
  nbErb: 32,
  nbDf: 96
}

// State for DeepFilterNet temporal context
let states_conv: ort.Tensor | null = null
let states_gru: ort.Tensor | null = null

export async function loadModel(): Promise<void> {
  ort.env.wasm.numThreads = navigator.hardwareConcurrency || 4

  try {
    // Load encoder
    encSession = await ort.InferenceSession.create('/standard-model/enc.onnx', {
      executionProviders: ['wasm'],
    })

    // Load deep filter decoder
    dfDecSession = await ort.InferenceSession.create('/standard-model/df_dec.onnx', {
      executionProviders: ['wasm'],
    })

    // Load ERB decoder
    erbDecSession = await ort.InferenceSession.create('/standard-model/erb_dec.onnx', {
      executionProviders: ['wasm'],
    })

    // Initialize state tensors (dimensions from DeepFilterNet config)
    states_conv = new ort.Tensor('float32', new Float32Array(1 * 64 * 4 * 20), [1, 64, 4, 20])
    states_gru = new ort.Tensor('float32', new Float32Array(2 * 1 * 128), [2, 1, 128])

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

  // Resample if needed (currently just copy if already 48kHz)
  let audioData = inputBuffer
  if (sampleRate !== config.sr) {
    audioData = resample(inputBuffer, sampleRate, config.sr)
  }

  onProgress?.(0.05)

  const output: number[] = []

  // Process in frames of 480 samples (10ms at 48kHz)
  const frameSize = config.hopSize * 4 // 1920 samples for better STFT quality
  const hopSamples = config.hopSize

  for (let i = 0; i < audioData.length; i += hopSamples) {
    const frame = audioData.slice(i, Math.min(i + frameSize, audioData.length))

    // Pad if needed
    const paddedFrame = new Float32Array(frameSize)
    paddedFrame.set(frame.slice(0, Math.min(frame.length, frameSize)))

    // Run STFT to get features
    const { feat_erb, feat_spec } = runSTFT(paddedFrame)

    // --- PIPELINE STEP 1: ENCODER ---
    const encFeats = await encSession.run({
      'feat_erb': feat_erb,
      'feat_spec': feat_spec,
      'states_in': states_conv!
    })

    // Update state
    if (encFeats['states_out']) {
      states_conv = encFeats['states_out'] as ort.Tensor
    }

    // --- PIPELINE STEP 2: ERB DECODER ---
    const erbOutputs = await erbDecSession.run({
      'emb': encFeats['emb'],
      'states_in': states_gru!
    })

    // Update GRU state
    if (erbOutputs['states_out']) {
      states_gru = erbOutputs['states_out'] as ort.Tensor
    }

    // --- PIPELINE STEP 3: DEEP FILTER DECODER ---
    const dfOutputs = await dfDecSession.run({
      'emb': encFeats['emb'],
      'erb_gains': erbOutputs['erb_gains']
    })

    // Convert spectrum back to time domain
    const cleanSamples = runInverseSTFT(dfOutputs['spec_out'] as ort.Tensor, paddedFrame)

    // Apply overlap-add
    for (let j = 0; j < cleanSamples.length; j++) {
      if (output.length < i + j + 1) {
        output.push(cleanSamples[j])
      } else {
        output[i + j] += cleanSamples[j] * 0.5
      }
    }

    onProgress?.(0.05 + (i / audioData.length) * 0.9)
  }

  onProgress?.(0.95)

  return new Float32Array(output.slice(0, inputBuffer.length))
}

// STFT implementation for JavaScript
function runSTFT(samples: Float32Array): { feat_erb: ort.Tensor; feat_spec: ort.Tensor } {
  const fftSize = config.fftSize
  const hopSize = config.hopSize
  const nbErb = config.nbErb
  const nbBins = fftSize / 2 + 1

  // Create Hann window
  const window = new Float32Array(fftSize)
  for (let i = 0; i < fftSize; i++) {
    window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (fftSize - 1)))
  }

  // Number of frames
  const numFrames = Math.floor((samples.length - fftSize) / hopSize) + 1

  // Complex spectrum: [real, imag] interleaved for each bin
  const specData = new Float32Array(nbBins * numFrames * 2)

  // Apply STFT
  for (let frame = 0; frame < numFrames; frame++) {
    const start = frame * hopSize

    // Windowed frame
    const windowedFrame = new Float32Array(fftSize)
    for (let i = 0; i < fftSize; i++) {
      if (start + i < samples.length) {
        windowedFrame[i] = samples[start + i] * window[i]
      }
    }

    // Simple DFT (for demo - in production use FFT library)
    for (let k = 0; k < nbBins; k++) {
      let real = 0
      let imag = 0
      for (let n = 0; n < fftSize; n++) {
        const angle = -2 * Math.PI * k * n / fftSize
        real += windowedFrame[n] * Math.cos(angle)
        imag += windowedFrame[n] * Math.sin(angle)
      }
      const idx = (frame * nbBins + k) * 2
      specData[idx] = real
      specData[idx + 1] = imag
    }
  }

  // Create ERB features (simplified mel filterbank)
  const erbData = new Float32Array(nbErb * numFrames)
  for (let frame = 0; frame < numFrames; frame++) {
    for (let e = 0; e < nbErb; e++) {
      let mag = 0
      // Simple approximation: average of frequency bins
      const binStart = Math.floor((e / nbErb) * nbBins)
      const binEnd = Math.floor(((e + 1) / nbErb) * nbBins)
      for (let b = binStart; b < binEnd; b++) {
        const idx = (frame * nbBins + b) * 2
        mag += Math.sqrt(specData[idx] * specData[idx] + specData[idx + 1] * specData[idx + 1])
      }
      erbData[frame * nbErb + e] = mag / (binEnd - binStart)
    }
  }

  return {
    feat_erb: new ort.Tensor('float32', erbData, [1, 1, numFrames, nbErb]),
    feat_spec: new ort.Tensor('float32', specData, [1, 1, numFrames, nbBins * 2])
  }
}

// Inverse STFT
function runInverseSTFT(spec: ort.Tensor, originalFrame: Float32Array): Float32Array {
  const fftSize = config.fftSize
  const hopSize = config.hopSize
  const nbBins = fftSize / 2 + 1
  const numFrames = 1 // For single frame processing

  const specData = spec.data as Float32Array

  // Create output buffer
  const output = new Float32Array(originalFrame.length)

  for (let frame = 0; frame < numFrames; frame++) {
    // Reconstruct time-domain signal from spectrum
    const windowed = new Float32Array(fftSize)

    for (let k = 0; k < nbBins; k++) {
      const idx = (frame * nbBins + k) * 2
      const real = specData[idx] || 0
      const imag = specData[idx + 1] || 0

      // Simple inverse DFT
      for (let n = 0; n < fftSize; n++) {
        const angle = 2 * Math.PI * k * n / fftSize
        windowed[n] += real * Math.cos(angle) - imag * Math.sin(angle)
      }
    }

    // Normalize and apply window
    const window = new Float32Array(fftSize)
    for (let i = 0; i < fftSize; i++) {
      window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (fftSize - 1)))
    }

    const start = frame * hopSize
    for (let i = 0; i < fftSize && start + i < output.length; i++) {
      output[start + i] += windowed[i] / fftSize * window[i]
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
  states_conv = null
  states_gru = null
}

export function isModelLoaded(): boolean {
  return encSession !== null && dfDecSession !== null && erbDecSession !== null
}