import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { useUISounds } from "../../hooks/useUISounds";
import { useState, useEffect } from "react";

export const Home = () => {
  const { playHover, playClick } = useUISounds();
  const [container, setContainer] = useState(null);
  
  useEffect(() => {
    setContainer(document.querySelector('main'));
  }, []);

  const { scrollY } = useScroll({ container: container ? { current: container } : undefined });
  const footerOpacity = useTransform(scrollY, [0, 300], [0.4, 0]);

  return (
    <section
      id="home"
      className="h-screen flex items-start justify-center relative bg-transparent overflow-hidden pt-[20vh] md:pt-[25vh]"
    >
      {/* Radar Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="radar-ring w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0s' }} />
        <div className="radar-ring w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }} />
        <div className="radar-ring w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} />
      </div>

      {/* Decorative Technical Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-[1px] w-8 md:w-16 bg-red-600" />
              <span className="text-red-500 font-mono text-xs md:text-sm tracking-[0.5em] uppercase font-bold">
                High Performance Engineering
              </span>
              <span className="h-[1px] w-8 md:w-16 bg-red-600" />
            </div>

            <div className="glitch-wrapper mb-6">
              <h1 
                className="text-5xl md:text-9xl font-black text-white tracking-tighter uppercase italic leading-none glitch"
                data-text="ERR-EBUS"
              >
                ERR<span className="text-zinc-600">-EBUS</span>
              </h1>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-zinc-400 text-lg md:text-xl mb-10 font-light leading-relaxed">
                Full-Stack Software Engineer building <span className="text-white font-medium">resilient digital engines</span> for the next generation of web architectures.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
              <button
                onMouseEnter={playHover}
                onClick={(e) => {
                  playClick();
                  const target = document.getElementById('projects');
                  if (target) {
                    const mainContainer = document.querySelector('main');
                    if (mainContainer) {
                      mainContainer.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }
                }}
                className="group relative px-12 py-5 bg-transparent overflow-hidden"
              >
                {/* Button Frame */}
                <div className="absolute inset-0 border border-red-600/30 group-hover:border-red-600 transition-colors duration-500" />
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors duration-500" />
                
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-600 group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-600 group-hover:scale-110 transition-transform" />

                <div className="relative z-10 flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                   <span className="text-red-500 font-black font-mono tracking-[0.4em] uppercase group-hover:text-white transition-colors text-sm md:text-base italic">
                    EXTRACT_DATA
                  </span>
                </div>
                
                {/* HUD Decoration */}
                <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-0 h-[1px] bg-red-600 group-hover:w-full transition-all duration-700" />
              </button>

              <button
                onMouseEnter={playHover}
                onClick={(e) => {
                  playClick();
                  const target = document.getElementById('contact');
                  if (target) {
                    const mainContainer = document.querySelector('main');
                    if (mainContainer) {
                      mainContainer.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }
                }}
                className="group px-12 py-5 bg-zinc-950/20 backdrop-blur-md border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-zinc-100 transition-all duration-300 font-mono text-xs uppercase tracking-[0.2em] flex items-center justify-center italic"
              >
                Initiate_Contact
              </button>
            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
      
      {/* Bottom status bar decor - Fades on scroll */}
      <motion.div 
        style={{ opacity: footerOpacity }}
        className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end pointer-events-none font-mono text-[10px] text-zinc-500"
      >
        <div className="flex flex-col">
          <span>LATENCY: 24MS</span>
          <span>STATUS: OPTIMIZED</span>
        </div>
        <div className="text-right">
          <span>REV_LIMIT: 9000_RPM</span>
          <span>BUILD: V2.6.0_MARCH</span>
        </div>
      </motion.div>
    </section>
  );
};
