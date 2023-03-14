import React from 'react';

export default function ErrorMessages({ validUsername, searchQuery }) {
  return (
    <>
      {!validUsername && searchQuery !== '' && (
        <div className="invalid-user-message">
          <h1>
            Sorry, we can't find any results for this username. Please check the
            spelling and try again.
          </h1>
        </div>
      )}
      {!validUsername && searchQuery === '' && (
        <div className="invalid-user-message">
          <h1>You must enter a username to search.</h1>
        </div>
      )}
    </>
  );
}
