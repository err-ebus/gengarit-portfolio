import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [displayValue, setDisplayValue] = useState(0);

  // Snappier spring for responsive tracking
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to pixel position within the 50vh track
  const yPos = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    return smoothProgress.onChange((latest) => {
      setDisplayValue(Math.floor(latest * 1000));
    });
  }, [smoothProgress]);

  // Stable random segments (memoized to prevent re-renders during scroll)
  const segments = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    id: i,
    height: Math.floor(Math.random() * 12) + 4,
    offset: Math.random() > 0.5 ? 3 : -3,
  })), []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center">
      {/* Top Header */}
      <div className="mb-4 opacity-30 flex flex-col items-center">
        <span className="text-[7px] font-mono text-red-500 tracking-[0.4em] uppercase mb-1">DATA_IN</span>
        <div className="w-3 h-px bg-zinc-700" />
      </div>

      {/* The Unified Track Container */}
      <div className="relative h-[40vh] w-6 flex flex-col justify-between items-center py-1">
        {/* Background Waveform */}
        {segments.map((seg) => (
          <div 
            key={seg.id} 
            className="w-px bg-zinc-900 relative"
            style={{ 
              height: `${seg.height}px`,
              transform: `translateX(${seg.offset}px)`
            }}
          >
            {/* The Active Filling Layer - Full height within its own segment */}
            <motion.div 
              className="absolute inset-0 bg-red-600/40"
              style={{ 
                scaleY: smoothProgress,
                originY: 0
              }}
            />
          </div>
        ))}

        {/* The Precisely Positioned Indicator Node */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 w-4 h-6 bg-zinc-950 border border-red-600 z-50 flex items-center justify-center group"
          style={{ top: yPos, y: "-50%" }}
        >
          {/* Pulsing Interior */}
          <div className="w-[2px] h-3 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] animate-pulse" />
          
          {/* Coordinate Data */}
          <div className="absolute right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
             <span className="text-[8px] font-mono text-red-500 bg-zinc-950/90 backdrop-blur-sm px-2 py-1 border border-red-600/30 whitespace-nowrap tracking-tighter">
                LOC: {displayValue.toString().padStart(4, '0')}
             </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-4 opacity-30 flex flex-col items-center">
        <div className="w-3 h-px bg-zinc-700 mb-1" />
        <span className="text-[7px] font-mono text-zinc-600 tracking-[0.4em] uppercase">DATA_OUT</span>
      </div>
    </div>
  );
};
