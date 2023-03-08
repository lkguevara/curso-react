// imports de los types
import {INCREMENTAR, DECREMENTAR } from './types'

// estado inicial del reducer
const initialState = {
    contador: 0
}

//  reducer

const contadorReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENTAR:
            return {
                ...state,
                contador: state.contador + 1
            }
        case DECREMENTAR:
            return {
                ...state,
                contador: state.contador - 1
            }
        default:
            return state;
    }
}

export default contadorReducer
