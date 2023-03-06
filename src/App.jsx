import React from 'react';
import { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';

// styles
import './App.css';
// components
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResullts/SearchResults';

function App() {
  const [userData, setUserData] = useState({});
  const [searchQuery, setSearchQuery] = useState('octocat');
  const [validUsername, setValidUsername] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // dark mode
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${searchQuery}`
        );
        const data = await response.json();
        console.log(data);
        setUserData(data);
        setLoading(false);

        if (response.ok) {
          setUserData(data);
        } else if (data.message) {
          setValidUsername(false);
        } else {
          setError(data.message);
          console.log(error);
        }
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    }
    fetchData();
  }, [searchQuery, error]);

  return (
    <div className="body" data-theme={theme}>
      <div className="app-container" data-theme={theme}>
        <button onClick={switchTheme}>change theme</button>
        <NavBar />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {loading && <h1>Loading...</h1>}
        {validUsername && !loading && <SearchResults userData={userData} />}
        {!validUsername && <h1>No Results braaaa</h1>}
      </div>
    </div>
  );
}

export default App;
