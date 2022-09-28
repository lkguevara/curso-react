# Introducción
    - La forma en que React maneja los eventos es muy similar a como lo hace el DOM, pero hay algunas diferencias sintácticas.

    - En React, los eventos son nombrados usando camelCase, en lugar de minúsculas. Por ejemplo, el evento de click es onClick en React, en lugar de onclick. También hay algunos eventos que no existen en el DOM, como el evento de onScroll. React normaliza estos eventos para que puedas usarlos de la misma manera que los eventos del DOM. 

# Sintáxis

            HTML                                JSX
<button onclick="activateLasers()">    <button onClick={activateLasers}>
<form onsubmit={e.handleSubmit}>       <form onSubmit={e.handleSubmit}>