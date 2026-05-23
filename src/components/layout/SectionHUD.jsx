import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SectionHUD = ({ activeSection }) => {
  const sections = ["home", "about", "projects", "contact"];
  const currentIndex = sections.indexOf(activeSection) + 1;
  const totalSections = sections.length;

  return (
    <div className="fixed left-4 md:left-8 bottom-8 z-40 hidden sm:flex flex-col gap-4 items-center">
      {/* Vertical Track - Hidden on smaller heights */}
      <div className="hidden md:block w-px h-24 bg-zinc-900 relative">
        <motion.div 
          initial={false}
          animate={{ height: `${(currentIndex / totalSections) * 100}%` }}
          className="absolute top-0 left-0 w-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
        />
      </div>

      {/* Numerical Indicator */}
      <div className="font-mono flex flex-col items-center bg-zinc-950/80 backdrop-blur-md p-2 rounded-lg border border-zinc-900/50">
        <AnimatePresence mode="wait">
          <motion.span 
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 font-black text-xs tracking-widest"
          >
            0{currentIndex}
          </motion.span>
        </AnimatePresence>
        <span className="text-zinc-700 text-[8px] font-black mt-1 uppercase tracking-[0.3em]">
          / 0{totalSections}
        </span>
      </div>

      {/* Active Section Name - Better positioning */}
      <div className="absolute left-10 md:left-12 bottom-0 origin-bottom-left -rotate-90 whitespace-nowrap">
        <AnimatePresence mode="wait">
          <motion.span 
            key={activeSection}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="text-[8px] font-black font-mono text-zinc-500 uppercase tracking-[0.4em] italic bg-zinc-950/40 px-2 py-1"
          >
            SYS_SEC::{activeSection}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
