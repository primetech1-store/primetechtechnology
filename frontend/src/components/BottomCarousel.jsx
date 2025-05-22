import { useEffect, useState, useRef } from "react";
import "./../App.css";

const bottomOfferItems = [
  { id: 4, name: "Smart Watch", description: "30% off!", price: 299, image: "/iphone16.jpg" },
  { id: 5, name: "Wireless Earbuds", description: "Limited stock", price: 199, image: "/iphone16.jpg" },
  { id: 6, name: "4K TV", description: "Special deal", price: 899, image: "/iphone16.jpg" },
];

const BottomCarousel = () => {
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
      setCurrent((prev) => (prev + 1) % bottomOfferItems.length);
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + bottomOfferItems.length) % bottomOfferItems.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % bottomOfferItems.length);
  };

  return (
    <div className="bottom-carousel-container">
      <div 
        className="bottom-carousel"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {bottomOfferItems.map((item, index) => (
          <div
            key={item.id}
            className={`bottom-carousel-item ${
              index === current ? "active" : ""
            } ${
              index === (current - 1 + bottomOfferItems.length) % bottomOfferItems.length ? "prev" : ""
            } ${
              index === (current + 1) % bottomOfferItems.length ? "next" : ""
            }`}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
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

export default BottomCarousel;