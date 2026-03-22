import React from "react";

export const ChatbotButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 z-50 bg-zinc-950 text-red-600 rounded-full shadow-2xl p-1 hover:scale-110 transition-all duration-500 flex items-center justify-center group border border-red-600/30 w-14 h-14 md:w-16 md:h-16 overflow-hidden"
    aria-label="Initialize System Assistant"
  >
    {/* Ambient Glow Pulse */}
    <div className="absolute inset-0 bg-red-600/10 blur-xl group-hover:bg-red-600/30 transition-colors animate-pulse" />
    
    {/* High-Contrast Terminal Icon */}
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="relative z-10 transform group-hover:translate-x-0.5 transition-transform"
    >
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19" className="animate-pulse"></line>
    </svg>

    {/* HUD Decorative Ticks */}
    <div className="absolute inset-0 border-2 border-dashed border-red-600/10 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
  </button>
);
