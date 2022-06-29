import React from 'react';
import logo from './logo.svg';
import Componente from './01-componentes/componente';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>

      <section>
        <Componente msg= "Hola soy un componente funcional expresado desde una prop"/>
      </section>
    </div>
  );
}

export default App;
