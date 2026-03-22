import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  // useSpring makes the dot movement buttery smooth instead of jagged
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Maps the scroll progress (0 to 1) to a CSS percentage (0% to 100%)
  const yPos = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed right-8 top-1/4 bottom-1/4 w-[2px] bg-zinc-900/50 z-40 hidden md:block rounded-full">
      
      {/* Optional: A subtle red line that fills the track as you scroll */}
      <motion.div 
        className="absolute top-0 left-0 w-full bg-red-500/20 origin-top rounded-full"
        style={{ scaleY: smoothProgress, height: "100%" }}
      />
      
      {/* The glowing red node */}
      <motion.div 
        className="absolute -left-1.5 w-3.5 h-3.5 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.9)]"
        style={{ top: yPos, marginTop: "-6px" }}
      />
    </div>
  );
};