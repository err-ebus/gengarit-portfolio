import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 top-1/4 bottom-1/4 w-px bg-zinc-900/40 z-40 hidden lg:flex flex-col items-center">
      {/* Top Technical Tick */}
      <div className="w-3 h-px bg-zinc-800 absolute -top-4" />
      <span className="absolute -top-10 text-[8px] font-mono text-zinc-600 tracking-[0.3em] uppercase origin-center rotate-90 whitespace-nowrap">
        ALT_REF
      </span>

      {/* Progress Track */}
      <div className="relative h-full w-full">
        {/* Subtle Background Ticks */}
        {[0, 0.25, 0.5, 0.75, 1].map((pos) => (
          <div 
            key={pos}
            className="absolute right-0 w-1.5 h-px bg-zinc-800"
            style={{ top: `${pos * 100}%` }}
          />
        ))}

        {/* The Filling "Data Thread" */}
        <motion.div 
          className="absolute top-0 right-0 w-[2px] bg-red-600/30 origin-top shadow-[0_0_10px_rgba(220,38,38,0.2)]"
          style={{ scaleY: smoothProgress, height: "100%" }}
        />

        {/* The High-Performance Indicator Node */}
        <motion.div 
          className="absolute right-[-3px] w-2 h-8 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.6)] flex items-center justify-center group"
          style={{ top: `${scrollYProgress.get() * 100}%`, y: "-50%" }}
        >
          {/* Internal Detail */}
          <div className="w-px h-4 bg-zinc-950/50" />
          
          {/* Tooltip-like Coordinate Data */}
          <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
             <span className="text-[8px] font-mono text-red-500 bg-zinc-950 px-2 py-1 border border-red-600/30 whitespace-nowrap tracking-tighter">
                Y_AXIS: {Math.floor(scrollYProgress.get() * 1000)}_UNIT
             </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Technical Tick */}
      <div className="w-3 h-px bg-zinc-800 absolute -bottom-4" />
      <span className="absolute -bottom-10 text-[8px] font-mono text-zinc-600 tracking-[0.3em] uppercase origin-center rotate-90 whitespace-nowrap">
        REV_LIM
      </span>
    </div>
  );
};