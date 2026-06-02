# AudioWorklet + Web Worker 重构规格说明

> **Goal:** 将音频处理从主线程分离到 Web Worker + AudioWorklet，避免 UI 阻塞，保持批量处理模式。

## 架构

```
┌─────────────────────────────────────────────────────────┐
│                     主线程 (Vue)                         │
│  audioProcessor.ts - 协调器                              │
└────────────────────────────┬────────────────────────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
┌─────────────────────────┐   ┌─────────────────────────┐
│   AudioWorklet          │   │   Web Worker            │
│   df-processor.js       │◀─▶│   onnx-worker.js        │
│   - 缓冲音频帧           │   │   - ONNX 推理           │
│   - 输出到 AudioContext  │   │   - STFT/iSTFT         │
└─────────────────────────┘   └─────────────────────────┘
```

## 文件清单

### 新建文件

| 文件 | 说明 |
|------|------|
| `public/worklets/df-processor.js` | AudioWorkletProcessor，处理音频帧缓冲 |
| `public/workers/onnx-worker.js` | Web Worker，加载 ONNX 模型，执行推理 |
| `src/utils/audioWorklet.ts` | 主线程与 Worker 通信的封装 |

### 修改文件

| 文件 | 变更 |
|------|------|
| `src/utils/audioProcessor.ts` | 改用 AudioWorklet 架构 |
| `src/App.vue` | 更新错误处理和进度回调 |

## 组件规格

### 1. df-processor.js (AudioWorklet)

**输入**: 480 样本帧 (10ms @ 48kHz)
**输出**: 处理后的 480 样本

```javascript
class DeepFilterProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    this.inputBuffer = []
    this.outputBuffer = []
    this.worker = new Worker('/workers/onnx-worker.js')

    this.worker.onmessage = (e) => {
      if (e.data.type === 'AUDIO_OUT') {
        this.outputBuffer.push(...e.data.samples)
      }
    }

    this.port.onmessage = (e) => {
      if (e.data.type === 'INIT') {
        this.worker.postMessage(e.data)
      }
    }
  }

  process(inputs, outputs) {
    const input = inputs[0][0]
    const output = outputs[0][0]
    if (!input) return true

    // 收集样本
    this.inputBuffer.push(...input)

    // 480 样本时发送到 Worker
    if (this.inputBuffer.length >= 480) {
      const frame = this.inputBuffer.splice(0, 480)
      this.worker.postMessage({ type: 'PROCESS_FRAME', samples: frame })
    }

    // 输出处理结果
    if (this.outputBuffer.length >= 128) {
      const cleanFrame = this.outputBuffer.splice(0, 128)
      for (let i = 0; i < 128; i++) {
        output[i] = cleanFrame[i] || 0
      }
    }

    return true
  }
}

registerProcessor('df-processor', DeepFilterProcessor)
```

### 2. onnx-worker.js (Web Worker)

**职责**: 加载模型，执行 STFT → Encoder → ERB Decoder → DF Decoder → iSTFT

```javascript
import * as ort from 'onnxruntime-web'

let encSession, erbSession, dfSession
let states_conv = null
let states_gru = null

self.onmessage = async (e) => {
  if (e.data.type === 'INIT') {
    // 加载模型
    encSession = await ort.InferenceSession.create('/standard-model/enc.onnx')
    erbSession = await ort.InferenceSession.create('/standard-model/erb_dec.onnx')
    dfSession = await ort.InferenceSession.create('/standard-model/df_dec.onnx')

    // 初始化状态
    states_conv = new ort.Tensor('float32', new Float32Array(1 * 64 * 4 * 20), [1, 64, 4, 20])
    states_gru = new ort.Tensor('float32', new Float32Array(2 * 1 * 128), [2, 1, 128])

    self.postMessage({ type: 'READY' })
  }

  if (e.data.type === 'PROCESS_FRAME') {
    const samples = e.data.samples

    // STFT
    const { feat_erb, feat_spec } = runSTFT(samples)

    // Encoder
    const encFeats = await encSession.run({
      'feat_erb': feat_erb,
      'feat_spec': feat_spec,
      'states_in': states_conv
    })
    states_conv = encFeats['states_out']

    // ERB Decoder
    const erbOutputs = await erbSession.run({
      'emb': encFeats['emb'],
      'states_in': states_gru
    })
    states_gru = erbOutputs['states_out']

    // DF Decoder
    const dfOutputs = await dfSession.run({
      'emb': encFeats['emb'],
      'erb_gains': erbOutputs['erb_gains']
    })

    // iSTFT
    const cleanSamples = runInverseSTFT(dfOutputs['spec_out'])

    self.postMessage({ type: 'AUDIO_OUT', samples: cleanSamples })
  }
}

function runSTFT(samples) { /* ... */ }
function runInverseSTFT(spec) { /* ... */ }
```

### 3. audioProcessor.ts (主线程协调器)

```typescript
export async function processAudio(
  inputBuffer: AudioBuffer,
  onProgress?: (progress: number) => void
): Promise<AudioBuffer> {
  // 1. 创建 OfflineAudioContext
  const offlineCtx = new OfflineAudioContext(
    1,
    inputBuffer.length,
    48000
  )

  // 2. 加载 Worklet
  await offlineCtx.audioWorklet.addModule('/worklets/df-processor.js')

  // 3. 创建 Processor 节点
  const processor = new AudioWorkletNode(offlineCtx, 'df-processor')

  // 4. 发送 INIT 消息
  await new Promise(resolve => {
    processor.port.onmessage = (e) => {
      if (e.data.type === 'READY') resolve(null)
    }
    processor.port.postMessage({ type: 'INIT' })
  })

  // 5. 连接音频源
  const source = offlineCtx.createBufferSource()
  source.buffer = inputBuffer
  source.connect(processor)
  processor.connect(offlineCtx.destination)

  // 6. 渲染
  onProgress?.(0.1)
  const renderedBuffer = await offlineCtx.startRendering()
  onProgress?.(1.0)

  return renderedBuffer
}
```

## 进度报告

由于 AudioWorklet 处理是异步的，进度通过以下方式报告：

1. Worker 处理每帧后发送进度消息
2. 主线程累计帧数，计算百分比
3. 回调 onProgress

## 错误处理

| 场景 | 处理 |
|------|------|
| 模型加载失败 | 抛出错误，主线程显示 "模型加载失败" |
| 处理过程中出错 | Worker 发送 ERROR 消息，主线程中断 |
| AudioWorklet 未支持 | 回退到原同步处理方案 |

## 兼容性

- 需要浏览器支持 AudioWorklet (Chrome 66+, Firefox 76+, Safari 14.1+)
- 需要支持 SharedArrayBuffer 以获得最佳性能（可选）