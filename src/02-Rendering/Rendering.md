# 1 Ciclo de vida de los componentes:
Los componentes de React tienen un ciclo de vida que consta de tres fases: montaje, actualización y desmontaje junto con varios "métodos de ciclo de vida" que puede anular para ejecutar código en momentos específicos del proceso. Puede usar este diagrama de ciclo de vida como una hoja de trucos.

No se recomienda utilizar métodos de ciclo de vida manualmente. En su lugar, utilice el enlace useEffect con componentes funcionales.

![Alt text](cicloDeVida.png)

# 2 List and Keys:
Cuando renderiza listas en React, puede usar la keypropiedad para especificar una clave única para cada elemento. Esta clave se utiliza para identificar qué elemento actualizar cuando desea actualizar un elemento específico. Si no uso una key me va a aparecer el siguiente warning:
```bash
Warning: Each child in a list should have a unique "key" prop.
```

# 3 Eventos
- La forma en que React maneja los eventos es muy similar a como lo hace el DOM, pero hay algunas diferencias sintácticas.

- En React, los eventos son nombrados usando camelCase, en lugar de minúsculas. Por ejemplo, el evento de click es onClick en React, en lugar de onclick. También hay algunos eventos que no existen en el DOM, como el evento de onScroll. React normaliza estos eventos para que puedas usarlos de la misma manera que los eventos del DOM. 

# Sintáxis

            HTML                                JSX
<button onclick="activateLasers()">    <button onClick={activateLasers}>
<form onsubmit={e.handleSubmit}>       <form onSubmit={e.handleSubmit}>