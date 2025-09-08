// src/CartModal.jsx
import React, { useContext } from "react";
import { CartContext } from "../Context/Cartcontext";
import "./Cartmodal.css";

const CartModal = ({ onClose }) => {
  const { cartItems, increaseQty, decreaseQty } = useContext(CartContext);

  return (
   <div className="modal-overlay">
  <div className="modal">
    <div className="modal-content">
      <h2>Your Cart</h2>  {/* Sticky heading */}
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="modal-item">
            <img src={item.image} alt={item.name} className="modal-img" />
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <div className="qty-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>

    <button className="close-btn" onClick={onClose}>Close</button>
  </div>
</div>

  );
};

export default CartModal;
