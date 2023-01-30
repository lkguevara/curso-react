// importando un store
import { createStore } from 'redux';

// funcion reducer
const contadorReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENTAR':
        return state + 1;
        case 'DECREMENTAR':
        return state - 1;
        case 'RESET':
        return 0;
        default:
        return state;
    }
}
// creando un store
const store = createStore(contadorReducer);

// suscribiendo al store



// despachando acciones
store.dispatch({ type: 'INCREMENTAR' });
store.dispatch({ type: 'INCREMENTAR' });
store.dispatch({ type: 'INCREMENTAR' });
store.dispatch({ type: 'DECREMENTAR' });


import React from 'react'

const Counter = () => {
  return (
    <>
         <h1 className="text-red-500 font-bold text-3xl text-center">Redux</h1>
        <div>
            {store.getState()}
        </div>
       
        <button className='bg-lime-700 rounded-sm w-24 p-2 text-sm m-auto text-white mr-2' onClick={() => store.dispatch({ type: 'DECREMENTAR' })}>-</button>

        <button className='bg-lime-700 rounded-sm w-24 p-2 text-sm m-auto text-white mr-2' onClick={() => store.dispatch({ type: 'INCREMENTAR' })}>+</button>

        <button className='bg-lime-700 rounded-sm w-24 p-2 text-sm m-auto text-white' onClick={() => store.dispatch({ type: 'RESET' })}>Reset</button>
        
    </>
  )
}

export default Counter






