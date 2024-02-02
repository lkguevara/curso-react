import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "../reducers/user/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    token: ''
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('https://fakestoreapi.com/users')
      .then((response) => {
        const users = response.data;
        const userLoged = users.find((u) => u.email === userData.email);

        if (userLoged) {
          if (userLoged.password == userData.password) {
            dispatch(setUser({
              email: userLoged.email,
              fullName: userLoged.username,
              token: Date.now()
            }));
            navigate('/home');
          }
        }
      });
    }

  return (
    <div>
      <h1 className="text-xl text-fuchsia-700 font-bold text-center mt-8">
        Iniciar Sesión
      </h1>

      <form className="flex flex-col items-center mt-8" onSubmit={handleSubmit}>
        <input
          className="border border-gray-400 p-2 mb-4"
          type="text"
          placeholder="Nombre de usuario"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          className="border border-gray-400 p-2 mb-4"
          type="text"
          placeholder="Contraseña"
          value={userData.password}
          name="password"
          onChange={handleChange}
        />
        <button className="bg-fuchsia-700 text-white p-2 w-32" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
