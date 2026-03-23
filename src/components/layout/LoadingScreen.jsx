import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const fullText = "INITIALIZING_ENGINE_PARAMETERS...";

  // High-Tech "Chime" Boot Sequence
  const playBootSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      
      // Layer 1: Low steady hum
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(60, audioCtx.currentTime);
      gain1.gain.setValueAtTime(0, audioCtx.currentTime);
      gain1.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.5);
      gain1.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);

      // Layer 2: Rising "Data" Chime
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(200, audioCtx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 1.5);
      gain2.gain.setValueAtTime(0, audioCtx.currentTime);
      gain2.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.1);
      gain2.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.5);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(audioCtx.currentTime + 2);
      osc2.stop(audioCtx.currentTime + 1.5);
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
    }, 50);

    const progressInterval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 1));
    }, 25);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isStarted, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center px-4 font-mono overflow-hidden">
      <AnimatePresence>
        {!isStarted ? (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsStarted(true)}
            className="group relative flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 border border-red-600/30 rounded-full flex items-center justify-center group-hover:border-red-600 transition-all duration-500">
               <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center group-hover:bg-red-600/20">
                  <span className="text-red-600 text-2xl">⚡</span>
               </div>
            </div>
            <span className="text-[10px] text-red-500 font-black tracking-[0.5em] animate-pulse">
              ENABLE_SYSTEM_AUDIO
            </span>
          </motion.button>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-md flex flex-col items-center"
          >
            <div className="mb-10 relative">
               <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-full" />
               <motion.div 
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ 
                      rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-16 h-16 border-4 border-t-red-600 border-r-transparent border-b-zinc-900 border-l-transparent rounded-full relative z-10"
               />
            </div>

            <div className="w-full">
              <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{text}</span>
                  <span className="text-[10px] text-red-500 font-bold">{progress}%</span>
              </div>
              <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 relative">
                  <motion.div 
                      className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-20 animate-[sweep_1.5s_infinite]" />
              </div>
            </div>

            <div className="mt-10 text-[8px] text-zinc-700 space-y-1 text-center relative z-10 uppercase tracking-widest">
              <p className="flex items-center justify-center gap-2">
                <span className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
                VTEC_SYSTEM: READY
              </p>
              <p>ECU_MAPPING: OPTIMIZED</p>
              <p>CORE_LOGIC: STABLE</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes sweep {
          from { transform: translateX(-100%); }
          to { transform: translateX(500%); }
        }
      `}</style>
    </div>
  );
};
