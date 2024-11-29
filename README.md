# iOS Project Manager

A React Native iOS app for project management with task tracking, team collaboration, and progress monitoring features.

## Features

- Project Creation and Management
- Task Tracking
- Team Collaboration
- Progress Monitoring
- Due Date Management
- Real-time Updates

## Tech Stack

- React Native
- TypeScript
- React Navigation
- AsyncStorage for local data persistence
- Vector Icons for UI elements

## Getting Started

1. Clone the repository
2. Install dependencies with `yarn install` or `npm install`
3. Install iOS dependencies with `cd ios && pod install`
4. Run the app with `yarn ios` or `npm run ios`

## Project Structure

```
ios-project-manager/
├── src/
│   ├── components/        # Reusable UI components
│   ├── screens/          # Screen components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   └── types/           # TypeScript type definitions
├── App.tsx              # Main application component
└── package.json         # Project dependencies
```