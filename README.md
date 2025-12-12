# BagBot - AI Shopping Assistant

BagBot is an intelligent shopping assistant chatbot frontend built with React and Vite. It provides a conversational interface for customers to get help with orders, shipping, returns, and product recommendations.

![Preview](https://github.com/user-attachments/assets/7fea488a-1316-4352-ad6e-e0c9654b74e2)


## Features

- **AI-Powered Chat Interface**: Interactive chatbot powered by AI SDK for React
- **Real-time Conversations**: Smooth, responsive messaging experience
- **Quick Suggestions**: Pre-defined suggestions for common queries (order tracking, returns, refunds, etc.)
- **Animated UI**: Beautiful animations with Framer Motion
- **Modern Styling**: Tailwind CSS for responsive and clean design
- **Markdown Support**: Render formatted text responses with React Markdown

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **AI SDK for React** - AI integration
- **FontAwesome** - Icon library
- **ESLint** - Code linting

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # Welcome screen with suggestions
│   ├── ChatArea.jsx       # Chat message display area
│   ├── BotBubble.jsx      # AI bot message bubble
│   ├── CustomerBubble.jsx # User message bubble
│   └── InputField.jsx     # Message input field
├── pages/
│   └── ChatPage.jsx       # Main chat page
├── App.jsx                # Root component
└── main.jsx               # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with HMR:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## Components

- **Hero**: Welcome screen with quick suggestion buttons
- **ChatArea**: Displays the conversation history
- **BotBubble**: Renders AI bot responses
- **CustomerBubble**: Renders user messages
- **InputField**: User message input with send functionality
- **ChatPage**: Main container managing chat state and logic

## License

This project is part of EEX6340 - Artificial Intelligence Techniques & Agent Technology coursework.
