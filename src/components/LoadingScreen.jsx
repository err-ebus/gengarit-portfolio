import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BOOT_LOGS = [
  "INITIALIZING KERNEL ENVIRONMENT...",
  "MOUNTING VIRTUAL ARCHITECTURE...",
  "DECRYPTING OFFLINE PAYLOADS...",
  "LOADING REACT UI COMPONENTS...",
  "COMPILING TAILWIND STYLESHEETS...",
  "ESTABLISHING DATABASE CONNECTION...",
  "BYPASSING SECURITY PROTOCOLS...",
  "SYSTEM OVERRIDE SUCCESSFUL."
];

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState(BOOT_LOGS[0]);
  const [displayText, setDisplayText] = useState("");
  
  const targetText = "err-ebus.sys";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  useEffect(() => {
    let iterations = 0;
    
    // Master boot interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait briefly at 100% for maximum dramatic effect before fading out
          setTimeout(() => onComplete(), 1200); 
          return 100;
        }
        // Randomly stutter the progress bar to make it feel like real heavy processing
        return prev + Math.floor(Math.random() * 8) + 1;
      });

      // The Matrix / Decryption Text Effect
      setDisplayText(
        targetText
          .split("")
          .map((letter, index) => {
            // Once the iteration passes the index, lock in the correct letter
            if (index < iterations) return targetText[index];
            // Otherwise, keep showing random characters
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      // Speed of decryption (lower number = slower reveal)
      if (iterations < targetText.length) {
        iterations += 1 / 2; 
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Sync the boot logs to the progress percentage
  useEffect(() => {
    const logIndex = Math.min(
      Math.floor((progress / 100) * BOOT_LOGS.length),
      BOOT_LOGS.length - 1
    );
    setCurrentLog(BOOT_LOGS[logIndex]);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 text-slate-100 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Ambient Red Core Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-2xl px-8 flex flex-col items-center">
        
        {/* Scrambling Main Text */}
        <div className="mb-10 text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
          {displayText}
        </div>

        {/* High-Tech Progress Bar */}
        <div className="w-full h-[2px] bg-slate-800 rounded relative overflow-hidden mb-6">
          <motion.div
            className="absolute top-0 left-0 h-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>

        {/* System Readouts & Log Console */}
        <div className="w-full flex justify-between items-center text-xs md:text-sm font-mono tracking-widest uppercase">
          <span className="text-slate-500 truncate mr-4">
            <span className="text-cyan-500 font-bold mr-2">{'>_'}</span> 
            {currentLog}
          </span>
          <span className="text-cyan-400 font-bold shrink-0">
            [{progress >= 100 ? "100" : progress.toString().padStart(2, '0')}%]
          </span>
        </div>

      </div>
    </div>
  );
};