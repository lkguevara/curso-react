import React, { useState } from 'react';

const UseStateEjm = () => {

  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="UseStateEjm">
      <h1>useState</h1>
      <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
      <button type="button" onClick={() => setDarkMode
        (!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
    </div>
  );
}

export default UseStateEjm;