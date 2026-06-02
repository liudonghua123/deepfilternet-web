export interface WavData {
  sampleRate: number
  channels: number
  samples: Float32Array
}

export function parseWav(buffer: Buffer): WavData {
  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength)

  // Check RIFF header
  const riff = String.fromCharCode(view.getUint8(0), view.getUint8(1), view.getUint8(2), view.getUint8(3))
  if (riff !== 'RIFF') throw new Error('Not a WAV file')

  // Check WAVE
  const wave = String.fromCharCode(view.getUint8(8), view.getUint8(9), view.getUint8(10), view.getUint8(11))
  if (wave !== 'WAVE') throw new Error('Not a WAV file')

  // Find fmt chunk
  let offset = 12
  let fmtOffset = -1
  while (offset < buffer.length - 8) {
    const chunkId = String.fromCharCode(
      view.getUint8(offset),
      view.getUint8(offset + 1),
      view.getUint8(offset + 2),
      view.getUint8(offset + 3)
    )
    const chunkSize = view.getUint32(offset + 4, true)

    if (chunkId === 'fmt ') {
      fmtOffset = offset + 8
      break
    }
    offset += 8 + chunkSize
  }

  if (fmtOffset === -1) throw new Error('fmt chunk not found')

  const channels = view.getUint16(fmtOffset + 2, true)
  const sampleRate = view.getUint32(fmtOffset + 4, true)
  const bitsPerSample = view.getUint16(fmtOffset + 14, true)

  // Find data chunk
  offset = fmtOffset + 16
  let dataOffset = -1
  let dataSize = 0
  while (offset < buffer.length - 8) {
    const chunkId = String.fromCharCode(
      view.getUint8(offset),
      view.getUint8(offset + 1),
      view.getUint8(offset + 2),
      view.getUint8(offset + 3)
    )
    const chunkSize = view.getUint32(offset + 4, true)

    if (chunkId === 'data') {
      dataOffset = offset + 8
      dataSize = chunkSize
      break
    }
    offset += 8 + chunkSize
  }

  if (dataOffset === -1) throw new Error('data chunk not found')

  const bytesPerSample = bitsPerSample / 8
  const numSamples = Math.floor(dataSize / bytesPerSample)

  const samples = new Float32Array(numSamples)

  if (bitsPerSample === 16) {
    for (let i = 0; i < numSamples; i++) {
      const sample = view.getInt16(dataOffset + i * 2, true)
      samples[i] = sample / 32768
    }
  } else if (bitsPerSample === 32) {
    for (let i = 0; i < numSamples; i++) {
      samples[i] = view.getFloat32(dataOffset + i * 4, true)
    }
  } else if (bitsPerSample === 8) {
    for (let i = 0; i < numSamples; i++) {
      samples[i] = (view.getUint8(dataOffset + i) - 128) / 128
    }
  }

  return { sampleRate, channels, samples }
}

export function encodeWav(samples: Float32Array, sampleRate: number, channels = 1): Buffer {
  const bitsPerSample = 16
  const bytesPerSample = bitsPerSample / 8
  const dataSize = samples.length * bytesPerSample * channels
  const bufferSize = 44 + dataSize

  const buffer = Buffer.alloc(bufferSize)
  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength)

  // RIFF header
  buffer.write('RIFF', 0)
  buffer.write('WAVE', 8)

  // fmt chunk
  buffer.write('fmt ', 12)
  view.setUint32(16, 16, true) // chunk size
  view.setUint16(20, 1, true) // PCM
  view.setUint16(22, channels, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * channels * bytesPerSample, true) // byte rate
  view.setUint16(32, channels * bytesPerSample, true) // block align
  view.setUint16(34, bitsPerSample, true)

  // data chunk
  buffer.write('data', 36)
  view.setUint32(40, dataSize, true)

  // Write samples
  let offset = 44
  for (let i = 0; i < samples.length; i++) {
    const sample = Math.max(-1, Math.min(1, samples[i]))
    const intSample = sample < 0 ? sample * 0x8000 : sample * 0x7fff
    view.setInt16(offset, intSample, true)
    offset += 2
  }

  return buffer
}