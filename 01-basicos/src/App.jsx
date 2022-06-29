import { useState } from 'react'
import logo from './logo.svg'
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
        <UseStateEjm />
        <UseEffectEjm />
 
      </section>
      
    </div>
  )
}

export default App
