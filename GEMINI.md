# GEMINI Project Context: gemini-todo-app

## Project Overview

This project is a "To-Do List" web application built with React and Vite. It allows users to add, delete, and mark tasks as complete. The application uses Bootstrap for styling and persists the to-do list in the browser's local storage.

The main application logic is contained in `src/App.jsx`, which manages the state of the to-do items. The entry point for the application is `src/main.jsx`, which renders the main `App` component and imports the necessary Bootstrap CSS.

## Building and Running

### Prerequisites
- Node.js and npm

### Key Commands

- **Install dependencies:**
  ```bash
  npm install
  ```

- **Run the development server:**
  ```bash
  npm run dev
  ```
  This will start the application on a local development server, typically at `http://localhost:5173`.

- **Build for production:**
  ```bash
  npm run build
  ```
  This command bundles the application into static files for production in the `dist` directory.

- **Lint the code:**
  ```bash
  npm run lint
  ```
  This runs ESLint to check for code quality and style issues.

- **Preview the production build:**
  ```bash
  npm run preview
  ```
  This command starts a local server to preview the production build from the `dist` directory.

## Development Conventions

- The project uses functional components with React Hooks (`useState`, `useEffect`).
- State is managed locally within the `App` component.
- Styling is primarily handled by Bootstrap classes, with some additional custom styles potentially in `src/index.css`.
- The code follows standard JavaScript/React conventions and is configured with ESLint for linting.
