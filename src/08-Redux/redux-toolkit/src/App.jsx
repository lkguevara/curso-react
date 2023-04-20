import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'

function App() {

  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1> Contador </h1>
      <h2> {counter} </h2>
      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(increment())}> + </button>

    </>
  )
}

export default App
