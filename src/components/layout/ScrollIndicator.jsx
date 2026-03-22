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
      {/* Top Technical Label - High Visibility */}
      <div className="mb-6 flex flex-col items-center">
        <span className="text-[8px] font-black font-mono text-red-600 tracking-[0.5em] uppercase mb-2 drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]">IN_PORT</span>
        <div className="w-6 h-px bg-zinc-700" />
      </div>

      {/* The Data Track Container */}
      <div className="relative flex-1 w-full flex justify-center overflow-hidden">
        {/* Layer 1: Background Dashed Line (Static/Flowing) */}
        <div 
          className="absolute inset-0 w-[1.5px] left-1/2 -translate-x-1/2 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to bottom, #3f3f46 50%, transparent 50%)`,
            backgroundSize: '100% 10px',
            animation: 'dataFlow 1.5s linear infinite'
          }}
        />

        {/* Layer 2: Active "Passed" Line (Glows Red) */}
        <motion.div 
          className="absolute top-0 w-[1.5px] left-1/2 -translate-x-1/2 shadow-[0_0_8px_rgba(220,38,38,0.5)]"
          style={{
            backgroundImage: `linear-gradient(to bottom, #dc2626 50%, transparent 50%)`,
            backgroundSize: '100% 10px',
            animation: 'dataFlow 1s linear infinite',
            height: yPos, // Height matches the indicator position
            opacity: 1
          }}
        />

        {/* The Tracking Indicator Node */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-950 border border-red-600 z-50 flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.8)]"
          style={{ top: yPos, y: "-50%" }}
        >
          {/* Neon Core */}
          <div className="w-1.5 h-1.5 bg-red-600 shadow-[0_0_10px_red]" />
          
          {/* HUD Tooltip */}
          <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
             <span className="text-[7px] font-mono text-red-500 bg-zinc-950/90 px-2 py-0.5 border border-red-600/20 whitespace-nowrap tracking-tighter">
                DATA_SEQ: {displayValue.toString().padStart(4, '0')}
             </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Technical Label - High Visibility */}
      <div className="mt-6 flex flex-col items-center">
        <div className="w-6 h-px bg-zinc-700 mb-2" />
        <span className="text-[8px] font-black font-mono text-zinc-500 tracking-[0.5em] uppercase drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">OUT_PORT</span>
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
