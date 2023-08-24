/*  TEORÍA
    - useState es un Hook de React que te permite agregar una variable de estado a tu componente.
    - Devuelve un valor con estado y una función para actualizarlo. 
    - Nos indica el estado actual de la aplicación
    - Permite manipular el estado de un componente funcional. Para actualizar el estado tenemos que utilizar el método resultante de la destructuración de useState y pasarle el nuevo valor.
    - La convención es nombrar variables de estado como [algo, setAlgo] usando desestructuración de arrays.

  Sintaxis
    - const [variable, setVariable] = useState(estadoInicialVariable)

  https://es.react.dev/reference/react/useState
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
      <h1 className="text-red-500 font-bold text-3xl">useState</h1>
      <div className='flex justify-start mt-5'>
        <button 
          className= {!darkMode ? 'bg-black rounded-lg p-2 text-sm mr-5 text-white' : 'bg-white rounded-lg p-2 text-sm mr-5 text-gray-700 border-2 border-orange-500'}
          type="button"
          onClick={handleClick}
        > 
          {!darkMode ? 'Dark Mode' : 'Light Mode'} 
        </button>
      </div>

      <div className='flex justify-start mt-5'>
        <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white' onClick={() => setCount(count + 1)}>{count} likes</button>
        <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white' onClick={() => setCount(count - 1)}>{disminuir} Dislikes</button>
        <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white' onClick= {reset}> Reset </button>
      </div>

      <div className='flex justify-start my-5'>
        <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white' onClick={() => setSuma(suma + 1)}> sumar</button>
        <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white' onClick={() => setSuma(suma - 1)}> restar</button>
        <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white'  onClick= {resetSuma}> Reset </button>
        <h2> {suma} </h2>
      </div>
      
    </>
    
  );
}

export default UseStateEjm;