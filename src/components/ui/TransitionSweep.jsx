import { motion, AnimatePresence } from "framer-motion";

export const TransitionSweep = ({ activeSection }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={activeSection}
        initial={{ left: "-100%" }}
        animate={{ left: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 w-[80vw] z-[100] pointer-events-none bg-gradient-to-r from-transparent via-red-600/30 to-transparent -skew-x-12 backdrop-blur-[2px]"
      >
          <div className="absolute inset-y-0 right-0 w-1 bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
      </motion.div>
    </AnimatePresence>
  );
};
