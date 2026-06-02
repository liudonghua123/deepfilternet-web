<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{
  (e: 'file-selected', file: File): void
}>()

const isDragover = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const SUPPORTED_FORMATS = ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/flac', 'audio/mp4', 'audio/x-m4a']
const SUPPORTED_EXTENSIONS = ['.mp3', '.wav', '.ogg', '.flac', '.m4a']

function handleDragOver(e: DragEvent) {
  e.preventDefault()
  isDragover.value = true
}

function handleDragLeave() {
  isDragover.value = false
}

function handleDrop(e: DragEvent) {
  e.preventDefault()
  isDragover.value = false

  const file = e.dataTransfer?.files[0]
  if (file && isValidFile(file)) {
    emit('file-selected', file)
  }
}

function handleClick() {
  fileInput.value?.click()
}

function handleFileInput(e: Event) {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (file && isValidFile(file)) {
    emit('file-selected', file)
  }
}

function isValidFile(file: File): boolean {
  const isValidType = SUPPORTED_FORMATS.some(type =>
    file.type.includes(type.split('/')[1]) || file.type === type
  )
  const isValidExt = SUPPORTED_EXTENSIONS.some(ext =>
    file.name.toLowerCase().endsWith(ext)
  )
  return isValidType || isValidExt
}

// Paste handler
function handlePaste(e: ClipboardEvent) {
  const items = e.clipboardData?.items
  if (!items) return

  for (const item of items) {
    if (item.kind === 'file' && item.type.startsWith('audio/')) {
      const file = item.getAsFile()
      if (file && isValidFile(file)) {
        emit('file-selected', file)
        return
      }
    }
    if (item.kind === 'file') {
      const file = item.getAsFile()
      if (file) {
        const ext = '.' + file.name.split('.').pop()?.toLowerCase()
        if (SUPPORTED_EXTENSIONS.includes(ext)) {
          emit('file-selected', file)
          return
        }
      }
    }
  }
}

onMounted(() => {
  document.addEventListener('paste', handlePaste)
})

onUnmounted(() => {
  document.removeEventListener('paste', handlePaste)
})
</script>

<template>
  <div
    class="relative border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-10
           text-center cursor-pointer transition-all duration-200
           bg-white dark:bg-slate-800/50
           hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
    :class="{
      'border-blue-500 bg-blue-50/70 dark:bg-blue-900/40 scale-[1.02]': isDragover
    }"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
    @click="handleClick"
  >
    <input
      ref="fileInput"
      type="file"
      accept="audio/*,.mp3,.wav,.ogg,.flac,.m4a"
      class="hidden"
      @change="handleFileInput"
    />

    <div class="flex flex-col items-center gap-5">
      <!-- Icon -->
      <div
        class="w-20 h-20 rounded-2xl flex items-center justify-center transition-colors"
        :class="isDragover
          ? 'bg-blue-500 text-white'
          : 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'"
      >
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      </div>

      <!-- Text -->
      <div>
        <p class="text-lg font-semibold text-slate-700 dark:text-slate-100">
          拖拽音频文件到此处
        </p>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
          或点击选择文件 · 支持 Ctrl+V 粘贴
        </p>
      </div>

      <!-- Formats badge -->
      <div class="flex flex-wrap justify-center gap-2">
        <span
          v-for="format in ['MP3', 'WAV', 'OGG', 'FLAC', 'M4A']"
          :key="format"
          class="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
        >
          {{ format }}
        </span>
      </div>
    </div>

    <!-- Drop overlay -->
    <div
      v-if="isDragover"
      class="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-2xl flex items-center justify-center"
    >
      <div class="text-blue-600 dark:text-blue-300 font-semibold text-lg">
        释放以上传文件
      </div>
    </div>
  </div>
</template>