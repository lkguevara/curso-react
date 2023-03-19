/*import {createStore} from 'redux';
import rootReducer from './reducer';
const store = createStore(rootReducer);
export default store*/

// se realiza de esta manera para poder utilizar la extension de redux devtools en el navegador y usar funciones asincronas.

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
