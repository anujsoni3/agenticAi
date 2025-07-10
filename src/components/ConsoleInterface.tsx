import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterText from './TypewriterText';

interface ConsoleMessage {
  id: string;
  type: 'input' | 'output' | 'system';
  content: string;
  timestamp: Date;
}

interface ConsoleInterfaceProps {
  onInteractionComplete?: () => void;
}

const predefinedResponses: Record<string, string> = {
  'I want to retire at 40': `[SDCC Protocol Engaged]
Analyzing behavior patterns...
Current savings rate: 12%
Required: 45%
Self-deception level: HIGH
Suggested retirement age: 52`,
  
  'What if I lose my job?': `Chaos Lab activated. 
Net worth drop: -42%. 
Emergency fund: 2.1 months
Recommending buffer setup.
Recovery timeline: 8-14 months`,
  
  'Should I buy a house now?': `Quantum Regret Engine processing...
Timeline A (Buy): +23% short-term stress, -15% long-term wealth
Timeline B (Wait): -8% opportunity cost, +31% flexibility
Regret probability: 67% if you don't buy`,
};

export default function ConsoleInterface({ onInteractionComplete }: ConsoleInterfaceProps) {
  const [messages, setMessages] = useState<ConsoleMessage[]>([
    {
      id: '1',
      type: 'system',
      content: 'LIFELOOP Terminal v2.1.0 - Agentic AI Simulation Layer',
      timestamp: new Date()
    },
    {
      id: '2',
      type: 'system',
      content: 'Type your life question below...',
      timestamp: new Date()
    }
  ]);
  
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim() || isProcessing) return;

    const userMessage: ConsoleMessage = {
      id: Date.now().toString(),
      type: 'input',
      content: currentInput,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentInput('');
    setIsProcessing(true);

    // Simulate processing delay
    setTimeout(() => {
      const response = predefinedResponses[currentInput] || 
        `Processing query: "${currentInput}"
Simulation complete.
Multiple timeline branches detected.
Recommend running deeper analysis.`;

      const aiMessage: ConsoleMessage = {
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsProcessing(false);
      
      const newCount = interactionCount + 1;
      setInteractionCount(newCount);
      
      if (newCount >= 3 && onInteractionComplete) {
        setTimeout(() => {
          onInteractionComplete();
        }, 2000);
      }
    }, 1500 + Math.random() * 1000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-900/90 px-4 py-2 border-b border-cyan-500/30 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-cyan-400 text-sm font-mono ml-4">LIFELOOP_TERMINAL</span>
        </div>

        {/* Messages Area */}
        <div className="h-96 overflow-y-auto p-4 space-y-3 font-mono text-sm">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${
                  message.type === 'input' 
                    ? 'text-green-400' 
                    : message.type === 'output'
                    ? 'text-cyan-300'
                    : 'text-gray-400'
                }`}
              >
                {message.type === 'input' && <span className="text-green-500">{'> '}</span>}
                {message.type === 'output' && (
                  <div className="bg-cyan-900/20 border-l-2 border-cyan-500 pl-3 py-2 my-2">
                    <TypewriterText text={message.content} speed={30} />
                  </div>
                )}
                {message.type === 'system' && (
                  <div className="text-gray-500">
                    <TypewriterText text={message.content} speed={20} />
                  </div>
                )}
                {message.type === 'input' && message.content}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-yellow-400 flex items-center gap-2"
            >
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span>AI agents processing...</span>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="border-t border-cyan-500/30 p-4">
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-mono">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Ask about your future..."
              className="flex-1 bg-transparent text-green-400 font-mono outline-none placeholder-gray-500"
              disabled={isProcessing}
            />
            <button
              type="submit"
              disabled={isProcessing || !currentInput.trim()}
              className="px-4 py-1 bg-cyan-600/20 border border-cyan-500/50 text-cyan-400 rounded hover:bg-cyan-600/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Execute
            </button>
          </div>
        </form>

        {/* Quick Commands */}
        <div className="border-t border-cyan-500/30 p-3 bg-gray-900/50">
          <div className="text-xs text-gray-400 mb-2">Quick Commands:</div>
          <div className="flex flex-wrap gap-2">
            {Object.keys(predefinedResponses).map((command) => (
              <button
                key={command}
                onClick={() => setCurrentInput(command)}
                className="px-2 py-1 text-xs bg-gray-800/50 border border-gray-600/50 text-gray-300 rounded hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
              >
                {command}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}