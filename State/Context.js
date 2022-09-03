import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQty, setTotalQty] = useState();
  const [qty, setQty] = useState(0);

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    // if(qty <= 0) {
    //     return 0
    // }
    // return setQty(prev => prev -1)
    setQty((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };

  return (
    <>
      <Context.Provider
        value={{
          showCart,
          cartItems,
          totalPrice,
          totalQty,
          qty,
          incQty,
          decQty,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export const useStateContext = () => useContext(Context);
