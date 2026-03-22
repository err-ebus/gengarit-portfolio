import { useState } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../../constants";

export const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden z-10 bg-zinc-950">
      {/* HUD Background Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-red-600" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-black">
                Archive_System_Reveal
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
              Project <span className="text-zinc-600">Archives</span>
            </h2>
          </div>

          {/* Shutter Accordion List */}
          <div className="space-y-4">
            {PROJECTS.map((project) => {
              const isExpanded = expandedId === project.id;

              return (
                <div key={project.id} className="relative">
                  {/* File Node Header */}
                  <motion.div
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    className={`group relative z-20 p-6 border ${isExpanded ? 'border-red-600/50 bg-zinc-900/40' : 'border-zinc-900 bg-zinc-950/50'} cursor-pointer flex items-center justify-between transition-all duration-500 hover:border-red-600/30`}
                  >
                    <div className="flex items-center gap-8">
                      <span className={`font-mono text-[10px] transition-colors duration-500 ${isExpanded ? 'text-red-500' : 'text-zinc-700 group-hover:text-zinc-500'}`}>
                        [{project.id.toString().padStart(3, '0')}]
                      </span>
                      <h3 className={`text-xl md:text-3xl font-black uppercase italic tracking-tighter transition-all duration-500 ${isExpanded ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-2'}`}>
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] font-mono transition-all duration-500 ${isExpanded ? 'text-red-500' : 'text-zinc-800 opacity-0 group-hover:opacity-100'}`}>
                        {isExpanded ? 'CLOSE_DATA' : 'EXTRACT_FILE'}
                      </span>
                      <motion.div 
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className={`w-8 h-8 flex items-center justify-center border transition-colors ${isExpanded ? 'border-red-600 text-red-500' : 'border-zinc-800 text-zinc-700'}`}
                      >
                        ↓
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Hatch Reveal Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="relative overflow-hidden border-x border-red-600/20 bg-zinc-950"
                      >
                        {/* Shutter Doors (Line Pattern) that open and fade */}
                        <motion.div 
                          initial={{ scaleY: 1, opacity: 1 }}
                          animate={{ scaleY: 0, opacity: 0 }}
                          exit={{ scaleY: 1, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 z-30 pointer-events-none flex flex-col"
                        >
                          <div className="flex-1 bg-zinc-900 border-b border-red-600/50" />
                          <div className="flex-1 bg-zinc-900 border-t border-red-600/50" />
                        </motion.div>

                        {/* Content Reveal Area */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="relative p-8 md:p-12"
                        >
                          {/* Dimmed Background Image */}
                          <div className="absolute inset-0 z-0">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover brightness-[0.15] opacity-40 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20" />
                          </div>

                          {/* Data Content */}
                          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            
                            {/* Visual Spec */}
                            <div className="relative aspect-video overflow-hidden border border-zinc-800 group shadow-2xl">
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover brightness-50 transition-transform duration-1000 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay" />
                              <div className="absolute top-4 left-4">
                                <span className="bg-zinc-950/80 border border-red-600/30 text-red-500 text-[8px] font-mono px-2 py-1 uppercase tracking-widest">
                                  VISUAL_BUFFER_ACTIVE
                                </span>
                              </div>
                            </div>

                            {/* Technical Specs */}
                            <div className="space-y-6">
                              <div>
                                <span className="text-[10px] text-red-500 font-black tracking-[0.4em] uppercase block mb-2">Metadata</span>
                                <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-4">
                                  {project.title}
                                </h4>
                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light italic border-l-2 border-red-600/40 pl-6 py-2">
                                  "{project.description}"
                                </p>
                              </div>

                              <div className="space-y-4">
                                <span className="text-[10px] text-zinc-600 font-black uppercase tracking-widest block border-b border-zinc-900 pb-2">Core_Parameters</span>
                                <div className="flex flex-wrap gap-2">
                                  {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 text-[9px] font-mono uppercase">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
