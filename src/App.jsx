import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import FoodList from "./Food/FoodList";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext, CartProvider } from "./Context/Cartcontext";
import CartModal from "./CartModal/Cartmodal";

function Navbar({ shrink, onCartClick }) {
  const { totalQty } = useContext(CartContext);

  return (
    <nav className={shrink ? "shrink" : ""}>
      <h1>Food Cart</h1>
      <div className="cart-icon" onClick={onCartClick}>
        <FaShoppingCart className="Fa-cart" />
        {totalQty > 0 && <span>{totalQty}</span>}
      </div>
    </nav>
  );
}

function App() {
  const [shrink, setShrink] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CartProvider>
      <Navbar shrink={shrink} onCartClick={() => setShowCart(true)} />
      {showCart && <CartModal onClose={() => setShowCart(false)} />}

      <div style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "40px" }}>
          🍔 Food Ordering App
        </h1>
        <FoodList />
      </div>
    </CartProvider>
  );
}

export default App;
