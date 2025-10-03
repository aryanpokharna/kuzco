# Enterprise Chatbot System (MVP)

An MVP built with Next.js to demo an internal enterprise assistant that can ingest user questions from multiple channels and search for answers across Confluence-like docs, Jira-like tickets, and previously answered chats. A terminal-style console shows the system's "thinking" steps for transparent demos.

## Overview

- Left panel (75% width): four stacked windows simulating common enterprise tools
  - Outlook-like email
  - Teams-like chatbot
  - Jira-like issues list and details
  - Confluence-like documentation
- Right panel (25% width): terminal-style console with timestamped, color-coded logs

This structure makes it easy to walk stakeholders through how questions flow through different knowledge sources and how the system reasons about answers.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- React Context for state management
- Lucide icons

## Features

- Email interface: inbox list, priorities, unread state, message view
- Chat interface: user/bot messages, timestamps, simulated responses
- Jira interface: tickets with status/priority/assignee, details view
- Confluence interface: searchable docs, categories, tags, preview & full view
- Terminal console: scrollback, timestamps, log levels (info/warning/error/success)

## App Structure

```
src/
  app/
    layout.tsx        # Root layout
    page.tsx          # Mounts the entire MVP
    globals.css       # Global styles + Tailwind
  components/
    layout/           # Page layout containers
    interfaces/       # Outlook/Teams/Jira/Confluence
    terminal/         # TerminalConsole
  context/
    AppContext.tsx    # Global state & actions
  data/
    mockData.ts       # Seed data for demo
  types/
    index.ts          # Shared TypeScript types
```

## How It Works (Demo Flow)

1. Ask a question in the Teams-like chat or click an email with a question
2. The system "thinks" and logs steps in the console, e.g.:
   - Searching Confluence documentation
   - Analyzing related Jira tickets
   - Checking previously answered questions
3. If an answer is found, the bot replies; otherwise it would escalate (future work)

## Getting Started

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Customizing the Demo

- Update mock data in `src/data/mockData.ts`
- Extend global actions / state in `src/context/AppContext.tsx`
- Adjust the layout in `src/components/layout/*`

## Roadmap

- Real data sources (Confluence/Jira) via API integrations
- Auth and user roles
- Question routing/assignment UI for unresolved cases
- Persistent storage for previous Q&A
- Streaming/animated "thinking" updates

## License

MIT

