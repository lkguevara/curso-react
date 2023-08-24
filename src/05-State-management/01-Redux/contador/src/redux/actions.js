// imports de los types
import {INCREMENTAR, DECREMENTAR } from './types'

export const incrementar = () => dispatch => {
    dispatch({
        type: INCREMENTAR
    })
}

export const decrementar = () => dispatch => {
    dispatch({
        type: DECREMENTAR
    })
}

