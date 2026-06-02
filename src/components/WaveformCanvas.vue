<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  peaks: Float32Array | null
  color?: string
  progress?: number
  currentTime?: number
  duration?: number
}>()

const emit = defineEmits<{
  (e: 'seek', time: number): void
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const isHovering = ref(false)
const hoverX = ref(0)

function draw() {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  const dpr = window.devicePixelRatio || 1
  const rect = container.getBoundingClientRect()

  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  canvas.style.width = `${rect.width}px`
  canvas.style.height = `${rect.height}px`

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.scale(dpr, dpr)
  ctx.clearRect(0, 0, rect.width, rect.height)

  if (!props.peaks) return

  const peaks = props.peaks
  const barWidth = rect.width / peaks.length
  const maxHeight = rect.height * 0.8
  const centerY = rect.height / 2

  // Colors
  const baseColor = props.color || '#64748b'
  const progressColor = '#22c55e'

  // Determine the progress point
  let progressIndex = peaks.length
  if (props.progress !== undefined && props.progress >= 0) {
    progressIndex = Math.floor(props.progress * peaks.length)
  } else if (props.currentTime !== undefined && props.duration && props.duration > 0) {
    progressIndex = Math.floor((props.currentTime / props.duration) * peaks.length)
  }

  for (let i = 0; i < peaks.length; i++) {
    const x = i * barWidth
    const height = peaks[i] * maxHeight

    // Color based on progress
    ctx.fillStyle = i < progressIndex ? progressColor : baseColor

    ctx.fillRect(
      x,
      centerY - height / 2,
      Math.max(barWidth - 1, 1),
      height
    )
  }

  // Draw hover line
  if (isHovering.value && containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect()
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(hoverX.value, 0)
    ctx.lineTo(hoverX.value, rect.height)
    ctx.stroke()
  }
}

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  hoverX.value = e.clientX - rect.left
  isHovering.value = true
  draw()
}

function handleMouseLeave() {
  isHovering.value = false
  draw()
}

function handleClick(e: MouseEvent) {
  if (!containerRef.value || !props.duration) return
  const rect = containerRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const percent = x / rect.width
  const time = percent * props.duration
  emit('seek', time)
}

onMounted(() => {
  draw()
  window.addEventListener('resize', draw)
})

onUnmounted(() => {
  window.removeEventListener('resize', draw)
})

watch(() => [props.peaks, props.progress, props.currentTime], draw, { deep: true })
</script>

<template>
  <div
    ref="containerRef"
    class="bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden cursor-pointer h-24"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <canvas ref="canvasRef" class="w-full h-full" />
  </div>
</template>