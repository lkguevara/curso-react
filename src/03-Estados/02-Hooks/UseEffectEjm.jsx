/*
  Permite gestionar y manipular todos los cambios que ocurran dentro de los componentes definidos con funciones. useEffect recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, ya sea por cambios del estado o las propiedades. 

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

  // ejemplo 1
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  // ejemplo 2
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
    <div className="Characters">
      <h2>useEffect</h2>

      <h3>fecha</h3>
      {iniciar ? <Reloj fecha={fecha} hora={hora} /> : "Debes iniciar el reloj"} <br />
      <button onClick={() => setIniciar(true)}>Iniciar reloj</button>
      <button onClick={() => setIniciar(false)}>Detener reloj</button>

      <h3>api rick and morthy</h3>
      {characters.map(character => (
        <p>{character.name}</p>
      ))}

    </div>
  );

}

export default UseEffectEjm;