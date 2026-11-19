import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import './theme.css';

function getInitialTheme() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  }
  return 'light';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Prevent FOUC: set theme before React loads
  useEffect(() => {
    const theme = getInitialTheme();
    document.body.setAttribute('data-theme', theme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <KanbanBoard />
    </div>
  );
}

export default App;
