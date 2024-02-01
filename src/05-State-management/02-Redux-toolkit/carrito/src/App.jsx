import { useSelector, useDispatch } from "react-redux";
import {setUser } from "./reducers/user/userSlice";
import "./App.css";
import Login from "./pages/Login";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  return (
    <div>
      <Login /> 
    </div>
  );
}
// https://fakestoreapi.com/

export default App;
