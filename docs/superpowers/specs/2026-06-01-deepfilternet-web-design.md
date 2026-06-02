# DeepFilterNet Web - 设计规格文档

**日期**: 2026-06-01
**状态**: 已批准

## 1. 项目概述

**项目名称**: DeepFilterNet Web
**类型**: 纯前端音频降噪 Web 应用
**核心功能**: 拖拽/粘贴上传音频文件，使用浏览器本地模型进行降噪处理，输出高质量 WAV
**技术栈**: Vite + Vue3 + TailwindCSS + ONNX Runtime Web

---

## 2. 技术架构

### 2.1 核心流程

```
用户拖拽/粘贴音频
       ↓
FileReader 读取文件
       ↓
AudioContext.decodeAudioData() 解码为 AudioBuffer
       ↓
AudioBuffer 转 Float32Array
       ↓
ONNX Runtime Web 模型推理
       ↓
推理结果转 AudioBuffer
       ↓
WAV 编码 → 在线播放 + 下载
```

### 2.2 技术选型

| 组件 | 选型 | 理由 |
|------|------|------|
| 框架 | Vite + Vue3 | 现代化构建工具，快速热更新 |
| 样式 | TailwindCSS | 原子化 CSS，快速响应式开发 |
| 模型运行时 | ONNX Runtime Web | 支持 WASM/WebGL，GPU 加速 |
| 模型格式 | ONNX | PyTorch 转换成熟，生态完善 |
| 音频处理 | Web Audio API | 浏览器原生，跨平台兼容 |
| 模型缓存 | IndexedDB | 持久化大文件存储 |
| 波形渲染 | Canvas 2D | 性能优于 SVG |
| 文件下载 | Blob + URL.createObjectURL | 原生支持，无需额外库 |

### 2.3 模型方案

| 模型 | 用途 | 预期大小 | 下载源 |
|------|------|----------|--------|
| 轻量通用 | 快速预览/小文件 | ~8MB | HuggingFace Mirror (hf-mirror.com) |
| 强力语音 | 最高质量语音增强 | ~45MB | HuggingFace Mirror (hf-mirror.com) |

**下载策略**: 首次选择模型时显示下载进度，IndexedDB 缓存，刷新后保留

---

## 3. 界面设计

### 3.1 布局结构

```
┌────────────────────────────────────────────────────────┐
│  🔊 DeepFilterNet Web                    [Settings ⚙]  │
├────────────────────────────────────────────────────────┤
│                                                        │
│     ┌─────────────────────────────────────────┐       │
│     │   📁 拖拽文件到此处 或 点击选择          │       │
│     │      支持: MP3, WAV, OGG, FLAC, M4A     │       │
│     └─────────────────────────────────────────┘       │
│                                                        │
│  ┌─ 原始音频 ─────────────────────────────────────┐   │
│  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │   │
│  └────────────────────────────────────────────────┘   │
│                                                        │
│  模型: (○) 轻量通用 (8MB)  (●) 强力语音 (45MB)         │
│                                                        │
│              [ 🚀 开始降噪 ]                           │
│                                                        │
│  ┌─ 降噪后 ───────────────────────────────────────┐   │
│  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │   │
│  └────────────────────────────────────────────────┘   │
│                         ▶ 播放    ⬇ 下载 WAV          │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### 3.2 响应式策略

- **桌面端 (>768px)**: 完整布局，波形区域宽裕
- **移动端 (<768px)**: 波形区域收窄，按钮堆叠显示

### 3.3 状态定义

| 组件 | 状态 | 显示内容 |
|------|------|----------|
| DropZone | idle | 上传提示 + 支持格式 |
| DropZone | dragover | 高亮边框，提示释放 |
| DropZone | hasFile | 文件名 + 波形显示 |
| ModelSelector | unloaded | 下载按钮 + 模型信息 |
| ModelSelector | downloading | 进度条 + 百分比 |
| ModelSelector | ready | 模型信息 + 可选状态 |
| ProcessButton | idle | 降噪按钮 |
| ProcessButton | processing | 加载动画 + 进度 |
| ProcessButton | done | 完成状态 + 可重置 |
| AudioPlayer | disabled | 禁用态 |
| AudioPlayer | enabled | 播放 + 下载按钮 |

---

## 4. 组件清单

| 组件 | 职责 | 文件位置 |
|------|------|----------|
| `DropZone.vue` | 文件拖拽/粘贴/选择交互 | src/components/ |
| `WaveformCanvas.vue` | Canvas 绘制波形 | src/components/ |
| `ModelSelector.vue` | 模型选择/下载/状态 | src/components/ |
| `ProcessButton.vue` | 降噪触发 + 状态 | src/components/ |
| `AudioPlayer.vue` | 播放 + 下载控制 | src/components/ |
| `App.vue` | 根组件，状态管理 | src/ |

---

## 5. 数据流

### 5.1 状态管理 (Vue3 Composition API)

```typescript
interface AppState {
  // 文件状态
  audioFile: File | null;
  audioBuffer: AudioBuffer | null;
  processedBuffer: AudioBuffer | null;

  // 模型状态
  selectedModel: 'light' | 'powerful';
  modelStatus: 'unloaded' | 'downloading' | 'ready';
  downloadProgress: number;

  // 处理状态
  processStatus: 'idle' | 'processing' | 'done';
  processProgress: number;

  // 播放状态
  isPlaying: boolean;
  playPosition: number;
}
```

### 5.2 模型下载流程

```
1. 用户选择模型
2. 检查 IndexedDB 缓存
3. 已缓存 → 直接加载
4. 未缓存 → 从 hf-mirror.com 下载
5. 下载进度实时更新
6. 下载完成 → 存入 IndexedDB
7. 加载模型到 ONNX Runtime
```

### 5.3 音频处理流程

```
1. FileReader.readAsArrayBuffer(file)
2. AudioContext.decodeAudioData(buffer)
3. AudioBuffer → Float32Array (归一化)
4. ONNX Session.run([input])
5. Float32Array → AudioBuffer
6. AudioBuffer → WAV Blob
7. URL.createObjectURL(blob)
```

---

## 6. 错误处理

| 场景 | 处理方式 |
|------|----------|
| 不支持的格式 | Toast 提示 + 不接受 |
| 文件过大 (>100MB) | Toast 提示 + 建议压缩 |
| 模型下载失败 | 重试按钮 + 错误信息 |
| ONNX 推理失败 | 错误捕获 + 用户提示 |
| 内存不足 | 建议使用轻量模型 |
| 浏览器不支持 | 提示升级浏览器 |

---

## 7. 性能优化

- 模型缓存复用，不重复下载
- 波形 Canvas 按帧绘制，避免全量重绘
- 大文件分块处理，进度实时反馈
- Web Worker 处理音频编码（可选）

---

## 8. 浏览器兼容性

- Chrome/Edge 90+
- Firefox 90+
- Safari 15.4+
- 不支持 IE

---

## 9. 后续扩展预留

- 更多降噪模型（音乐场景）
- 实时麦克风降噪
- 批处理多文件
- 处理历史记录