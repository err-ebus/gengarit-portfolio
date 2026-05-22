import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const fullText = "INITIALIZING SYSTEM...";

  // Heavy Industrial System Boot Sequence
  const playBootSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;

      // 1. DEEP SERVER HUM
      const hum = audioCtx.createOscillator();
      const humGain = audioCtx.createGain();
      hum.type = 'sine';
      hum.frequency.setValueAtTime(30, now);
      hum.frequency.exponentialRampToValueAtTime(60, now + 2);
      
      humGain.gain.setValueAtTime(0, now);
      humGain.gain.linearRampToValueAtTime(0.2, now + 0.5);
      humGain.gain.exponentialRampToValueAtTime(0.01, now + 2.5);
      
      hum.connect(humGain);
      humGain.connect(audioCtx.destination);

      hum.start(now);
      hum.stop(now + 2.5);
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
      }
    }, 80);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isStarted, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center px-6 font-mono overflow-hidden">
      {/* HUD Background Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </div>

      <AnimatePresence mode="wait">
        {!isStarted ? (
          <motion.div
            key="init-node"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-64 h-64 flex items-center justify-center">
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

               <button
                onClick={() => setIsStarted(true)}
                className="group relative w-32 h-32 bg-zinc-900 border border-red-600/40 rounded-full flex items-center justify-center transition-all duration-500 hover:border-red-600 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] overflow-hidden"
               >
                  <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors" />
                  <div className="flex flex-col items-center gap-1 z-10">
                    <span className="text-red-600 text-xl font-bold animate-pulse">⚡</span>
                    <span className="text-[8px] font-black text-white tracking-[0.2em] uppercase">Boot_Sequence</span>
                  </div>
                  
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 border-t-2 border-r-2 border-transparent border-t-red-600 rounded-full opacity-40"
                  />
               </button>
            </div>

            <div className="mt-16 text-[9px] text-zinc-500 uppercase tracking-widest font-black">
               Awaiting_Initialization_Protocol...
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="data-loading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            className="w-full max-w-md flex flex-col items-center"
          >
            <div className="w-full space-y-6">
              <div className="flex justify-between items-center text-[11px] font-black tracking-[0.2em]">
                  <span className="text-red-600 uppercase italic animate-pulse">{text}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-700 text-[8px]">LOAD_</span>
                    <span className="text-zinc-100">{Math.floor(progress)}%</span>
                  </div>
              </div>
              <div className="h-[2px] w-full bg-zinc-900 relative rounded-full overflow-hidden">
                  <motion.div 
                      className="h-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                  />
              </div>
            </div>

            <div className="mt-16 flex gap-12 opacity-20 text-[7px] text-zinc-500 uppercase tracking-[0.4em] font-black">
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-red-600 rounded-full" /> Memory_Map</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-red-600 rounded-full" /> Logic_Core</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-red-600 rounded-full" /> Uplink</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
