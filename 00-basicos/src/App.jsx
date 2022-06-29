import React from 'react';
import logo from './logo.svg';
import Componente from './01-componentes/01-componente';
import Propiedades from './01-componentes/02-propiedades';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <section>
        <Componente msg= "Hola soy un componente expresado desde una prop"/>
        <hr />
        <Propiedades msg2 = "mensaje de una propiedad"/>
      </section>
    </div>
  );
}

export default App;
