import React from "react";

export const GlassmorphismCard = ({ children, className = "", interactive = true }) => {
  return (
    <div
      className={`
        relative group overflow-hidden rounded-2xl
        bg-white/5 backdrop-blur-xl border border-white/10
        ${interactive ? "hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(59,130,246,0.2)]" : ""}
        ${className}
      `}
    >
      {/* Glassmorphism gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
