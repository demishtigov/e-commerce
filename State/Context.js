import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQty, setTotalQty] = useState();
  const [qty, setQty] = useState(0);

  return (
    <>
      <Context.Provider
        value={{ showCart, cartItems, totalPrice, totalQty, qty }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export const useStateContext = () => useContext(Context)