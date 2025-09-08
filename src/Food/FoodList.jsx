// src/Food/FoodList.jsx
import React, { useContext } from "react";
import foodItems from "./FoodData";
import "./FoodList.css";
import { CartContext } from "../Context/Cartcontext";

const FoodList = () => {
  const { addToCart, increaseQty, decreaseQty, cartItems } =
    useContext(CartContext);

  const getQty = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.qty : 0;
  };

  return (
    <div className="main-div">
      {foodItems.map((item) => (
        <div className="cart-div" key={item.id}>
          <img src={item.image} alt={item.name} className="img" />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <div className="qty-controls">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{getQty(item.id)}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button className="add-btn" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default FoodList;


