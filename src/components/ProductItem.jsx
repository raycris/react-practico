import React, { useContext } from "react";

import "@styles/ProductItem.scss";

import AddToCartSVG from "@icons/bt_add_to_cart.svg";

import AppContext from "@context/AppContext";

const ProductItem = ({ product }) => {
  
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className="ProductItem">
      <img src={product.category.image} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={AddToCartSVG} alt="add cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
