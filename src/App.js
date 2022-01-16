import React, { useEffect, createContext, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import ShoppingPanel from "./components/ShoppingPanel";
import CartData from "./CartData";
import reducer from "./components/reducer";

export const CartContext = createContext();

const initialState = {
  items: CartData,
  totalAmount: 0,
  totalItems: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (index) => {
    // console.log("item deleted", index);
    return dispatch({
      type: "RM_ITEM",
      payload: index,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: "RM_ALL",
    });
  };

  const increment = (index) => {
    return dispatch({
      type: "INC_QUANT",
      payload: index,
    });
  };

  const decrement = (index) => {
    return dispatch({
      type: "DEC_QUANT",
      payload: index,
    });
  };

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
    console.log("hello");
  }, [state.items]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}
    >
      <Header />
      <ShoppingPanel />
    </CartContext.Provider>
  );
}

export default App;
