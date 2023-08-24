import { useState } from 'react'
import Componentes from './01-Componentes/01-Componente-funcional'
import ComponenteClase from './01-Componentes/02-Componente-clase'
import Props from './01-Componentes/03-componentes-básicos/02-Props'
import PropChildren from './01-Componentes/03-componentes-básicos/03-PropChildren'
import PropTypeEjem from './01-Componentes/03-componentes-básicos/06-PropTypes'
import UseStateEjm from './03-Hooks/01-useState'
import UseEffectEjm from './03-Hooks/02-useEffect'
import Formulario from './04-Formularios/Formulario'
import './App.css'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Componentes mensaje = "Soy un componente funcional"/><hr/>
        <ComponenteClase msg = "Soy un componente de clase"/><hr/>
        <Props curso="Aprendiendo React" fecha= '23 de enero 2023' descripcion= 'componentes y propiedades' cadena= 'Esto es una cadena de texto desde las props' numero= {1234}/> <hr />
        <PropChildren title="Esto es un título"> <p>Esto es un children</p> <h3>Esto es otro children</h3> </PropChildren> <hr />
        <PropTypeEjem text='Ejemplo de propTypes'/> <hr />
        <UseStateEjm /> <hr />
        <UseEffectEjm /> <hr />
        <Formulario /> <hr />

    </div>
  )
}


export default App
