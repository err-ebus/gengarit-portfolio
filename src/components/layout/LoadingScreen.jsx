import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "INITIALIZING_SYSTEM...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center font-mono overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)]" />
        <div className="h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </div>

      <div className="relative z-10 w-[280px] md:w-[400px]">
        {/* Status Header */}
        <div className="flex justify-between items-end mb-2 text-[10px] tracking-widest text-red-500 font-black">
          <span className="animate-pulse">{text}</span>
          <span>{Math.floor(progress)}%</span>
        </div>

        {/* Themed Progress Bar Container */}
        <div className="h-[2px] w-full bg-zinc-900 relative overflow-hidden border border-zinc-800/50">
          {/* Active Progress Fill */}
          <motion.div 
            className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
          />
          
          {/* Scanning Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-20 animate-[sweep_1.5s_infinite]" />
        </div>

        {/* Bottom Technical Metadata */}
        <div className="mt-4 flex flex-col gap-1 opacity-40 text-[8px] md:text-[10px] uppercase tracking-[0.2em]">
          <div className="flex justify-between">
            <span>Core_Engine: v2.6.0</span>
            <span>Auth: Verified</span>
          </div>
          <div className="flex justify-between text-zinc-500">
            <span>Load_Sequence: {progress > 40 ? "ACTIVE" : "PENDING"}</span>
            <span>Security: encrypted</span>
          </div>
        </div>
      </div>

      {/* Extreme Low-Opacity Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
    </div>
  );
};
