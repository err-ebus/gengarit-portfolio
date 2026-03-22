import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [displayValue, setDisplayValue] = useState(0);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  const yPos = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    return smoothProgress.onChange((latest) => {
      setDisplayValue(Math.floor(latest * 1000));
    });
  }, [smoothProgress]);

  const segments = useMemo(() => Array.from({ length: 25 }, (_, i) => ({
    id: i,
    height: Math.floor(Math.random() * 8) + 4,
    offset: Math.random() > 0.5 ? 2 : -2,
    threshold: i / 24, // The progress point where this segment should turn red
  })), []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center">
      {/* Top Technical Tick */}
      <div className="mb-4 flex flex-col items-center opacity-20">
        <span className="text-[6px] font-mono text-zinc-500 tracking-[0.5em] uppercase mb-1">IN_PORT</span>
        <div className="w-2 h-px bg-zinc-500" />
      </div>

      {/* The Bit-Stream Track */}
      <div className="relative h-[30vh] w-4 flex flex-col justify-between items-center">
        {segments.map((seg) => (
          <motion.div 
            key={seg.id} 
            className="w-px relative transition-colors duration-300"
            style={{ 
              height: `${seg.height}px`,
              transform: `translateX(${seg.offset}px)`,
              backgroundColor: displayValue / 1000 >= seg.threshold ? '#dc2626' : '#18181b' // Red if passed, Zinc-900 if not
            }}
          >
            {/* Subtle glow for active segments */}
            {displayValue / 1000 >= seg.threshold && (
              <div className="absolute inset-0 blur-[2px] bg-red-600/30" />
            )}
          </motion.div>
        ))}

        {/* Sleeker Indicator Node */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 w-3 h-4 bg-zinc-950 border border-red-600 z-50 flex items-center justify-center group"
          style={{ top: yPos, y: "-50%" }}
        >
          {/* Static Core (Smaller) */}
          <div className="w-[1.5px] h-2 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
          
          {/* Floating Technical Tooltip */}
          <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-1 group-hover:translate-x-0">
             <span className="text-[7px] font-mono text-red-500 bg-zinc-950/95 px-2 py-0.5 border border-red-600/20 whitespace-nowrap tracking-tighter">
                AXIS_Y: {displayValue.toString().padStart(4, '0')}
             </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Technical Tick */}
      <div className="mt-4 flex flex-col items-center opacity-20">
        <div className="w-2 h-px bg-zinc-500 mb-1" />
        <span className="text-[6px] font-mono text-zinc-500 tracking-[0.5em] uppercase">OUT_PORT</span>
      </div>
    </div>
  );
};
