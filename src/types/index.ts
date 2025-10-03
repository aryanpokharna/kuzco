export interface Email {
  id: string;
  sender: string;
  subject: string;
  body: string;
  timestamp: Date;
  isRead: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  content: string;
  timestamp: Date;
  type: 'text' | 'system';
}

export interface JiraTicket {
  id: string;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  assignee: string;
  reporter: string;
  created: Date;
  updated: Date;
  labels: string[];
}

export interface ConfluenceDoc {
  id: string;
  title: string;
  content: string;
  category: string;
  lastModified: Date;
  author: string;
  tags: string[];
}

export interface ConsoleLog {
  id: string;
  message: string;
  level: 'info' | 'warning' | 'error' | 'success';
  timestamp: Date;
}

export interface AppState {
  emails: Email[];
  chatMessages: ChatMessage[];
  jiraTickets: JiraTicket[];
  confluenceDocs: ConfluenceDoc[];
  consoleLogs: ConsoleLog[];
  activeInterface: 'outlook' | 'teams' | 'jira' | 'confluence';
}
