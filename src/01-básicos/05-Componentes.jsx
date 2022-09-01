/*
    En React se introduce el concepto de componentes para crear la interfaz gráfica de nuestra aplicación. Permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estarán aisladas una de otras.

    Los componentes se escribiran en pascal case y se importarán en el archivo principal de la aplicación.
    
*/


// import { Component } from 'react'; /*aplica para las clases */

//1. Aplicando componentes con clases
    /*class Componente extends Component {
        render() {
            return <p>Componentes a través de Clases</p>;
        }
    } */

//2. aplicando desde una función declarada **Actual**
    /*function Componente(props) {
    return <p>{props.msg}</p>;
    }*/

//3. Aplicando desde una función expresada **Actual**
const Componente2 = (props) => <p>{props.msg2}</p>;



export default  Componente2;
