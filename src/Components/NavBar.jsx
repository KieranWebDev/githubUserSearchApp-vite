import React from 'react';
import { useState } from 'react';

import lightmode from '../images/icon-sun.svg';
import darkmode from '../images/icon-moon.svg';

import './NavBar.css';

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <header>
      <h1>devfinder</h1>
      {darkMode ? (
        <button onClick={() => setDarkMode(!darkMode)}>
          <span>LIGHT</span>
          <img src={lightmode} alt="lightmode" />
        </button>
      ) : (
        <button onClick={() => setDarkMode(!darkMode)}>
          <span>DARK</span>
          <img src={darkmode} alt="darkmode" />
        </button>
      )}
    </header>
  );
}
