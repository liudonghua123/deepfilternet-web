<script setup lang="ts">
import type { ProcessStatus } from '../types'

defineProps<{
  status: ProcessStatus
  disabled?: boolean
}>()

defineEmits<{
  (e: 'process'): void
}>()
</script>

<template>
  <button
    class="px-8 py-3.5 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-medium text-lg
           hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200
           disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25"
    :disabled="disabled || status === 'processing'"
    @click="$emit('process')"
  >
    <!-- Idle state -->
    <template v-if="status === 'idle'">
      <span class="flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        开始降噪
      </span>
    </template>

    <!-- Processing state -->
    <template v-else-if="status === 'processing'">
      <span class="flex items-center gap-2">
        <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        处理中...
      </span>
    </template>

    <!-- Done state -->
    <template v-else-if="status === 'done'">
      <span class="flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        处理完成
      </span>
    </template>

    <!-- Error state -->
    <template v-else-if="status === 'error'">
      <span class="flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        处理失败，点击重试
      </span>
    </template>
  </button>
</template>