import { RevealOnScroll } from "../ui/RevealOnScroll";
import { GlassmorphismCard } from "../ui/GlassmorphismCard";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "../../constants";

export const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 overflow-hidden z-10 bg-transparent">
      {/* Structural Background Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-zinc-900" />
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-zinc-900" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-zinc-900" />
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-red-600" />
              <span className="text-xs uppercase tracking-[0.4em] text-red-500 font-bold font-mono">
                IDENTITY_PROTOCOL
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
              {ABOUT_DATA.title.split('_')[0]} <span className="text-zinc-500">{ABOUT_DATA.title.split('_')[1]}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            {/* Left Column: Bio & Core */}
            <div className="lg:col-span-4">
              <GlassmorphismCard className="p-8 md:p-10 h-full flex flex-col justify-between">
                <div className="mb-10">
                   <h3 className="text-xl font-bold text-white mb-6 uppercase italic tracking-tight">{ABOUT_DATA.role}</h3>
                   <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                    {ABOUT_DATA.bio}
                  </p>
                </div>
                
                <div className="space-y-8 pt-10 border-t border-zinc-800/50">
                  <div>
                    <h4 className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-3 font-mono italic">CORE PHILOSOPHY</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {ABOUT_DATA.philosophy}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 font-mono italic">CURRENT STATUS</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {ABOUT_DATA.status}
                    </p>
                  </div>
                </div>
              </GlassmorphismCard>
            </div>

            {/* Center Column: Visual ID (The Photo) */}
            <div className="lg:col-span-4">
               <GlassmorphismCard className="p-0 overflow-hidden group relative flex items-center justify-center h-full min-h-[400px]">
                  {/* Technical HUD Overlay */}
                  <div className="absolute inset-0 z-20 pointer-events-none">
                     <div className="corner-bracket top-left m-4" />
                     <div className="corner-bracket top-right m-4" />
                     <div className="corner-bracket bottom-left m-4" />
                     <div className="corner-bracket bottom-right m-4" />
                     
                     <div className="absolute top-8 left-8 flex flex-col gap-1">
                        <span className="text-[8px] font-black font-mono text-red-500 tracking-[0.3em] uppercase">Visual_ID</span>
                        <div className="flex items-center gap-2">
                           <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                           <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">Biometric_Scan: OK</span>
                        </div>
                     </div>

                     <motion.div 
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 w-full h-[1px] bg-red-600/20 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                     />
                  </div>

                  {/* Profile Image */}
                  <img 
                    src="/pictures/me.webp" 
                    alt="err-ebus profile"
                    className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Color Grade Overlay */}
                  <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
               </GlassmorphismCard>
            </div>

            {/* Right Column: Tech Parameters */}
            <div className="lg:col-span-4 grid grid-rows-2 gap-8">
              {/* Languages Card */}
              <GlassmorphismCard className="p-6 md:p-8 flex flex-col group">
                <div className="flex items-center gap-2 mb-6">
                   <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                   <span className="text-[10px] font-black font-mono text-red-500 tracking-[0.3em] uppercase">
                    LOGIC_LANGUAGES
                   </span>
                </div>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {ABOUT_DATA.languages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-3 group/item">
                       <i className={`${lang.icon} text-lg text-zinc-500 group-hover/item:text-red-500 transition-colors duration-300`} />
                       <span className="text-zinc-300 font-mono text-[11px] uppercase tracking-wider group-hover/item:text-white transition-colors">
                        {lang.name}
                       </span>
                    </div>
                  ))}
                </div>
              </GlassmorphismCard>

              {/* Frameworks Card */}
              <GlassmorphismCard className="p-6 md:p-8 flex flex-col group">
                <div className="flex items-center gap-2 mb-6">
                   <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                   <span className="text-[10px] font-black font-mono text-red-500 tracking-[0.3em] uppercase">
                    ENGINE_FRAMEWORKS
                   </span>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {ABOUT_DATA.frameworks.map((fw) => (
                    <div key={fw.name} className="flex items-center gap-3 group/item">
                       <i className={`${fw.icon} text-lg text-zinc-500 group-hover/item:text-red-500 transition-colors duration-300`} />
                       <span className="text-zinc-300 font-mono text-[11px] uppercase tracking-wider group-hover/item:text-white transition-colors">
                        {fw.name}
                       </span>
                    </div>
                  ))}
                </div>
              </GlassmorphismCard>
            </div>
          </div>

          {/* Two-column Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* ENGINEERING CAPABILITIES */}
            <GlassmorphismCard className="p-8 h-full">
              <div className="flex items-center gap-2 mb-8">
                 <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                 <h3 className="text-lg md:text-xl font-bold text-white uppercase italic tracking-tight">
                   ENGINEERING_CAPABILITIES
                 </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {ABOUT_DATA.capabilities.map((cap) => (
                  <div key={cap.label} className="group/cap transition-all duration-300 flex flex-col gap-1 border-l border-zinc-900 pl-4 hover:border-red-600/40">
                    <div className="flex items-center gap-2">
                       <i className={`${cap.icon} text-red-600 font-bold text-xs group-hover/cap:scale-110 transition-transform`} />
                       <span className="text-[10px] font-black font-mono text-zinc-300 uppercase tracking-widest group-hover/cap:text-white transition-colors">{cap.label}</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest pl-5">{cap.value}</span>
                  </div>
                ))}
              </div>
            </GlassmorphismCard>

            {/* EDUCATION LOG */}
            <GlassmorphismCard className="p-8 border-t-2 border-t-red-600/30">
              <h3 className="text-xl font-bold text-white mb-8 uppercase italic tracking-tight">EDUCATION LOG</h3>
              <div className="relative pl-6 border-l border-red-600/20">
                <div className="absolute w-2 h-2 bg-red-600 rounded-full -left-[4.5px] top-1.5 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                <h4 className="text-white font-bold italic text-lg leading-tight uppercase tracking-tight">{ABOUT_DATA.education.degree}</h4>
                <p className="text-red-500 text-xs font-bold mt-1 font-mono">{ABOUT_DATA.education.school}</p>
                <p className="text-zinc-500 text-xs font-mono mt-4 tracking-widest">{ABOUT_DATA.education.years}</p>
                
                {ABOUT_DATA.education.awards && (
                  <div className="mt-6 space-y-2">
                    {ABOUT_DATA.education.awards.map((award, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                        <span className="text-red-600">★</span>
                        <span className="uppercase tracking-wider">{award}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </GlassmorphismCard>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
