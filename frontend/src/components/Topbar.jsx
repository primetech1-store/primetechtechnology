import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = cartItems.length;
  const cartText = cartCount > 0 ? `(${cartCount})` : "";

  return (
    <header className="topbar">
      <div className="topbar-left">
        <Link to="/payment" className="cart-link">
          🛒 Cart {cartText}
        </Link>
      </div>
      <div className="topbar-right">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/" onClick={toggleMenu}>
            Products
          </Link>
          <Link to="/footer" onClick={toggleMenu}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
