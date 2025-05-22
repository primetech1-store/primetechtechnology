import { useEffect, useState, useRef } from "react";
import "./Carousel.css"; // Make sure this CSS file exists

const specialOffers = [
  {
    id: 1,
    name: "Smart Watch",
    offer: "30% OFF – Today Only!",
    image: "/promo1.jpg",
  },
  {
    id: 2,
    name: "Noise Cancelling Headphones",
    offer: "Buy 1 Get 1 Free!",
    image: "/promo2.jpg",
  },
  {
    id: 3,
    name: "4K Ultra HD TV",
    offer: "Save $200 on 55\" model",
    image: "/promo3.jpg",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    offer: "Now only $79!",
    image: "/promo4.jpg",
  },
  {
    id: 5,
    name: "Smart Home Bundle",
    offer: "Includes free installation",
    image: "/promo5.jpg",
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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % specialOffers.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + specialOffers.length) % specialOffers.length);
  };

  return (
    <div className="carousel">
      <h2 className="carousel-title">🔥 Special Offers 🔥</h2>
      <div className="carousel-container">
        <button className="carousel-arrow left" onClick={prevSlide}>
          &lt;
        </button>

        <div className="carousel-track">
          {specialOffers.map((offer, index) => (
            <div
              key={offer.id}
              className={`carousel-slide ${
                index === current
                  ? "active"
                  : index === (current - 1 + specialOffers.length) % specialOffers.length
                  ? "prev"
                  : index === (current + 1) % specialOffers.length
                  ? "next"
                  : ""
              }`}
            >
              <img src={offer.image} alt={offer.name} className="carousel-image" />
              <div className="carousel-info">
                <h3>{offer.name}</h3>
                <p>{offer.offer}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
