import React from "react";
import { motion } from "framer-motion";
import { useUISounds } from "../../hooks/useUISounds";

export const ChatbotButton = ({ onClick }) => {
  const { playHover, playClick } = useUISounds();

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
      {/* HUD Tooltip Label */}
      <motion.div 
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex flex-col items-end pointer-events-none"
      >
        <span className="text-[10px] font-black font-mono text-red-600 tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">
          System_Assistant
        </span>
        <div className="w-16 h-px bg-gradient-to-l from-red-600/50 to-transparent mt-1" />
      </motion.div>

      {/* Main AI Node Button */}
      <button
        onMouseEnter={playHover}
        onClick={() => {
          playClick();
          onClick();
        }}
        className="relative group w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95"
        aria-label="Initialize System Assistant"
      >
        {/* Ambient Outer Rings */}
        <div className="absolute inset-0 border border-dashed border-red-600/20 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-2 border border-zinc-800 rounded-full group-hover:border-red-600/30 transition-colors" />
        
        {/* Glow Core */}
        <div className="absolute inset-4 bg-zinc-950 rounded-full border border-red-600/40 shadow-[0_0_20px_rgba(220,38,38,0.2)] group-hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] group-hover:border-red-600 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)] group-hover:opacity-100 opacity-50 transition-opacity" />
        </div>

        {/* High-Tech Icon */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="relative z-10 text-red-600 group-hover:text-red-500 transition-colors drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]"
        >
          {/* Central AI Brain/Node */}
          <path d="M12 8V4M12 20v-4M8 12H4M20 12h-4" />
          <circle cx="12" cy="12" r="3" className="animate-pulse" />
          <path d="M16 16l3 3M16 8l3-3M8 16l-3 3M8 8l-3-3" />
          
          {/* Orbital Path */}
          <motion.circle 
            cx="12" cy="12" r="9" 
            strokeDasharray="4 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="opacity-40"
          />
        </svg>

        {/* Status indicator dot */}
        <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-zinc-950 shadow-[0_0_10px_rgba(220,38,38,0.8)] z-20">
            <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75" />
        </div>
      </button>
    </div>
  );
};
