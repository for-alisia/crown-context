/** Libraries */
import React, { createContext, useState, useEffect } from 'react';

/** Utils */
import {
  addItemToCart,
  removeItemFromCart,
  getTotal,
  filterItemFromCart,
  getItemsCount,
} from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: (item) => {},
  removeItem: (item) => {},
  clearItemFromCart: (item) => {},
  cartItemsCount: 0,
  total: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [total, setTotal] = useState(0);

  const toggleHidden = () => setHidden(!hidden);
  const addItem = (item) => {
    setCartItems(addItemToCart(cartItems, item));
  };
  const removeItem = (item) => {
    setCartItems(removeItemFromCart(cartItems, item));
  };

  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getItemsCount(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setTotal(getTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount,
        removeItem,
        total,
        clearItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
