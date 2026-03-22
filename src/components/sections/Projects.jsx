import { useState } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../../constants";

export const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden z-10 bg-zinc-950">
      {/* Technical Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="h-[2px] w-8 bg-red-600" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-black">
                Project_Logbook
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
              System <span className="text-zinc-600">Archives</span>
            </h2>
          </div>

          {/* System Nodes List */}
          <div className="space-y-4">
            {PROJECTS.map((project) => {
              const isExpanded = expandedId === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  className={`group border ${isExpanded ? 'border-red-600/50 bg-zinc-900/40' : 'border-zinc-900 bg-zinc-950/50'} transition-all duration-300 overflow-hidden`}
                >
                  {/* Node Header (Always Visible) */}
                  <div 
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    className="p-6 flex items-center justify-between cursor-pointer group-hover:bg-zinc-900/20"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`font-mono text-[10px] ${isExpanded ? 'text-red-500' : 'text-zinc-700'}`}>
                        [{project.id.toString().padStart(3, '0')}]
                      </span>
                      <h3 className={`text-lg md:text-xl font-black uppercase italic tracking-tight transition-colors ${isExpanded ? 'text-red-500' : 'text-zinc-300 group-hover:text-white'}`}>
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Interactive Button */}
                      <motion.div 
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        className={`hidden md:block px-4 py-1.5 border text-[10px] font-black tracking-widest uppercase transition-all
                          ${isExpanded ? 'border-red-600 text-red-600 bg-red-600/10' : 'border-zinc-800 text-zinc-600 group-hover:border-red-600 group-hover:text-red-600'}`}
                      >
                        {isExpanded ? 'TERMINATE' : 'ACCESS_FILE'}
                      </motion.div>
                      
                      {/* Mobile Indicator */}
                      <span className={`md:hidden text-xl ${isExpanded ? 'text-red-500' : 'text-zinc-800'}`}>
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content (Data Reveal) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="p-6 pt-0 border-t border-red-600/20">
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-8">
                            
                            {/* Image Section */}
                            <div className="md:col-span-2 relative aspect-video md:aspect-square overflow-hidden border border-zinc-800">
                              <div className="absolute inset-0 bg-red-600/10 z-10 pointer-events-none mix-blend-overlay" />
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 brightness-75 hover:brightness-100"
                              />
                            </div>

                            {/* Data Section */}
                            <div className="md:col-span-3 flex flex-col justify-between">
                              <div>
                                <div className="mb-4">
                                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono block mb-1">DATA_TYPE:</span>
                                  <span className="text-red-400 font-bold text-sm uppercase">{project.subtitle}</span>
                                </div>
                                
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                                  {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                  {project.tags.map((tag) => (
                                    <span key={tag} className="text-[9px] font-mono px-2 py-1 bg-zinc-900 text-zinc-500 border border-zinc-800">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="flex items-center justify-between pt-6 border-t border-zinc-900">
                                <div className="flex gap-4">
                                  {project.features.map((f, i) => (
                                    <span key={i} className="text-[9px] text-zinc-600 uppercase flex items-center gap-1">
                                      <span className="w-1 h-1 bg-red-600 rounded-full" /> {f}
                                    </span>
                                  ))}
                                </div>
                                <a 
                                  href={project.link} 
                                  className="text-red-500 text-xs font-black flex items-center gap-2 hover:translate-x-1 transition-transform group"
                                >
                                  INITIALIZE_DEPLOYMENT <span className="text-lg">→</span>
                                </a>
                              </div>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

