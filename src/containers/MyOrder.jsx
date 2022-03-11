import React, { useContext } from "react";

import AppContext from "@context/AppContext";

import OrderItem from "@components/OrderItem";

import "@styles/MyOrder.scss";

import Arrow from "@icons/flechita.svg";

const MyOrder = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={Arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((item) => (
          <OrderItem product={item} key={`orderItem-${item.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$5877</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
