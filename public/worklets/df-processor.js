class DeepFilterProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.inputBuffer = [];
    this.outputBuffer = [];
    this.totalFrames = 0;
    this.processedFrames = 0;

    // Create Web Worker
    this.worker = new Worker('/workers/onnx-worker.js');

    // Receive messages from Worker
    this.worker.onmessage = (e) => {
      if (e.data.type === 'AUDIO_OUT') {
        this.outputBuffer.push(...e.data.samples);
      } else if (e.data.type === 'READY') {
        this.port.postMessage({ type: 'WORKER_READY' });
      }
    };
  }

  process(inputs, outputs) {
    const input = inputs[0][0];
    const output = outputs[0][0];
    if (!input) return true;

    // Collect samples into buffer
    this.inputBuffer.push(...input);
    this.totalFrames++;

    // When we have 480 samples, send to Worker (10ms @ 48kHz)
    if (this.inputBuffer.length >= 480) {
      const frame = this.inputBuffer.splice(0, 480);
      this.worker.postMessage({
        type: 'PROCESS_FRAME',
        samples: Array.from(frame),
        frameIndex: this.totalFrames
      });
    }

    // Output processed samples (128 samples per block)
    if (this.outputBuffer.length >= 128) {
      const cleanFrame = this.outputBuffer.splice(0, 128);
      for (let i = 0; i < 128; i++) {
        output[i] = cleanFrame[i] || 0;
      }
    } else {
      for (let i = 0; i < output.length; i++) {
        output[i] = 0;
      }
    }

    return true;
  }
}

registerProcessor('df-processor', DeepFilterProcessor);