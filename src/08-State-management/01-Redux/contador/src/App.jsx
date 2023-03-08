import React from 'react';

// importar los hooks para no usar mapStateToProps y mapDispatchToProps
import { useSelector, useDispatch } from 'react-redux';
// importar las acciones
import { incrementar, decrementar } from './redux/actions';

function App() {
  // obtener el estado del store
  const contador = useSelector(state => state.contador);
  // obtener el dispatch
  const dispatch = useDispatch();

  // funciones para despachar las acciones
  const handleIncrementar = () => {
    dispatch(incrementar());
  }

  const handleDecrementar = () => {
    dispatch(decrementar());
  }

  


  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>contador: {contador}</h2>
      <button onClick={handleIncrementar}>Incrementar</button>
      <button onClick={handleDecrementar}>Decrementar</button>
    </div>
  )
}

export default App
