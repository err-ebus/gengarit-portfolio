import React, { useState, useRef } from "react";

export const ChatbotModal = ({ open, onClose, onSend, messages, loading }) => {
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
    <div className="fixed bottom-0 right-0 z-50 w-full max-w-sm m-4 sm:m-6 bg-zinc-950/95 backdrop-blur-xl rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-zinc-800 flex flex-col overflow-hidden font-mono">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
          <span className="font-bold text-red-500 tracking-wider text-sm">WENARD_BAYER.sys</span>
        </div>
        <button onClick={onClose} className="text-zinc-500 hover:text-red-500 text-2xl leading-none font-light transition-colors duration-200">
          &times;
        </button>
      </div>

      {/* Messages */}
      <div className="chatbot-messages flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-zinc-950/50" style={{maxHeight: '350px'}}>
        {messages.length === 0 && (
          <div className="text-zinc-600 text-[10px] text-center py-6 tracking-[0.3em] uppercase">
            Awaiting_Command...
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2.5 rounded-lg text-[13px] max-w-[85%] break-words leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-red-600 text-white font-medium rounded-tr-sm shadow-[0_0_15px_rgba(220,38,38,0.2)]' 
                : 'bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-tl-sm'
            }`}>
              {msg.content}
            </div>
          </div>
        ))} 
        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-2.5 rounded-lg text-sm bg-zinc-900 text-red-500 border border-zinc-800 rounded-tl-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-center px-4 py-3 border-t border-zinc-800 bg-zinc-900/50">
        <span className="text-red-600 mr-2 font-bold">{'>'}</span>
        <input
          ref={inputRef}
          type="text"
          className="flex-1 bg-transparent text-zinc-100 placeholder-zinc-700 focus:outline-none text-sm uppercase italic"
          placeholder="Execute_Query..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-3 px-4 py-2 rounded-lg bg-zinc-800 text-red-500 text-[10px] font-black uppercase tracking-wider hover:bg-red-600 hover:text-white transition-colors duration-300"
        >
          EXEC
        </button>
      </div>
    </div>
  );
};
