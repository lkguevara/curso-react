# 1 Definición
Redux es un contenedor predecible del estado de aplicaciones JavaScript. Redux es una excelente herramienta para manejar el estado de una aplicación. Sus principales beneficios son:

    - Estado global e innmutable
    - Mayor control del estado de la aplicación y el flujo de datos
    - Arquitectura escalable de datos

# 2 Flujo de la información
La principal ventaja de Redux es cómo administra los cambios de estado. Para entenderlo, es necesario conocer 3 conceptos clave:

    2.1 Store
En una aplicación Redux, el Store es el único lugar donde se almacena el estado de la aplicación. El Store es un objeto que contiene el estado de la aplicación y proporciona métodos para acceder al estado, actualizarlo y escuchar los cambios.

    # 2.2 State
El State es el estado de la aplicación. Es un objeto que contiene todos los datos de la aplicación. El State es inmutable, es decir, no se puede modificar directamente. Para modificar el State, se deben crear nuevas instancias del State. El State es de solo lectura

    # 2.3 Actions y Reducers
Las acciones son objetos que describen los cambios que se deben realizar en el State. Las acciones son la única fuente de información para el Store. Las acciones son objetos planos que contienen una propiedad type que indica el tipo de acción que se debe realizar. Las acciones son creadas por funciones llamadas **acciones (actions)**. Las acciones son enviadas al Store a través de la función **dispatch**.

# 3 Flujo de actualizaciones en Redux
    1 El componente recibe un evento (click, por ejemplo) y emite una acción.
    2 Esta acción, se pasa a la store, que es donde se guarda el estado único.
    3 La store comunica la acción junto con el estado actual a los reducers.
    4 Los reducers, devuelven un nuevo estado, probablemente modificado en base a la acción.
    5 Los componentes reciben el nuevo estado de la store.

# Instalación
Para instalar Redux, se debe ejecutar el siguiente comando:

    npm install redux

<!-- instalar react redux -->
    npm install react-redux


