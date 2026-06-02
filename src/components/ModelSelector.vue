<script setup lang="ts">
import { watch } from 'vue'
import type { ModelType, ModelStatus } from '../types'
import { getCachedModel, cacheModel } from '../utils/modelCache'
import { loadModel } from '../utils/onnxRuntime'

const props = defineProps<{
  selectedModel: ModelType
  modelStatus: ModelStatus
  downloadProgress: number
}>()

const emit = defineEmits<{
  (e: 'update:selectedModel', model: ModelType): void
  (e: 'status-change', status: ModelStatus): void
  (e: 'progress-update', progress: number): void
}>()

const MODELS = [
  {
    id: 'light' as ModelType,
    name: '轻量通用',
    nameEn: 'Light General',
    description: '快速处理，适合预览和小文件',
    size: 8 * 1024 * 1024,
    url: 'https://hf-mirror.com/deepfilternet/DeepFilterNet3-ONNX/resolve/main/dfrn3_light.onnx'
  },
  {
    id: 'powerful' as ModelType,
    name: '强力语音',
    nameEn: 'Powerful Voice',
    description: '最高质量人声增强',
    size: 45 * 1024 * 1024,
    url: 'https://hf-mirror.com/deepfilternet/DeepFilterNet3-ONNX/resolve/main/dfrn3_hq.onnx'
  }
]

async function downloadModel(model: typeof MODELS[0]) {
  try {
    emit('status-change', 'downloading')
    emit('progress-update', 0)

    const cached = await getCachedModel(model.id)
    if (cached) {
      emit('status-change', 'loading')
      emit('progress-update', 1)
      await loadModel(cached)
      emit('status-change', 'ready')
      return
    }

    const response = await fetch(model.url)
    if (!response.ok) throw new Error('Download failed')

    const contentLength = response.headers.get('content-length')
    const total = contentLength ? parseInt(contentLength) : model.size

    const reader = response.body?.getReader()
    if (!reader) throw new Error('No reader')

    const chunks: BlobPart[] = []
    let received = 0

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      chunks.push(value)
      received += value.length
      emit('progress-update', received / total)
    }

    const blob = new Blob(chunks)
    const arrayBuffer = await blob.arrayBuffer()

    await cacheModel(model.id, arrayBuffer)

    emit('status-change', 'loading')
    emit('progress-update', 1)
    await loadModel(arrayBuffer)
    emit('status-change', 'ready')
  } catch (error) {
    console.error('Model load error:', error)
    emit('status-change', 'error')
  }
}

function handleModelChange(modelId: ModelType) {
  emit('update:selectedModel', modelId)
}

function triggerModelDownload() {
  const model = MODELS.find(m => m.id === props.selectedModel)!
  downloadModel(model)
}

// Watch for model selection changes
watch(() => props.selectedModel, (newModel) => {
  if (props.modelStatus !== 'ready') {
    const model = MODELS.find(m => m.id === newModel)!
    downloadModel(model)
  }
})

// Also watch for when modelStatus changes to unloaded and try loading
watch(() => props.modelStatus, (status) => {
  if (status === 'unloaded') {
    triggerModelDownload()
  }
})
</script>

<template>
  <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
    <h3 class="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-4">选择降噪模型</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="model in MODELS"
        :key="model.id"
        class="relative p-5 rounded-xl border-2 cursor-pointer transition-all"
        :class="{
          'border-blue-500 bg-blue-500/10 dark:bg-blue-500/20 shadow-sm': selectedModel === model.id,
          'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-500': selectedModel !== model.id,
          'opacity-50 pointer-events-none': modelStatus === 'downloading'
        }"
        @click="handleModelChange(model.id)"
      >
        <!-- Selected indicator -->
        <div
          class="absolute -top-2 -right-2 w-6 h-6 rounded-full border-2 flex items-center justify-center"
          :class="selectedModel === model.id
            ? 'border-blue-500 bg-blue-500 text-white'
            : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700'"
        >
          <svg v-if="selectedModel === model.id" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div class="flex items-start gap-3">
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            :class="model.id === 'light'
              ? 'bg-amber-100 dark:bg-amber-900/50'
              : 'bg-violet-100 dark:bg-violet-900/50'"
          >
            <span class="text-2xl">{{ model.id === 'light' ? '⚡' : '🎯' }}</span>
          </div>

          <div class="flex-1 min-w-0">
            <h4 class="font-semibold text-slate-900 dark:text-white">{{ model.name }}</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">{{ model.nameEn }}</p>
            <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">{{ model.description }}</p>
            <p
              class="text-xs font-medium mt-3 inline-flex items-center gap-1 px-2 py-1 rounded-full"
              :class="selectedModel === model.id
                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              ~{{ (model.size / (1024 * 1024)).toFixed(0) }}MB
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Download/Loading Status -->
    <div v-if="modelStatus === 'downloading'" class="mt-4 p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
      <div class="flex items-center gap-3">
        <svg class="animate-spin h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <div class="flex-1">
          <div class="flex items-center justify-between mb-1">
            <span class="text-sm font-medium text-slate-700 dark:text-slate-200">正在下载模型...</span>
            <span class="text-sm text-slate-500 dark:text-slate-400">{{ (downloadProgress * 100).toFixed(0) }}%</span>
          </div>
          <div class="h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300"
              :style="{ width: `${downloadProgress * 100}%` }"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="modelStatus === 'loading'" class="mt-4 p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
      <div class="flex items-center gap-3">
        <svg class="animate-spin h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <span class="text-sm font-medium text-slate-700 dark:text-slate-200">正在加载模型...</span>
      </div>
    </div>

    <div v-else-if="modelStatus === 'error'" class="mt-4 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800">
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p class="text-sm font-medium">模型加载失败</p>
      </div>
      <button
        class="mt-2 text-sm font-medium text-red-600 dark:text-red-400 hover:underline"
        @click="downloadModel(MODELS.find(m => m.id === selectedModel)!)"
      >
        点击重试
      </button>
    </div>

    <div v-else-if="modelStatus === 'ready'" class="mt-4 p-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800">
      <p class="text-sm font-medium flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        模型已就绪，可以开始处理
      </p>
    </div>
  </div>
</template>