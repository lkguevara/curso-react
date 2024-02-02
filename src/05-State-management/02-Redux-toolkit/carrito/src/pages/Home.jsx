import { unSetUser } from '../reducers/user/userSlice';
import{ useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';;
import { useNavigate } from 'react-router-dom';
import { ProductsList } from '../components/ProductList';

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleLogout = () => {
    dispatch(unSetUser());
    navigate('/');
  };

  return (
    <>
      <div className='flex justify-center gap-10 items-center mt-10'>
        <h1 className="text-xl text-fuchsia-700 font-bold text-center mt-8">
          Bienvenido {users.email}
        </h1>
        <button className="bg-fuchsia-700 text-white p-2 rounded-md mt-4" onClick={handleLogout}>
          Cerrar Sesión
        </button>
        </div>
      <ProductsList products={products} />
    </>


  );
};

export default Home;
