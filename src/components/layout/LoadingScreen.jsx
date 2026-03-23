import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "INITIALIZING_ENGINE_PARAMETERS...";

  // Synthesized "System Boot" Sound Effect
  const playBootSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      // A rising "power up" frequency with a sawtooth wave for technical grit
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(40, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 2.5);
      
      gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.5);
      gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2.8);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 2.8);
    } catch (e) {}
  };

  useEffect(() => {
    playBootSound();

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center px-4 font-mono overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </div>

      <div className="mb-10 relative">
         <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-full" />
         <motion.div 
            animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
            }}
            transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-16 h-16 border-4 border-t-red-600 border-r-transparent border-b-zinc-900 border-l-transparent rounded-full relative z-10"
         />
      </div>

      <div className="w-full max-w-md relative z-10">
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
            {/* Scan Sweep Effect */}
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
    </div>
  );
};
