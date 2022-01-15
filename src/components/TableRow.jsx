import React, { useContext } from "react";
import { CartContext } from "../App";

const TableRow = (props) => {
  const { id, image, description, title, rating, price } = props.data;

  const { removeItem } = useContext(CartContext);
  return (
    <>
      <tr className="d-flex align-items-center justify-content-between">
        <td>
          <img
            src={image}
            alt="cartItem"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title={description}
          />
        </td>
        <td>
          <h3 className="display-3">{title}</h3>
          <br />
          <p className="rating display-5">User Rating's : {rating.rate}</p>
        </td>
        <td>
          <div className="counter">
            <span>
              <i className="fa fa-plus"></i>
            </span>
            <input type="number" placeholder="2" className="inputCount" />
            <span>
              <i className="fa fa-minus"></i>
            </span>
          </div>
        </td>
        <td>
          <h2 className="badge rounded-pill bg-danger">{price}</h2>
        </td>
        <td>
          <span>
            <i className="fa fa-trash-o" onClick={() => removeItem(id)} />
          </span>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
