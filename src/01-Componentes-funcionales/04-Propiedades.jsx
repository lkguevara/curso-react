//* Definición
/* Son valores que se podrán asignar a nuestros componentes. Se pueden pasar como atributos a los componentes. Las props son inmutables, es decir, son valores de sólo lectura, no se pueden modificar.*/  

// Ejemplo 1:
// const Propiedades = (props) => {
//   return (
//     <div>
//         <p>{props.cadena}</p>
//         <p>{props.numero}</p>
//     </div>
//  )
// }

// Ejemplo 2 con destructuring:
const Propiedades = ({curso, fecha, descripcion}) => {
  return (
    <div>
        <h1 className="text-red-500 font-bold text-3xl">Propiedades en React</h1>
        <p>{curso}</p>
        <p>{fecha}</p>
        <p>{descripcion}</p>
    </div>
  )}

export default Propiedades