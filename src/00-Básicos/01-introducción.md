# Definición
React es una biblioteca JavaScript altamente eficiente y *declarativa* que se utiliza para crear interfaces de usuario interactivas. React te insita a crear código declarativo (indicas el qué, no el cómo) y orientado a componentes.

Un componente es un pieza de código que puede representar una parte de la interfaz de usuario o una funcionalidad en particular que se puede encapsular y reutilizar en diferentes partes de un desarrollo o incluso en diferentes aplicaciones. Cada componente reaccionará a cambios internos (en su estado) o externos (nuevas propiedades recibidas) y se volvera a redibujar (renderizado) en la interfaz. Para ello React utiliza su Virtual DOM que es una copia del DOM original del navegador para sólo hacer los cambios necesarios en los nodos que hayan reaccionado y evitar redibujar todo el árbol del DOM.

# ¿Cuáles son las características principales de React?
Las características principales de React son:

-Componentes: React está basado en la componetización de la UI. La interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.

-Virtual DOM: React usa un DOM virtual para renderizar los componentes. El DOM virtual es una representación en memoria del DOM real. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz. En lugar de modificar el DOM real, React modifica el DOM virtual y, a continuación, compara el DOM virtual con el DOM real. De esta forma, React sabe qué cambios se deben aplicar al DOM real.

-Declarativo: React es declarativo, lo que significa que no se especifica cómo se debe realizar una tarea, sino qué se debe realizar. Esto hace que el código sea más fácil de entender y de mantener.

-Unidireccional: React es unidireccional, lo que significa que los datos fluyen en una sola dirección. Los datos fluyen de los componentes padres a los componentes hijos.

-Universal: React se puede ejecutar tanto en el cliente como en el servidor. Además, puedes usar React Native para crear aplicaciones nativas para Android e iOS.

<!-- Doc: https://es.react.dev/ -->
