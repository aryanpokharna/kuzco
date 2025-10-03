'use client';

import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export default function MainLayout() {
  return (
    <div className="h-screen flex bg-gray-100">
      {/* Left Panel - 75% width */}
      <div className="w-3/4 flex flex-col">
        <LeftPanel />
      </div>
      
      {/* Right Panel - 25% width */}
      <div className="w-1/4 border-l border-gray-300">
        <RightPanel />
      </div>
    </div>
  );
}
