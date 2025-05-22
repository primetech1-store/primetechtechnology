import { useEffect, useState, useRef } from "react";
import "./../App.css";

const specialOffers = [
  { 
    id: 1, 
    title: "Premium Headphones", 
    description: "Noise-cancelling with premium sound", 
    price: 599, 
    image: "/iphone16.jpg",
    discount: "30% OFF" 
  },
  { 
    id: 2, 
    title: "Smart Watch Pro", 
    description: "Health tracking & waterproof", 
    price: 899, 
    image: "/iphone16.jpg",
    discount: "Limited Time Offer" 
  },
  { 
    id: 3, 
    title: "4K Ultra HD TV", 
    description: "65-inch with HDR", 
    price: 12999, 
    image: "/iphone16.jpg",
    discount: "Free Installation" 
  },
  { 
    id: 4, 
    title: "Wireless Earbuds", 
    description: "24hr battery life", 
    price: 299, 
    image: "/iphone16.jpg",
    discount: "Buy 1 Get 1 Free" 
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % specialOffers.length);
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + specialOffers.length) % specialOffers.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % specialOffers.length);
  };

  return (
    <div className="bottom-carousel-container">
      <div className="special-offers-title">SPECIAL OFFERS</div>
      <div className="bottom-carousel">
        {specialOffers.map((item, index) => (
          <div
            key={item.id}
            className={`bottom-carousel-item ${
              index === current ? "active" : ""
            }`}
            style={{
              transform: `translateX(-${current * 100}%)`
            }}
          >
            <div className="offer-badge">{item.discount}</div>
            <img src={item.image} alt={item.name} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>ZAR {item.price}</p>
          </div>
        ))}
      </div>
      <button className="carousel-arrow left" onClick={goToPrev}>&lt;</button>
      <button className="carousel-arrow right" onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default Carousel;