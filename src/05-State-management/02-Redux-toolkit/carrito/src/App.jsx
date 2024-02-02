import { useSelector, useDispatch } from "react-redux";
import {setUser } from "./reducers/user/userSlice";
import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
// https://fakestoreapi.com/

export default App;
