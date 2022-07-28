/*
    - Son valores que recibe un componente hijo de uno padre. Se agrupan en un objeto llamado props, el cual puede recibir diferentes tipos de datos. 
    
    - Las props son inmutables, es decir, son valores de sólo lectura, no se pueden modificar.

    - Es una forma de pasar variables o funciones de otros componentes.

    - Forma de duplicar codigo y reutilizar esas variables.
*/

import React from 'react'

const Propiedades = ({curso, fecha, descripcion}) => {
  return (
    <div>
        <h1>{curso}</h1>
        <p>{fecha}</p>
        <p>{descripcion}</p>
    </div>
    

  )
}

export default Propiedades