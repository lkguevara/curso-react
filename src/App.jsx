import { useState } from 'react'
import Componentes from './01-básicos/Componentes'
import Propiedades from './01-básicos/Propiedades'
import UseEffectEjm from './01-básicos/UseEffectEjm'
import UseStateEjm from './01-básicos/UseStateEjm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <section>
        <Componentes msg = "Hola soy un componente funcional expresado desde una prop."/>
        <Propiedades />
        <UseStateEjm />
        <UseEffectEjm />
 
      </section>
      
    </div>
  )
}

export default App
