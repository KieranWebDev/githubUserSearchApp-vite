import React from 'react';

// styles
import './SearchBar.css';
import searchicon from '../images/icon-search.svg';

import { useState } from 'react';

export default function SearchBar(props) {
  const [tempVal, setTempVal] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.setSearchQuery(tempVal);
    console.log(props.searchQuery);
  }

  return (
    <div className="search-bar-container">
      <form className="form-container" action="#">
        <img src={searchicon} alt="searchicon" />
        <input
          type="text"
          placeholder="Search Githib username..."
          onChange={(e) => setTempVal(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
}
