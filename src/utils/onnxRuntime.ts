import * as ort from 'onnxruntime-web'

export type InferenceProgress = (progress: number) => void

let session: ort.InferenceSession | null = null
let mockMode = true // 临时：没有真实模型时使用 pass-through 模式

export function setMockMode(enabled: boolean) {
  mockMode = enabled
}

export async function loadModel(modelBuffer: ArrayBuffer): Promise<void> {
  ort.env.wasm.numThreads = navigator.hardwareConcurrency || 4

  try {
    session = await ort.InferenceSession.create(modelBuffer, {
      executionProviders: ['wasm'],
    })
    mockMode = false
  } catch (error) {
    console.warn('Failed to load ONNX model, using pass-through mode:', error)
    mockMode = true
  }
}

export async function runInference(
  inputBuffer: Float32Array,
  onProgress?: InferenceProgress
): Promise<Float32Array> {
  onProgress?.(0.3)

  // Mock mode: 直接返回输入（pass-through），用于 UI 测试
  if (mockMode || !session) {
    onProgress?.(0.6)
    await new Promise(resolve => setTimeout(resolve, 500)) // 模拟处理延迟
    onProgress?.(0.9)
    return new Float32Array(inputBuffer)
  }

  // DeepFilterNet expects specific input shape
  // Assuming: [batch, channels, time] = [1, 1, samples]
  const inputTensor = new ort.Tensor('float32', inputBuffer, [1, 1, inputBuffer.length])

  onProgress?.(0.4)

  const feeds: Record<string, ort.Tensor> = {
    'input': inputTensor,
  }

  const results = await session.run(feeds)

  onProgress?.(0.9)

  // Extract output tensor
  const outputTensor = results['output'] as ort.Tensor
  return outputTensor.data as Float32Array
}

export function unloadModel(): void {
  session = null
  mockMode = true
}

export function isModelLoaded(): boolean {
  return session !== null && !mockMode
}