import axios from 'axios'

// actions types
export const GET_USERS = "GET_USERS";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const ADD_USER = "ADD_USER";	
export const CLEAN_DETAIL = "CLEAN_DETAIL";

// action creators
export const getUsers = () => {
    return (dispatch) => {
       fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((data) => dispatch ({
            type: GET_USERS,
            payload: data
         }))
    }
}

export const getUserDetail = (id) => {
    return (dispatch) => {
       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then(response => {
        dispatch({
            type: GET_USER_DETAIL,
            payload: response.data
        })
       })
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}

export const createUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}
