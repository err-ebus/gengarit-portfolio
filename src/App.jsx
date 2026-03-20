import React, { useState, useEffect } from 'react';
import ChatbotButton from './components/ChatbotButton';
import ChatbotModal from './components/ChatbotModal';
import './App.css';
import ParticleEffect from './components/ParticleEffect';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { FollowCursor } from './components/FollowCursor';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { ScrollIndicator } from './components/ScrollIndicator';
import "./index.css";

// FAQ-based chatbot responses - Upgraded to match the err-ebus system aesthetic
const FAQ_RESPONSES = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    response: "System initialized. ⚡ I'm the err-ebus automated assistant. How can I help you navigate the system? You can query about skills, projects, education, or contact info!"
  },
  {
    keywords: ['who', 'about', 'err-ebus', 'wenard', 'yourself', 'introduce'],
    response: "err-ebus (Wenard) is a Full-Stack Software Engineer from Bacolod City, Philippines. Currently a graduating Computer Science student at STI West Negros University, specializing in resilient backend architectures and seamless UX! 🚀"
  },  
  {
    keywords: ['skill', 'technology', 'tech', 'stack', 'programming', 'language', 'know'],
    response: "err-ebus engineers systems using: 💻 React, Vue, and TypeScript for client-side interfaces, powered by Django, PostgreSQL, and SQLite on the server-side. Always expanding the stack!"
  },
  {
    keywords: ['project', 'work', 'portfolio', 'built', 'create', 'system'],
    response: "Check out the Systems section above! 👆 err-ebus has engineered robust platforms ranging from regional government registries (DHSUD) to complex educational RPG systems."
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'message', 'talk'],
    response: "Want to initiate contact? 📧 Scroll down to the Contact section, execute the form, and your transmission will be sent directly to err-ebus!"
  },
  {
    keywords: ['education', 'school', 'university', 'study', 'student', 'degree'],
    response: "err-ebus is a graduating Computer Science student at STI West Negros University 🎓. System training almost complete!"
  },
  {
    keywords: ['location', 'where', 'live', 'from', 'city', 'country'],
    response: "err-ebus operates out of Bacolod City, Negros Occidental, Philippines 🇵🇭 - the City of Smiles!"
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: "Acknowledge. 😊 Feel free to input any other queries or explore the engineered systems above!"
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later'],
    response: "Connection terminated. 👋 Thanks for accessing the err-ebus.sys terminal. Feel free to initialize contact later!"
  }
];

const DEFAULT_RESPONSE = "Invalid query parameter. 🤔 Try asking about: skills, projects, education, location, or how to get in contact with err-ebus!";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // State for tracking mouse position for the ambient background glow
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Effect to update mouse position globally
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simple FAQ-based chatbot
  const handleSendMessage = async (text) => {
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setLoading(true);
    
    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));
    
    const lowerText = text.toLowerCase();
    
    // Find matching FAQ response
    const matchedFaq = FAQ_RESPONSES.find(faq => 
      faq.keywords.some(keyword => lowerText.includes(keyword))
    );
    
    const botResponse = matchedFaq ? matchedFaq.response : DEFAULT_RESPONSE;
    
    setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    setLoading(false);
  };

  return (
    <>
      <FollowCursor />
      <ParticleEffect />
      
      {/* The Ambient Mouse-Tracking Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 255, 0.05), transparent 80%)`
        }}
      />

      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      {/* Ensure main content sits above the new glow by adding relative z-10 */}
      <div className={`relative z-10 w-full transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`} >
        
        {/* The Scroll Indicator is now safely inside the render tree! */}
        <ScrollIndicator />

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <ChatbotButton onClick={() => setChatbotOpen(true)} />
        <ChatbotModal
          open={chatbotOpen}
          onClose={() => setChatbotOpen(false)}
          onSend={handleSendMessage}
          messages={messages}
          loading={loading}
        />
      </div>
    </>
  );
}

export default App;