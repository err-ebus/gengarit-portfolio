import { useEffect } from "react";

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
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="flex items-center font-mono text-xl font-bold text-blue-800 gap-2">
                        <img src="/pictures/GENGAR_PNG.png" alt="Logo" className="w-8 h-8 object-contain" />
                        Gengarit<span className="text-purple-600"> Portfolio</span>
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                    onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                                                            <div className="hidden md:flex items-center space-x-8">
                                                                    <a href="#home"
                                                                        className="nav-slide group text-gray-300 hover:text-blue-400 transition-all duration-200 relative">
                                                                            <span className="block group-hover:-translate-y-1 transition-transform duration-300">Home</span>
                                                                    </a>
                                                                    <a href="#about"
                                                                        className="nav-slide group text-gray-300 hover:text-purple-400 transition-all duration-200 relative">
                                                                            <span className="block group-hover:-translate-y-1 transition-transform duration-300">About</span>
                                                                    </a>
                                                                    <a href="#projects"
                                                                        className="nav-slide group text-gray-300 hover:text-blue-400 transition-all duration-200 relative">
                                                                            <span className="block group-hover:-translate-y-1 transition-transform duration-300">Projects</span>
                                                                    </a>
                                                                    <a href="#contact"
                                                                        className="nav-slide group text-gray-300 hover:text-purple-400 transition-all duration-200 relative">
                                                                            <span className="block group-hover:-translate-y-1 transition-transform duration-300">Contact</span>
                                                                    </a>
                                                            </div>
                </div>
            </div>
        </nav>
    );
};