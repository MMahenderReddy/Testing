import React from 'react';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <h1 className="header-title">Dashboard</h1>
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? (
          <span role="img" aria-label="Switch to light mode">🌙</span>
        ) : (
          <span role="img" aria-label="Switch to dark mode">☀️</span>
        )}
      </button>
    </header>
  );
};

export default Header;
