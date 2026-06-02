# DeepFilterNet Web

纯前端音频降噪工具，可在浏览器中直接对音频进行降噪处理。无需上传到服务器，所有处理都在本地完成，保护您的隐私。

![DeepFilterNet Web](https://img.shields.io/badge/Vue-3.4-green) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue) ![ONNX Runtime](https://img.shields.io/badge/ONNX%20Runtime-Web-purple) ![License](https://img.shields.io/badge/License-MIT-yellow)

## 功能特点

- **隐私保护**: 音频文件永不离开您的设备
- **离线可用**: 模型首次下载后缓存本地，无需网络
- **现代界面**: 拖拽上传、实时波形可视化、在线播放
- **深色模式**: 一键切换完整深色主题
- **多格式下载**: 支持 WAV/MP3/OGG 格式导出
- **进度拖动**: 点击或拖动波形图/进度条跳转播放

## 技术栈

| 组件 | 技术 |
|------|------|
| 框架 | Vite 5 + Vue 3.4 |
| 样式 | TailwindCSS 3.4 |
| 模型运行时 | ONNX Runtime Web (WASM) |
| 音频处理 | Web Audio API |
| 模型缓存 | IndexedDB |

## 预置模型

| 模型 | 大小 | 描述 |
|------|------|------|
| 轻量通用 | ~8MB | 快速处理，适合预览和小文件 |
| 强力语音 | ~45MB | 最高质量人声增强 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 工作原理

```
1. 上传音频 → 拖拽、粘贴或点击选择文件
2. 解码音频 → Web Audio API 解码为 AudioBuffer
3. 模型推理 → ONNX Runtime 通过 WASM 进行处理
4. 下载结果 → 导出为 WAV/MP3/OGG
```

## 技术方案对比

| 方案 | 优势 | 劣势 |
|------|------|------|
| **本方案 (ONNX Runtime)** | 真正离线、WASM GPU 加速 | 需要 PyTorch→ONNX 转换 |
| TensorFlow.js | 转换生态成熟 | 需要重新训练模型 |
| 远程 API | 实现简单 | 依赖网络、隐私风险 |

## 浏览器兼容性

- Chrome/Edge 90+
- Firefox 90+
- Safari 15.4+

## 项目结构

```
deepfilternet-web/
├── src/
│   ├── components/
│   │   ├── DropZone.vue        # 文件上传（拖拽/粘贴）
│   │   ├── WaveformCanvas.vue  # 音频波形可视化
│   │   ├── ModelSelector.vue   # 模型选择与下载
│   │   ├── ProcessButton.vue   # 降噪触发
│   │   └── AudioPlayer.vue     # 播放与下载
│   ├── utils/
│   │   ├── audioProcessor.ts   # 音频解码/处理
│   │   ├── onnxRuntime.ts      # 模型推理
│   │   ├── modelCache.ts       # IndexedDB 缓存
│   │   └── wavEncoder.ts       # WAV 编码
│   └── types/
│       └── index.ts            # TypeScript 类型定义
├── docs/                       # 设计规格文档
└── dist/                       # 生产构建
```

## 致谢

- [DeepFilterNet](https://github.com/Rikorose/DeepFilterNet) - 开源音频降噪框架
- [ONNX Runtime](https://onnxruntime.ai/) - 高性能机器学习推理
- [HuggingFace Mirror](https://hf-mirror.com) - 模型下载镜像加速

## 开源协议

MIT License