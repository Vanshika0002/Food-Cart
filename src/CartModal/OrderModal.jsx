import React from "react";
import "./OrderModal.css";

const OrderModal = ({ isOpen, onClose, foodName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>🎉 Congratulations!</h2>
        <p>You ordered: <strong>{foodName}</strong></p>
        <p>Thank you 😊</p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default OrderModal;
