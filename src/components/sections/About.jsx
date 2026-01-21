import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { GlassmorphismCard } from "../GlassmorphismCard";

export const About = () => {
  const frontendSkills = [
    "React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"
  ];

  const backendSkills = [
    "Node.js", "Python", "PostgreSQL", "Java", "C#", "PHP", "C++"
  ];

  const experience = [
    {
      role: "Intern Software Developer",
      company: "XYZ Company",
      period: "2026 - Present",
      description: "Developing web applications using React and Node.js"
    }
  ];

  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20 space-y-4">
            <div className="inline-block">
              <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
                About Me
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Crafting Digital Experiences
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Introduction */}
            <GlassmorphismCard className="lg:col-span-2 p-8 md:p-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate software developer with a knack for creating dynamic and responsive web applications. With a strong foundation in JavaScript, React, and Node.js, I enjoy bringing ideas to life in the digital world.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My approach combines technical expertise with creative problem-solving. I believe in writing clean, maintainable code and creating user-centric designs that make a real impact.
                </p>
              </div>
            </GlassmorphismCard>

            {/* Quick Stats */}
            <div className="space-y-6">
              <GlassmorphismCard className="p-8 text-center">
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-blue-400">4+</p>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
              </GlassmorphismCard>

              <GlassmorphismCard className="p-8 text-center">
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-purple-400">7+</p>
                  <p className="text-gray-400">Technologies</p>
                </div>
              </GlassmorphismCard>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <GlassmorphismCard className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:border-blue-500/60 transition text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassmorphismCard>

            {/* Backend Skills */}
            <GlassmorphismCard className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:border-purple-500/60 transition text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassmorphismCard>
          </div>

          {/* Education & Experience */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {/* Education */}
            <GlassmorphismCard className="p-8 md:p-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">🎓 Education</h3>
                <div>
                  <h4 className="font-semibold text-white mb-1">Bachelor of Science in Computer Science</h4>
                  <p className="text-sm text-gray-400 mb-2">STI West Negros University</p>
                  <p className="text-sm text-gray-500">2022 - 2026</p>
                </div>
              </div>
            </GlassmorphismCard>

            {/* Experience */}
            <GlassmorphismCard className="p-8 md:p-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">💼 Experience</h3>
                {experience.map((exp, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-white mb-1">{exp.role}</h4>
                    <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
                    <p className="text-xs text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-sm text-gray-400">{exp.description}</p>
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