import React from 'react';

export default function Propiedades ( props ) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <p>{props.msg2}</p>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "Propiedades en react",
};

