import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SectionHUD = ({ activeSection }) => {
  const sections = ["home", "about", "projects", "testimonials", "contact"];
  const currentIndex = sections.indexOf(activeSection) + 1;
  const totalSections = sections.length;

  return (
    <div className="fixed left-6 bottom-8 z-40 hidden sm:flex items-end gap-5">
      {/* Numerical Indicator Card */}
      <div className="font-mono flex flex-col items-center bg-zinc-950/80 backdrop-blur-md p-3 rounded-lg border border-zinc-900/50 shadow-2xl">
        <div className="flex items-baseline gap-1.5">
          <AnimatePresence mode="wait">
            <motion.span 
              key={currentIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-red-500 font-black text-sm tracking-tighter"
            >
              0{currentIndex}
            </motion.span>
          </AnimatePresence>
          <span className="text-zinc-700 text-[9px] font-black uppercase tracking-widest">/ 0{totalSections}</span>
        </div>
        
        {/* Progress Bar (Compact & Horizontal) */}
        <div className="w-12 h-[2px] bg-zinc-900 mt-2 relative overflow-hidden rounded-full">
           <motion.div 
             animate={{ width: `${(currentIndex / totalSections) * 100}%` }}
             className="absolute h-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.5)]"
           />
        </div>
      </div>

      {/* Sector Name - Horizontal & Cleaner */}
      <div className="mb-1 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSection}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="flex flex-col"
          >
            <span className="text-[7px] font-black font-mono text-zinc-600 tracking-[0.4em] uppercase leading-none mb-1.5">Sector_Active</span>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-px bg-red-600/50" />
                <span className="text-[10px] font-black font-mono text-zinc-400 uppercase tracking-[0.2em] italic">
                    SYS::{activeSection}
                </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
