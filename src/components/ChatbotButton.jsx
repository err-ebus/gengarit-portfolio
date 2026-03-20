import React from "react";

const ChatbotButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 z-50 bg-cyan-500 text-slate-950 rounded-xl shadow-lg p-4 hover:scale-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center justify-center group border border-cyan-400"
    aria-label="Initialize Terminal"
  >
    {/* Sleek Terminal Prompt Icon instead of the robot */}
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="transform group-hover:translate-x-0.5 transition-transform"
    >
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19" className="animate-pulse"></line>
    </svg>
  </button>
);

export default ChatbotButton;