import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProductFromCart } from '../reducers/cart/cartSlice';

export const ProductsList = ({ products }) => {
  const dispatch = useDispatch();

  const { productsList } = useSelector(state => state.cart);
  
  const handleAddOrRemoveProduct = (productId) => {
    const product = products.find(product => product.id === productId);
    if (productsList.find(pdt => pdt.id === productId)) {
      dispatch(removeProductFromCart(productId));
    } else {
      dispatch(addProduct(product));
    }
  }

  return (
    <>
      <h2 className='text-center my-12 text-xl text-fuchsia-950'>Listado de productos</h2>
      <div className="grid grid-cols-5 gap-4 mx-20">
        {
          products.map(product => {
            return (
              <div key={product.id} className="border p-4">
                <h4>{product.name}</h4>
                <p><b>Price:</b> {product.price}</p>
                <p><b>Category:</b> {product.category}</p>
                <button
                  className={productsList.find(pdt => pdt.id === product.id) ? "bg-red-500 text-white p-2 rounded-md mt-4" : "bg-fuchsia-700 text-white p-2 rounded-md mt-4"}
                  onClick={() => handleAddOrRemoveProduct(product.id)}
                >
                  {productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"} to Cart
                </button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
