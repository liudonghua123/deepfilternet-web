# AudioWorklet + Web Worker 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将音频处理从主线程分离到 Web Worker + AudioWorklet，避免 UI 阻塞

**Architecture:** 使用 OfflineAudioContext 配合 AudioWorkletNode，将音频帧通过 MessagePort 传入 Worker 执行 ONNX 推理，处理结果通过 AudioWorklet 输出

**Tech Stack:** AudioWorklet, Web Worker, ONNX Runtime Web, OfflineAudioContext

---

### Task 1: 创建 df-processor.js (AudioWorklet)

**Files:**
- Create: `public/worklets/df-processor.js`

- [ ] **Step 1: 创建文件结构**

```javascript
class DeepFilterProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.inputBuffer = [];
    this.outputBuffer = [];
    this.totalFrames = 0;
    this.processedFrames = 0;

    // 创建 Worker
    this.worker = new Worker('/workers/onnx-worker.js');

    // 接收 Worker 消息
    this.worker.onmessage = (e) => {
      if (e.data.type === 'AUDIO_OUT') {
        this.outputBuffer.push(...e.data.samples);
      } else if (e.data.type === 'READY') {
        this.port.postMessage({ type: 'WORKER_READY' });
      }
    };
  }

  process(inputs, outputs) {
    const input = inputs[0][0];
    const output = outputs[0][0];
    if (!input) return true;

    // 收集样本到缓冲
    this.inputBuffer.push(...input);
    this.totalFrames++;

    // 480 样本时发送到 Worker (10ms @ 48kHz)
    if (this.inputBuffer.length >= 480) {
      const frame = this.inputBuffer.splice(0, 480);
      this.worker.postMessage({
        type: 'PROCESS_FRAME',
        samples: Array.from(frame),
        frameIndex: this.totalFrames
      });
    }

    // 输出处理结果 (128 samples per block)
    if (this.outputBuffer.length >= 128) {
      const cleanFrame = this.outputBuffer.splice(0, 128);
      for (let i = 0; i < 128; i++) {
        output[i] = cleanFrame[i] || 0;
      }
    } else {
      for (let i = 0; i < output.length; i++) {
        output[i] = 0;
      }
    }

    return true;
  }
}

registerProcessor('df-processor', DeepFilterProcessor);
```

- [ ] **Step 2: 提交**

```bash
git add public/worklets/df-processor.js
git commit -m "feat: add AudioWorklet processor for audio frame buffering"
```

---

### Task 2: 创建 onnx-worker.js (Web Worker)

**Files:**
- Create: `public/workers/onnx-worker.js`

- [ ] **Step 1: 创建 Worker 基础结构**

```javascript
import * as ort from 'onnxruntime-web';

// 模型会话
let encSession = null;
let erbSession = null;
let dfSession = null;

// 状态张量
let states_conv = null;
let states_gru = null;

// 配置 (DeepFilterNet3)
const config = {
  sr: 48000,
  fftSize: 960,
  hopSize: 480,
  nbErb: 32,
  nbDf: 96
};

// 消息处理
self.onmessage = async (e) => {
  const { type } = e.data;

  if (type === 'INIT') {
    await initModels();
  } else if (type === 'PROCESS_FRAME') {
    const { samples } = e.data;
    await processFrame(samples);
  }
};

async function initModels() {
  const options = { executionProviders: ['wasm'] };

  [encSession, erbSession, dfSession] = await Promise.all([
    ort.InferenceSession.create('/standard-model/enc.onnx', options),
    ort.InferenceSession.create('/standard-model/erb_dec.onnx', options),
    ort.InferenceSession.create('/standard-model/df_dec.onnx', options)
  ]);

  // 初始化状态
  states_conv = new ort.Tensor('float32', new Float32Array(1 * 64 * 4 * 20), [1, 64, 4, 20]);
  states_gru = new ort.Tensor('float32', new Float32Array(2 * 1 * 128), [2, 1, 128]);

  self.postMessage({ type: 'READY' });
}

async function processFrame(samples) {
  // STFT
  const { feat_erb, feat_spec } = runSTFT(samples);

  // Encoder
  const encFeats = await encSession.run({
    'feat_erb': feat_erb,
    'feat_spec': feat_spec,
    'states_in': states_conv
  });
  states_conv = encFeats['states_out'];

  // ERB Decoder
  const erbOutputs = await erbSession.run({
    'emb': encFeats['emb'],
    'states_in': states_gru
  });
  states_gru = erbOutputs['states_out'];

  // DF Decoder
  const dfOutputs = await dfSession.run({
    'emb': encFeats['emb'],
    'erb_gains': erbOutputs['erb_gains']
  });

  // iSTFT
  const cleanSamples = runInverseSTFT(dfOutputs['spec_out']);

  self.postMessage({ type: 'AUDIO_OUT', samples: cleanSamples });
}
```

- [ ] **Step 2: 添加 STFT 函数**

```javascript
function runSTFT(samples) {
  const fftSize = config.fftSize;
  const nbBins = fftSize / 2 + 1;

  // Hann 窗口
  const window = new Float32Array(fftSize);
  for (let i = 0; i < fftSize; i++) {
    window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (fftSize - 1)));
  }

  // 频谱数据 [real, imag, real, imag, ...]
  const specData = new Float32Array(nbBins * 2);

  // 应用窗口并计算 DFT
  const windowed = new Float32Array(fftSize);
  for (let i = 0; i < fftSize; i++) {
    windowed[i] = (samples[i] || 0) * window[i];
  }

  for (let k = 0; k < nbBins; k++) {
    let real = 0, imag = 0;
    for (let n = 0; n < fftSize; n++) {
      const angle = -2 * Math.PI * k * n / fftSize;
      real += windowed[n] * Math.cos(angle);
      imag += windowed[n] * Math.sin(angle);
    }
    specData[k * 2] = real;
    specData[k * 2 + 1] = imag;
  }

  // ERB 特征 (简化)
  const erbData = new Float32Array(config.nbErb);
  for (let e = 0; e < config.nbErb; e++) {
    const binStart = Math.floor((e / config.nbErb) * nbBins);
    const binEnd = Math.floor(((e + 1) / config.nbErb) * nbBins);
    let mag = 0;
    for (let b = binStart; b < binEnd; b++) {
      const idx = b * 2;
      mag += Math.sqrt(specData[idx] ** 2 + specData[idx + 1] ** 2);
    }
    erbData[e] = mag / (binEnd - binStart);
  }

  return {
    feat_erb: new ort.Tensor('float32', erbData, [1, 1, 1, config.nbErb]),
    feat_spec: new ort.Tensor('float32', specData, [1, 1, 1, nbBins * 2])
  };
}
```

- [ ] **Step 3: 添加 iSTFT 函数**

```javascript
function runInverseSTFT(spec) {
  const fftSize = config.fftSize;
  const nbBins = fftSize / 2 + 1;
  const specData = spec.data;

  // Hann 窗口
  const window = new Float32Array(fftSize);
  for (let i = 0; i < fftSize; i++) {
    window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (fftSize - 1)));
  }

  // 重建信号
  const output = new Float32Array(480);

  for (let k = 0; k < nbBins; k++) {
    const real = specData[k * 2] || 0;
    const imag = specData[k * 2 + 1] || 0;

    for (let n = 0; n < fftSize && n < output.length; n++) {
      const angle = 2 * Math.PI * k * n / fftSize;
      output[n] += (real * Math.cos(angle) - imag * Math.sin(angle)) / fftSize * window[n];
    }
  }

  return Array.from(output);
}
```

- [ ] **Step 4: 提交**

```bash
git add public/workers/onnx-worker.js
git commit -m "feat: add Web Worker for ONNX model inference"
```

---

### Task 3: 重构 audioProcessor.ts

**Files:**
- Modify: `src/utils/audioProcessor.ts`

- [ ] **Step 1: 重写 processAudio 函数**

```typescript
export async function processAudio(
  inputBuffer: AudioBuffer,
  onProgress?: (progress: number) => void
): Promise<AudioBuffer> {
  const sampleRate = inputBuffer.sampleRate;

  // 创建 OfflineAudioContext
  const offlineCtx = new OfflineAudioContext(
    1,
    inputBuffer.length,
    sampleRate
  );

  // 加载 AudioWorklet
  await offlineCtx.audioWorklet.addModule('/worklets/df-processor.js');

  // 创建 Processor 节点
  const processor = new AudioWorkletNode(offlineCtx, 'df-processor');

  // 等待 Worker 就绪
  await new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Worker 初始化超时')), 30000);

    processor.port.onmessage = (e) => {
      if (e.data.type === 'WORKER_READY') {
        clearTimeout(timeout);
        resolve();
      }
    };

    // 发送初始化消息
    processor.port.postMessage({ type: 'INIT' });
  });

  onProgress?.(0.1);

  // 连接音频源
  const source = offlineCtx.createBufferSource();
  source.buffer = inputBuffer;
  source.connect(processor);
  processor.connect(offlineCtx.destination);

  // 渲染音频
  const renderedBuffer = await offlineCtx.startRendering();

  onProgress?.(1.0);

  return renderedBuffer;
}
```

- [ ] **Step 2: 移除不再需要的导入**

当前文件顶部有 `import { encodeWav } from './wavEncoder'` 和 `import { runInference } from './onnxRuntime'`，这些不再需要

- [ ] **Step 3: 提交**

```bash
git add src/utils/audioProcessor.ts
git commit -m "refactor: use AudioWorklet + Web Worker for audio processing"
```

---

### Task 4: 添加兼容性回退

**Files:**
- Modify: `src/utils/audioProcessor.ts`

- [ ] **Step 1: 添加 AudioWorklet 支持检测和回退**

```typescript
function isAudioWorkletSupported(): boolean {
  return typeof AudioWorkletNode !== 'undefined';
}

// 在 processAudio 函数开头添加
export async function processAudio(
  inputBuffer: AudioBuffer,
  onProgress?: (progress: number) => void
): Promise<AudioBuffer> {
  // 检测 AudioWorklet 支持
  if (!isAudioWorkletSupported()) {
    console.warn('AudioWorklet not supported, falling back to synchronous processing');
    return processAudioFallback(inputBuffer, onProgress);
  }

  // ... 原有的 OfflineAudioContext 逻辑
}

// 添加回退函数
async function processAudioFallback(
  inputBuffer: AudioBuffer,
  onProgress?: (progress: number) => void
): Promise<AudioBuffer> {
  // 使用原有的同步处理逻辑
  const { runInference } = await import('./onnxRuntime');
  const float32 = audioBufferToFloat32(inputBuffer);

  onProgress?.(0.1);
  const processed = await runInference(float32, inputBuffer.sampleRate, (p) => {
    onProgress?.(0.1 + p * 0.8);
  });
  onProgress?.(0.9);

  return float32ToAudioBuffer(processed, inputBuffer.sampleRate, 1);
}
```

- [ ] **Step 2: 提交**

```bash
git add src/utils/audioProcessor.ts
git commit -m "feat: add AudioWorklet fallback for unsupported browsers"
```

---

### Task 5: 测试和构建

**Files:**
- None (build verification)

- [ ] **Step 1: 构建项目**

Run: `npm run build`
Expected: 成功构建，dist 目录包含 worklets 和 workers

- [ ] **Step 2: 检查输出文件**

验证 `dist/worklets/df-processor.js` 和 `dist/workers/onnx-worker.js` 存在

- [ ] **Step 3: 提交最终更改**

```bash
git add -A
git commit -m "feat: complete AudioWorklet + Web Worker architecture

- Add df-processor.js AudioWorklet
- Add onnx-worker.js Web Worker with ONNX inference
- Refactor audioProcessor.ts for new architecture
- Add AudioWorklet fallback for unsupported browsers"
```

---

## 验证清单

- [ ] `public/worklets/df-processor.js` 存在且语法正确
- [ ] `public/workers/onnx-worker.js` 存在且语法正确
- [ ] `src/utils/audioProcessor.ts` 使用新架构
- [ ] `npm run build` 成功
- [ ] 浏览器控制台无错误
- [ ] 音频处理不阻塞 UI