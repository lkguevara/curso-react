//* 1. Definición 
/* En React se introduce el concepto de componentes para crear la interfaz gráfica de nuestra aplicación. Permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estarán aisladas una de otras. Los componentes se escribiran en PascalCase y se importarán en el archivo principal de la aplicación. En React los componentes se crean usando funciones o clases.*/

// Aplicandose con destructuring
const Componente2 = ({mensaje}) => {
    return (
        <div>
            <h1 className="text-red-500 font-bold text-3xl">Componentes</h1>
            <p>{mensaje}</p>
        </div>
    
    );
}

// Aplicandose sin destructuring
const Componente = props => <p>{props.mensaje}</p>;


export default Componente2;




