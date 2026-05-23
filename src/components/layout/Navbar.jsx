import { useEffect, useState } from "react";
import { useUISounds } from "../../hooks/useUISounds";

export const Navbar = ({ menuOpen, setMenuOpen, activeSection }) => {
    const { playHover, playClick } = useUISounds();

    const navLinks = [
        { name: "Home", href: "#home", id: "home" },
        { name: "About", href: "#about", id: "about" },
        { name: "Systems", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" }
    ];

    const scrollToTop = (e) => {
        e.preventDefault();
        playClick();
        const scrollContainer = document.querySelector('main');
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <div className="navbar-container">
                <a 
                    href="#home" 
                    onMouseEnter={playHover}
                    onClick={scrollToTop}
                    className="navbar-logo"
                    aria-label="ERR-EBUS Home - Scroll to top"
                >
                    {/* Technical Logo Container */}
                    <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11">
                        <div className="absolute inset-0 bg-red-600/10 blur-lg rounded-full animate-pulse" />
                        <img 
                            src="/pictures/ERR-EBUS_LOGO.png"
                            alt="ERR-EBUS Logo"
                            className="navbar-logo-img relative z-10 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <span className="hidden text-red-600 font-black">E</span>
                    </div>

                    {/* Two-Tone Brand Name */}
                    <span className="tracking-tighter">
                        <span className="text-red-600">ERR</span>
                        <span className="text-zinc-600">-EBUS</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onMouseEnter={playHover}
                            onClick={(e) => {
                                playClick();
                                if (menuOpen) setMenuOpen(false);
                            }}
                            className={activeSection === link.id ? "active" : ""}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="mobile-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>
        </nav>
    );
};
