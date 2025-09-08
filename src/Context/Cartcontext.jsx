// src/Context/CartContext.jsx
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // array of objects

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: Math.max(i.qty - 1, 0) } : i
      ).filter((i) => i.qty > 0)
    );
  };

  const totalQty = cartItems.reduce((a, b) => a + b.qty, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQty, decreaseQty, totalQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
