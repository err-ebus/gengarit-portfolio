import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const fullText = "ENGAGING_CORE_SYSTEMS...";

  // Cinematic Sci-Fi "Engine Start" Sequence
  const playBootSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;

      // Layer 1: The "Engine Thrum" (FM Synthesis)
      const carrier = audioCtx.createOscillator();
      const modulator = audioCtx.createOscillator();
      const modGain = audioCtx.createGain();
      const mainGain = audioCtx.createGain();

      carrier.type = 'sine';
      modulator.type = 'sawtooth';

      // Modulator affects carrier frequency for metallic grit
      modulator.frequency.setValueAtTime(50, now);
      modulator.frequency.exponentialRampToValueAtTime(150, now + 2);
      modGain.gain.setValueAtTime(40, now);
      modGain.gain.exponentialRampToValueAtTime(10, now + 2);

      carrier.frequency.setValueAtTime(40, now);
      carrier.frequency.exponentialRampToValueAtTime(80, now + 1.5);

      mainGain.gain.setValueAtTime(0, now);
      mainGain.gain.linearRampToValueAtTime(0.3, now + 0.1);
      mainGain.gain.exponentialRampToValueAtTime(0.01, now + 2.5);

      modulator.connect(modGain);
      modGain.connect(carrier.frequency);
      carrier.connect(mainGain);
      mainGain.connect(audioCtx.destination);

      // Layer 2: Sub-Bass Kick (The "Engagement")
      const sub = audioCtx.createOscillator();
      const subGain = audioCtx.createGain();
      sub.type = 'sine';
      sub.frequency.setValueAtTime(100, now);
      sub.frequency.exponentialRampToValueAtTime(30, now + 0.2);
      subGain.gain.setValueAtTime(0.4, now);
      subGain.gain.linearRampToValueAtTime(0, now + 0.3);
      sub.connect(subGain);
      subGain.connect(audioCtx.destination);

      // Layer 3: High-Freq "Digital Grain" (Data Read)
      const grain = audioCtx.createOscillator();
      const grainGain = audioCtx.createGain();
      grain.type = 'square';
      grain.frequency.setValueAtTime(1000, now);
      grain.frequency.setValueAtTime(2000, now + 0.1);
      grain.frequency.setValueAtTime(1500, now + 0.2);
      grainGain.gain.setValueAtTime(0, now);
      grainGain.gain.linearRampToValueAtTime(0.05, now + 0.05);
      grainGain.gain.linearRampToValueAtTime(0, now + 0.4);
      grain.connect(grainGain);
      grainGain.connect(audioCtx.destination);

      carrier.start();
      modulator.start();
      sub.start();
      grain.start();

      carrier.stop(now + 2.5);
      modulator.stop(now + 2.5);
      sub.stop(now + 0.3);
      grain.stop(now + 0.4);
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
            exit={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
            className="flex flex-col items-center relative"
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
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]" />

               <button
                onClick={() => setIsStarted(true)}
                className="group relative w-32 h-32 bg-zinc-900 border border-red-600/40 rounded-full flex items-center justify-center transition-all duration-500 hover:border-red-600 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] overflow-hidden"
               >
                  <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors" />
                  <div className="flex flex-col items-center gap-1 z-10 transition-transform group-active:scale-95">
                    <span className="text-red-600 text-xl font-bold animate-pulse">⚡</span>
                    <span className="text-[8px] font-black text-white tracking-[0.2em] uppercase">Initialize</span>
                  </div>
                  
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 border-t-2 border-r-2 border-transparent border-t-red-600 rounded-full opacity-40"
                  />
               </button>

               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-[7px] text-zinc-600 tracking-[0.5em] font-black uppercase">
                  Auth_Protocol_Active
               </div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-[7px] text-red-950 tracking-[0.5em] font-black uppercase animate-pulse">
                  System_Standby
               </div>
            </div>

            <div className="mt-16 text-[9px] text-zinc-500 uppercase tracking-widest font-black flex gap-4 items-center">
               <span className="w-8 h-px bg-zinc-900" />
               ERR-EBUS.OS_V2.6
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
              <p>Synchronizing_Neural_Grid</p>
              <p className="text-red-900/40">Calibrating_Logic_Cores</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
