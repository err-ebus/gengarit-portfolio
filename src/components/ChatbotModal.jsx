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
    <div className="fixed bottom-0 right-0 z-50 w-full max-w-sm m-4 sm:m-6 bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
        <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Gengarit Chatbot</span>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-xl font-bold transition">×</button>
      </div>
      {/* Messages */}
      <div className="chatbot-messages flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-black/20" style={{maxHeight: '300px'}}>
        {messages.length === 0 && (
          <div className="text-gray-500 text-sm text-center py-4">Start a conversation...</div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-3 py-2 rounded-xl text-sm max-w-[80%] break-words ${
              msg.role === 'user' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                : 'bg-white/10 text-gray-200 border border-white/10'
            }`}>{msg.content}</div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-xl text-sm bg-white/10 text-gray-400 border border-white/10">
              <span className="animate-pulse">Thinking...</span>
            </div>
          </div>
        )}
      </div>
      {/* Input */}
      <div className="flex items-center px-4 py-3 border-t border-white/10">
        <input
          ref={inputRef}
          type="text"
          className="flex-1 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 transition-all"
        >Send</button>
      </div>
    </div>
  );
};

export default ChatbotModal;
