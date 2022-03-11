import React, { useState } from "react";
import "@styles/Header.scss";

import Menu from "@components/Menu";

import Logo from "@logos/logo_yard_sale.svg";
import IconMenu from "@icons/icon_menu.svg";
import ShoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <img src={IconMenu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={Logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Clothes</a>
          </li>
          <li>
            <a href="">Electronics</a>
          </li>
          <li>
            <a href="">Furnitures</a>
          </li>
          <li>
            <a href="">Toys</a>
          </li>
          <li>
            <a href="">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            JoeDumas@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={ShoppingCart} alt="" />
            <div>5</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;
