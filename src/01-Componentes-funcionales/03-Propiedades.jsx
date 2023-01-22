/*
    - Son valores que se podrán asignar a nuestros componentes.
    
    - Valores que recibe un componente hijo de uno padre. Se agrupan en un objeto llamado props, el cual puede recibir diferentes tipos de datos. 
    
    - Las props son inmutables, es decir, son valores de sólo lectura, no se pueden modificar.

    - Es una forma de pasar variables o funciones de otros componentes.

    - Forma de duplicar codigo y reutilizar esas variables.
*/

// Ejemplo 1:
const Propiedades = (props) => {
  return (
    <div>
        <p>{props.cadena}</p>
        <p>{props.numero}</p>
    </div>
 )
}

// Ejemplo 2:
// const Propiedades = ({curso, fecha, descripcion}) => {
//   return (
//     <div>
//         <p>{curso}</p>
//         <p>{fecha}</p>
//         <p>{descripcion}</p>
//     </div>
    

//   )
// }

export default Propiedades