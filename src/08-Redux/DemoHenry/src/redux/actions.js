import { OBTENER_PERSONAJES } from './types';
import axios from 'axios';

export const getPersonaje = () => {
    /* Aplicando Fetch
    return (dispatch) => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: OBTENER_PERSONAJES,
                    payload: data.results,
                });
            });
    };*/

    // aplicando axios
    return (dispatch) => {
        axios
            .get('https://rickandmortyapi.com/api/character')
            .then((res) => {
                dispatch({
                    type: OBTENER_PERSONAJES,
                    payload: res.data.results,
                });
            });
    };
};




