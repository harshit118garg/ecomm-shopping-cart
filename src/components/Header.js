import React, { useContext } from "react";
import { CartContext } from "../App";

function Header() {
  const { totalItems, totalAmount } = useContext(CartContext);

  return (
    <>
      <header>
        <div className="content">
          <div className="left">👈 COntinue &nbsp;SHopping </div>
          <div className="center">
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span> {totalItems} </span> items in your cart
          </div>
          <div className="right">
            <h2 className="text-dark display-5">
              Total Cost : <span id="total">{totalAmount}</span> Rs. only
            </h2>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
