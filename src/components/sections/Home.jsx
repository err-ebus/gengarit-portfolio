import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { useUISounds } from "../../hooks/useUISounds";

export const Home = () => {
  const { playHover, playClick } = useUISounds();
  const { scrollY } = useScroll();
  const footerOpacity = useTransform(scrollY, [0, 300], [0.4, 0]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-transparent overflow-hidden"
    >
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
                className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase italic leading-none glitch"
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

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="#projects"
                onMouseEnter={playHover}
                onClick={playClick}
                className="bg-red-600 hover:bg-red-700 text-white py-4 px-10 rounded-md font-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] uppercase italic tracking-widest text-sm"
              >
                View Workshop
              </a>

              <a
                href="#contact"
                onMouseEnter={playHover}
                onClick={playClick}
                className="border border-zinc-800 hover:border-red-600/50 text-white py-4 px-10 rounded-md font-bold transition-all duration-300 bg-zinc-950/50 backdrop-blur-sm uppercase tracking-widest text-sm"
              >
                Initiate Contact
              </a>
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
