// importando un store
import { createStore } from 'redux';

// funcion reducer
const contadorReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENTAR':
        return state + 1;
        case 'DECREMENTAR':
        return state - 1;
        default:
        return state;
    }
}
// creando un store
const store = createStore(contadorReducer);

// suscribiendo al store
store.subscribe(() => {
    console.log(store.getState());
});


// despachando acciones
store.dispatch({ type: 'INCREMENTAR' });
store.dispatch({ type: 'INCREMENTAR' });
store.dispatch({ type: 'INCREMENTAR' });
store.dispatch({ type: 'DECREMENTAR' });









