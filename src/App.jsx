import { useState } from 'react'
import Componentes from './01-Componentes-funcionales/02-Componentes'
import ComponenteClase from './01-Componentes-funcionales/03-ComponenteClase'
import Propiedades from './01-Componentes-funcionales/04-Propiedades'
import PropChildren from './01-Componentes-funcionales/05-PropChildren'
import EstadoClase from './03-Estados/01-Estado-clase/EstadoClase'
import UseEffectEjm from './03-Estados/02-Hooks/UseEffectEjm'
import UseStateEjm from './03-Estados/02-Hooks/UseStateEjm'
import './App.css'
import Formulario from './04-Formularios/Formulario'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Componentes mensaje = "Soy un componente funcional"/><hr/>
        <ComponenteClase msg = "Soy un componente de clase"/><hr/>

        <Propiedades curso="Aprendiendo React" fecha= '23 de enero 2023' descripcion= 'componentes y propiedades' cadena= 'Esto es una cadena de texto desde las props' numero= {1234}/> <hr />
       <PropChildren title="Esto es un título"> <p>Esto es un children</p> <h3>Esto es otro children</h3> </PropChildren> <hr />
        <EstadoClase /> <hr />
        <UseStateEjm /> <hr />
        <UseEffectEjm /> <hr />

        <Formulario /> <hr />
    </div>
  )
}


export default App
