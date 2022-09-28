import { useState } from 'react'
import Componentes from './01-básicos/05-Componentes'
import Formulario from './03-Formularios/Formulario'
import Propiedades from './01-básicos/06-Propiedades'
import UseEffectEjm from './02-Hooks/UseEffectEjm'
import UseStateEjm from './02-Hooks/UseStateEjm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <section>

        <Componentes msg2 = "Soy un componente funcional expresado desde una prop a través de una función expresada." /><hr />

        <Propiedades curso="Propiedades en react" fecha= '31 de agosto 2022' descripcion= 'aprendiendo sobre las props en react' cadena= 'Esto es una cadena de texto desde las props' numero= {1234}/> <hr />
        
        <UseStateEjm /> <hr />

        <UseEffectEjm /> <hr />

        <Formulario /> <hr />
 
      </section>
      
    </div>
  )
}


export default App
