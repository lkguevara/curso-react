/*
TEORÍA:
    - PropTypes: Es una propiedad que nos permite definir el tipo de dato de las props que recibe un componente.
*/
// Ejemplo de uso de PropTypes:
import React from 'react';
import PropTypes from 'prop-types';

export default function PropTypeEjem({ text }) {
    return (
        <div>
            <h1 className="text-red-500 font-bold text-3xl">PropTypes</h1>
            <p>{text}</p>
        </div>
    );
}

PropTypeEjem.propTypes = {
    text: PropTypes.string.isRequired,
};

// En el ejemplo anterior, estamos definiendo que la prop text debe ser de tipo string y que es requerida. Si no se cumple con alguna de estas condiciones, React nos mostrará un warning en la consola.