import * as ort from 'onnxruntime-web';

// Model sessions
let encSession = null;
let erbSession = null;
let dfSession = null;

// State tensors for temporal context
let states_conv = null;
let states_gru = null;

// Configuration (DeepFilterNet3)
const config = {
  sr: 48000,
  fftSize: 960,
  hopSize: 480,
  nbErb: 32,
  nbDf: 96
};

// Message handler
self.onmessage = async (e) => {
  const { type } = e.data;

  if (type === 'INIT') {
    await initModels();
  } else if (type === 'PROCESS_FRAME') {
    await processFrame(e.data.samples);
  }
};

async function initModels() {
  const options = { executionProviders: ['wasm'] };

  [encSession, erbSession, dfSession] = await Promise.all([
    ort.InferenceSession.create('/standard-model/enc.onnx', options),
    ort.InferenceSession.create('/standard-model/erb_dec.onnx', options),
    ort.InferenceSession.create('/standard-model/df_dec.onnx', options)
  ]);

  // Initialize state tensors
  states_conv = new ort.Tensor('float32', new Float32Array(1 * 64 * 4 * 20), [1, 64, 4, 20]);
  states_gru = new ort.Tensor('float32', new Float32Array(2 * 1 * 128), [2, 1, 128]);

  self.postMessage({ type: 'READY' });
}

async function processFrame(samples) {
  // STFT to get frequency domain features
  const { feat_erb, feat_spec } = runSTFT(samples);

  // Pipeline Step 1: Encoder
  const encFeats = await encSession.run({
    'feat_erb': feat_erb,
    'feat_spec': feat_spec,
    'states_in': states_conv
  });
  states_conv = encFeats['states_out'];

  // Pipeline Step 2: ERB Decoder
  const erbOutputs = await erbSession.run({
    'emb': encFeats['emb'],
    'states_in': states_gru
  });
  states_gru = erbOutputs['states_out'];

  // Pipeline Step 3: Deep Filter Decoder
  const dfOutputs = await dfSession.run({
    'emb': encFeats['emb'],
    'erb_gains': erbOutputs['erb_gains']
  });

  // iSTFT to convert back to time domain
  const cleanSamples = runInverseSTFT(dfOutputs['spec_out']);

  self.postMessage({ type: 'AUDIO_OUT', samples: cleanSamples });
}

function runSTFT(samples) {
  const fftSize = config.fftSize;
  const nbBins = fftSize / 2 + 1;

  // Hann window
  const window = new Float32Array(fftSize);
  for (let i = 0; i < fftSize; i++) {
    window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (fftSize - 1)));
  }

  // Apply window to samples
  const windowed = new Float32Array(fftSize);
  for (let i = 0; i < fftSize; i++) {
    windowed[i] = ((samples[i] || 0)) * window[i];
  }

  // Compute DFT (simplified - just the positive frequencies)
  const specData = new Float32Array(nbBins * 2);
  for (let k = 0; k < nbBins; k++) {
    let real = 0, imag = 0;
    for (let n = 0; n < fftSize; n++) {
      const angle = -2 * Math.PI * k * n / fftSize;
      real += windowed[n] * Math.cos(angle);
      imag += windowed[n] * Math.sin(angle);
    }
    specData[k * 2] = real;
    specData[k * 2 + 1] = imag;
  }

  // Compute ERB features (simplified mel-like filterbank)
  const erbData = new Float32Array(config.nbErb);
  for (let e = 0; e < config.nbErb; e++) {
    const binStart = Math.floor((e / config.nbErb) * nbBins);
    const binEnd = Math.floor(((e + 1) / config.nbErb) * nbBins);
    let mag = 0;
    for (let b = binStart; b < binEnd; b++) {
      const idx = b * 2;
      mag += Math.sqrt(specData[idx] ** 2 + specData[idx + 1] ** 2);
    }
    erbData[e] = mag / Math.max(1, binEnd - binStart);
  }

  return {
    feat_erb: new ort.Tensor('float32', erbData, [1, 1, 1, config.nbErb]),
    feat_spec: new ort.Tensor('float32', specData, [1, 1, 1, nbBins * 2])
  };
}

function runInverseSTFT(spec) {
  const fftSize = config.fftSize;
  const nbBins = fftSize / 2 + 1;
  const specData = spec.data;

  // Hann window
  const window = new Float32Array(fftSize);
  for (let i = 0; i < fftSize; i++) {
    window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (fftSize - 1)));
  }

  // Reconstruct time-domain signal
  const output = new Float32Array(480);

  for (let k = 0; k < nbBins; k++) {
    const real = specData[k * 2] || 0;
    const imag = specData[k * 2 + 1] || 0;

    for (let n = 0; n < fftSize && n < output.length; n++) {
      const angle = 2 * Math.PI * k * n / fftSize;
      output[n] += (real * Math.cos(angle) - imag * Math.sin(angle)) / fftSize * window[n];
    }
  }

  return Array.from(output);
}