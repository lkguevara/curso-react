//* Definición
/* El renderizado condicional es una técnica que nos permite mostrar un componente u otro dependiendo de una condición. En React se utiliza la sintaxis if/else o ternario para mostrar un componente u otro. */ 

//* Ejemplo

const Componente = ({mensaje}) => {
    if (mensaje === 'Hola') {
        return <p>{mensaje}</p>
    } else {
        return <p>No hay mensaje</p>
    }
}

export default Componente;

// https://www.reactjs.wiki/que-es-el-renderizado-condicional-en-react#content