# Introducción
El estado son los valores internos que manejan la lógica y los datos de un componente, permite que éste reaccione a cualquier cambio lo que hará que se vuelva a renderizar en la interfaz. Los Hooks te permiten usar diferentes funciones de React desde tus componentes. Puedes usar los Hooks integrados o combinarlos para construir tu propio Hook. Esta página lista todos los Hooks integrados en React.

# Tipos de Hooks
Básicos (en la mayoria de tus proyectos):
    useState: *¿Cuál es el estado de la aplicación?*
    useEffect. *¿Qué debe hacer la aplicación cuando cambie el estado?*
    useContext. *¿Qué contexto tiene la aplicación?*

Avanzados (tal vez no en todos los proyectos):
    useReducer: *¿Qué acciones puede hacer la aplicación?*
    useCallback: *¿Qué funciones se pueden memorizar?*
    useRef: *¿Qué elementos se pueden referenciar?*
    useMemo: *¿Qué valores se pueden memorizar?*
    useImperativeHandle: *¿Qué valores se pueden exponer?*
    useLayoutEffect: *¿Qué efectos secundarios se pueden ejecutar?*
    useDebugValue: *¿Qué información se puede mostrar en las DevTools?*
    
# Reglas
- Los Hooks se colocan en la parte superior de tus componentes de React.
- No se deben colocar dentro de condicionales, tampoco después de un return.

<!-- https://es.react.dev/reference/react -->

