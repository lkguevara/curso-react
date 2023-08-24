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

# 3. Qué incluye Redux Toolkit
Redux Toolkit incluye estas API:

  - configureStore(): ajusta createStorepara proporcionar opciones de configuración simplificadas y buenos valores predeterminados. Puede combinar automáticamente sus reductores de rebanadas, agregar cualquier middleware Redux que proporcione, incluye redux-thunkpor defecto y permite el uso de la extensión Redux DevTools.

  - createReducer(): eso le permite proporcionar una tabla de búsqueda de tipos de acción para funciones de reducción de casos, en lugar de escribir declaraciones de cambio. Además, utiliza automáticamente la immerbiblioteca para permitirle escribir actualizaciones inmutables más simples con código mutativo normal, como state.todos[3].completed = true.
  - createAction(): genera una función creadora de acción para la cadena de tipo de acción dada. La función misma se ha toString()definido, por lo que se puede usar en lugar de la constante de tipo.

  - createSlice(): acepta un objeto de funciones reductoras, un nombre de segmento y un valor de estado inicial, y genera automáticamente un reductor de segmento con los creadores de acción y los tipos de acción correspondientes.

  - createAsyncThunk: acepta una cadena de tipo de acción y una función que devuelve una promesa, y genera un procesador que distribuye pending/fulfilled/rejectedtipos de acción basados ​​en esa promesa

  - createEntityAdapter: genera un conjunto de reductores y selectores reutilizables para gestionar datos normalizados en la tienda
La createSelectorutilidad de la biblioteca Reselect , reexportada para facilitar su uso.
