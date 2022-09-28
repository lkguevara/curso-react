/*  TEORÍA
    - Devuelve un valor con estado y una función para actualizarlo. 
    - Nos indica el estado actual de la aplicación
    - Permite manipular el estado de un componente funcional. Para actualizar el estado tenemos que utilizar el método resultante de la destructuración de useState y pasarle el nuevo valor.

  Sintaxis
    - const [variable, setVariable] = useState(estadoInicialVariable)
*/

import React, { useState } from 'react';

const UseStateEjm = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);
  const [suma, setSuma] = useState(100);

  const handleClick = () => {
    setDarkMode(!darkMode);
    setCount(!count);
  }

  const reset = () => setCount(0);
  const resetSuma = () => setSuma(0);
  const disminuir = () => setCount(count - 1);
  return (
    <>
      <div className="UseStateEjm">
        <h1>useState</h1>
        <button type="button" onClick={handleClick}> {!darkMode ? 'Dark Mode' : 'Light Mode'} </button>
        <button type="button" onClick={() => setDarkMode
          (!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
      </div> <br />

      <div>
        <button onClick={() => setCount(count + 1)}>{count} likes</button>
        <button onClick={() => setCount(count - 1)}>{disminuir} Dislikes</button>
        <button onClick= {reset}> Reset </button>
      </div><br />

      <div>
        <button onClick={() => setSuma(suma + 1)}> sumar</button>
        <button onClick={() => setSuma(suma - 1)}> restar</button>
        <button onClick= {resetSuma}> Reset </button>
        <h2> {suma} </h2>
      </div>
      
    </>
    
  );
}

export default UseStateEjm;