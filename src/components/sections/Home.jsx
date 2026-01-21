import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Minimal gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <RevealOnScroll>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Statement */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Gengarit
              </span>
            </h1>

            {/* Typing effect subtitle */}
            <div className="h-12 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-gray-300">
                {displayText}
                <span className="animate-blink">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              I craft beautiful, functional web experiences. Specializing in React, modern design patterns, and creating seamless user interactions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#projects"
              className="group px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
            >
              View My Work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
