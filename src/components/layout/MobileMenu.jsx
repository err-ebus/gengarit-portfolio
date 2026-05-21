import { motion, AnimatePresence } from "framer-motion";
import { useUISounds } from "../../hooks/useUISounds";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const { playHover, playClick } = useUISounds();

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Systems", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <AnimatePresence>
            {menuOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    />

                    {/* Menu Panel */}
                    <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 w-[80%] max-w-sm h-full bg-zinc-950 border-r border-zinc-900 z-50 md:hidden flex flex-col p-10"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                                </div>
                                <span className="text-zinc-100 font-black italic tracking-tighter uppercase">err-ebus</span>
                            </div>
                            <button 
                                onClick={() => setMenuOpen(false)}
                                className="text-zinc-500 hover:text-white transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    onMouseEnter={playHover}
                                    onClick={() => {
                                        playClick();
                                        setMenuOpen(false);
                                    }}
                                    className="text-3xl font-black uppercase italic text-zinc-500 hover:text-red-600 transition-colors tracking-tighter"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-auto border-t border-zinc-900 pt-8">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-mono font-black text-zinc-600 tracking-widest uppercase">System_Active</span>
                            </div>
                            <p className="text-[10px] font-mono text-zinc-700 leading-relaxed uppercase">
                                Initializing_Mobile_Access...<br />
                                Protocol: Secure_Link
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
