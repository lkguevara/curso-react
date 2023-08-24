//* Definición
/* El renderizado condicional es una técnica que nos permite mostrar un componente u otro dependiendo de una condición. Para hacer renderizado condicional en React usamos el operador ternario:

 */ 

//* Ejemplo

export default function Button({ text }) {
    return text
      ? <button>{text}</button>
      : null
}

// https://www.reactjs.wiki/que-es-el-renderizado-condicional-en-react#content