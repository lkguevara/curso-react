import React, { useState, useEffect } from 'react';

const UseEffectEjm = () => {
    const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters">
        <h2>useEffect</h2>
      {characters.map(character => (
        <p>{character.name}</p>
      ))}
    </div>
  );
}

export default UseEffectEjm;