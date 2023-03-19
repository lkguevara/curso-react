import {OBTENER_PERSONAJES} from './types';

const initialState = {
    personaje: [
        
    ],
    contador: 0,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case OBTENER_PERSONAJES:
            return{
                ...state,
                personaje: action.payload
            }
        
        default:
            return {... state}; //copia del estado
    }
}

export default rootReducer