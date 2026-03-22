import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

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

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center h-[40vh] w-8">
      {/* Top Technical Label */}
      <div className="mb-4 flex flex-col items-center opacity-40">
        <span className="text-[7px] font-mono text-red-500 tracking-[0.4em] uppercase mb-1">IN_PORT</span>
        <div className="w-4 h-px bg-zinc-800" />
      </div>

      {/* The Data Track Container */}
      <div className="relative flex-1 w-full flex justify-center">
        {/* Animated Dashed Line (Data Flow Illusion) */}
        <div 
          className="w-[1.5px] h-full opacity-40"
          style={{
            backgroundImage: `linear-gradient(to bottom, #dc2626 50%, transparent 50%)`,
            backgroundSize: '100% 10px',
            animation: 'dataFlow 1s linear infinite'
          }}
        />

        {/* The Tracking Indicator Node */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-950 border border-red-600 z-50 flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.8)]"
          style={{ top: yPos, y: "-50%" }}
        >
          {/* Neon Core */}
          <div className="w-1 h-1 bg-red-600 shadow-[0_0_10px_red]" />
          
          {/* HUD Tooltip */}
          <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
             <span className="text-[7px] font-mono text-red-500 bg-zinc-950/90 px-2 py-0.5 border border-red-600/20 whitespace-nowrap tracking-tighter">
                DATA_SEQ: {displayValue.toString().padStart(4, '0')}
             </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Technical Label */}
      <div className="mt-4 flex flex-col items-center opacity-40">
        <div className="w-4 h-px bg-zinc-800 mb-1" />
        <span className="text-[7px] font-mono text-zinc-600 tracking-[0.4em] uppercase">OUT_PORT</span>
      </div>

      {/* Inline Styles for the dataFlow animation */}
      <style>{`
        @keyframes dataFlow {
          from { background-position: 0 0; }
          to { background-position: 0 20px; }
        }
      `}</style>
    </div>
  );
};
