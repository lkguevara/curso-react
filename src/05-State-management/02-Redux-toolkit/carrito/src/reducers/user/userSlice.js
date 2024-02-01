// Permite crear un slice de Redux con un nombre, un estado inicial y una serie de reducers que se encargarán de modificar el estado.
import {createSlice} from '@reduxjs/toolkit';

// Estado inicial del slice
const initialState = {
    email: '',
    fullName: '',
    token: '',
};

// Creación del slice
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
            state.token = action.payload.token;
        },
        unSetUser: (state) => {
            state.email = '';
            state.fullName = '';
            state.token = '';
        },
    },
});

// Exportación de los reducers
export const { setUser, unSetUser } = userSlice.actions;

// Exportación del estado
export default userSlice.reducer;

