import React from "react";
import { PRODUCTS } from "../../products";

export const Product = (props) => {
  const { productName, price, productImage } = props.data;

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};
