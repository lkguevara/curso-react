# 1. ¿Qué es Redux Toolkit?
Redux Toolkit es una biblioteca oficial de Redux que nos ayuda a escribir código Redux más eficiente. Redux Toolkit incluye varias funciones que nos ayudan a escribir código Redux más corto y más fácil de entender. Redux Toolkit también incluye funciones para configurar el store de Redux y agregar middleware.

Redux Toolkit combina varias funciones y herramientas de Redux en una sola llamada, lo que permite crear un store de manera más rápida y sencilla. Algunas de las características principales de Redux Toolkit son:

  - configureStore: Una función que simplifica la creación de un store de Redux al combinar varias funciones y herramientas en una sola llamada. Esta función configura automáticamente algunas características como el uso de middlewares, la activación del modo de desarrollo y la habilitación de algunas extensiones de devtools.

  - createSlice: Una función que simplifica la definición de reducers al proporcionar una sintaxis más concisa y clara para la definición de acciones y estados. Esta función combina la definición de un slice del estado (un pedazo del estado de la aplicación) y la creación de un reducer que maneja las acciones que modifican ese slice del estado.

  - createAsyncThunk: Una función que simplifica la definición de acciones asíncronas al proporcionar una sintaxis clara y concisa para manejar el estado de las operaciones asíncronas y actualizar el store en consecuencia.

El paquete Redux Toolkit está destinado a ser la forma estándar de escribir la lógica de Redux . Originalmente se creó para ayudar a abordar tres preocupaciones comunes sobre Redux:

  "Configurar una tienda Redux es demasiado complicado"
  "Tengo que agregar muchos paquetes para que Redux haga algo útil"
  "Redux requiere demasiado código repetitivo"

# 2. Instalación
Para instalar Redux Toolkit, debemos ejecutar el siguiente comando en la terminal:
```
 npm install @reduxjs/toolkit react-redux
```
