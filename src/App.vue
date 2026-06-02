<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick, shallowRef } from 'vue'
import DropZone from './components/DropZone.vue'
import WaveformCanvas from './components/WaveformCanvas.vue'
import ProcessButton from './components/ProcessButton.vue'
import AudioPlayer from './components/AudioPlayer.vue'
import { decodeAudioFile, processAudio, getWaveformPeaks } from './utils/audioProcessor'
import type { ModelStatus, ProcessStatus } from './types'
import { loadModel } from './utils/onnxRuntime'

// State
const audioFile = ref<File | null>(null)
const audioBuffer = ref<AudioBuffer | null>(null)
const processedBuffer = shallowRef<AudioBuffer | null>(null)

const modelStatus = ref<ModelStatus>('unloaded')

const processStatus = ref<ProcessStatus>('idle')
const processProgress = ref(0)

const error = ref<string | null>(null)

// UI State
const activeTab = ref<'home' | 'about'>('home')
const isDarkMode = ref(false)

// Player refs
const originalPlayerRef = ref<{ currentTime: number; isPlaying: boolean } | null>(null)
const processedPlayerRef = ref<{ currentTime: number; isPlaying: boolean } | null>(null)

// Computed
const inputPeaks = computed(() => {
  if (!audioBuffer.value) return null
  return getWaveformPeaks(audioBuffer.value, 200)
})

const outputPeaks = computed(() => {
  if (!processedBuffer.value) return null
  return getWaveformPeaks(processedBuffer.value, 200)
})

// Dark mode
watch(isDarkMode, (dark) => {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('darkMode', String(dark))
}, { immediate: true })

if (localStorage.getItem('darkMode') === 'true') {
  isDarkMode.value = true
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
}

// Handlers
async function handleFileSelected(file: File) {
  error.value = null
  audioFile.value = file
  processedBuffer.value = null

  try {
    audioBuffer.value = await decodeAudioFile(file)
  } catch (e) {
    error.value = '无法解码音频文件'
    audioFile.value = null
    audioBuffer.value = null
  }
}

async function handleProcess() {
  if (!audioBuffer.value) return

  error.value = null
  processStatus.value = 'processing'
  processProgress.value = 0
  await nextTick()

  try {
    processedBuffer.value = await processAudio(audioBuffer.value, (p) => {
      processProgress.value = p
    })
    processStatus.value = 'done'
  } catch (e) {
    console.error('Processing error:', e)
    processStatus.value = 'error'
    error.value = '处理失败，请重试'
  }
}

async function loadSelectedModel() {
  try {
    modelStatus.value = 'downloading'
    await loadModel()
    modelStatus.value = 'ready'
  } catch (e) {
    modelStatus.value = 'error'
    error.value = '模型加载失败'
  }
}

onMounted(() => {
  loadSelectedModel()
})
</script>

<template>
  <div class="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-200">
    <!-- Header -->
    <header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
      <div class="max-w-4xl mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <!-- Logo & Title -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
              </svg>
            </div>
            <div>
              <h1 class="text-xl font-bold text-slate-900 dark:text-white">DeepFilterNet Web</h1>
              <p class="text-xs text-slate-500 dark:text-slate-400">浏览器端音频降噪</p>
            </div>
          </div>

          <!-- Right actions -->
          <div class="flex items-center gap-3">
            <!-- Tab navigation -->
            <nav class="flex bg-slate-100 dark:bg-slate-700/50 rounded-lg p-1">
              <button
                class="px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-150"
                :class="activeTab === 'home'
                  ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'"
                @click="activeTab = 'home'"
              >
                首页
              </button>
              <button
                class="px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-150"
                :class="activeTab === 'about'
                  ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'"
                @click="activeTab = 'about'"
              >
                关于
              </button>
            </nav>

            <!-- Dark mode toggle -->
            <button
              class="p-2.5 rounded-lg transition-colors"
              :class="isDarkMode
                ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 hover:bg-amber-200 dark:hover:bg-amber-900'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600'"
              @click="toggleDarkMode"
              :title="isDarkMode ? '切换到亮色模式' : '切换到深色模式'"
            >
              <svg v-if="isDarkMode" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="max-w-4xl mx-auto px-4 py-6">
      <!-- Home Tab -->
      <div v-if="activeTab === 'home'" class="space-y-6">
        <!-- Tagline -->
        <div class="text-center py-2">
          <p class="text-slate-500 dark:text-slate-400 text-sm">
            纯浏览器端处理，保护隐私，无需上传服务器
          </p>
        </div>

        <!-- Error message -->
        <div v-if="error" class="p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl border border-red-200 dark:border-red-800">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span class="font-medium">{{ error }}</span>
          </div>
        </div>

        <!-- Drop Zone -->
        <DropZone @file-selected="handleFileSelected" />

        <!-- Input Waveform & Player -->
        <template v-if="audioBuffer">
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <span class="text-sm">📄</span>
                </div>
                <div>
                  <h3 class="text-sm font-semibold text-slate-700 dark:text-slate-200">原始音频</h3>
                  <p class="text-xs text-slate-400 dark:text-slate-500">{{ audioFile?.name }}</p>
                </div>
              </div>
            </div>
            <WaveformCanvas
              :peaks="inputPeaks"
              color="#94a3b8"
              :current-time="originalPlayerRef?.currentTime"
              :duration="audioBuffer.duration"
              @seek="() => {}"
            />
          </div>
          <AudioPlayer
            ref="originalPlayerRef"
            :buffer="audioBuffer"
            label="原始音频"
          />
        </template>

        <!-- Process Button -->
        <div class="flex justify-center pt-2">
          <ProcessButton
            :status="processStatus"
            :disabled="!audioBuffer || processStatus === 'processing'"
            :progress="processProgress"
            @process="handleProcess"
          />
        </div>

        <!-- Output Waveform & Player -->
        <template v-if="processedBuffer">
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                  <span class="text-sm">✨</span>
                </div>
                <div>
                  <h3 class="text-sm font-semibold text-slate-700 dark:text-slate-200">降噪后音频</h3>
                  <p class="text-xs text-slate-400 dark:text-slate-500">处理完成</p>
                </div>
              </div>
            </div>
            <WaveformCanvas
              :peaks="outputPeaks"
              color="#22c55e"
              :current-time="processedPlayerRef?.currentTime"
              :duration="processedBuffer.duration"
              :progress="1"
              @seek="() => {}"
            />
          </div>
          <AudioPlayer
            ref="processedPlayerRef"
            :buffer="processedBuffer"
            label="降噪后"
          />
        </template>
      </div>

      <!-- About Tab -->
      <div v-else-if="activeTab === 'about'" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
        <div class="space-y-8">
          <!-- 项目简介 -->
          <section>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">项目简介</h2>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
              DeepFilterNet Web 是一个纯前端音频降噪工具，可以在浏览器中直接对音频进行降噪处理，
              无需上传到服务器。所有处理都在本地完成，保护用户隐私。
            </p>
          </section>

          <!-- 技术架构 -->
          <section>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">技术架构</h2>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div class="text-3xl mb-2">⚡</div>
                <div class="font-medium text-slate-900 dark:text-white">构建工具</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">Vite 5</div>
              </div>
              <div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div class="text-3xl mb-2">💚</div>
                <div class="font-medium text-slate-900 dark:text-white">前端框架</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">Vue 3.4</div>
              </div>
              <div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div class="text-3xl mb-2">🎨</div>
                <div class="font-medium text-slate-900 dark:text-white">样式框架</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">TailwindCSS</div>
              </div>
              <div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div class="text-3xl mb-2">🧠</div>
                <div class="font-medium text-slate-900 dark:text-white">模型运行时</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">ONNX Runtime</div>
              </div>
            </div>
          </section>

          <!-- 处理流程 -->
          <section>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">处理流程</h2>
            <div class="flex items-center justify-between gap-2">
              <div class="text-center flex-1">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span class="text-blue-600 dark:text-blue-300 font-bold">1</span>
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-300">上传音频</p>
              </div>
              <div class="flex-1 h-1.5 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600 rounded-full"></div>
              <div class="text-center flex-1">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span class="text-blue-600 dark:text-blue-300 font-bold">2</span>
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-300">解码音频</p>
              </div>
              <div class="flex-1 h-1.5 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600 rounded-full"></div>
              <div class="text-center flex-1">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span class="text-blue-600 dark:text-blue-300 font-bold">3</span>
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-300">模型推理</p>
              </div>
              <div class="flex-1 h-1.5 bg-gradient-to-r from-blue-200 to-green-300 dark:from-blue-700 dark:to-green-600 rounded-full"></div>
              <div class="text-center flex-1">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span class="text-green-600 dark:text-green-300 font-bold">4</span>
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-300">下载结果</p>
              </div>
            </div>
          </section>

          <!-- 核心优势 -->
          <section>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">核心优势</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">🔒</span>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900 dark:text-white">隐私安全</h3>
                  <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">音频不离开设备，无上传风险</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">📴</span>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900 dark:text-white">离线可用</h3>
                  <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">模型缓存后无需网络</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">📂</span>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900 dark:text-white">开源透明</h3>
                  <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">基于 DeepFilterNet 开源模型</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">✨</span>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900 dark:text-white">现代体验</h3>
                  <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">拖拽上传、实时波形、在线播放</p>
                </div>
              </div>
            </div>
          </section>

          <!-- 模型信息 -->
          <section>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">内置模型</h2>
            <div class="p-4 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50/50 dark:bg-blue-900/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xl">🎯</span>
                <h3 class="font-bold text-slate-900 dark:text-white">DeepFilterNet3 标准模型</h3>
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400">基于 DeepFilterNet3 优化的 ONNX 模型，适合通用音频降噪</p>
              <p class="text-xs text-slate-400 dark:text-slate-500 mt-2">模型文件: enc.onnx + df_dec.onnx + erb_dec.onnx</p>
            </div>
          </section>

          <!-- 致谢 -->
          <section>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">致谢</h2>
            <div class="flex flex-wrap gap-3">
              <a href="https://github.com/Rikorose/DeepFilterNet" target="_blank"
                 class="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white text-sm">
                DeepFilterNet
              </a>
              <a href="https://onnxruntime.ai/" target="_blank"
                 class="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white text-sm">
                ONNX Runtime
              </a>
              <a href="https://hf-mirror.com" target="_blank"
                 class="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white text-sm">
                HuggingFace Mirror
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="text-center py-6 text-sm text-slate-400 dark:text-slate-500">
      <p>Powered by DeepFilterNet + ONNX Runtime Web</p>
    </footer>
  </div>
</template>