import { RevealOnScroll } from "../ui/RevealOnScroll";
import { GlassmorphismCard } from "../ui/GlassmorphismCard";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useUISounds } from "../../hooks/useUISounds";
import { SOCIAL_LINKS } from "../../constants";

export const Contact = () => {
  const { playHover, playClick } = useUISounds();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState(() => {
    // Load saved payload from local storage if it exists
    const saved = localStorage.getItem("contact_draft");
    return saved ? JSON.parse(saved) : { name: "", email: "", message: "" };
  });

  // Persist draft to local storage on change
  useEffect(() => {
    localStorage.setItem("contact_draft", JSON.stringify(formData));
  }, [formData]);

  const SERVICE_ID = "service_ga6df7j";
  const TEMPLATE_ID = "template_d97zceq";
  const PUBLIC_KEY = "iCDXyO4yyYF7diIJO";
  const COOLDOWN_PERIOD = 5 * 60 * 1000; // 5 minutes cooldown

  // Initialize EmailJS correctly
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Rate Limiter Check
    const lastSent = localStorage.getItem("last_transmission_time");
    const now = Date.now();

    if (lastSent && now - parseInt(lastSent) < COOLDOWN_PERIOD) {
      const remaining = Math.ceil((COOLDOWN_PERIOD - (now - parseInt(lastSent))) / 60000);
      setStatus({ 
        type: 'error', 
        message: `SYSTEM_COOLDOWN: Please wait ${remaining} minute(s) before next transmission.` 
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        if (result.status === 200 || result.text === "OK") {
          setStatus({ type: 'success', message: 'TRANSMISSION_SUCCESSFUL: Message received.' });
          setFormData({ name: "", email: "", message: "" });
          localStorage.setItem("last_transmission_time", Date.now().toString());
        } else {
          throw new Error(`System Error Code: ${result.status}`);
        }
      })
      .catch((error) => {
        console.error("EmailJS failure:", error);
        const errorMsg = error.text || error.message || "Uplink failure.";
        setStatus({ 
          type: 'error', 
          message: `TRANSMISSION_FAILED: ${errorMsg}` 
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getIcon = (name) => {
    switch (name) {
      case 'GITHUB':
        return <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.55-1.304.902-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />;
      case 'LINKEDIN':
        return <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />;
      case 'INSTAGRAM':
        return <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.819.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.125-1.664 4.671-4.919 4.819-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.82-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.125 1.664-4.671 4.919-4.819 1.265-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />;
      case 'FACEBOOK':
        return <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />;
      case 'RESUME':
        return <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-transparent relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-red-600" />
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs font-mono">Transmission</span>
              <span className="h-[2px] w-8 bg-red-600" />
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
              Initiate <span className="text-zinc-600">Contact</span>
            </h2>
            <p className="text-zinc-400 mt-6 font-light">
              Secure line open for project inquiries, system audits, or collaboration requests.
            </p>
          </div>

          <div className="relative group">
            {/* Form Corner Brackets */}
            <div className="corner-bracket top-left -translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform" />
            <div className="corner-bracket top-right translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform" />
            <div className="corner-bracket bottom-left -translate-x-2 translate-y-2 group-hover:scale-110 transition-transform" />
            <div className="corner-bracket bottom-right translate-x-2 translate-y-2 group-hover:scale-110 transition-transform" />

            <GlassmorphismCard className="p-8 md:p-12 border-t-4 border-t-red-600 relative overflow-hidden">
              {/* Pulsing Border Accent */}
              <div className="absolute inset-0 border border-red-600/10 pointer-events-none animate-pulse" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1 font-mono">Identifier</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    value={formData.name}
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-zinc-700"
                    placeholder="ENTER_NAME"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                   <label htmlFor="email" className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1 font-mono">Return_Address</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    value={formData.email}
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-zinc-700"
                    placeholder="EMAIL@PROTO.SYS"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1 font-mono">Payload</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-zinc-700 resize-none"
                  placeholder="ENCRYPT_MESSAGE_DATA..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {status && (
                <div className={`text-xs font-mono uppercase tracking-widest p-4 rounded bg-zinc-900/80 border ${status.type === 'success' ? 'text-green-500 border-green-500/30' : 'text-red-500 border-red-500/30'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-black py-5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(220,38,38,0.3)] uppercase italic tracking-[0.2em] relative overflow-hidden"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]" />
                  </span>
                ) : "Execute Transmission"}
              </button>
            </form>
          </GlassmorphismCard>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-10">
             {SOCIAL_LINKS.map((link) => (
               <a 
                key={link.name} 
                href={link.url}
                onMouseEnter={playHover}
                onClick={playClick}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
               >
                 <div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600/10 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] relative">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="text-zinc-500 group-hover:text-red-500 transition-colors"
                    >
                      {getIcon(link.name)}
                    </svg>
                 </div>
                 <span className="text-[10px] font-bold text-zinc-600 group-hover:text-red-500 uppercase tracking-[0.3em] transition-colors font-mono">
                    {link.name}
                 </span>
               </a>
             ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
