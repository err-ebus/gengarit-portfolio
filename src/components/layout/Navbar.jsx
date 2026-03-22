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

    // Glitch animation for the logo
    const logoGlitch = {
        rest: { x: 0, y: 0, opacity: 1 },
        glitch: {
            x: [0, -1, 1, -0.5, 0.5, 0],
            opacity: [1, 0.9, 1, 0.8, 1, 1],
            transition: { 
                duration: 0.3, 
                repeat: Infinity, 
                repeatDelay: 5, 
                ease: "easeInOut" 
            }
        }
    };

    return (
        <nav className="fixed top-0 w-full z-40 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-900 shadow-lg transition-all duration-300">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo - Automated Glitch */}
                    <a href="#home" className="flex items-center font-mono text-xl font-bold text-zinc-100 gap-3 group hover:opacity-90 transition-opacity uppercase italic">
                        
                        {/* Custom Logo Image */}
                        <div className="relative flex items-center justify-center w-10 h-10">
                            {/* Ambient Red Glow */}
                            <div className="absolute inset-0 bg-red-600/10 blur-md rounded-full group-hover:bg-red-600/30 transition-colors duration-300" />
                            
                            <motion.img 
                                variants={logoGlitch}
                                animate="glitch"
                                src="/pictures/ERR-EBUS_LOGO.png"
                                alt="ERR-EBUS Logo"
                                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]"
                            />
                        </div>

                        {/* Brand Name */}
                        <span className="tracking-tighter hidden sm:inline-block">
                            err<span className="text-red-600">-ebus</span>
                        </span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-zinc-300 hover:text-red-500 transition-colors" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
                        <a href="#home" className="group text-zinc-500 hover:text-red-500 transition-colors duration-300 relative font-black uppercase italic">
                            <span className="block group-hover:-translate-y-0.5 transition-transform duration-300">Home</span>
                        </a>
                        <a href="#about" className="group text-zinc-500 hover:text-red-500 transition-colors duration-300 relative font-black uppercase italic">
                            <span className="block group-hover:-translate-y-0.5 transition-transform duration-300">About</span>
                        </a>
                        <a href="#projects" className="group text-zinc-500 hover:text-red-500 transition-colors duration-300 relative font-black uppercase italic">
                            <span className="block group-hover:-translate-y-0.5 transition-transform duration-300">Systems</span>
                        </a>
                        <a href="#contact" className="group text-zinc-500 hover:text-red-500 transition-colors duration-300 relative font-black uppercase italic">
                            <span className="block group-hover:-translate-y-0.5 transition-transform duration-300">Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};