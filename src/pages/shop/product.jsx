import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price.toFixed(2)}</p>
      </div>
      <button className="addToCartButton" onClick={() => addToCart(id)}>
        Add To Cart
      </button>
    </div>
  );
};
