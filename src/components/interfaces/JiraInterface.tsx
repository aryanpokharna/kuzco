'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Bug, CheckCircle, Clock, AlertTriangle, User, Calendar } from 'lucide-react';

export default function JiraInterface() {
  const { state, dispatch } = useApp();
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const handleTicketClick = (ticketId: string) => {
    setSelectedTicket(ticketId);
    const ticket = state.jiraTickets.find(t => t.id === ticketId);
    dispatch({
      type: 'ADD_CONSOLE_LOG',
      payload: {
        id: Date.now().toString(),
        message: `Analyzing ticket: ${ticket?.title}`,
        level: 'info',
        timestamp: new Date()
      }
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Done': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'In Progress': return <Clock className="w-4 h-4 text-blue-500" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const selectedTicketData = selectedTicket ? state.jiraTickets.find(t => t.id === selectedTicket) : null;

  return (
    <div className="h-full bg-white flex">
      {/* Ticket List */}
      <div className="w-1/2 border-r border-gray-200 flex flex-col">
        <div className="p-3 border-b border-gray-200 bg-blue-50">
          <h3 className="font-semibold text-gray-800 flex items-center">
            <Bug className="w-4 h-4 mr-2" />
            Issues ({state.jiraTickets.length})
          </h3>
        </div>
        <div className="flex-1 overflow-y-auto">
          {state.jiraTickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => handleTicketClick(ticket.id)}
              className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedTicket === ticket.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(ticket.status)}
                  <span className="font-medium text-sm text-gray-900">
                    {ticket.id}
                  </span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(ticket.priority)}`}>
                  {ticket.priority}
                </span>
              </div>
              <p className="text-sm text-gray-700 font-medium mb-2 line-clamp-2">
                {ticket.title}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>{ticket.assignee}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{ticket.updated.toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {ticket.labels.slice(0, 2).map((label) => (
                  <span
                    key={label}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                  >
                    {label}
                  </span>
                ))}
                {ticket.labels.length > 2 && (
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                    +{ticket.labels.length - 2}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticket Details */}
      <div className="w-1/2 flex flex-col">
        {selectedTicketData ? (
          <>
            <div className="p-3 border-b border-gray-200 bg-gray-50">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-800">{selectedTicketData.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(selectedTicketData.priority)}`}>
                  {selectedTicketData.priority}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  {getStatusIcon(selectedTicketData.status)}
                  <span>{selectedTicketData.status}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>{selectedTicketData.assignee}</span>
                </div>
              </div>
            </div>
            <div className="flex-1 p-3 overflow-y-auto">
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Description</h4>
                <p className="text-sm text-gray-700">{selectedTicketData.description}</p>
              </div>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Labels</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedTicketData.labels.map((label) => (
                    <span
                      key={label}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-xs text-gray-500">
                <p>Created: {selectedTicketData.created.toLocaleString()}</p>
                <p>Updated: {selectedTicketData.updated.toLocaleString()}</p>
                <p>Reporter: {selectedTicketData.reporter}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <Bug className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p>Select a ticket to view details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
