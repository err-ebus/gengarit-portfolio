import { RevealOnScroll } from "../ui/RevealOnScroll";
import { GlassmorphismCard } from "../ui/GlassmorphismCard";
import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
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
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(220,38,38,0.3)] uppercase italic tracking-[0.2em]"
              >
                Execute Transmission
              </button>
            </form>
          </GlassmorphismCard>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
             {['GITHUB', 'LINKEDIN', 'TWITTER', 'RESUME'].map((link) => (
               <a key={link} href="#" className="text-[10px] font-bold text-zinc-600 hover:text-red-500 transition-colors tracking-[0.3em] uppercase">
                 {link}
               </a>
             ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
