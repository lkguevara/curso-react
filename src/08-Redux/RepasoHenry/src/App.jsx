import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Form from "./components/Form"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Detail from "./components/Detail"

function App() {

  return (
    <div>
      {/* El nav se coloca fuera de routes para que siempre se muestre */}
      <Nav />

      <Routes>
        <Route path = '/' element={<Home />}></Route>
        <Route path = '/about' element={<About />}></Route>
        <Route path = '/detail/:id' element={<Detail />}></Route>
        <Route path = '/form' element={<Form />}></Route>
      </Routes>
    </div>
  )
}

export default App
