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