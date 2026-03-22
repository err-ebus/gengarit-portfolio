import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion } from "framer-motion";
import { PROJECTS } from "../../constants";

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] // Custom HUD-like ease-out
      } 
    }
  };

  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden z-10 bg-zinc-950">
      {/* Automotive inspired lighting effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-red-600" />
              <span className="text-xs uppercase tracking-[0.4em] text-red-500 font-bold">
                Project Logbook
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
              The <span className="text-zinc-500">Workshop</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-xl font-light">
              High-performance full-stack architectures engineered for scale, resilience, and precision.
            </p>
          </div>

          {/* Uniform Grid Layout */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {PROJECTS.map((project, idx) => {
              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="group relative overflow-hidden rounded-xl glass-card flex flex-col min-h-[400px] md:min-h-[450px]"
                >
                  {/* Background Content */}
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 brightness-50"
                      />
                    )}
                    {/* Technical Overlay */}
                    <div className="absolute top-4 right-4 z-20 opacity-20 font-mono text-[10px] text-zinc-500 group-hover:opacity-60 transition-opacity hidden sm:block">        
                      SYS_BUILD_{project.id.toString().padStart(3, '0')}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-20 mt-auto flex flex-col h-full">
                    <div className="p-6 md:p-8 mb-auto">
                       <span className="inline-block px-2 py-1 rounded bg-white/5 text-white text-[10px] font-bold tracking-widest uppercase mb-4 border border-white/10 group-hover:text-red-500 group-hover:border-red-500/40 group-hover:bg-red-600/20 transition-all duration-300">
                        {project.subtitle}
                      </span>
                    </div>

                    <div className="bg-zinc-950/90 backdrop-blur-md p-5 md:p-6 border-t border-white/5">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 tracking-tight group-hover:text-red-500 transition-colors uppercase italic">
                        {project.title}
                      </h3>
                      <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="text-[9px] md:text-[10px] font-mono px-2 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-zinc-800/50 flex items-center justify-between opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-4">
                          {project.features.slice(0, 2).map((f, i) => (
                            <span key={i} className="text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-tighter flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" /> {f}
                            </span>
                          ))}
                        </div>
                        <a href={project.link} className="text-red-500 text-xs md:text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">       
                          INSPECT <span className="text-lg">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
