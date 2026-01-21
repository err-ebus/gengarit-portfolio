import React, { useRef } from "react";

export const SpotlightCard = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group overflow-hidden rounded-2xl
        bg-gradient-to-br from-white/5 to-white/[0.02]
        backdrop-blur-xl border border-white/10
        transition-all duration-300 cursor-pointer
        hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(168,85,247,0.3)]
        ${className}
      `}
    >
      {/* Spotlight effect */}
      {isHovered && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: "150px",
            height: "150px",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            filter: "blur(40px)",
          }}
        />
      )}

      {/* Gradient border animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-400/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:via-purple-400/10 group-hover:to-blue-600/20 transition-all duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
