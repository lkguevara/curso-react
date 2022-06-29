# Introducción
    - Para crear una aplicación utilizamos el comando npx create-react-app seguido del nombre que le quieras dar a tu aplicación. Por ejemplo: npx create-react-app my-app
    
    -Cuando ejecutas ese comando create-react-app va a crear una carpeta llama my-app con una serie de archivos y subcarpetas para que puedas empezar a trabajar en tu proyecto.

# ¿Qué incluye create-react-app?
    Un proyecto creado con create-react-app, además de React, incluye librerías como:

        - Webpack: que se encarga de procesar y empaquetar nuestro código JavaScript (con sus dependencias), archivos CSS y otros archivos estáticos como imágenes, vectores, fuentes, etc.

        - Babel: que nos permite usar nuevas características de ECMAScript.

        - PostCSS que es una librería para el procesamiento de CSS.

        - Jest que es una librería para testing.
        etc.

    Uno podría configurar un proyecto de React manualmente e incluir cada una de estas librerías, pero es bastante engorroso, create-react-app nos hace la vida más fácil.

# Estructura de carpeta
    Los dos archivos más importantes son:

        - public/index.html - la plantilla HTML de la aplicación.

        - src/index.js - el punto de entrada JavaScript de la aplicación.

    Puedes eliminar o renombrar otros archivos según tus necesidades.

    Dentro de src se incluyen todos los archivos JavaScript y CSS de tu aplicación.

    También es recomendable incluir otros archivos estáticos como imágenes y fuentes en esta carpeta. Puedes crear subcarpetas para organizar mejor los archivos.

    En public van todos los archivos estáticos que necesites incluir en la plantilla public/index.html.


# Scripts
    En la carpeta del proyecto puedes ejecutar los siguientes comandos:

        - npm start - inicia el servidor de desarrollo y abre un navegador con la aplicación.

        - npm test - ejecuta las pruebas.

        - npm run build - empaqueta la aplicación para producción en la carpeta build.

        - npm run eject - permite cambiar manualmente las librerías y configuración que utiliza create-react-app por defecto. Ten cuidado con este comando, una vez que se expulsa la configuración inicial no hay vuelta atrás.

# Fuente
<!-- https://jonmircha.com/react#create-react-app -->