import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const fullText = "STAGING_CORE_ENVIRONMENT...";

  // Professional Heavy Mechanical Engagement Sound
  const playBootSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;

      // Part 1: High-frequency metallic strike (Mechanical Click)
      const bufferSize = audioCtx.sampleRate * 0.1;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      const noiseFilter = audioCtx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.value = 3000;
      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0.15, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);

      // Part 2: The "Thump" (Sub-bass Physical Weight)
      const thump = audioCtx.createOscillator();
      const thumpGain = audioCtx.createGain();
      thump.type = 'sine';
      thump.frequency.setValueAtTime(120, now);
      thump.frequency.exponentialRampToValueAtTime(20, now + 0.2);
      thumpGain.gain.setValueAtTime(0.6, now);
      thumpGain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      thump.connect(thumpGain);
      thumpGain.connect(audioCtx.destination);

      noise.start();
      thump.start();
      thump.stop(now + 0.4);
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
      setProgress(prev => (prev >= 100 ? 100 : prev + 2));
    }, 35);
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isStarted, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center px-4 font-mono overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </div>

      <AnimatePresence>
        {!isStarted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            className="flex flex-col items-center"
          >
            {/* High-Tech Initiation Console */}
            <div className="relative group">
               {/* Decorative Outer Brackets */}
               <div className="absolute -inset-10 border-x border-zinc-900 flex justify-between pointer-events-none">
                  <div className="h-full w-4 border-y border-zinc-900" />
                  <div className="h-full w-4 border-y border-zinc-900" />
               </div>

               {/* The Console Button */}
               <button
                onClick={() => setIsStarted(true)}
                className="relative px-16 py-8 bg-zinc-900/20 border border-red-600/30 overflow-hidden group-hover:border-red-600 transition-all duration-700 shadow-2xl"
               >
                  {/* Technical Overlays */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-600" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-600" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-600" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-600" />
                  
                  <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors" />
                  
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="flex gap-1">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-1 h-4 bg-red-600/20 group-hover:bg-red-600/60 animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                       ))}
                    </div>
                    <span className="text-xs font-black text-red-500 tracking-[0.8em] uppercase italic group-hover:text-white transition-colors">
                      Start_System
                    </span>
                    <span className="text-[7px] text-zinc-600 tracking-widest font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Access_Protocol_00
                    </span>
                  </div>
               </button>

               {/* Technical Status Dots */}
               <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4 opacity-20">
                  <div className="w-1 h-1 bg-red-600 rounded-full" />
                  <div className="w-1 h-1 bg-zinc-600 rounded-full" />
                  <div className="w-1 h-1 bg-zinc-600 rounded-full" />
               </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-md flex flex-col items-center"
          >
            {/* Minified Modern Loading Spin */}
            <div className="mb-16 relative">
               <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full" />
               <div className="w-24 h-px bg-zinc-900 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-red-600 shadow-[0_0_15px_red]"
                  />
               </div>
            </div>

            <div className="w-full space-y-6">
              <div className="flex justify-between items-center text-[10px] font-black tracking-[0.2em]">
                  <span className="text-zinc-600 uppercase italic">{text}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-800 text-[8px]">LVL_</span>
                    <span className="text-red-600">{Math.floor(progress)}</span>
                  </div>
              </div>
              <div className="h-[2px] w-full bg-zinc-900/50 relative overflow-hidden">
                  <motion.div 
                      className="h-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                  />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 opacity-10 text-[7px] text-zinc-500 uppercase tracking-widest font-black">
              <span>Memory: OK</span>
              <span className="text-center">Kernel: LOAD</span>
              <span className="text-right">I/O: SECURE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
