import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [displayValue, setDisplayValue] = useState(0);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001
  });

  const yPos = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    return smoothProgress.onChange((latest) => {
      setDisplayValue(Math.floor(latest * 1000));
    });
  }, [smoothProgress]);

  // Generate vertical "squarewave" segments
  const segments = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    height: Math.random() * 15 + 2, // Random heights for the pulse
    offset: Math.random() > 0.5 ? 2 : -2, // Slight horizontal jitter
  }));

  return (
    <div className="fixed right-6 top-1/4 bottom-1/4 z-40 hidden lg:flex flex-col items-center">
      {/* Top Header */}
      <div className="flex flex-col items-center mb-6 opacity-40">
        <span className="text-[8px] font-mono text-red-500 tracking-[0.3em] uppercase mb-1">BIT_STREAM</span>
        <div className="w-4 h-px bg-zinc-800" />
      </div>

      {/* The Squarewave Track */}
      <div className="relative flex-1 w-8 flex flex-col justify-between items-center py-2">
        {segments.map((seg) => (
          <div 
            key={seg.id} 
            className="w-px bg-zinc-900 relative"
            style={{ 
              height: `${seg.height}px`,
              transform: `translateX(${seg.offset}px)`
            }}
          >
            {/* The Active Filling Layer */}
            <motion.div 
              className="absolute inset-0 bg-red-600/40 shadow-[0_0_8px_rgba(220,38,38,0.2)]"
              style={{ 
                scaleY: smoothProgress, 
                originY: 0 
              }}
            />
          </div>
        ))}

        {/* The Tracking Indicator Node */}
        <motion.div 
          className="absolute right-[-10px] w-3 h-6 bg-zinc-950 border border-red-600 flex items-center justify-center group z-50 cursor-crosshair"
          style={{ top: yPos, y: "-50%" }}
        >
          {/* Pulsing Core */}
          <div className="w-1 h-3 bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
          
          {/* Data Tooltip */}
          <div className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
             <span className="text-[8px] font-mono text-red-500 bg-zinc-950 px-2 py-1 border border-red-600/30 whitespace-nowrap tracking-tighter shadow-2xl">
                DATA_SEG: {displayValue.toString().padStart(4, '0')}
             </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col items-center mt-6 opacity-40">
        <div className="w-4 h-px bg-zinc-800 mb-1" />
        <span className="text-[8px] font-mono text-zinc-600 tracking-[0.3em] uppercase">EOF_SIGNAL</span>
      </div>
    </div>
  );
};
