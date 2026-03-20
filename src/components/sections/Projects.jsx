import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "DHSUD HOA CDD",
    subtitle: "Government Enterprise System",
    description: "Engineered and deployed a comprehensive registry system for the DHSUD Negros Island Region. Built to handle robust data processing with offline server environment capabilities.",
    image: "/pictures/HOA_CDD_SS.png", 
    tags: ["React", "Vue", "PostgreSQL", "Django", "Tailwind", "Vercel"],
    size: "large",
    features: ["Offline Server Architecture", "Cloud Media Storage", "Government Deployment"]
  },
  {
    id: 2,
    title: "SENTINELS",
    subtitle: "Educational RPG & Admin System",
    description: "A massive year-and-a-half development cycle. A cybersecurity-focused educational platform featuring interactive gameplay, a complex multi-role system, and a secure backend dashboard.",
    image: "/pictures/SENTINELS_SS.png",
    tags: ["React", "Django", "PostgreSQL", "Python"],
    size: "large",
    features: ["Complex State Management", "Multi-role Auth", "Admin Dashboard"]
  },
  {
    id: 3,
    title: "AFD Archiving System",
    subtitle: "Document Management System",
    description: "An internal archiving system designed for the Administrative and Finance Division of DHSUD Negros Occidental to handle large-scale document categorization and secure retrieval.",
    image: "/pictures/POS_SS.png", 
    tags: ["TypeScript", "Tailwind", "Django", "SQLite"],
    size: "medium",
    features: ["File Structuring", "Search Optimization", "Secure Access"]
  },
  {
    id: 4,
    title: "Mabels POS",
    subtitle: "Bar & Restaurant System",
    description: "Custom Point of Sale system with integrated inventory tracking, order management, and real-time frontend updates.",
    image: "/pictures/MABELS_SS.png",
    tags: ["JavaScript", "Firebase", "Tailwind"],
    size: "medium",
    features: ["Inventory Mgmt", "Order Processing", "Real-time Sync"]
  }
];

export const Projects = () => {
  // Staggered grid load animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden z-10">
      {/* Background elements to match the Cyan/Indigo theme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-20 space-y-4">
            <div className="inline-block">
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                System Architecture
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-100">
              Engineered Works
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              A selection of full-stack systems, highlighting cloud deployments, strict offline architectures, and complex data management.
            </p>
          </div>

          {/* Upgraded Bento Grid Layout with grid-flow-dense */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(420px,_auto)] grid-flow-dense"
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col p-8 ${
                  project.size === "large" ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Background Image Logic - Dark overlay that reveals on hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-950/80 group-hover:bg-slate-950/40 transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out opacity-30 group-hover:opacity-100"
                  />
                  {/* Heavy bottom gradient so text is always readable */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950/90 z-10" />
                </div>

                {/* Top Content: Title is now anchored to the top of the card */}
                <div className="relative z-20 mb-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-sm text-cyan-400 font-mono tracking-wide mb-2">
                    {project.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
                    {project.title}
                  </h3>
                </div>

                {/* Bottom Content: Description and Tags pushed to bottom */}
                <div className="relative z-20 mt-auto transform transition-transform duration-500 group-hover:translate-y-0">
                  
                  {/* Description is now ALWAYS VISIBLE */}
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 transition-colors duration-300 group-hover:text-slate-300">
                    {project.description}
                  </p>

                  {/* Tech Stack Pop Animation */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1.5 rounded-md bg-slate-950/80 text-slate-300 border border-slate-800 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* System Features (Only visible on hover to save space) */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50"></span>
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* View Architecture CTA */}
                  <button className="text-sm font-bold text-slate-300 group-hover:text-cyan-400 transition-colors flex items-center gap-2 mt-6">
                    View Architecture
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};