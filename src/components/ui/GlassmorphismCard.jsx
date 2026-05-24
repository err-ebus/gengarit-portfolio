import React from "react";

export const GlassmorphismCard = ({ children, className = "", interactive = true }) => {
  return (
    <div
      className={`
        relative group overflow-hidden rounded-xl
        bg-zinc-950/60 backdrop-blur-md border border-zinc-800/50
        ${interactive ? "hover:border-red-600/40 hover:bg-zinc-900/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]" : ""}
        ${className}
      `}
    >
      {/* Carbon fiber-inspired technical grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(45deg,#fff_1px,transparent_1px),linear-gradient(-45deg,#fff_1px,transparent_1px)] [background-size:12px_12px] z-0" />
      
      {/* Red accent sweep on hover */}
      <div className="absolute -inset-px bg-gradient-to-tr from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};