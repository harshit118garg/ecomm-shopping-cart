import React, { useContext } from "react";
import TableRow from "./TableRow";
import { CartContext } from "../App";

function ShoppingPanel() {
  const { items, totalItems, totalAmount } = useContext(CartContext);

  return (
    <div>
      <div className="panelBody">
        <div className="panelBodyContent shadow bg-success bg-opacity-25 p-4">
          <h2 className="text-warning">Shopping Cart</h2>
          <h3 className="text-dark display-5">
            You have <span id="total"> {totalItems} </span>items in your cart
          </h3>
        </div>
        <br />
        <div className="cartBody">
          <table className="table table-responsive">
            <tbody>
              {items.map((data) => {
                return <TableRow data={data} key={data.id} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="cart-total mt-4 mb-5">
          <h2 className="text-center text-dark text-uppercase">
            Cart Total : <span id="total">{totalAmount}</span> Rs. Only
          </h2>
          <button className="btn btn-warning checkoutBtn col-12">
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingPanel;
