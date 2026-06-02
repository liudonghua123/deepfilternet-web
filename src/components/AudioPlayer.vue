<script setup lang="ts">
import { ref, watch, computed, onUnmounted } from 'vue'

const props = defineProps<{
  buffer: AudioBuffer | null
  label: string
}>()

const audioContext = new AudioContext()
const sourceNode = ref<AudioBufferSourceNode | null>(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const isDragging = ref(false)
const showFormatMenu = ref(false)
const selectedFormat = ref<'wav' | 'mp3' | 'ogg'>('wav')

const progress = computed(() => {
  if (!props.buffer) return 0
  return (currentTime.value / props.buffer.duration) * 100
})

let animationId: number | null = null
let startTime = 0
let startOffset = 0

function play(fromTime?: number) {
  if (!props.buffer) return

  if (isPlaying.value) {
    pause()
  }

  sourceNode.value = audioContext.createBufferSource()
  sourceNode.value.buffer = props.buffer
  sourceNode.value.connect(audioContext.destination)
  sourceNode.value.onended = () => {
    if (isPlaying.value) {
      isPlaying.value = false
      currentTime.value = 0
      startOffset = 0
      if (animationId) cancelAnimationFrame(animationId)
    }
  }

  const offset = fromTime !== undefined ? fromTime : startOffset
  startTime = audioContext.currentTime
  startOffset = offset
  currentTime.value = offset
  duration.value = props.buffer.duration

  sourceNode.value.start(0, offset)
  isPlaying.value = true
  updateProgress()
}

function pause() {
  if (sourceNode.value) {
    sourceNode.value.onended = null
    try {
      sourceNode.value.stop()
    } catch (e) {
      // Already stopped
    }
    sourceNode.value.disconnect()
    sourceNode.value = null
  }
  isPlaying.value = false
  startOffset = currentTime.value
  if (animationId) cancelAnimationFrame(animationId)
}

function togglePlay() {
  if (isPlaying.value) {
    pause()
  } else {
    play()
  }
}

function updateProgress() {
  if (isPlaying.value && audioContext.state === 'running') {
    const elapsed = audioContext.currentTime - startTime
    currentTime.value = Math.min(startOffset + elapsed, props.buffer?.duration || 0)
    animationId = requestAnimationFrame(updateProgress)
  }
}

function handleProgressClick(e: MouseEvent) {
  if (!props.buffer) return

  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const x = e.clientX - rect.left
  const percent = Math.max(0, Math.min(1, x / rect.width))
  const newTime = percent * props.buffer.duration

  currentTime.value = newTime
  startOffset = newTime

  if (isPlaying.value) {
    pause()
    play(newTime)
  }
}

function handleProgressMouseDown(e: MouseEvent) {
  isDragging.value = true
  handleProgressClick(e)

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.value) {
      handleProgressClick(e)
    }
  }

  const handleMouseUp = () => {
    isDragging.value = false
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

// Format options
const formatOptions = [
  { id: 'wav', name: 'WAV', desc: '无损', ext: 'wav' },
  { id: 'mp3', name: 'MP3', desc: '高压缩', ext: 'mp3' },
  { id: 'ogg', name: 'OGG', desc: '开源格式', ext: 'ogg' },
]

function selectFormat(format: 'wav' | 'mp3' | 'ogg') {
  selectedFormat.value = format
  showFormatMenu.value = false
}

async function handleDownload() {
  if (!props.buffer) return

  let blob: Blob
  let filename: string

  switch (selectedFormat.value) {
    case 'mp3':
      blob = await encodeMP3(props.buffer)
      filename = 'processed_audio.mp3'
      break
    case 'ogg':
      blob = await encodeOGG(props.buffer)
      filename = 'processed_audio.ogg'
      break
    default:
      blob = encodeWAV(props.buffer)
      filename = 'processed_audio.wav'
  }

  downloadBlob(blob, filename)
}

function encodeWAV(buffer: AudioBuffer): Blob {
  const sampleRate = buffer.sampleRate
  const channelData = buffer.getChannelData(0)

  const numChannels = 1
  const bitsPerSample = 16
  const bytesPerSample = bitsPerSample / 8
  const blockAlign = numChannels * bytesPerSample
  const byteRate = sampleRate * blockAlign
  const dataSize = channelData.length * bytesPerSample
  const bufferSize = 44 + dataSize

  const buf = new ArrayBuffer(bufferSize)
  const view = new DataView(buf)

  writeString(view, 0, 'RIFF')
  view.setUint32(4, bufferSize - 8, true)
  writeString(view, 8, 'WAVE')
  writeString(view, 12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, numChannels, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, byteRate, true)
  view.setUint16(32, blockAlign, true)
  view.setUint16(34, bitsPerSample, true)
  writeString(view, 36, 'data')
  view.setUint32(40, dataSize, true)

  let offset = 44
  for (let i = 0; i < channelData.length; i++) {
    const sample = Math.max(-1, Math.min(1, channelData[i]))
    const intSample = sample < 0 ? sample * 0x8000 : sample * 0x7fff
    view.setInt16(offset, intSample, true)
    offset += 2
  }

  return new Blob([buf], { type: 'audio/wav' })
}

async function encodeMP3(buffer: AudioBuffer): Promise<Blob> {
  // MP3 encoding not yet implemented - falling back to WAV
  // In production, use lamejs or similar library
  return encodeWAV(buffer)
}

async function encodeOGG(buffer: AudioBuffer): Promise<Blob> {
  // OGG encoding not yet implemented - falling back to WAV
  // In production, use libvorbis.js or similar
  return encodeWAV(buffer)
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function writeString(view: DataView, offset: number, str: string) {
  for (let i = 0; i < str.length; i++) {
    view.setUint8(offset + i, str.charCodeAt(i))
  }
}

watch(() => props.buffer, () => {
  currentTime.value = 0
  isPlaying.value = false
  startOffset = 0
  pause()
})

onUnmounted(() => {
  pause()
  audioContext.close()
})

// Expose for parent components
defineExpose({
  currentTime,
  progress,
  isPlaying
})
</script>

<template>
  <div v-if="buffer" class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ label }}</h3>
      <span class="text-xs text-slate-400 dark:text-slate-500">
        {{ currentTime.toFixed(1) }}s / {{ buffer.duration.toFixed(1) }}s
      </span>
    </div>

    <!-- Progress bar with seeking -->
    <div
      class="h-2.5 bg-slate-200 dark:bg-slate-600 rounded-full cursor-pointer mb-5 group relative"
      @mousedown="handleProgressMouseDown"
    >
      <div
        class="h-full bg-blue-500 rounded-full transition-all"
        :style="{ width: `${progress}%` }"
      />
      <!-- Hover preview -->
      <div class="absolute inset-0 group-hover:bg-white/10 rounded-full" />
    </div>

    <!-- Controls -->
    <div class="flex items-center gap-3">
      <!-- Play/Pause -->
      <button
        class="flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
        @click="togglePlay"
      >
        <svg v-if="!isPlaying" class="w-7 h-7 text-slate-700 dark:text-slate-200 ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        <svg v-else class="w-7 h-7 text-slate-700 dark:text-slate-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      </button>

      <!-- Download with format selector -->
      <div class="relative">
        <button
          class="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-slate-700 dark:text-slate-200"
          @click="showFormatMenu = !showFormatMenu"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span class="text-sm font-medium">下载 {{ formatOptions.find(f => f.id === selectedFormat)?.name }}</span>
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Format dropdown -->
        <div
          v-if="showFormatMenu"
          class="absolute bottom-full left-0 mb-2 bg-white dark:bg-slate-700 rounded-lg shadow-lg border border-slate-200 dark:border-slate-600 py-1 z-10 min-w-[140px]"
        >
          <button
            v-for="format in formatOptions"
            :key="format.id"
            class="w-full px-4 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-600 flex items-center justify-between text-slate-700 dark:text-slate-200"
            :class="{ 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400': selectedFormat === format.id }"
            @click="selectFormat(format.id as 'wav' | 'mp3' | 'ogg'); handleDownload()"
          >
            <span class="text-sm font-medium">{{ format.name }}</span>
            <span class="text-xs text-slate-400 dark:text-slate-500">{{ format.desc }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>