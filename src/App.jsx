import { useState } from 'react'
import Componentes from './01-Componentes-funcionales/02-Componentes'
import Formulario from './04-Formularios/Formulario'
import Propiedades from './01-Componentes-funcionales/03-Propiedades'
import UseEffectEjm from './03-Hooks/UseEffectEjm'
import UseStateEjm from './03-Hooks/UseStateEjm'
import './App.css'
import ComponenteClase from './01-Componentes-funcionales/04-ComponenteClase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <section>

        <Componentes mensaje = "Soy un componente funcional"/><hr/>
        <ComponenteClase msg = "Soy un componente de clase"/><hr/>

        <Propiedades curso="Aprendiendo React" fecha= '23 de enero 2023' descripcion= 'componentes y propiedades' cadena= 'Esto es una cadena de texto desde las props' numero= {1234}/> <hr />
        
        <UseStateEjm /> <hr />

        <UseEffectEjm /> <hr />

        <Formulario /> <hr />
 
      </section>
      
    </div>
  )
}


export default App
