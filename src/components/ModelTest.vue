<script setup lang="ts">
import { ref } from 'vue'
import { loadModel } from '../utils/onnxRuntime'

const output = ref('')

function log(msg: string) {
  output.value += msg + '\n'
  console.log(msg)
}

async function testModels() {
  output.value = ''
  log('Testing model inputs...')

  try {
    await loadModel()
    log('Models loaded successfully!')
  } catch (e) {
    log('Load error: ' + (e as Error).message)
  }
}
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Model Test</h1>
    <button @click="testModels" class="px-4 py-2 bg-blue-500 text-white rounded">
      Test Models
    </button>
    <pre class="mt-4 p-4 bg-gray-100 rounded whitespace-pre-wrap">{{ output }}</pre>
  </div>
</template>