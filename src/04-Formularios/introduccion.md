# 1 Definición
Un formulario en React es un componente que nos permite capturar información del usuario. Los formularios son una parte muy importante de cualquier aplicación web, ya que nos permiten interactuar con el usuario y obtener información de él.

# 2 Formularios en React
Los formularios en React son componentes controlados, es decir, los datos que se muestran en el formulario son controlados por el estado de React. Para crear un formulario en React, debemos crear un componente que contenga un elemento form, y dentro de este elemento form debemos crear un elemento input para cada campo del formulario.

# 3 Manejo de formularios
Existen dos maneras básicas de manejar formularios en React:
    
    * Formularios controlados
    * Formularios no controlados

# 4 Formularios controlados
Los formularios controlados son aquellos en los que los datos que se muestran en el formulario son controlados por el estado de React. Para crear un formulario controlado en React, debemos crear un componente que contenga un elemento form, y dentro de este elemento form debemos crear un elemento input para cada campo del formulario. Además, debemos crear un estado para cada campo del formulario, y debemos crear un evento onChange para cada campo del formulario, que actualice el estado del campo correspondiente.

# 5 Formularios no controlados
Los formularios no controlados son aquellos en los que los datos que se muestran en el formulario no son controlados por el estado de React. Para crear un formulario no controlado en React, debemos crear un componente que contenga un elemento form, y dentro de este elemento form debemos crear un elemento input para cada campo del formulario. Además, debemos crear una referencia para cada campo del formulario, y debemos crear un evento onSubmit para el formulario, que obtenga los datos de los campos del formulario a través de las referencias.