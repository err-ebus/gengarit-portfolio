import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const fullText = "ENGAGING_CORE_SYSTEMS...";

  const playBootSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(40, audioCtx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(55, audioCtx.currentTime + 1.5);
      gain1.gain.setValueAtTime(0, audioCtx.currentTime);
      gain1.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.1);
      gain1.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);

      const bufferSize = 2 * audioCtx.sampleRate;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = audioCtx.createBufferSource();
      noise.buffer = noiseBuffer;
      const noiseGain = audioCtx.createGain();
      const noiseFilter = audioCtx.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.setValueAtTime(1000, audioCtx.currentTime);
      noiseFilter.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 1.5);
      noiseGain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      noiseGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.5);
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);

      osc1.start();
      noise.start();
      osc1.stop(audioCtx.currentTime + 2);
      noise.stop(audioCtx.currentTime + 1.5);
    } catch (e) {}
  };

  useEffect(() => {
    if (!isStarted) return;
    playBootSound();
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 60);
    const progressInterval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 1.5));
    }, 40);
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isStarted, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center px-4 font-mono overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </div>

      <AnimatePresence>
        {!isStarted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            className="flex flex-col items-center relative"
          >
            {/* Advanced Initiation Interface */}
            <div className="relative w-64 h-64 flex items-center justify-center">
               {/* Background Technical Rings */}
               <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-red-600/20 rounded-full"
               />
               <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-zinc-800 rounded-full"
               />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]" />

               {/* Interactive Core */}
               <button
                onClick={() => setIsStarted(true)}
                className="group relative w-32 h-32 bg-zinc-900 border border-red-600/40 rounded-full flex items-center justify-center transition-all duration-500 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] overflow-hidden"
               >
                  <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors" />
                  <div className="flex flex-col items-center gap-1 z-10 transition-transform group-active:scale-95">
                    <span className="text-red-600 text-xl font-bold animate-pulse">⚡</span>
                    <span className="text-[8px] font-black text-white tracking-[0.2em] uppercase">Initialize</span>
                  </div>
                  
                  {/* Rotating Outer Ticks */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 border-t-2 border-r-2 border-transparent border-t-red-600 rounded-full opacity-40"
                  />
               </button>

               {/* Technical Metadata Floating Labels */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-[7px] text-zinc-600 tracking-[0.5em] font-black uppercase">
                  Auth_Protocol_Active
               </div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-[7px] text-red-950 tracking-[0.5em] font-black uppercase animate-pulse">
                  Standby_Mode
               </div>
            </div>

            <div className="mt-16 text-[9px] text-zinc-500 uppercase tracking-widest font-black flex gap-4 items-center">
               <span className="w-8 h-px bg-zinc-900" />
               ERR-EBUS.SYSTEM_V2.6
               <span className="w-8 h-px bg-zinc-900" />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md flex flex-col items-center"
          >
            <div className="mb-12 relative">
               <div className="absolute inset-0 bg-red-600/15 blur-3xl rounded-full" />
               <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 border border-zinc-900 border-t-red-600 rounded-full relative z-10 flex items-center justify-center"
               >
                  <div className="w-16 h-16 border border-zinc-900 border-b-red-600/50 rounded-full animate-[spin_2s_linear_infinite_reverse]" />
               </motion.div>
            </div>

            <div className="w-full space-y-4">
              <div className="flex justify-between items-end text-[10px] font-black tracking-widest">
                  <span className="text-zinc-500 uppercase">{text}</span>
                  <span className="text-red-600">{Math.floor(progress)}%</span>
              </div>
              <div className="h-px w-full bg-zinc-900 relative">
                  <motion.div 
                      className="h-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                  />
              </div>
            </div>

            <div className="mt-12 text-[8px] text-zinc-800 space-y-2 text-center uppercase tracking-[0.3em]">
              <p>Initializing_Data_Pipelines</p>
              <p className="text-red-900/40">Securing_Connection_Ports</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
