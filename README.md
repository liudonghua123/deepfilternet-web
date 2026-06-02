# DeepFilterNet Web

A pure frontend audio denoising tool that runs directly in the browser. No server uploads required - all processing happens locally to protect your privacy.

![DeepFilterNet Web](https://img.shields.io/badge/Vue-3.4-green) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue) ![ONNX Runtime](https://img.shields.io/badge/ONNX%20Runtime-Web-purple) ![License](https://img.shields.io/badge/License-MIT-yellow)

## Features

- **Privacy First**: Audio files never leave your device
- **Offline Capable**: Models are cached locally after first download
- **Modern UI**: Drag & drop, real-time waveform visualization, online playback
- **Dark Mode**: Full dark theme support with one-click toggle
- **Multi-format**: Download processed audio as WAV/MP3/OGG
- **Progress Seeking**: Click or drag on waveform/progress bar to seek

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Vite 5 + Vue 3.4 |
| Styling | TailwindCSS 3.4 |
| Model Runtime | ONNX Runtime Web (WASM) |
| Audio Processing | Web Audio API |
| Model Caching | IndexedDB |

## Available Models

| Model | Size | Description |
|-------|------|-------------|
| Light General | ~8MB | Fast processing, good for previews |
| Powerful Voice | ~45MB | Highest quality voice enhancement |

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## How It Works

```
1. Upload Audio → Drag, paste, or click to select
2. Decode Audio → Web Audio API decodes to AudioBuffer
3. Model Inference → ONNX Runtime processes with WASM
4. Download Result → Export as WAV/MP3/OGG
```

## Technical Comparison

| Approach | Advantages | Disadvantages |
|----------|------------|---------------|
| **This project (ONNX Runtime)** | Truly offline, GPU acceleration via WASM | Requires PyTorch→ONNX conversion |
| TensorFlow.js | Mature conversion ecosystem | Need to retrain models |
| Remote API | Simple implementation | Network dependent, privacy risk |

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 90+
- Safari 15.4+

## Project Structure

```
deepfilternet-web/
├── src/
│   ├── components/
│   │   ├── DropZone.vue        # File upload (drag/drop/paste)
│   │   ├── WaveformCanvas.vue  # Audio waveform visualization
│   │   ├── ModelSelector.vue   # Model selection & download
│   │   ├── ProcessButton.vue   # Denoising trigger
│   │   └── AudioPlayer.vue     # Playback & download
│   ├── utils/
│   │   ├── audioProcessor.ts   # Audio decode/process
│   │   ├── onnxRuntime.ts      # Model inference
│   │   ├── modelCache.ts       # IndexedDB caching
│   │   └── wavEncoder.ts       # WAV encoding
│   └── types/
│       └── index.ts            # TypeScript definitions
├── docs/                       # Design specs
└── dist/                       # Production build
```

## Acknowledgments

- [DeepFilterNet](https://github.com/Rikorose/DeepFilterNet) - Open source audio denoising framework
- [ONNX Runtime](https://onnxruntime.ai/) - High-performance ML inference
- [HuggingFace Mirror](https://hf-mirror.com) - Model download acceleration

## License

MIT License