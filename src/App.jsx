import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatbotButton } from './components/features/ChatbotButton';
import { ChatbotModal } from './components/features/ChatbotModal';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SectionHUD } from './components/layout/SectionHUD';
import { FollowCursor } from './components/ui/FollowCursor';
import { ParticleEffect } from './components/features/ParticleEffect';
import { ScrollIndicator } from './components/layout/ScrollIndicator';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { FAQ_RESPONSES, ABOUT_DATA, PROJECTS } from './constants';
import "./index.css";

const DEFAULT_RESPONSE = "QUERY_UNRECOGNIZED. My data banks are focused on: skills, projects, education, and contact protocols. Please rephrase or try another identifier.";

// --- CONFIGURATION: SYSTEM PROTECTION ---
const ENABLE_SYSTEM_IMMERSION_PROTECTION = true;

// --- CONFIGURATION: GEMINI AI ---
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

const SYSTEM_PROMPT = `
You are the "err-ebus automated assistant", a high-performance engineering AI for John Bayer's portfolio.
John Bayer (aka err-ebus) is a Full-Stack Software Engineer from Bacolod City, Philippines.
He specializes in React, Node.js, Python (Django), and resilient architectures.
He is a BSCS Graduate from STI West Negros University.

Your tone should be professional, technical, and slightly "industrial/schematic" (e.g., using terms like "DATA_EXTRACTION", "SYSTEM_QUERY", "PROTOCOLS").
Use the following data to answer questions about John:
ABOUT_DATA: ${JSON.stringify(ABOUT_DATA)}
PROJECTS: ${JSON.stringify(PROJECTS)}

If you don't know the answer, say that the data is not in your current banks and suggest contacting John directly via the contact section.
Keep responses concise and efficient. Use emojis sparingly but appropriately (e.g. ⚡, 🚀, 💻).
`;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("home");
  const [showChatNotification, setShowChatNotification] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Conditional Protections for System Immersion
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };

    if (ENABLE_SYSTEM_IMMERSION_PROTECTION) {
      window.addEventListener('contextmenu', handleContextMenu);
      window.addEventListener('keydown', handleKeyDown);
    }

    // Scroll Detection for HUD
    const handleScroll = () => {
      if (!mainRef.current) return;
      const sections = ["home", "about", "projects", "testimonials", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const scrollContainer = mainRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      if (ENABLE_SYSTEM_IMMERSION_PROTECTION) {
        window.removeEventListener('contextmenu', handleContextMenu);
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  // Chatbot Notification Logic
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowChatNotification(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  const handleSendMessage = async (text) => {
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setLoading(true);
    setShowChatNotification(false);
    
    try {
      if (genAI) {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const chat = model.startChat({
          history: [
            { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
            { role: "model", parts: [{ text: "SYSTEM_INITIALIZED. Data banks loaded. Awaiting query." }] },
            ...messages.map(msg => ({
              role: msg.role === 'user' ? 'user' : 'model',
              parts: [{ text: msg.content }]
            }))
          ],
        });

        const result = await chat.sendMessage(text);
        const response = await result.response;
        const botResponse = response.text();
        setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
      } else {
        // Fallback to keyword matching if Gemini is not configured
        await new Promise(resolve => setTimeout(resolve, 800));
        const lowerText = text.toLowerCase();
        const matchedFaq = FAQ_RESPONSES.find(faq => 
          faq.keywords.some(keyword => lowerText.includes(keyword.toLowerCase()))
        );
        const botResponse = matchedFaq ? matchedFaq.response : DEFAULT_RESPONSE;
        setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
      }
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'bot', content: "SYSTEM_ERROR: Connection to neural network interrupted. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-red-600/30 selection:text-red-500 bg-[#09090b]">
      <ParticleEffect scrollContainer={mainRef} />
      <FollowCursor />
      
      {/* Ambient Mouse-Tracking Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-20"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.08), transparent 80%)`
        }}
      />

      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <div className={`relative z-20 w-full transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"} text-zinc-100 font-sans bg-transparent`} >
        <ScrollIndicator />
        <SectionHUD activeSection={activeSection} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} />
        
        <main ref={mainRef} className="overflow-x-hidden bg-transparent">
          <Home />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </main>

        <div className="fixed bottom-8 right-8 z-50">
          <AnimatePresence>
            {showChatNotification && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                className="absolute bottom-24 right-0 bg-red-600 text-white text-[10px] font-black font-mono py-2 px-4 rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.4)] whitespace-nowrap uppercase tracking-widest pointer-events-none italic"
              >
                <div className="absolute -bottom-1 right-8 w-2 h-2 bg-red-600 rotate-45" />
                Incoming_Transmission...
              </motion.div>
            )}
          </AnimatePresence>
          <ChatbotButton onClick={() => {
            setChatbotOpen(true);
            setShowChatNotification(false);
          }} />
        </div>

        <ChatbotModal
          open={chatbotOpen}
          onClose={() => setChatbotOpen(false)}
          onSend={handleSendMessage}
          messages={messages}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
