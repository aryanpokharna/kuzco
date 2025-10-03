'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Mail, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export default function OutlookInterface() {
  const { state, dispatch } = useApp();
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);

  const handleEmailClick = (emailId: string) => {
    setSelectedEmail(emailId);
    dispatch({ type: 'MARK_EMAIL_READ', payload: emailId });
    dispatch({
      type: 'ADD_CONSOLE_LOG',
      payload: {
        id: Date.now().toString(),
        message: `Processing email: ${state.emails.find(e => e.id === emailId)?.subject}`,
        level: 'info',
        timestamp: new Date()
      }
    });
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'medium': return <Clock className="w-4 h-4 text-yellow-500" />;
      default: return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  const selectedEmailData = selectedEmail ? state.emails.find(e => e.id === selectedEmail) : null;

  return (
    <div className="h-full bg-white flex">
      {/* Email List */}
      <div className="w-1/2 border-r border-gray-200 flex flex-col">
        <div className="p-3 border-b border-gray-200 bg-blue-50">
          <h3 className="font-semibold text-gray-800 flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            Inbox ({state.emails.filter(e => !e.isRead).length} unread)
          </h3>
        </div>
        <div className="flex-1 overflow-y-auto">
          {state.emails.map((email) => (
            <div
              key={email.id}
              onClick={() => handleEmailClick(email.id)}
              className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                !email.isRead ? 'bg-blue-50' : ''
              } ${selectedEmail === email.id ? 'bg-blue-100' : ''}`}
            >
              <div className="flex items-start justify-between mb-1">
                <span className="font-medium text-sm text-gray-900 truncate">
                  {email.sender}
                </span>
                <div className="flex items-center space-x-1">
                  {getPriorityIcon(email.priority)}
                  {!email.isRead && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                </div>
              </div>
              <p className="text-sm text-gray-700 font-medium mb-1 truncate">
                {email.subject}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {email.body.substring(0, 60)}...
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {email.timestamp.toLocaleTimeString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Email Content */}
      <div className="w-1/2 flex flex-col">
        {selectedEmailData ? (
          <>
            <div className="p-3 border-b border-gray-200 bg-gray-50">
              <h3 className="font-semibold text-gray-800">{selectedEmailData.subject}</h3>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm text-gray-600">From: {selectedEmailData.sender}</span>
                <span className="text-xs text-gray-500">
                  {selectedEmailData.timestamp.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="flex-1 p-3 overflow-y-auto">
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {selectedEmailData.body}
              </p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p>Select an email to view</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
