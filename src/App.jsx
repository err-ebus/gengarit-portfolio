import React, { useState, useEffect } from 'react';
import { ChatbotButton } from './components/features/ChatbotButton';
import { ChatbotModal } from './components/features/ChatbotModal';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { FollowCursor } from './components/ui/FollowCursor';
import { ParticleEffect } from './components/features/ParticleEffect';
import { ScrollIndicator } from './components/layout/ScrollIndicator';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { FAQ_RESPONSES } from './constants';
import "./index.css";

const DEFAULT_RESPONSE = "INVALID_QUERY. Try asking about: skills, projects, education, or contact info.";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Disable Right-Click for System Immersion
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('contextmenu', handleContextMenu);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleSendMessage = async (text) => {
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const lowerText = text.toLowerCase();
    const matchedFaq = FAQ_RESPONSES.find(faq => 
      faq.keywords.some(keyword => lowerText.includes(keyword))
    );
    
    const botResponse = matchedFaq ? matchedFaq.response : DEFAULT_RESPONSE;
    
    setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    setLoading(false);
  };

  return (
    <div className="bg-zinc-950 min-h-screen">
      <FollowCursor />
      <ParticleEffect />
      
      {/* Ambient Mouse-Tracking Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-20"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.08), transparent 80%)`
        }}
      />

      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <div className={`relative z-10 w-full transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"} text-zinc-100 font-sans`} >
        <ScrollIndicator />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>

        <ChatbotButton onClick={() => setChatbotOpen(true)} />
        <ChatbotModal
          open={chatbotOpen}
          onClose={() => setChatbotOpen(false)}
          onSend={handleSendMessage}
          messages={messages}
          loading={loading}
        />
        
        <footer className="py-10 text-center text-zinc-600 text-[10px] font-mono border-t border-zinc-900 uppercase tracking-widest">
           © 2026 err-ebus_ENGINEERING // ALL_SYSTEMS_OPERATIONAL
        </footer>
      </div>
    </div>
  );
}

export default App;
