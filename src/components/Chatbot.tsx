'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

interface PredefinedQuestion {
  question: string;
  answer: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedQuestions: PredefinedQuestion[] = [
    {
      question: "What services do you offer?",
      answer: "We provide end-to-end solutions in development, design, marketing, and consulting."
    },
    {
      question: "How long does a project take?",
      answer: "Websites take around 1–2 weeks, while SaaS projects take 3–6 weeks."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! Startups, local businesses, MSMEs, and corporates are our core focus."
    },
    {
      question: "How can I start a project?",
      answer: "You can fill out the contact form or reach us on WhatsApp at +91 6351324531."
    }
  ];

  const fallbackMessage = "We'd love to help you with that! Please reach us on WhatsApp (+91 6351324531) or email lazlleandco@gmail.com.";

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens for the first time
      const welcomeMessage: Message = {
        id: '1',
        text: "Hey there 👋 How can we help you today?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Check for predefined questions
    const matchedQuestion = predefinedQuestions.find(
      q => q.question.toLowerCase().includes(inputValue.toLowerCase()) ||
           inputValue.toLowerCase().includes(q.question.toLowerCase())
    );

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: matchedQuestion ? matchedQuestion.answer : fallbackMessage,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us
          </span>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl w-80 h-96 flex flex-col animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Lazlle Assistant</h3>
                <p className="text-white/80 text-xs">Always here to help</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-gray-900'
                      : 'bg-white/10 text-gray-300'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-gray-400 p-3 rounded-2xl text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2">
              <p className="text-gray-400 text-xs mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {predefinedQuestions.map((pq, index) => (
                  <Button
                    key={index}
                    onClick={() => handleQuestionClick(pq.question)}
                    variant="outline"
                    size="sm"
                    className="text-xs bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white rounded-full"
                  >
                    {pq.question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-[#cbdee2]/20"
              />
              <Button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === '' || isTyping}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-full h-10 w-10 p-0"
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;