import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "INITIALIZING_ENGINE_PARAMETERS...";

  useEffect(() => {
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
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center px-4">
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
            className="w-16 h-16 border-4 border-t-red-600 border-r-transparent border-b-zinc-900 border-l-transparent rounded-full"
         />
      </div>

      <div className="w-full max-w-md">
        <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{text}</span>
            <span className="text-[10px] font-mono text-red-500 font-bold">{progress}%</span>
        </div>
        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
            <motion.div 
                className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
            />
        </div>
      </div>

      <div className="mt-10 font-mono text-[8px] text-zinc-700 space-y-1 text-center">
        <p>VTEC_SYSTEM: READY</p>
        <p>ECU_MAPPING: OPTIMIZED</p>
        <p>CORE_LOGIC: STABLE</p>
      </div>
    </div>
  );
};
