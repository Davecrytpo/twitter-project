import React from 'react';
import { Bot, Send } from 'lucide-react';

export default function Grok() {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hi! I\'m Grok, your AI assistant. How can I help you today?',
      timestamp: '2m',
    },
    {
      id: 2,
      type: 'user',
      content: 'What can you do?',
      timestamp: '1m',
    },
    {
      id: 3,
      type: 'bot',
      content: 'I can help you with various tasks like answering questions, providing information, coding assistance, and engaging in conversations. Feel free to ask me anything!',
      timestamp: 'Just now',
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        type: 'user',
        content: message,
        timestamp: 'Just now',
      },
    ]);
    setMessage('');
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10 p-4 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <Bot className="h-8 w-8 text-blue-500" />
          <div>
            <h1 className="text-xl font-bold">Grok</h1>
            <p className="text-sm text-gray-500">AI Assistant</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                msg.type === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800'
              }`}
            >
              <p>{msg.content}</p>
              <span className="text-sm opacity-70 mt-2 block">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Message Grok..."
              className="w-full bg-gray-900 rounded-full py-3 px-6 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}