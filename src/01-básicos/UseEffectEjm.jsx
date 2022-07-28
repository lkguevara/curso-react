/*
  Permite hacer uso del ciclo de vida en un componente funcional. useEffect recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, ya sea por cambios del estado o las propiedades. permite que los componentes funcionales tengan métodos de ciclo de vida. 

    useEffect( () => {

    }, [])
 */

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