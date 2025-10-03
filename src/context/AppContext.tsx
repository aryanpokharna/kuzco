'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, Email, ChatMessage, JiraTicket, ConfluenceDoc, ConsoleLog } from '@/types';
import { mockEmails, mockChatMessages, mockJiraTickets, mockConfluenceDocs } from '@/data/mockData';

type AppAction = 
  | { type: 'ADD_EMAIL'; payload: Email }
  | { type: 'MARK_EMAIL_READ'; payload: string }
  | { type: 'ADD_CHAT_MESSAGE'; payload: ChatMessage }
  | { type: 'ADD_CONSOLE_LOG'; payload: ConsoleLog }
  | { type: 'SET_ACTIVE_INTERFACE'; payload: 'outlook' | 'teams' | 'jira' | 'confluence' }
  | { type: 'UPDATE_TICKET_STATUS'; payload: { id: string; status: 'To Do' | 'In Progress' | 'Done' } };

const initialState: AppState = {
  emails: mockEmails,
  chatMessages: mockChatMessages,
  jiraTickets: mockJiraTickets,
  confluenceDocs: mockConfluenceDocs,
  consoleLogs: [
    {
      id: '1',
      message: 'System initialized successfully',
      level: 'success',
      timestamp: new Date()
    }
  ],
  activeInterface: 'teams'
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_EMAIL':
      return { ...state, emails: [action.payload, ...state.emails] };
    case 'MARK_EMAIL_READ':
      return {
        ...state,
        emails: state.emails.map(email =>
          email.id === action.payload ? { ...email, isRead: true } : email
        )
      };
    case 'ADD_CHAT_MESSAGE':
      return { ...state, chatMessages: [...state.chatMessages, action.payload] };
    case 'ADD_CONSOLE_LOG':
      return { ...state, consoleLogs: [...state.consoleLogs, action.payload] };
    case 'SET_ACTIVE_INTERFACE':
      return { ...state, activeInterface: action.payload };
    case 'UPDATE_TICKET_STATUS':
      return {
        ...state,
        jiraTickets: state.jiraTickets.map(ticket =>
          ticket.id === action.payload.id 
            ? { ...ticket, status: action.payload.status, updated: new Date() }
            : ticket
        )
      };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
