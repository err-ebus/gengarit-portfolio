import { useCallback } from 'react';

export const useUISounds = () => {
  // Professional Technical "Tick" for hovers
  const playHover = useCallback(() => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      // High-frequency "ping" transient
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.02);
      
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.02);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.02);
    } catch (e) {}
  }, []);

  // Solid Mechanical "Engagement" for clicks
  const playClick = useCallback(() => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      
      // Layer 1: Low-frequency "thud"
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(120, audioCtx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.1);
      gain1.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain1.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.1);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);

      // Layer 2: High-frequency "mechanical" click (noise)
      const bufferSize = audioCtx.sampleRate * 0.02; // 20ms
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      
      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      noiseGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.02);
      noise.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);

      osc1.start();
      noise.start();
      osc1.stop(audioCtx.currentTime + 0.1);
      noise.stop(audioCtx.currentTime + 0.02);
    } catch (e) {}
  }, []);

  return { playHover, playClick };
};
