export type ModelType = 'light' | 'powerful'

export type ModelStatus = 'unloaded' | 'downloading' | 'loading' | 'ready' | 'error'

export type ProcessStatus = 'idle' | 'processing' | 'done' | 'error'

export interface ModelInfo {
  id: ModelType
  name: string
  nameEn: string
  description: string
  size: number // bytes
  url: string
}

export interface AppState {
  audioFile: File | null
  audioBuffer: AudioBuffer | null
  processedBuffer: AudioBuffer | null
  selectedModel: ModelType
  modelStatus: ModelStatus
  downloadProgress: number
  processStatus: ProcessStatus
  processProgress: number
  isPlaying: boolean
  playSource: AudioBufferSourceNode | null
  error: string | null
}

export interface WaveformData {
  peaks: Float32Array
  duration: number
  sampleRate: number
}