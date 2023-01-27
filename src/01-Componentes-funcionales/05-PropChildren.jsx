// * Definición
// La prop children es una prop especial que se pasa a los componentes. Es un objeto que contiene los elementos que envuelve un componente. 

// * Ejemplo

import React from 'react'

const PropChildren = (props) => {
  return (
    <div>
        <h1 className="text-red-500 font-bold text-3xl text-center">Prop Children</h1>
        <p>{props.title}</p>
        <div>{props.children}</div>
    </div>
  )
}

export default PropChildren