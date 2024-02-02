// Permite crear un slice de Redux con un nombre, un estado inicial y una serie de reducers que se encargarán de modificar el estado.
import {createSlice} from '@reduxjs/toolkit';

// Estado inicial del slice
const initialState = {
    totalCount: 0,
    productsList: [],
};

// Creación del slice
export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            state.productsList = [...state.productsList, action.payload];
            state.totalCount += 1;
        },
        removeProductFromCart: (state, action) => {
            state.productsList = state.productsList.filter(product => product.id !== action.payload);
            state.totalCount -= 1;
        }
    },
});

// Exportación de los reducers
export const { addProduct, removeProductFromCart} = cartSlice.actions;

// Exportación del estado
export default cartSlice.reducer;


