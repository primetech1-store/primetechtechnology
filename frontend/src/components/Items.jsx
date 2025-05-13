import React from "react";
import items from "../../public/products.json";
import { Link } from "react-router-dom";

const Items = () => {
  //add to local storage
  const handleAddCart = (item) => {
    const { id, name, description, price } = item; // Extract only serializable properties
    const cartItem = { id, name, description, price };

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCartItems = [...cartItems, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    alert(`${item.title} added to cart`);
  };

  //check cart count
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = cartItems.length;
  const cartText = cartCount > 0 ? `(${cartCount})` : "";

  return (
    <div className="items-wrapper">
      <section className="item-container">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} className="product-image" alt={item.name} />
            <div className="product-details">
              <h3 className="product-title">{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ZAR {item.price}</p>
              <button onClick={() => handleAddCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Items;
