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
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const itemsPerPage = 4; // Show 4 offers at once

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + itemsPerPage) % specialOffers.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - itemsPerPage + specialOffers.length) % specialOffers.length
    );
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const visibleOffers = specialOffers.slice(
    currentIndex, 
    currentIndex + itemsPerPage
  );

  return (
    <div className="offers-carousel">
      <button className="carousel-arrow left" onClick={prevSlide}>&lt;</button>
      
      <div className="offers-container">
        {visibleOffers.map((offer) => (
          <div key={offer.id} className="offer-tile">
            <div className="offer-badge">{offer.discount}</div>
            <div className="offer-content">
              <h3>{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>
              <p className="offer-price">ZAR {offer.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="carousel-arrow right" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Carousel;