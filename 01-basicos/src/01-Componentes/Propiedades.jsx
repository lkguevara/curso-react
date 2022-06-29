import React from 'react';

export default function Propiedades ( props ) {
    return (
        <div>
            <p>{props.porDefecto}</p>
            <p>{props.msg2}</p>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "Propiedades en react",
};