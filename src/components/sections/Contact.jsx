import { RevealOnScroll } from "../ui/RevealOnScroll";
import { GlassmorphismCard } from "../ui/GlassmorphismCard";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useUISounds } from "../../hooks/useUISounds";

export const Contact = () => {
  const { playHover, playClick } = useUISounds();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_vshgnd5";
  const TEMPLATE_ID = "template_j0q98w2";
  const PUBLIC_KEY = "k1R45K5vX0v9h3x7w";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error.text);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  const SOCIAL_LINKS = [
    { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.55-1.304.902-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', link: '#' },
    { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', link: '#' },
    { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.53 1.796-1.494 2.165-2.647-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', link: '#' },
    { name: 'Resume', icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z', isPath: true, link: '/pictures/Bayer_Resume.pdf' }
  ];

  return (
    <section id="contact" className="py-32 px-4 bg-zinc-950 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-red-600" />
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Transmission</span>
              <span className="h-[2px] w-8 bg-red-600" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
              Initiate <span className="text-zinc-600">Contact</span>
            </h2>
            <p className="text-zinc-400 mt-6 font-light">
              Secure line open for project inquiries, system audits, or collaboration requests.
            </p>
          </div>

          <GlassmorphismCard className="p-8 md:p-12 border-t-4 border-t-red-600">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Identifier</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-red-600/50 transition-colors placeholder:text-zinc-700"
                    placeholder="YOUR_NAME"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                   <label htmlFor="email" className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Return_Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-red-600/50 transition-colors placeholder:text-zinc-700"
                    placeholder="EMAIL@DOMAIN.COM"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Payload</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-red-600/50 transition-colors placeholder:text-zinc-700 resize-none"
                  placeholder="ENTER_MESSAGE_DATA..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(220,38,38,0.3)] uppercase italic tracking-[0.2em]"
              >
                Execute Transmission
              </button>
            </form>
          </GlassmorphismCard>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
             {SOCIAL_LINKS.map((link) => (
               <a 
                key={link.name} 
                href={link.link}
                onMouseEnter={playHover}
                onClick={playClick}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
               >
                 <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600/10 transition-all duration-300 shadow-lg">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-zinc-500 group-hover:text-red-500 transition-colors"
                    >
                      {link.isPath ? (
                        <path d={link.icon} fill="currentColor" stroke="none" />
                      ) : (
                        <path d={link.icon} fill="currentColor" stroke="none" />
                      )}
                    </svg>
                 </div>
                 <span className="text-[9px] font-black text-zinc-600 group-hover:text-red-500 uppercase tracking-widest transition-colors">
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
