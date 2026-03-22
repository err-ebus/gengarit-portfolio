import React from "react";

export const ChatbotButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 z-50 bg-zinc-950 text-white rounded-full shadow-2xl p-1 hover:scale-110 transition-all duration-500 flex items-center justify-center group border border-red-600/30 w-14 h-14 md:w-16 md:h-16 overflow-hidden"
    aria-label="Initialize System Assistant"
  >
    {/* Ambient Glow Pulse */}
    <div className="absolute inset-0 bg-red-600/20 blur-xl group-hover:bg-red-600/40 transition-colors animate-pulse" />
    
    {/* Brand Logo Icon */}
    <img 
      src="/pictures/ERR-EBUS_LOGO.png" 
      alt="ERR-EBUS Assistant"
      className="relative z-10 w-full h-full object-contain p-2 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]"
    />

    {/* HUD Decorative Ticks */}
    <div className="absolute inset-0 border-2 border-dashed border-red-600/10 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
  </button>
);
