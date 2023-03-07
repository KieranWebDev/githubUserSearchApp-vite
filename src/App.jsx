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

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setValidUsername(true);
        const response = await fetch(
          `https://api.github.com/users/${searchQuery}`
        );
        const data = await response.json();
        console.log(data);

        if (response.ok) {
          setUserData(data);
          setLoading(false);
        } else if (data.message) {
          setValidUsername(false);
          setError(data.message);
          setLoading(false);
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
      <div className="app-container">
        <NavBar theme={theme} setTheme={setTheme} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {loading && <h1>Loading...</h1>}
        {validUsername && !loading && <SearchResults userData={userData} />}
        {!validUsername && <h1>No Results braaaa</h1>}
      </div>
    </div>
  );
}

export default App;
