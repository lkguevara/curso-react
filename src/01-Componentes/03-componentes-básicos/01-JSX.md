JSX es una extensión de sintaxis para JavaScript que permite escribir marcado similar a HTML dentro de una archivo JavaScript pero con algunas diferencias importantes:

    - Toda etiqueta debe cerrarse por ejemplo <br> debera cerrarse a <br />.
    - Los componentes deben devolver un sólo elemento padre.
    - Algunos atributos HTML cambian como:
        class por className.
        for por htmlFor.
    - Los atributos de un elemento JSX pueden aceptar valores de tipo String entrecomillados o expresiones JavaScript entre llaves, por ejemplo: <img alt="Avatar" src={user.avatarURL} />

Una restricción de JSX es que no puedes utilizar if, else, while o for. Para mostrar elementos de un arreglo o un objeto utiliza map.

Sin JSX, deberíamos usar React.createElement para crear los elementos de la interfaz manualmente de esta forma:

import { createElement } from 'react'

function Hello () { // un componente es una función! 👀
  return React.createElement(
    'h1', // elemento a renderizar
     null, // atributos del elemento
    'Hola Mundo 👋🌍!' // contenido del elemento
  )
}
Esto es muy tedioso y poco legible. Por eso, React usa JSX para declarar qué debe renderizar. Por eso usamos JSX de esta forma:

function Hello () {
  return <h1>Hola Mundo 👋🌍!</h1>
}
Ambos códigos son equivalentes.

<!-- https://www.reactjs.wiki/que-es-jsx -->
<!-- https://es.react.dev/learn/writing-markup-with-jsx -->


