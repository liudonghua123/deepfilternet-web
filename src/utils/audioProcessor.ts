import { encodeWav } from './wavEncoder'

let audioContext: AudioContext | null = null

export function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext()
  }
  return audioContext
}

export async function decodeAudioFile(file: File): Promise<AudioBuffer> {
  const ctx = getAudioContext()
  const arrayBuffer = await file.arrayBuffer()
  return ctx.decodeAudioData(arrayBuffer)
}

export function audioBufferToFloat32(buffer: AudioBuffer): Float32Array {
  // Convert to mono if stereo
  const channelData = buffer.getChannelData(0)
  const length = buffer.length
  const float32 = new Float32Array(length)

  if (buffer.numberOfChannels === 1) {
    float32.set(channelData)
  } else {
    // Mix down to mono
    const channels: Float32Array[] = []
    for (let i = 0; i < buffer.numberOfChannels; i++) {
      channels.push(buffer.getChannelData(i))
    }
    for (let i = 0; i < length; i++) {
      let sum = 0
      for (let c = 0; c < buffer.numberOfChannels; c++) {
        sum += channels[c][i]
      }
      float32[i] = sum / buffer.numberOfChannels
    }
  }

  return float32
}

export function float32ToAudioBuffer(
  float32: Float32Array,
  sampleRate: number,
  numberOfChannels: number = 1
): AudioBuffer {
  const ctx = getAudioContext()
  const length = float32.length / numberOfChannels
  const buffer = ctx.createBuffer(numberOfChannels, length, sampleRate)

  if (numberOfChannels === 1) {
    const monoData = new Float32Array(float32)
    buffer.copyToChannel(monoData, 0)
  } else {
    // Interleaved to deinterleaved
    const length = float32.length / numberOfChannels
    for (let c = 0; c < numberOfChannels; c++) {
      const channelData = new Float32Array(length)
      for (let i = 0; i < length; i++) {
        channelData[i] = float32[i * numberOfChannels + c]
      }
      buffer.copyToChannel(channelData, c)
    }
  }

  return buffer
}

export async function processAudio(
  inputBuffer: AudioBuffer,
  onProgress?: (progress: number) => void
): Promise<AudioBuffer> {
  const { runInference } = await import('./onnxRuntime')
  const float32 = audioBufferToFloat32(inputBuffer)

  console.log('Starting audio processing, total samples:', float32.length)

  const processed = await runInference(float32, inputBuffer.sampleRate, onProgress)

  console.log('Audio processing completed')
  return float32ToAudioBuffer(processed, inputBuffer.sampleRate, 1)
}

export function audioBufferToWav(buffer: AudioBuffer): Blob {
  // Convert to mono for processing, output as WAV
  const mono = float32ToAudioBuffer(
    audioBufferToFloat32(buffer),
    buffer.sampleRate,
    1
  )
  const channelData = mono.getChannelData(0)
  return encodeWav(channelData, mono.sampleRate, 1)
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function getWaveformPeaks(buffer: AudioBuffer, numPeaks: number = 200): Float32Array {
  const channelData = buffer.getChannelData(0)
  const samplesPerPeak = Math.floor(channelData.length / numPeaks)
  const peaks = new Float32Array(numPeaks)

  for (let i = 0; i < numPeaks; i++) {
    const start = i * samplesPerPeak
    const end = Math.min(start + samplesPerPeak, channelData.length)
    let max = 0

    for (let j = start; j < end; j++) {
      const abs = Math.abs(channelData[j])
      if (abs > max) max = abs
    }

    peaks[i] = max
  }

  return peaks
}