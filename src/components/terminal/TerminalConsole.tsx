'use client';

import React, { useEffect, useRef } from 'react';
import { useApp } from '@/context/AppContext';
import { Terminal, ChevronRight } from 'lucide-react';

export default function TerminalConsole() {
  const { state } = useApp();
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [state.consoleLogs]);

  const getLogColor = (level: string) => {
    switch (level) {
      case 'error': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'success': return 'text-green-400';
      default: return 'text-gray-300';
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  return (
    <div className="h-full bg-gray-900 text-gray-300 flex flex-col">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
        <Terminal className="w-4 h-4 mr-2 text-green-400" />
        <span className="text-sm font-medium">System Console</span>
      </div>
      
      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-4 font-mono text-sm overflow-y-auto"
      >
        {state.consoleLogs.map((log) => (
          <div key={log.id} className="mb-1 flex items-start">
            <span className="text-gray-500 mr-2 text-xs">
              [{formatTime(log.timestamp)}]
            </span>
            <ChevronRight className="w-3 h-3 mr-1 mt-0.5 text-green-400 flex-shrink-0" />
            <span className={getLogColor(log.level)}>
              {log.message}
            </span>
          </div>
        ))}
        
        {/* Cursor */}
        <div className="flex items-center mt-2">
          <span className="text-gray-500 mr-2 text-xs">
            [{formatTime(new Date())}]
          </span>
          <ChevronRight className="w-3 h-3 mr-1 text-green-400" />
          <span className="text-green-400 animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
}
