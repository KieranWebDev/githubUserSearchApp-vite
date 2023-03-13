import React from 'react';

// styles
import './NavBar.css';
// components
import sunIcon from '../images/icon-sun.svg';
import moonIcon from '../images/icon-moon.svg';

export default function NavBar({ theme, setTheme }) {
  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const themeToggleButton =
    theme === 'light' ? (
      <button
        className="dark"
        onClick={switchTheme}
        aria-label="Switch to dark mode"
      >
        <span>DARK</span>
        <img src={moonIcon} alt="darkmode" />
      </button>
    ) : (
      <button
        className="light"
        onClick={switchTheme}
        aria-label="Switch to light mode"
      >
        <span>LIGHT</span>
        <img src={sunIcon} alt="lightmode" />
      </button>
    );

  return (
    <header>
      <h1>devfinder</h1>
      {themeToggleButton}
    </header>
  );
}
