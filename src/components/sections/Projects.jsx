import {RevealOnScroll} from "../RevealOnScroll";
import { SpotlightCard } from "../SpotlightCard";

const PROJECTS = [
  {
    id: 1,
    title: "SENTINELS",
    subtitle: "2D Educational RPG Game",
    description: "A cybersecurity-focused educational RPG with admin dashboard and multi-role system.",
    image: "/pictures/SENTINELS_SS.png",
    tags: ["Python", "Django", "React", "Firebase", "PostgreSQL"],
    color: "indigo",
    size: "large",
    features: ["Multi-role system", "Interactive gameplay", "Admin dashboard"]
  },
  {
    id: 2,
    title: "MorphRift",
    subtitle: "2D Puzzle Game",
    description: "A challenging puzzle game built with Unity featuring size-morphing mechanics.",
    image: "/pictures/MORPHRIFT_SS.png",
    tags: ["Unity", "C#", "Game Design"],
    color: "green",
    size: "medium",
    features: ["Puzzle mechanics", "Level progression", "Enemy AI"]
  },
  {
    id: 3,
    title: "Mabels POS",
    subtitle: "Bar & Restaurant System",
    description: "Custom Point of Sale system with inventory and order management.",
    image: "/pictures/MABELS_SS.png",
    tags: ["JavaScript", "Firebase", "Responsive"],
    color: "pink",
    size: "medium",
    features: ["Inventory mgmt", "Order processing", "Real-time updates"]
  },
  {
    id: 4,
    title: "POS Analytics",
    subtitle: "POS + System Analysis",
    description: "Robust POS system with integrated analytics and comprehensive reporting.",
    image: "/pictures/POS_SS.png",
    tags: ["Python", "Django", "PostgreSQL", "Tailwind"],
    color: "blue",
    size: "large",
    features: ["Secure login", "Analytics", "Receipt printing"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20 space-y-4">
            <div className="inline-block">
              <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
                Featured Work
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Curated Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              A selection of recent work showcasing design, engineering, and creative problem-solving.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <SpotlightCard
                key={project.id}
                className="p-8 flex flex-col justify-between overflow-hidden min-h-[400px]"
              >
                {/* Project Image Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-20 space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <span className={`text-xs font-medium text-${project.color}-300`}>
                      {project.color.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{project.subtitle}</p>
                  </div>
                </div>

                {/* Bottom section */}
                <div className="relative z-20 space-y-4">
                  <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition flex items-center gap-2 mt-4 group/btn">
                    View Project
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};