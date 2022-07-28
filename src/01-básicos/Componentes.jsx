/*
    En React se introduce el concepto de componentes para crear la interfaz gráfica de nuestra aplicación.

    Permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estarán aisladas una de otras.

    El objetivo es que cada componente sea independiente y encapsule su marcado, estilos y estado. De esa forma los componentes pueden ser reutilizables y la interfaz gráfica más fácil de mantener y evolucionar.

    Se le pueden pasar datos a un componente a través de algo llamado props y devuelven a React elementos que describen lo que debe verse en pantalla.

    En React los datos fluyen de forma unidireccional, de componentes padres a componentes hijos.

    React te permite definir componentes como clases o como funciones. 
    
*/


import React, { Component } from 'react';

// Aplicando desde una función expresada
const Componente = (props) => <p>{props.msg}</p>;


// aplicando desde una función declarada
    /* function Componente(props) {
    return <h2>{props.msg}</h2>;
    } */

// aplicando clases
    /* class Componente extends Component {
    render() {
        return <h2>{this.props.msg}</h2>;
    }
    } */

export default Componente;