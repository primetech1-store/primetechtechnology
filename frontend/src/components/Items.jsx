import React, { useState } from "react";
import items from "../../products.json";
import { Link } from "react-router-dom";

const Items = () => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  //add to local storage
  const handleAddCart = (item) => {
    const { id, name, description, price } = item;
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
          <div
            key={item.id}
            className="item-card"
            onClick={() =>
              setExpandedItemId(expandedItemId === item.id ? null : item.id)
            }
            style={{ cursor: "pointer" }}
          >
            <img src={item.image} className="product-image" alt={item.name} />
            <div className="product-details">
              <h3 className="product-title">{item.title}</h3>
              {expandedItemId === item.id && (
                <>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </>
              )}
              <p>Price: TL {item.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddCart(item);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Items;