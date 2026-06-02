import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const base = process.env.VITE_BASE_URL || '/'

export default defineConfig({
  base,
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['onnxruntime-web']
  },
  build: {
    target: 'esnext'
  }
})