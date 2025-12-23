import React from "react";

const ChatbotButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg p-3 hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all flex items-center justify-center"
    aria-label="Open Chatbot"
  >
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chat bubble */}
      <path d="M12 2C6.48 2 2 5.58 2 10c0 2.24 1.12 4.26 2.92 5.7L4 20l4.35-2.18C9.5 18.12 10.72 18.5 12 18.5c5.52 0 10-3.58 10-8S17.52 2 12 2z" fill="white"/>
      {/* Robot eyes */}
      <circle cx="8.5" cy="10" r="1.5" fill="#6366f1"/>
      <circle cx="15.5" cy="10" r="1.5" fill="#6366f1"/>
      {/* Robot mouth */}
      <path d="M9 13h6" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Antenna */}
      <circle cx="12" cy="5" r="1" fill="#6366f1"/>
    </svg>
  </button>
);

export default ChatbotButton;
