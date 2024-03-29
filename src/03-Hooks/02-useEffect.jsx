/*
  - Permite gestionar y manipular todos los cambios que ocurran dentro de los componentes definidos con funciones. 
  - useEffect recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, ya sea por cambios del estado o las propiedades. 
  - useEffect recibe como segundo parámetro un array de dependencias, que son las variables que se deben tener en cuenta para ejecutar la función que recibe como primer parámetro.
  - useEffect es un Hook de React que te permite sincronizar un componente con un sistema externo.

    useEffect( () => {

    }, [listaDeDependencias])
 */

import React, { useState, useEffect } from 'react'; // se deben importar ambos


const UseEffectEjm = () => {
    const [characters, setCharacters] = useState([]);

    let fecha = new Date().toLocaleDateString();
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [iniciar, setIniciar] = useState(false);

    const Reloj = ({fecha, hora}) => { 
      return (
        <div>
          <h4>La fecha y hora actual es:</h4>
          <h3>{fecha} {hora}</h3>
        </div>
      )
    }

  useEffect(() => {
    let temporizador;

    if (iniciar) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    return () => {
      clearInterval(temporizador);
    }
  }, [iniciar]);


  return (
    <div className='flex flex-col justify-start mt-5'>
      <h1 className="text-red-500 font-bold text-3xl">useEffect</h1>

      <h3 className="font-semi-bold text-lg mt-5">fecha</h3>
      {iniciar ? <Reloj fecha={fecha} hora={hora} /> : <span className="font-semi-bold text-lg">Debes iniciar el reloj</span> } <br />
      <button className='bg-lime-700 rounded-sm w-24 p-2 text-sm  text-white'   onClick={() => setIniciar(true)}>Iniciar reloj</button>
      <button className='bg-lime-700 rounded-sm w-28 p-2 text-sm  my-5 text-white' onClick={() => setIniciar(false)}>Detener reloj</button>

    </div>
  );

}

export default UseEffectEjm;