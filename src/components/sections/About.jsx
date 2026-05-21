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
                {ABOUT_DATA.title}
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
              {ABOUT_DATA.title.split('_')[0]} <span className="text-zinc-500">{ABOUT_DATA.title.split('_')[1]}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            {/* Left Column: Bio */}
            <div className="lg:col-span-8">
              <GlassmorphismCard className="p-6 md:p-12 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-10">
                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase italic tracking-tight">{ABOUT_DATA.role}</h3>
                     <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                      {ABOUT_DATA.bio}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-10 mt-auto pt-10 border-t border-zinc-800/50">
                    <div>
                      <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4 font-mono">CORE PHILOSOPHY</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {ABOUT_DATA.philosophy}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4 font-mono">CURRENT STATUS</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {ABOUT_DATA.status}
                      </p>
                    </div>
                  </div>
                </div>
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
                    <div key={lang} className="flex items-center gap-2 group/item">
                       <span className="text-red-600 font-bold font-mono text-xs group-hover/item:translate-x-1 transition-transform">{'>>'}</span>
                       <span className="text-zinc-300 font-mono text-[11px] uppercase tracking-wider group-hover/item:text-white transition-colors">
                        {lang}
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
                    <div key={fw} className="flex items-center gap-2 group/item">
                       <span className="text-red-600 font-bold font-mono text-xs group-hover/item:translate-x-1 transition-transform">{'>>'}</span>
                       <span className="text-zinc-300 font-mono text-[11px] uppercase tracking-wider group-hover/item:text-white transition-colors">
                        {fw}
                       </span>
                    </div>
                  ))}
                </div>
              </GlassmorphismCard>
            </div>
          </div>

          {/* Three-column Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* PERFORMANCE GAUGES */}
            <GlassmorphismCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-8 uppercase italic flex items-center gap-2 tracking-tight">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                PERFORMANCE GAUGES
              </h3>
              <div className="space-y-6">
                {ABOUT_DATA.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] font-mono">{skill.name}</span>
                      <span className="text-[10px] font-mono text-red-500">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                      />
                    </div>
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
              </div>
            </GlassmorphismCard>

            {/* DEPLOYMENTS */}
            <GlassmorphismCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-8 uppercase italic tracking-tight">DEPLOYMENTS</h3>
              <div className="space-y-8">
                {ABOUT_DATA.deployments.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l border-zinc-800">
                    <div className="absolute w-1.5 h-1.5 bg-zinc-600 rounded-full -left-[3.5px] top-1.5" />
                    <h4 className="text-white font-bold italic text-sm uppercase tracking-tight">{exp.role}</h4>
                    <p className="text-zinc-500 text-xs mt-1 font-mono uppercase tracking-wider">{exp.company} // {exp.period}</p>
                    <p className="text-zinc-500 text-[11px] leading-relaxed mt-3 font-light">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </GlassmorphismCard>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
