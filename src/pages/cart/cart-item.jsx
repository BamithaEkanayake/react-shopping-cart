export const CartItem = (props) => {
  const { productName, price, productImage } = props.data;

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};
