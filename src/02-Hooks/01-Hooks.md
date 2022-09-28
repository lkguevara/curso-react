# Introducción
    El state son los valores internos que manejan la lógica y los datos de un componente, permite que éste reaccione a cualquier cambio lo que hará que se vuelva a renderizar en la interfaz. Para hacer cambios hay que hacer uso del método setState().

# Tipos de Hooks

    Básicos (en la mayoria de tus proyectos):
        useState: ¿Cuál es el estado de la aplicación?
        useEffect.
        useContext.

    Avanzados (tal vez no en todos tus proyectos):
        useReducer.
        useCallback.
        useRef.
        useMemo.
        useImperativeHandle.
        useLayoutEffect.
        useDebugValue.
    
# Reglas

    - Los Hooks se colocan en la parte superior de tus componentes de React.
    - No se deben colocar dentro de condicionales, tampoco después de un return.