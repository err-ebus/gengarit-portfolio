import { useEffect, useState } from "react";
import { useUISounds } from "../../hooks/useUISounds";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const { playHover, playClick } = useUISounds();
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const scrollContainer = document.querySelector('main');
        if (!scrollContainer) return;

        const handleScroll = () => {
            const sections = ["home", "about", "projects", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is in viewport relative to the scroll container
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        scrollContainer.addEventListener("scroll", handleScroll);
        return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }, []);

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
                >
                    <div className="relative flex items-center justify-center">
                        <img 
                            src="/pictures/ERR-EBUS_LOGO.png"
                            alt="ERR-EBUS Logo"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <span className="hidden">ERR</span>
                    </div>
                    <span>ERR-EBUS</span>
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
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>
        </nav>
    );
};
