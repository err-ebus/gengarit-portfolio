import React, { useState, useRef } from "react";

const ChatbotModal = ({ open, onClose, onSend, messages, loading }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
      inputRef.current?.focus();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 w-full max-w-sm m-4 sm:m-6 bg-slate-950/95 backdrop-blur-xl rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-slate-800 flex flex-col overflow-hidden font-mono">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-slate-800 bg-slate-900/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
          <span className="font-bold text-cyan-400 tracking-wider text-sm">err-ebus.sys</span>
        </div>
        <button onClick={onClose} className="text-slate-500 hover:text-red-400 text-2xl leading-none font-light transition-colors duration-200">
          &times;
        </button>
      </div>

      {/* Messages */}
      <div className="chatbot-messages flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-slate-950/50" style={{maxHeight: '350px'}}>
        {messages.length === 0 && (
          <div className="text-slate-500 text-xs text-center py-6 tracking-widest uppercase">
            Awaiting input...
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2.5 rounded-lg text-sm max-w-[85%] break-words leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                : 'bg-slate-900 text-cyan-50 border border-slate-800 rounded-tl-sm'
            }`}>
              {msg.content}
            </div>
          </div>
        ))} 
        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-2.5 rounded-lg text-sm bg-slate-900 text-cyan-500 border border-slate-800 rounded-tl-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-center px-4 py-3 border-t border-slate-800 bg-slate-900/50">
        <span className="text-cyan-500 mr-2 font-bold">{'>'}</span>
        <input
          ref={inputRef}
          type="text"
          className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-sm"
          placeholder="Execute query..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-3 px-4 py-2 rounded-lg bg-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider hover:bg-cyan-500 hover:text-slate-950 transition-colors duration-300"
        >
          Run
        </button>
      </div>
    </div>
  );
};

export default ChatbotModal;