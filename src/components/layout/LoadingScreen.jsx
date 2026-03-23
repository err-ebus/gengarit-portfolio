import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const fullText = "ENGAGING_CORE_SYSTEMS...";

  // Professional Mechanical "Thud-Click" - Short & Tactile
  const playBootSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;

      // Part 1: Sharp Transient (The "Click")
      const bufferSize = audioCtx.sampleRate * 0.05; 
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      
      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0.1, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
      noise.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);

      // Part 2: Low-end Punch (The "Thump")
      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.1);
      oscGain.gain.setValueAtTime(0.3, now);
      oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      
      osc.connect(oscGain);
      oscGain.connect(audioCtx.destination);

      noise.start();
      osc.start();
      osc.stop(now + 0.15);
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
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </div>

      <AnimatePresence>
        {!isStarted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="relative flex flex-col items-center"
          >
            {/* Restored Professional Engagement Button */}
            <button
              onClick={() => setIsStarted(true)}
              className="group relative px-12 py-6 bg-transparent border border-red-600/30 overflow-hidden transition-all duration-500 hover:border-red-600"
            >
              <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors" />
              <div className="absolute -left-full top-0 w-full h-full bg-gradient-to-r from-transparent via-red-600/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              
              <div className="relative flex items-center gap-4">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-xs font-black text-red-500 tracking-[0.6em] uppercase italic">
                  Start_System_Integration
                </span>
              </div>
            </button>
            
            <div className="mt-8 flex gap-8 opacity-20 text-[8px] text-zinc-500 uppercase tracking-widest font-black">
               <span>AUTH_REV: 2.6.0</span>
               <span>//</span>
               <span>OS_KERNEL: STABLE</span>
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

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};
