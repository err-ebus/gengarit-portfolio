import React from "react";

export const GlassmorphismCard = ({ children, className = "", interactive = true }) => {
  return (
    <div
      className={`
        relative group overflow-hidden rounded-2xl
        bg-slate-900/40 backdrop-blur-xl border border-slate-800
        ${interactive ? "hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)]" : ""}
        ${className}
      `}
    >
      {/* Subtle tech-inspired gradient effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};