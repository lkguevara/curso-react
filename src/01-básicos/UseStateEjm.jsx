/*
    Devuelve un valor con estado y una función para actualizarlo. Permite manipular el estado de un componente funcional. Para actualizar el estado tenemos que utilizar el método resultante de la destructuración de useState y pasarle el nuevo valor.
    const [variable, setVariable] = useState(estadoInicial)
*/

import React, { useState } from 'react';

const UseStateEjm = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setDarkMode(!darkMode);
    setCount(!count);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div className="UseStateEjm">
        <h1>useState</h1>
        <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        <button type="button" onClick={() => setDarkMode
          (!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
      </div> <br />

      <div>
        <button onClick={() => setCount(count + 1)}>{count} likes</button>
        <button onClick= {reset}  >Reset</button>
        
      </div>
    </>
    
  );
}

export default UseStateEjm;