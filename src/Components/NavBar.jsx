import React from 'react';
import { useState } from 'react';

import lightmode from '../images/icon-sun.svg';
import darkmode from '../images/icon-moon.svg';

import './NavBar.css';

export default function NavBar({ theme, setTheme }) {
  // const [darkMode, setDarkMode] = useState(true);

  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const themeToggleButton =
    theme === 'light' ? (
      <button onClick={switchTheme}>
        <span>DARK</span>
        <img src={darkmode} alt="darkmode" />
      </button>
    ) : (
      <button onClick={switchTheme}>
        <span>LIGHT</span>
        <img src={lightmode} alt="lightmode" />
      </button>
    );

  return (
    <header>
      <h1>devfinder</h1>
      {themeToggleButton}
    </header>
  );
}
