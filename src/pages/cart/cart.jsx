import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal Amount: ${totalAmount.toFixed(2)}</p>
          <button> Checkout </button>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};
