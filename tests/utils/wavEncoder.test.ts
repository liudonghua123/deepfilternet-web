import { describe, it, expect } from 'vitest'
import { encodeWav } from '../../src/utils/wavEncoder'

describe('encodeWav', () => {
  it('should encode audio buffer to WAV format', () => {
    const sampleRate = 16000
    const numChannels = 1
    const length = 16000 // 1 second
    const audioBuffer = new Float32Array(length)

    // Fill with 440Hz sine wave
    for (let i = 0; i < length; i++) {
      audioBuffer[i] = Math.sin(2 * Math.PI * 440 * i / sampleRate)
    }

    const wavBlob = encodeWav(audioBuffer, sampleRate, numChannels)

    expect(wavBlob.type).toBe('audio/wav')
    expect(wavBlob.size).toBeGreaterThan(0)

    // Check WAV header
    const header = new Uint8Array(wavBlob.slice(0, 44))
    expect(String.fromCharCode(...header.slice(0, 4))).toBe('RIFF')
    expect(String.fromCharCode(...header.slice(8, 12))).toBe('WAVE')
  })

  it('should handle stereo audio', () => {
    const sampleRate = 44100
    const numChannels = 2
    const length = 44100
    const leftChannel = new Float32Array(length)
    const rightChannel = new Float32Array(length)

    for (let i = 0; i < length; i++) {
      leftChannel[i] = Math.sin(2 * Math.PI * 440 * i / sampleRate)
      rightChannel[i] = Math.sin(2 * Math.PI * 880 * i / sampleRate)
    }

    // Interleave stereo
    const stereoBuffer = new Float32Array(length * 2)
    for (let i = 0; i < length; i++) {
      stereoBuffer[i * 2] = leftChannel[i]
      stereoBuffer[i * 2 + 1] = rightChannel[i]
    }

    const wavBlob = encodeWav(stereoBuffer, sampleRate, 2)
    expect(wavBlob.size).toBeGreaterThan(0)
  })
})