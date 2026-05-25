import { RevealOnScroll } from "../ui/RevealOnScroll";
import { TESTIMONIALS } from "../../constants";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 px-4 overflow-hidden z-10 bg-transparent">
      {/* HUD Background Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-red-600" />
              <span className="text-xs uppercase tracking-[0.4em] text-red-500 font-bold font-mono">
                SYSTEM_VERIFICATION
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
              User <span className="text-zinc-500">Feedback</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <div 
                key={index} 
                className="relative p-8 border border-zinc-900 bg-zinc-950/50 group hover:border-red-600/30 transition-all duration-500"
              >
                {/* Aesthetic Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-red-600/30" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-red-600/30" />
                
                <div className="relative z-10">
                  <span className="text-red-500 text-4xl font-serif opacity-20 absolute -top-4 -left-2">"</span>
                  <p className="text-zinc-400 italic text-lg leading-relaxed mb-8 relative z-10">
                    {t.quote}
                  </p>
                  
                  <div className="flex items-center gap-4 border-t border-zinc-900 pt-6">
                    <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500 font-mono text-xs font-black">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm uppercase tracking-wider">{t.author}</h4>
                      <p className="text-zinc-600 text-[10px] uppercase font-mono tracking-widest">
                        {t.role} // <span className="text-red-900">{t.company}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Background Tech Detail */}
                <div className="absolute top-4 right-4 text-[8px] font-mono text-zinc-800 pointer-events-none uppercase tracking-[0.2em]">
                  Verification_Hash: 0x{Math.random().toString(16).slice(2, 8).toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
