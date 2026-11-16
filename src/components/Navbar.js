import React, { useEffect, useState } from 'react';

const DARK_MODE_KEY = 'darkMode';

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem(DARK_MODE_KEY);
    if (stored !== null) {
      return stored === 'true';
    }
    // Default to system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem(DARK_MODE_KEY, darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <span className="navbar-brand">MyApp</span>
        <button
          className="dark-mode-toggle"
          onClick={handleToggle}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
