import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll"; 

export const Home = () => {
  const terminalText = "Full Stack Engineer";

  // Framer Motion Variants for the Boot Sequence
  const bootContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const fadeUpAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Typewriter Variants - Mechanically types out the title
  const typewriterContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.8 }
    }
  };

  const letterAnim = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline-block" }
  };

  // Hard Glitch effect that repeats randomly
  const glitchAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    glitch: {
      x: [0, -4, 4, -2, 2, 0],
      textShadow: [
        "none",
        "3px 0px 0px rgba(239,68,68,0.8), -3px 0px 0px rgba(6,182,212,0.8)", // Sharp Red/Cyan split
        "none"
      ],
      transition: { duration: 0.15, repeat: Infinity, repeatDelay: 5, ease: "linear" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 z-10">
      {/* Sleek Cyan/Indigo ambient blurs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <RevealOnScroll>
        <motion.div 
          variants={bootContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Main Statement */}
          <div className="space-y-6">
            <motion.div variants={fadeUpAnim} className="inline-block">
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                System Architecture & UI Design
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <motion.span variants={fadeUpAnim} className="block text-slate-100 mb-2">
                Hi, I'm
              </motion.span>
              
              {/* Upgraded err-ebus Glitch Text */}
              <motion.span 
                variants={glitchAnim}
                initial="hidden"
                animate={["visible", "glitch"]}
                className="block text-red-500 pb-2 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]"
              >
                err-ebus
              </motion.span>
            </h1>

            {/* Framer Motion Typewriter Subtitle with Red Terminal Cursor */}
            <div className="h-12 flex items-center justify-center font-mono">
              <motion.h2 
                variants={typewriterContainer}
                className="text-xl md:text-2xl text-slate-300 font-medium tracking-wide flex items-center"
              >
                <span className="text-cyan-500 mr-3">{'>'}</span>
                {terminalText.split("").map((char, index) => (
                  <motion.span key={index} variants={letterAnim}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                
                {/* Sharp Blinking Red Block Cursor */}
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                  className="text-red-500 ml-1.5 text-2xl md:text-3xl"
                >
                  █
                </motion.span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p variants={fadeUpAnim} className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed pt-2">
              I engineer robust web systems from the database to the interface. Specializing in <span className="text-cyan-300 font-medium">React, Vue, and TypeScript</span> for seamless UX, powered by scalable <span className="text-indigo-300 font-medium">Django</span> backends.
            </motion.p>
          </div>

          {/* CTA Buttons - Now with Extract CV */}
          <motion.div variants={fadeUpAnim} className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center items-center pt-8">
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] w-full sm:w-auto overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[sweep_0.5s_ease-in-out]" />
              <span className="relative">View My Systems</span>
              <span className="relative inline-block ml-2 group-hover:translate-x-1 transition-transform font-mono">→</span>
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-mono text-sm uppercase tracking-widest hover:border-red-500/80 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(239,68,68,0.2)] w-full sm:w-auto group"
            >
              Initialize Contact
            </a>

            {/* NEW: Data Extraction (Resume) Button */}
            <a
              href="/Bayer_Resume.pdf"
              download="Bayer_Resume.pdf"
              className="px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-mono text-sm uppercase tracking-widest hover:border-indigo-500/80 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(99,102,241,0.2)] w-full sm:w-auto flex items-center justify-center gap-3 group"
            >
              <svg className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Extract CV.pdf
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            variants={fadeUpAnim} 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="pt-16"
          >
            <svg className="w-6 h-6 mx-auto text-cyan-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};