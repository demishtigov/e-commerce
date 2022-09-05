import { createContext, useContext, useState, useEffect } from "react";
import {toast} from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQty, setTotalQty] = useState(0);
  const [qty, setQty] = useState(1);
  // console.log(cartItems)

  const onAdd = (product, qty) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice((prev) => prev + product.price * qty);
    setTotalQty((prev) => prev + qty);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            qty: cartProduct.qty + qty,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = qty;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart`);
  };

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    // if(qty <= 1) {
    //     return 1
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
          setShowCart,
          cartItems,
          totalPrice,
          totalQty,
          qty,
          incQty,
          decQty,
          onAdd,
          setTotalQty
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export const useStateContext = () => useContext(Context);
