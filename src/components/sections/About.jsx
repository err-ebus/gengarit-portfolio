import { RevealOnScroll } from "../ui/RevealOnScroll";
import { GlassmorphismCard } from "../ui/GlassmorphismCard";
import { motion } from "framer-motion";

export const About = () => {
  const skills = [
    { name: "React.js", level: 95, color: "bg-red-600" },
    { name: "Node.js", level: 85, color: "bg-zinc-400" },
    { name: "TypeScript", level: 90, color: "bg-red-600" },
    { name: "Python", level: 88, color: "bg-zinc-400" },
    { name: "Java", level: 82, color: "bg-red-600" },
    { name: "C#", level: 80, color: "bg-zinc-400" },
  ];

  const experience = [
    {
      role: "Software Engineer Intern",
      company: "DHSUD",
      period: "2026",
      description: "Engineered and deployed a comprehensive registry system (HOA CDD). Implemented offline server architectures and managed cloud media storage pipelines."
    }
  ];

  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden z-10 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-red-600" />
            <span className="text-xs uppercase tracking-[0.4em] text-red-500 font-bold">
              Engineering Profile
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
            Under The <span className="text-zinc-500">Hood</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Bio Bento Box */}
          <div className="lg:col-span-8">
            <GlassmorphismCard className="p-8 md:p-12 h-full">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                   <h3 className="text-2xl font-bold text-white mb-4 uppercase italic">The Full-Stack Architect</h3>
                   <p className="text-zinc-400 text-lg leading-relaxed font-light">
                    I am a Senior Computer Science student and Full-Stack Developer specializing in high-performance architectures. My approach blends the reliability of backend engineering with the precision of modern frontend interfaces.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mt-auto">
                  <div>
                    <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4">Core Philosophy</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      Building systems that don't just work, but excel under pressure. I prioritize clean logic, secure data pipelines, and resilient architectures.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4">Current Status</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      Finalizing System Integration at STI West Negros University. Currently open for high-stakes engineering roles.
                    </p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          </div>

          {/* Quick Stats Bento Box */}
          <div className="lg:col-span-4 grid grid-rows-2 gap-6">
            <GlassmorphismCard className="p-8 flex flex-col justify-center items-center text-center group">
              <span className="text-6xl font-black text-white group-hover:text-red-600 transition-colors italic">4.0</span>
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold mt-2">Precision GPA</span>
            </GlassmorphismCard>
            <GlassmorphismCard className="p-8 flex flex-col justify-center items-center text-center group border-t-4 border-t-red-600">
              <span className="text-4xl font-black text-white italic group-hover:scale-110 transition-transform">VTEC</span>
              <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold mt-2">Efficiency Mode</span>
            </GlassmorphismCard>
          </div>

          {/* Skills / Rev Counter Section */}
          <div className="lg:col-span-5">
            <GlassmorphismCard className="p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-8 uppercase italic flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                Performance Gauges
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{skill.name}</span>
                      <span className="text-xs font-mono text-red-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full ${skill.color} shadow-[0_0_10px_rgba(220,38,38,0.5)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassmorphismCard>
          </div>

          {/* Education & Experience */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
             <GlassmorphismCard className="p-8">
                <h3 className="text-xl font-bold text-white mb-6 uppercase italic">Education_Log</h3>
                <div className="relative pl-4 border-l-2 border-red-600/30">
                  <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7.5px] top-1 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                  <h4 className="text-white font-bold italic">BS Computer Science</h4>
                  <p className="text-red-500 text-xs font-bold mb-2">STI West Negros University</p>
                  <p className="text-zinc-500 text-xs font-mono">2022 - 2026</p>
                </div>
             </GlassmorphismCard>

             <GlassmorphismCard className="p-8">
                <h3 className="text-xl font-bold text-white mb-6 uppercase italic">Deployments</h3>
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-4 border-l-2 border-zinc-800">
                    <div className="absolute w-2 h-2 bg-zinc-600 rounded-full -left-[5px] top-1.5" />
                    <h4 className="text-white font-bold italic text-sm">{exp.role}</h4>
                    <p className="text-zinc-500 text-xs mb-2">{exp.company} • {exp.period}</p>
                    <p className="text-zinc-500 text-[10px] leading-relaxed">{exp.description}</p>
                  </div>
                ))}
             </GlassmorphismCard>
          </div>
        </div>
      </div>
    </section>
  );
};
