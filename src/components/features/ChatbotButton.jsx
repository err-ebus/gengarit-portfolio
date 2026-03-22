import React from "react";

export const ChatbotButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 z-50 bg-zinc-950 text-red-600 rounded-full shadow-2xl p-1 hover:scale-110 transition-all duration-500 flex items-center justify-center group border border-red-600/30 w-14 h-14 md:w-16 md:h-16 overflow-hidden"
    aria-label="Initialize System Assistant"
  >
    {/* Ambient Glow Pulse */}
    <div className="absolute inset-0 bg-red-600/10 blur-xl group-hover:bg-red-600/30 transition-colors animate-pulse" />
    
    {/* High-Tech Cyber-Node Icon */}
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="relative z-10 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]"
    >
      {/* Central Node */}
      <circle cx="12" cy="12" r="3" fill="currentColor" className="animate-pulse" />
      {/* Outer Technical Hex/Circuit Structure */}
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="9" strokeOpacity="0.3" />
    </svg>

    {/* HUD Decorative Ticks */}
    <div className="absolute inset-0 border-2 border-dashed border-red-600/10 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
  </button>
);
