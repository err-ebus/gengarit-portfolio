import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const fullText = "STAGING_CORE_ENVIRONMENT...";

  // Heavy Industrial System Boot Sequence
  const playBootSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;

      // 1. DEEP SERVER HUM (Low-frequency spin up)
      const hum = audioCtx.createOscillator();
      const humGain = audioCtx.createGain();
      hum.type = 'sine';
      hum.frequency.setValueAtTime(30, now);
      hum.frequency.exponentialRampToValueAtTime(60, now + 2); // Pitch rises slightly as it spins up
      
      humGain.gain.setValueAtTime(0, now);
      humGain.gain.linearRampToValueAtTime(0.2, now + 0.5);
      humGain.gain.exponentialRampToValueAtTime(0.01, now + 2.5);
      
      hum.connect(humGain);
      humGain.connect(audioCtx.destination);

      // 2. MECHANICAL RELAY CLICK (Sharp Engagement)
      const click = audioCtx.createOscillator();
      const clickGain = audioCtx.createGain();
      click.type = 'square'; // Square wave for that mechanical "snap"
      click.frequency.setValueAtTime(150, now + 0.1); // Quick click at the start of engagement
      
      clickGain.gain.setValueAtTime(0, now + 0.1);
      clickGain.gain.linearRampToValueAtTime(0.1, now + 0.11);
      clickGain.gain.linearRampToValueAtTime(0, now + 0.15);
      
      click.connect(clickGain);
      clickGain.connect(audioCtx.destination);

      // 3. SECONDARY RELAY (Lock Engagement)
      const lock = audioCtx.createOscillator();
      const lockGain = audioCtx.createGain();
      lock.type = 'sine';
      lock.frequency.setValueAtTime(80, now + 0.12);
      
      lockGain.gain.setValueAtTime(0, now + 0.12);
      lockGain.gain.linearRampToValueAtTime(0.2, now + 0.13);
      lockGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      
      lock.connect(lockGain);
      lockGain.connect(audioCtx.destination);

      hum.start(now);
      click.start(now + 0.1);
      lock.start(now + 0.12);

      hum.stop(now + 2.5);
      click.stop(now + 0.15);
      lock.stop(now + 0.3);
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
               ERR-EBUS.SYSTEM_V2.6
               <span className="w-8 h-px bg-zinc-900" />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="data-loading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md flex flex-col items-center"
          >
            <div className="w-full space-y-6">
              <div className="flex justify-between items-center text-[10px] font-black tracking-[0.2em]">
                  <span className="text-zinc-500 uppercase italic">{text}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-800 text-[8px]">CORE_</span>
                    <span className="text-red-600">{Math.floor(progress)}%</span>
                  </div>
              </div>
              <div className="h-px w-full bg-zinc-900 relative">
                  <motion.div 
                      className="h-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-20 animate-[sweep_1.5s_infinite]" />
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

      <style>{`
        @keyframes sweep {
          from { transform: translateX(-100%); }
          to { transform: translateX(500%); }
        }
      `}</style>
    </div>
  );
};
