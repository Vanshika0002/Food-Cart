import React, { useContext, useState } from "react";
import { CartContext } from "../Context/Cartcontext";
import "./Cartmodal.css";
import OrderModal from "./OrderModal";

const CartModal = ({ onClose }) => {
  const { cartItems, increaseQty, decreaseQty } = useContext(CartContext);

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState("");

  const handleOrderClick = (foodName) => {
    setSelectedFood(foodName);
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedFood("");
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
      
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cartItems.map((item) => (
                <div className="modal-item-row" key={item.id}>
                  <div className="modal-item">
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

        
                  <button
                    className="order-btn"
                    onClick={() => handleOrderClick(item.name)}
                  >
                    Order
                  </button>
                </div>
              ))
            )}


          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>


      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={closeOrderModal}
        foodName={selectedFood}
      />
    </>
  );
};

export default CartModal;
