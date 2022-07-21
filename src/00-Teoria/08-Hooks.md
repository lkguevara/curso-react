# Introducción
    El state son los valores internos que manejan la lógica y los datos de un componente, permite que éste reaccione a cualquier cambio lo que hará que se vuelva a renderizar en la interfaz.Para hacer cambios hay que hacer uso del método setState().

# Tipos de Hooks

    Básicos (en la mayoria de tus proyectos):
        useState.
        useEffect.

    Avanzados (tal vez no en todos tus proyectos):
        useContext.
        useRef.
        useReducer.
        useCallback.
        useMemo.

# useState
    Devuelve un valor con estado y una función para actualizarlo. Permite manipular el estado de un componente funcional. Para actualizar el estado tenemos que utilizar el método resultante de la destructuración de useState y pasarle el nuevo valor.
    const [variable, setVariable] = useState(estadoInicial)

# useEffect
    Permite hacer uso del ciclo de vida en un componente funcional. useEffect recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, ya sea por cambios del estado o las propiedades. permite que los componentes funcionales tengan métodos de ciclo de vida. 

    useEffect( () => {

    }, [])

# Reglas

    - Los Hooks se colocan en la parte superior de tus componentes de React.
    - No se deben colocar dentro de condicionales, tampoco después de un return.