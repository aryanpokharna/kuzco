'use client';

import React from 'react';
import OutlookInterface from '../interfaces/OutlookInterface';
import TeamsInterface from '../interfaces/TeamsInterface';
import JiraInterface from '../interfaces/JiraInterface';
import ConfluenceInterface from '../interfaces/ConfluenceInterface';

export default function LeftPanel() {
  return (
    <div className="h-full flex flex-col">
      {/* Outlook Interface - 25% height */}
      <div className="h-1/4 border-b border-gray-300">
        <OutlookInterface />
      </div>
      
      {/* Teams Interface - 25% height */}
      <div className="h-1/4 border-b border-gray-300">
        <TeamsInterface />
      </div>
      
      {/* Jira Interface - 25% height */}
      <div className="h-1/4 border-b border-gray-300">
        <JiraInterface />
      </div>
      
      {/* Confluence Interface - 25% height */}
      <div className="h-1/4">
        <ConfluenceInterface />
      </div>
    </div>
  );
}
