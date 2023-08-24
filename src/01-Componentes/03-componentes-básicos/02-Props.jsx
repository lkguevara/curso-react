//* Definición
/* Las props son las propiedades de un componente. Son datos que se pasan de un componente a otro. Por ejemplo, si tienes un componente Button que muestra un botón, puedes pasarle una prop text para que el botón muestre ese texto:

function Button(props) {
  return <button>{props.text}</button>
} 
Para usarlo, indicamos el nombre del componente y le pasamos las props que queremos:

<Button text="Haz clic aquí" />
<Button text="Seguir a @midudev" />

*/

// Ejemplo con destructuring:
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