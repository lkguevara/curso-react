# 1. Definición
React Router es una librería que nos permite crear aplicaciones web con navegación. Es decir, nos permite crear aplicaciones web que tengan múltiples páginas, y que cada una de estas páginas tenga su propia URL.

# 2. Instalación

Para usar React Router en la web, debe ejecutar:
    npm i react-router-dom en la terminal. 

React Router es la librería más popular para la gestión de rutas en un proyecto de React, esta tiene tres componentes esenciales:

<BrowserRouter/> → Conecta nuestra aplicación a la URL del navegador, es decir mantiene la interfaz de usuario en sincronía con la URL del navegador mediante la API History de HTML5.

<Routes/> → Genera un árbol de rutas y a partir de este nos permite reemplazar la vista con el componente que coincide con la URL de nuestra barra de navegación y nos va a renderizar solamente dicho componente.

<Route/> → Representa una ruta en el árbol, necesita al menos las siguientes propiedades path y element, para representar una ruta.

<!-- https://www.escuelafrontend.com/react-router-6 -->