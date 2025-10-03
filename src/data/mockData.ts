import { Email, ChatMessage, JiraTicket, ConfluenceDoc } from '@/types';

export const mockEmails: Email[] = [
  {
    id: '1',
    sender: 'john.doe@company.com',
    subject: 'Question about deployment process',
    body: 'Hi team, I need help understanding our deployment process for the new feature. Can someone guide me through the steps?',
    timestamp: new Date('2024-01-15T10:30:00'),
    isRead: false,
    priority: 'medium'
  },
  {
    id: '2',
    sender: 'sarah.wilson@company.com',
    subject: 'Database connection issues',
    body: 'We are experiencing intermittent database connection issues in production. Need urgent assistance.',
    timestamp: new Date('2024-01-15T09:15:00'),
    isRead: true,
    priority: 'high'
  },
  {
    id: '3',
    sender: 'mike.chen@company.com',
    subject: 'API documentation request',
    body: 'Could you please provide documentation for the new user authentication API?',
    timestamp: new Date('2024-01-15T08:45:00'),
    isRead: false,
    priority: 'low'
  }
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    sender: 'user',
    content: 'How do I reset my password?',
    timestamp: new Date('2024-01-15T11:00:00'),
    type: 'text'
  },
  {
    id: '2',
    sender: 'bot',
    content: 'I can help you with password reset. Let me check our documentation...',
    timestamp: new Date('2024-01-15T11:00:05'),
    type: 'text'
  },
  {
    id: '3',
    sender: 'user',
    content: 'What are the current system requirements?',
    timestamp: new Date('2024-01-15T11:05:00'),
    type: 'text'
  }
];

export const mockJiraTickets: JiraTicket[] = [
  {
    id: 'PROJ-123',
    title: 'Fix login authentication bug',
    description: 'Users are unable to login with their corporate credentials. Error occurs after entering valid credentials.',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Alice Johnson',
    reporter: 'Bob Smith',
    created: new Date('2024-01-10T14:30:00'),
    updated: new Date('2024-01-15T09:20:00'),
    labels: ['bug', 'authentication', 'critical']
  },
  {
    id: 'PROJ-124',
    title: 'Implement user dashboard',
    description: 'Create a new dashboard for users to view their account information and activity.',
    status: 'To Do',
    priority: 'Medium',
    assignee: 'Charlie Brown',
    reporter: 'Diana Prince',
    created: new Date('2024-01-12T10:15:00'),
    updated: new Date('2024-01-12T10:15:00'),
    labels: ['feature', 'frontend', 'dashboard']
  },
  {
    id: 'PROJ-125',
    title: 'Update API documentation',
    description: 'Documentation for the new REST API endpoints needs to be updated with examples.',
    status: 'Done',
    priority: 'Low',
    assignee: 'Eve Wilson',
    reporter: 'Frank Miller',
    created: new Date('2024-01-08T16:45:00'),
    updated: new Date('2024-01-14T11:30:00'),
    labels: ['documentation', 'api']
  }
];

export const mockConfluenceDocs: ConfluenceDoc[] = [
  {
    id: '1',
    title: 'Getting Started with the Platform',
    content: 'This guide will help you get started with our internal platform. It covers basic setup, authentication, and common workflows.',
    category: 'Getting Started',
    lastModified: new Date('2024-01-10T14:20:00'),
    author: 'Admin Team',
    tags: ['setup', 'authentication', 'basics']
  },
  {
    id: '2',
    title: 'API Reference Guide',
    content: 'Complete reference for all available API endpoints, including authentication, request/response formats, and error codes.',
    category: 'Technical Documentation',
    lastModified: new Date('2024-01-12T09:15:00'),
    author: 'Dev Team',
    tags: ['api', 'reference', 'technical']
  },
  {
    id: '3',
    title: 'Troubleshooting Common Issues',
    content: 'Solutions to frequently encountered problems including login issues, performance problems, and configuration errors.',
    category: 'Support',
    lastModified: new Date('2024-01-14T16:30:00'),
    author: 'Support Team',
    tags: ['troubleshooting', 'support', 'issues']
  }
];
