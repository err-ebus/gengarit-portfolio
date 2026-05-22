import { useCallback } from 'react';

export const useUISounds = () => {
  // Option 1: The "Digital Terminal" (Minimalist & Sharp)
  // Sharp, high-pitched "blip" for hovers
  const playHover = useCallback(() => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'square'; // Square wave for that terminal feel
      osc.frequency.setValueAtTime(1800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, audioCtx.currentTime + 0.01);
      
      gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.01);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.01);
    } catch (e) {}
  }, []);

  // Sharp "data transmit" double-pulse for clicks
  const playClick = useCallback(() => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      
      const playBlip = (time, freq) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, time);
        gain.gain.setValueAtTime(0.03, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(time);
        osc.stop(time + 0.03);
      };

      // Double pulse effect
      playBlip(audioCtx.currentTime, 1200);
      playBlip(audioCtx.currentTime + 0.05, 1600);
    } catch (e) {}
  }, []);

  return { playHover, playClick };
};
