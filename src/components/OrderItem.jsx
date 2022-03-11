import React from "react";

import "@styles/OrderItem.scss";

import CloseIcon from "@icons/icon_close.png";

const OrderItem = ({product}) => {
  return (
    <div className="OrderItem">
      <figure>
        <img
          src={product.category.image}
          alt={product.title}
        />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={CloseIcon} alt="close" />
    </div>
  );
};

export default OrderItem;
