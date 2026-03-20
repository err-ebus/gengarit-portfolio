import { RevealOnScroll } from "../RevealOnScroll";
import { GlassmorphismCard } from "../GlassmorphismCard";
import { motion } from "framer-motion";

export const About = () => {
  const frontendSkills = [
    "TypeScript", "React", "Vue", "JavaScript", "Tailwind CSS", "HTML/CSS"
  ];

  const backendSkills = [
    "Django", "Python", "SQLite", "PostgreSQL", "Cloudinary", "REST APIs"
  ];

  const experience = [
    {
      role: "Software Engineer Intern",
      company: "Department of Human Settlements and Urban Development (DHSUD)",
      period: "2026",
      description: "Engineered and deployed a comprehensive registry system (HOA CDD) for the DHSUD Negros Island Region. Implemented offline server architectures and managed cloud media storage pipelines."
    }
  ];

  // Framer Motion Variants for staggered grid loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
  };

  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden z-10">
      {/* Background gradient to match the Cyan/Indigo theme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20 space-y-4">
            <div className="inline-block">
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                System Diagnostics
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-100 tracking-tight">
              The Engine Room
            </h2>
          </div>

          {/* Staggered Grid Container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Introduction */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <GlassmorphismCard className="h-full p-8 md:p-12 border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group relative overflow-hidden">
                  <div className="space-y-6 relative z-10">
                    <p className="text-lg text-slate-300 leading-relaxed font-light">
                      I am a Full-Stack Software Engineer focused on building resilient, scalable systems. I don't just build interfaces; I architect the logic and databases that power them.
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      From developing massive educational platforms with complex multi-role state management to engineering secure, offline-capable government registries, my approach bridges the gap between clean UX and heavy-duty backend architecture.
                    </p>
                  </div>
                </GlassmorphismCard>
              </motion.div>

              {/* Quick Stats */}
              <motion.div variants={itemVariants} className="h-full">
                <GlassmorphismCard className="p-8 text-center border border-slate-800 bg-slate-900/60 backdrop-blur-sm flex flex-col justify-center h-full hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 group relative overflow-hidden">
                  {/* Subtle hover sweep effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-0" />
                  <div className="space-y-2 relative z-10">
                    <p className="text-5xl font-bold text-cyan-400 group-hover:scale-105 transition-transform duration-300">Full</p>
                    <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold mt-2 group-hover:text-cyan-200 transition-colors duration-300">Stack Developer</p>
                  </div>
                </GlassmorphismCard>
              </motion.div>
            </div>

            {/* Skills Grid */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <motion.div variants={itemVariants}>
                <GlassmorphismCard className="h-full p-8 md:p-10 border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 group">
                  <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3 font-mono">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping"></span> Client-Side
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {frontendSkills.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-md bg-slate-950/80 text-cyan-300 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassmorphismCard>
              </motion.div>

              {/* Backend Skills */}
              <motion.div variants={itemVariants}>
                <GlassmorphismCard className="h-full p-8 md:p-10 border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-500 group">
                  <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3 font-mono">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 group-hover:animate-ping"></span> Server-Side
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {backendSkills.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-md bg-slate-950/80 text-indigo-300 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassmorphismCard>
              </motion.div>
            </div>

            {/* Education & Experience */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {/* Education */}
              <motion.div variants={itemVariants}>
                <GlassmorphismCard className="h-full p-8 md:p-10 border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 group">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 font-mono uppercase tracking-wider">
                      <span className="text-cyan-500 font-bold">{'>_'}</span> EDU_LOG
                    </h3>
                    <div className="relative pl-4 border-l-2 border-slate-800 group-hover:border-cyan-500/50 transition-colors duration-500">
                      <div className="absolute w-2 h-2 bg-cyan-400 rounded-full -left-[5px] top-2 transition-colors duration-300 group-hover:bg-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                      <h4 className="font-semibold text-cyan-50 text-lg mb-1">Bachelor of Science in Computer Science</h4>
                      <p className="text-sm text-cyan-400 mb-2 font-medium">STI West Negros University</p>
                      <p className="text-xs text-slate-500 font-mono tracking-widest">2022 - 2026</p>
                    </div>
                  </div>
                </GlassmorphismCard>
              </motion.div>

              {/* Experience */}
              <motion.div variants={itemVariants}>
                <GlassmorphismCard className="h-full p-8 md:p-10 border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-500 group">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 font-mono uppercase tracking-wider">
                      <span className="text-red-500 font-bold">{'>_'}</span> SYS_DEPLOYMENTS
                    </h3>
                    {experience.map((exp, idx) => (
                      <div key={idx} className="relative pl-4 border-l-2 border-slate-800 group-hover:border-red-500/30 transition-colors duration-500">
                        {/* Dot turns red on hover to echo the logo */}
                        <div className="absolute w-2 h-2 bg-slate-600 rounded-full -left-[5px] top-2 transition-all duration-300 group-hover:bg-red-500 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                        <h4 className="font-semibold text-slate-100 mb-1">{exp.role}</h4>
                        <p className="text-sm text-red-400 mb-1 font-medium">{exp.company}</p>
                        <p className="text-xs text-slate-500 mb-3 font-mono tracking-widest">{exp.period}</p>
                        <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </GlassmorphismCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};