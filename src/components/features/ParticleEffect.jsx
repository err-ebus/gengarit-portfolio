import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const ParticleEffect = ({ scrollContainer }) => {
  const { scrollYProgress } = useScroll({
    container: scrollContainer
  });

  // ULTRA SMOOTH SPRING
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60, 
    damping: 30,
    restDelta: 0.001
  });

  // Layer Speeds - Calibrated for section-specific vertical spans
  // Layer 2: 0-1 range maps to 0 to -1500px translation
  const midLayerY = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);
  
  // Layer 3: 0-1 range maps to 0 to -3500px translation
  const fastLayerY = useTransform(smoothProgress, [0, 1], ["0%", "-70%"]);

  // HUD Crosshair Component
  const HUDCrosshair = ({ className }) => (
    <div className={`w-12 h-12 relative ${className}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-red-600/30" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-red-600/30" />
        <div className="absolute inset-2 border border-red-600/40 rounded-full animate-pulse" />
    </div>
  );

  return (
    <div className="background-decoration">
      
      {/* --- LAYER 1: THE DATA GRID (Fixed) --- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 grid-pattern" />
      </div>

      {/* --- LAYER 2: LOGIC ARCHITECTURE (Middle Speed) --- */}
      <motion.div 
        className="parallax-layer"
        style={{ y: midLayerY }}
      >
        {/* Rotating Technical "Gears" - HOME ALIGNMENT */}
        <div className="absolute top-[10vh] right-[5%] md:right-[10%] opacity-40 tech-glow scale-[0.5] md:scale-100">
            <motion.svg width="240" height="240" viewBox="0 0 100 100" className="text-red-600/20">
                <motion.circle 
                    cx="50" cy="50" r="45" 
                    fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle 
                    cx="50" cy="50" r="35" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="20 10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
            </motion.svg>
            <div className="absolute inset-0 flex items-center justify-center font-mono text-[8px] text-red-500 tracking-[0.5em] italic">
                CORE_ENGINE_v2
            </div>
        </div>

        {/* Technical Labels - ABOUT ALIGNMENT */}
        <div className="absolute top-[130vh] right-4 md:right-24 flex items-center gap-2 md:gap-4 opacity-50 tech-glow scale-[0.7] md:scale-100 origin-right">
            <div className="text-right">
                <span className="text-[10px] font-black font-mono text-red-500 block tracking-widest">ARCH_LOG_v2.0</span>
                <span className="text-[8px] font-mono text-zinc-600 uppercase">Memory_Mapped_IO</span>
            </div>
            <div className="w-16 md:w-32 h-px bg-gradient-to-l from-red-600 to-transparent" />
        </div>

        {/* Technical Labels - SYSTEMS ALIGNMENT */}
        <div className="absolute top-[280vh] left-4 md:left-24 flex items-center gap-2 md:gap-4 opacity-50 tech-glow scale-[0.7] md:scale-100 origin-left">
            <div className="w-16 md:w-32 h-px bg-gradient-to-r from-red-600 to-transparent" />
            <div>
                <span className="text-[10px] font-black font-mono text-red-500 block tracking-widest">SYS_NODE_404</span>
                <span className="text-[8px] font-mono text-zinc-600 uppercase">Data_Stream_Active</span>
            </div>
        </div>

        {/* CONTACT SECTION ELEMENTS - CONTACT ALIGNMENT (Deep calibrated) */}
        <div className="absolute top-[480vh] right-8 md:right-32 opacity-40 tech-glow scale-[0.6] md:scale-100">
             <motion.svg width="180" height="180" viewBox="0 0 100 100" className="text-red-600/20">
                <motion.path 
                    d="M50 10 L90 50 L50 90 L10 50 Z" 
                    fill="none" stroke="currentColor" strokeWidth="1"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <circle cx="50" cy="50" r="2" fill="currentColor" />
             </motion.svg>
             <div className="absolute top-1/2 left-full ml-4 whitespace-nowrap hidden md:block">
                <span className="text-[9px] font-mono text-zinc-600 block tracking-widest uppercase">Encrypted_Uplink</span>
                <span className="text-[7px] font-mono text-red-900 uppercase italic">P2P_Protocol_Active</span>
             </div>
        </div>
      </motion.div>

      {/* --- LAYER 3: STRUCTURAL CHASSIS (Fast Speed) --- */}
      <motion.div 
        className="parallax-layer z-10"
        style={{ y: fastLayerY }}
      >
        {/* Bold Section Headers - HOME */}
        <div className="absolute top-[5vh] left-[5%] md:left-[10%] tech-glow scale-[0.6] md:scale-100 origin-left">
            <div className="flex flex-col gap-1">
                <div className="w-24 h-1 bg-red-600" />
                <span className="text-2xl font-black font-mono text-white/10 tracking-[0.5em] italic">01_CORE</span>
            </div>
        </div>

        {/* Bold Section Headers - ABOUT */}
        <div className="absolute top-[180vh] right-[5%] md:right-[10%] tech-glow scale-[0.6] md:scale-100 origin-right">
            <div className="flex flex-col items-end gap-1">
                <div className="w-24 h-1 bg-red-600" />
                <span className="text-2xl font-black font-mono text-white/10 tracking-[0.5em] italic text-right">02_ARCH</span>
            </div>
        </div>

        {/* Bold Section Headers - SYSTEMS */}
        <div className="absolute top-[400vh] left-[5%] md:left-[10%] tech-glow scale-[0.6] md:scale-100 origin-left">
            <div className="flex flex-col gap-1">
                <div className="w-24 h-1 bg-red-600" />
                <span className="text-2xl font-black font-mono text-white/10 tracking-[0.5em] italic">03_MODS</span>
            </div>
        </div>

        {/* Bold Section Headers - CONTACT (Pushed deeper to avoid bleeding into systems) */}
        <div className="absolute top-[680vh] right-[5%] md:right-[10%] tech-glow scale-[0.6] md:scale-100 origin-right">
            <div className="flex flex-col items-end gap-1">
                <div className="w-24 h-1 bg-red-600" />
                <span className="text-2xl font-black font-mono text-white/10 tracking-[0.5em] italic text-right">04_LINK</span>
            </div>
        </div>

        {/* Scattered HUD Targeting Reticles */}
        <HUDCrosshair className="absolute top-[60vh] right-[20%] opacity-30 scale-[0.7] md:scale-100" />
        <HUDCrosshair className="absolute top-[260vh] left-[15%] opacity-30 scale-[1] md:scale-150" />
        <HUDCrosshair className="absolute top-[550vh] right-[10%] opacity-30 rotate-45 scale-[0.7] md:scale-100" />
        <HUDCrosshair className="absolute top-[750vh] left-[20%] opacity-20 scale-[0.6] md:scale-100" />

        {/* Hex Data Rain - REDUCED DENSITY FOR MOBILE */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={`absolute text-[9px] font-mono text-red-600/10 whitespace-nowrap overflow-hidden flex flex-col gap-4 ${i % 2 === 0 ? '' : 'hidden md:flex'}`}
            style={{ 
              left: `${10 + i * 18}%`, 
              top: `${i * 120}vh`,
              height: '100vh',
              writingMode: 'vertical-rl'
            }}
          >
            {[...Array(12)].map((_, j) => (
                <span key={j} className="animate-pulse" style={{ animationDelay: `${j * 0.5}s` }}>
                    0x{Math.floor(Math.random()*16777215).toString(16).toUpperCase()}
                </span>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Ambient Pulsing Glow Nodes */}
      <motion.div 
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 left-1/3 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"
      />
      
      <motion.div 
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute top-[650vh] right-1/4 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-red-900/5 blur-[120px] md:blur-[180px] rounded-full pointer-events-none"
      />
      
    </div>
  );
};
