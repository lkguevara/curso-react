# 1. ¿Qué es Redux?
Redux es una biblioteca de JavaScript que se utiliza para manejar el estado de una aplicación. En lugar de almacenar el estado en múltiples componentes de una aplicación, Redux almacena el estado de manera centralizada en un objeto llamado store. Los componentes pueden acceder al estado y actualizarlo a través del store utilizando acciones y reducers. 

Redux es una biblioteca de JavaScript, por lo que se puede usar con cualquier biblioteca de interfaz de usuario, como React, Angular o Vue. Redux se puede usar con React a través de la biblioteca React-Redux.

# 2. ¿Qué es react redux?
React-Redux es una biblioteca que proporciona una integración entre Redux y React, lo que facilita la implementación de aplicaciones con Redux en React. React-Redux utiliza el patrón contenedor-componente para conectar los componentes de React al store de Redux. Un contenedor es un componente de React que se conecta al store y pasa el estado y las acciones como props a un componente hijo. El componente hijo no sabe nada sobre Redux y solo recibe el estado y las acciones como props del contenedor.

# 3. Store, reducers, actions, types

## 3.1. Store 
El Store es el objeto central que almacena el estado global de una aplicación Redux. El Store también maneja la lógica de despacho de acciones y la actualización del estado.

## 3.2. Types
Los types son constantes que se usan para definir los tipos de acciones que se pueden despachar en la aplicación. Los types son utilizados por los reducers para determinar qué acciones deben manejar y cómo actualizar el estado en consecuencia.

## 3.3. Actions
Las acciones son objetos simples que describen un cambio en el estado de la aplicación. Cada acción tiene un tipo y, opcionalmente, datos adicionales llamados "payload". Las acciones son despachadas por componentes de la aplicación y son recibidas por los reducers.

## 3.4. Reducers
Los reducers son funciones puras que reciben un estado y una acción, y devuelven un nuevo estado actualizado. Cada reducer maneja una parte del estado global de la aplicación y es responsable de actualizar solo esa parte del estado en respuesta a acciones específicas.

En resumen, el Store es el contenedor central para el estado de la aplicación, los reducers son funciones que actualizan el estado en respuesta a acciones específicas, las acciones describen los cambios en el estado, y los types son constantes utilizadas para definir los tipos de acciones que pueden ser despachadas en la aplicación.

# 4. Método dispatch
El método dispatch() es el principal medio para actualizar el estado en Redux. Se utiliza para enviar una acción al store de Redux, que luego será manejada por los reducers para actualizar el estado de la aplicación. El método dispatch() se puede llamar desde cualquier parte de la aplicación, incluidos los componentes de React.

Este método obligatoriamente va a tener una propiedad llamada type que es la que va a identificar la acción que se va a ejecutar. El dispatch simplemente es enviarle una acción al reducer.

# 5. Método subscribe
El método subscribe() se utiliza para registrar una función de devolución de llamada que se ejecutará cada vez que se despache una acción. El método subscribe() devuelve una función de cancelación que se puede llamar para eliminar la función de devolución de llamada del registro.

# 6. Conectar React con Redux (Provider)
Para conectar React con Redux, se debe envolver el componente principal de la aplicación con el componente Provider de React-Redux. El componente Provider se utiliza para proporcionar el store de Redux a todos los componentes de React en la aplicación. El componente Provider se importa de la biblioteca react-redux.

ejemplo:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

# 7. Provider // connect
El componente Provider se utiliza para proporcionar el store de Redux a todos los componentes de React en la aplicación. El componente Provider se importa de la biblioteca react-redux.

Connect es una función que se utiliza para conectar un componente de React a Redux. Connect toma dos argumentos: mapStateToProps y mapDispatchToProps. mapStateToProps es una función que se utiliza para seleccionar qué parte del estado global de la aplicación se pasa al componente como props. mapDispatchToProps es una función que se utiliza para seleccionar qué acciones se pasan al componente como props.

Con hooks de redux se puede hacer lo mismo que con connect pero de una forma más sencilla, no es necesario envolver el componente con connect, solo se importa el hook y se usa.

# 8. Redux Thunk
Redux Thunk es una biblioteca de middleware que se utiliza para manejar peticiones asíncronas en Redux. 
Redux thunk 
npm i redux-thunk

# Instalación y uso
1. npm install redux react-redux redux-devtools-extension redux-thunk
2. importar Provider de react-redux y el store de redux en el archivo index.js o main.js
3. Envolver reactDom.render con el componente Provider y pasarle como prop el store
- crear una carpeta llamada redux y dentro de ella los archivos store.js, actions.js, reducers.js y types.js

- En el archivo store importar el createStore y el reducer. Crear una constante llamada store y asignarle el createStore y pasarle como argumento el reducer. Exportar el store.

- En el archivo types se van a crear los nombres de los tipos de acciones que se van a despachar en la aplicación. Se exportan como constantes.

- En el archivo actions se van a crear las acciones que se van a despachar en la aplicación. Se exportan como funciones.

- En el archivo reducers se van a crear los reducers que se van a encargar de actualizar el estado en respuesta a las acciones. Se exportan como funciones.

