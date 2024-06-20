import { useSelector, useDispatch } from "react-redux";
import ItemList from "../components/ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //in order to read the data from the store we need to subscribe to the store using selector//
  const cartItem = useSelector((store) => store.cart.item);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl"> Cart </h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem.length === 0 && <h1> Plaese add items to your cart..! </h1>}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
