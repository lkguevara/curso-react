# 1. Definición
React Router es una librería que nos permite crear aplicaciones web con navegación. Es decir, nos permite crear aplicaciones web que tengan múltiples páginas, y que cada una de estas páginas tenga su propia URL.

# 2. Instalación

Para usar React Router en la web, debe ejecutar:
    npm i react-router-dom en la terminal. 

React Router es la librería más popular para la gestión de rutas en un proyecto de React, esta tiene tres componentes esenciales:

<BrowserRouter/> → Conecta nuestra aplicación a la URL del navegador, es decir mantiene la interfaz de usuario en sincronía con la URL del navegador mediante la API History de HTML5.

<Routes/> → Genera un árbol de rutas y a partir de este nos permite reemplazar la vista con el componente que coincide con la URL de nuestra barra de navegación y nos va a renderizar solamente dicho componente.

<Route/> → Representa una ruta en el árbol, necesita al menos las siguientes propiedades path y element, para representar una ruta.

# 3. NavLink
Si queremos que el usuario pueda navegar entre las diferentes rutas de nuestra aplicación, debemos usar el componente NavLink, este componente es muy similar al componente Link, pero tiene algunas diferencias, por ejemplo, NavLink nos permite agregar estilos a la ruta activa, es decir, a la ruta que se encuentra en la URL del navegador, además no recarga la página cuando se hace click en el enlace.

# 4 Link
El componente Link nos permite navegar entre las diferentes rutas de nuestra aplicación, este componente es muy similar al componente NavLink, pero no tiene algunas de las características que tiene NavLink, por ejemplo, Link no nos permite agregar estilos a la ruta activa.

# 5. Params
Los parámetros de ruta son valores que se pasan a través de la URL, estos parámetros se pueden usar para identificar recursos únicos, por ejemplo, si tenemos una aplicación de blog, podemos usar los parámetros de ruta para identificar cada publicación de nuestro blog, de esta manera, cada publicación tendrá su propia URL.

# 6. Navigate
El componente Navigate nos permite navegar entre las diferentes rutas de nuestra aplicación. 
<!-- https://www.escuelafrontend.com/react-router-6 -->