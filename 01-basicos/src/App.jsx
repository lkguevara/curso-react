import { useState } from 'react'
import logo from './logo.svg'
import Componentes from './01-Componentes/Componentes'
import Propiedades from './01-Componentes/Propiedades'
import UseEffectEjm from './01-Componentes/UseEffectEjm'
import UseStateEjm from './01-Componentes/UseStateEjm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section>
        <Componentes msg = "Hola soy un componente funcional expresado desde una prop"/>
        <Propiedades />
        <UseStateEjm />
        <UseEffectEjm />
 
      </section>
      
    </div>
  )
}

export default App
