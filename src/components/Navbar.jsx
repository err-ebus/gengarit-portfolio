import { useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        // Disable page scroll when mobile menu is open; restore when closed
        if (menuOpen) {
            document.body.style.overflowY = "hidden";
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
            document.documentElement.style.overflowY = "auto";
        }
        
        // Cleanup on unmount
        return () => {
            document.body.style.overflowY = "auto";
            document.documentElement.style.overflowY = "auto";
        };
    }, [menuOpen]);

    // Glitch animation for the SVG logo
    const svgGlitch = {
        rest: { x: 0, y: 0 },
        glitch: {
            x: [0, -2, 2, -1, 1, 0],
            y: [0, 1, -1, 0, 0, 0],
            transition: { 
                duration: 0.2, 
                repeat: Infinity, 
                repeatDelay: 4, // Glitches every 4 seconds
                ease: "linear" 
            }
        }
    };

    return (
        <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 shadow-lg transition-all duration-300">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo - Automated Glitch */}
                    <a href="#home" className="flex items-center font-mono text-xl font-bold text-slate-100 gap-3 group hover:opacity-90 transition-opacity">
                        
                        {/* Custom Error Node SVG Logo */}
                        <div className="relative flex items-center justify-center w-8 h-8">
                            {/* Ambient Red Glow */}
                            <div className="absolute inset-0 bg-red-500/20 blur-md rounded-full group-hover:bg-red-500/40 transition-colors duration-300" />
                            
                            <motion.svg 
                                variants={svgGlitch}
                                animate="glitch"
                                viewBox="0 0 32 32" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="relative z-10 w-full h-full text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]"
                            >
                                {/* Top Half of Glitch Diamond */}
                                <path 
                                    d="M16 2L30 14H2V14L16 2Z" 
                                    fill="currentColor" 
                                />
                                {/* Bottom Half of Glitch Diamond (Offset) */}
                                <path 
                                    d="M16 30L2 18H30V18L16 30Z" 
                                    fill="currentColor" 
                                />
                                {/* The "Error" Slash */}
                                <path 
                                    d="M6 16H26" 
                                    stroke="#0f172a" 
                                    strokeWidth="3" 
                                />
                            </motion.svg>
                        </div>

                        {/* Brand Name */}
                        <span className="tracking-tight">
                            err-ebus<span className="text-red-500">.sys</span>
                        </span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-slate-300 hover:text-red-400 transition-colors" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
                        <a href="#home" className="group text-slate-400 hover:text-red-400 transition-colors duration-300 relative">
                            <span className="block group-hover:-translate-y-0.5 transition-transform duration-300">Home</span>
                        </a>
                        <a href="#about" className="group text-slate-400 hover:text-red-400 transition-colors duration-300 relative">
                            <span className="block group-hover:-translate-y-0.5 transition-transform duration-300">Architecture</span>
                        </a>
                        <a href="#projects" className="group text-slate-400 hover:text-red-400 transition-colors duration-300 relative">
                            <span className="block group-hover:-translate-y-0.5 transition-transform duration-300">Systems</span>
                        </a>
                        <a href="#contact" className="group text-slate-400 hover:text-red-400 transition-colors duration-300 relative">
                            <span className="block group-hover:-translate-y-0.5 transition-transform duration-300">Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};