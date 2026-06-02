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

  onProgress?.(0.1)

  // Process audio in chunks
  const chunkSize = config.fftSize * 10 // Process 10 frames at a time
  const numChunks = Math.ceil(audioData.length / chunkSize)
  const outputChunks: Float32Array[] = []

  for (let i = 0; i < numChunks; i++) {
    const start = i * chunkSize
    const end = Math.min(start + chunkSize, audioData.length)
    const chunk = audioData.slice(start, end)

    // Pad chunk to chunkSize
    const paddedChunk = new Float32Array(chunkSize)
    paddedChunk.set(chunk.slice(0, Math.min(chunk.length, chunkSize)))

    // Simple pass-through for now (placeholder for actual DeepFilterNet inference)
    // The actual implementation would need to:
    // 1. Apply STFT
    // 2. Run through encoder, deep filter, decoder
    // 3. Apply inverse STFT
    outputChunks.push(paddedChunk)

    onProgress?.(0.1 + (i / numChunks) * 0.8)
  }

  onProgress?.(0.9)

  // Concatenate output chunks
  const totalLength = outputChunks.reduce((sum, chunk) => sum + chunk.length, 0)
  const output = new Float32Array(totalLength)
  let offset = 0
  for (const chunk of outputChunks) {
    output.set(chunk, offset)
    offset += chunk.length
  }

  onProgress?.(1.0)
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
}

export function isModelLoaded(): boolean {
  return encSession !== null && dfDecSession !== null && erbDecSession !== null
}