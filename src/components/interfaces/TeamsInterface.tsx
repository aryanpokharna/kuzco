'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { MessageCircle, Send, Bot, User } from 'lucide-react';

export default function TeamsInterface() {
  const { state, dispatch } = useApp();
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: Date.now().toString(),
        sender: 'user' as const,
        content: newMessage,
        timestamp: new Date(),
        type: 'text' as const
      };

      dispatch({ type: 'ADD_CHAT_MESSAGE', payload: userMessage });
      
      dispatch({
        type: 'ADD_CONSOLE_LOG',
        payload: {
          id: Date.now().toString(),
          message: `User question: "${newMessage}"`,
          level: 'info',
          timestamp: new Date()
        }
      });

      // Simulate bot response
      setTimeout(() => {
        const botMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'bot' as const,
          content: 'Let me search our knowledge base for that information...',
          timestamp: new Date(),
          type: 'text' as const
        };

        dispatch({ type: 'ADD_CHAT_MESSAGE', payload: botMessage });
        
        dispatch({
          type: 'ADD_CONSOLE_LOG',
          payload: {
            id: (Date.now() + 2).toString(),
            message: 'Searching Confluence documentation...',
            level: 'info',
            timestamp: new Date()
          }
        });
      }, 1000);

      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="p-3 border-b border-gray-200 bg-blue-50">
        <h3 className="font-semibold text-gray-800 flex items-center">
          <MessageCircle className="w-4 h-4 mr-2" />
          Enterprise Assistant
        </h3>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {state.chatMessages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.sender === 'bot' && (
                  <Bot className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                )}
                {message.sender === 'user' && (
                  <User className="w-4 h-4 mt-0.5 text-blue-200 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-3 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a question..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
