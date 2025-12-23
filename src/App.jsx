import React, { useState } from 'react';
import ChatbotButton from './components/ChatbotButton';
import ChatbotModal from './components/ChatbotModal';
import './App.css';
import ParticleEffect from './components/ParticleEffect';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import "./index.css";

// FAQ-based chatbot responses
const FAQ_RESPONSES = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    response: "Hey there! 👋 I'm Gengarit's portfolio assistant. How can I help you today? You can ask about skills, projects, education, or how to get in touch!"
  },
  {
    keywords: ['who', 'about', 'gengarit', 'yourself', 'introduce'],
    response: "Gengarit is a passionate Full-Stack Developer from Bacolod City, Negros Occidental, Philippines. Currently a graduating 4th year Computer Science student at STI West Negros University, specializing in creating dynamic and responsive web applications! 🚀"
  },
  {
    keywords: ['skill', 'technology', 'tech', 'stack', 'programming', 'language', 'know'],
    response: "Gengarit has experience with: 💻 C++, C#, Python, Java, PHP, JavaScript, React, and modern web technologies. Always eager to learn new frameworks and tools!"
  },
  {
    keywords: ['project', 'work', 'portfolio', 'built', 'create'],
    response: "Check out the Projects section above! 👆 Gengarit has worked on various web applications showcasing skills in frontend and backend development. Scroll up or click 'Projects' in the navbar!"
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'message', 'talk'],
    response: "Want to get in touch? 📧 Scroll down to the Contact section at the bottom of this page, or click 'Contact' in the navbar. Fill out the form and Gengarit will receive your message via email!"
  },
  {
    keywords: ['education', 'school', 'university', 'study', 'student', 'degree'],
    response: "Gengarit is a graduating 4th year student at STI West Negros University 🎓, pursuing a degree in Computer Science. Almost there!"
  },
  {
    keywords: ['location', 'where', 'live', 'from', 'city', 'country'],
    response: "Gengarit is based in Bacolod City, Negros Occidental, Philippines 🇵🇭 - the City of Smiles!"
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: "You're welcome! 😊 Feel free to ask anything else or check out the portfolio sections above!"
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later'],
    response: "Goodbye! 👋 Thanks for visiting Gengarit's portfolio. Don't forget to check out the projects and feel free to get in touch!"
  }
];

const DEFAULT_RESPONSE = "I'm here to help you learn about Gengarit! 🤔 Try asking about: skills, projects, education, location, or how to get in contact!";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <ParticleEffect />
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{""}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`} >
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