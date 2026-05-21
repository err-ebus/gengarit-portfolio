import React from 'react';
import { useUISounds } from "../../hooks/useUISounds";

export const Footer = () => {
  const { playHover, playClick } = useUISounds();

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SYSTEMS", href: "#projects" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <footer className="bg-zinc-950 py-12 px-4 border-t border-zinc-900/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side: Copyright & Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="text-red-600 font-black italic tracking-tighter">ERR-EBUS</span>
            <span className="text-zinc-600 font-mono text-[10px] tracking-widest mt-1">ENGINEERING</span>
          </div>
          <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em]">
            © 2026 err-ebus. All systems operational.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={playHover}
              onClick={playClick}
              className="text-zinc-500 hover:text-red-500 text-[10px] font-black font-mono tracking-widest transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Status Indicator */}
        <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </div>
          <span className="text-red-500 text-[9px] font-black font-mono uppercase tracking-[0.3em]">
            System_Online
          </span>
        </div>
      </div>
      
      {/* Decorative Technical Line */}
      <div className="max-w-6xl mx-auto mt-12 h-px bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />
    </footer>
  );
};
