import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => setUsers(response.data))
  }, []);

  return (
    <div>
      <h1 className="text-xl text-fuchsia-700 font-bold text-center mt-8">
        Iniciar Sesión
      </h1>

      <form className="flex flex-col items-center mt-8">
        <input
          className="border border-gray-400 p-2 mb-4"
          type="text"
          placeholder="Nombre de usuario"
        />
        <input
          className="border border-gray-400 p-2 mb-4"
          type="password"
          placeholder="Contraseña"
        />
        <button className="bg-fuchsia-700 text-white p-2 w-32" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
