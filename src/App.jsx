import React, { useState, useEffect, useRef } from 'react';
import { ChatbotButton } from './components/features/ChatbotButton';
import { ChatbotModal } from './components/features/ChatbotModal';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FollowCursor } from './components/ui/FollowCursor';
import { ParticleEffect } from './components/features/ParticleEffect';
import { ScrollIndicator } from './components/layout/ScrollIndicator';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { FAQ_RESPONSES } from './constants';
import "./index.css";

const DEFAULT_RESPONSE = "QUERY_UNRECOGNIZED. My data banks are focused on: skills, projects, education, and contact protocols. Please rephrase or try another identifier.";

// --- CONFIGURATION: SYSTEM PROTECTION ---
// Set to true to disable right-click, F12, and other dev shortcuts for immersion.
// Set to false for development and testing.
const ENABLE_SYSTEM_IMMERSION_PROTECTION = true;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mainRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Disable Right-Click and DevTools Shortcuts for System Immersion
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

    window.addEventListener('mousemove', handleMouseMove);

    // Conditional Protections for System Immersion
    if (ENABLE_SYSTEM_IMMERSION_PROTECTION) {
      window.addEventListener('contextmenu', handleContextMenu);
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (ENABLE_SYSTEM_IMMERSION_PROTECTION) {
        window.removeEventListener('contextmenu', handleContextMenu);
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  const handleSendMessage = async (text) => {
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setLoading(true);
    
    // Simulate system processing time
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const lowerText = text.toLowerCase();
    const matchedFaq = FAQ_RESPONSES.find(faq => 
      faq.keywords.some(keyword => lowerText.includes(keyword.toLowerCase()))
    );
    
    const botResponse = matchedFaq ? matchedFaq.response : DEFAULT_RESPONSE;
    
    setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    setLoading(false);
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
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <main ref={mainRef} className="overflow-x-hidden bg-transparent">
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>

        <ChatbotButton onClick={() => setChatbotOpen(true)} />
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
