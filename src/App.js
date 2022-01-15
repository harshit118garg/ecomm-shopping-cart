import React, { createContext, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import ShoppingPanel from "./components/ShoppingPanel";
import CartData from "./CartData";
import reducer from "./components/reducer";

export const CartContext = createContext();

const initialState = {
  items: CartData,
  totalAmount: 50000,
  totalItems: CartData.length,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (index) => {
    console.log("item deleted", index);
    return dispatch({
      type: "RM_ITEM",
      payload: index,
    });
  };

  return (
    <CartContext.Provider value={{ ...state, removeItem }}>
      <Header />
      <ShoppingPanel />
    </CartContext.Provider>
  );
}

export default App;
