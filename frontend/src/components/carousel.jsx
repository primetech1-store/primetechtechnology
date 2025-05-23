import { useEffect, useState, useRef } from "react";
import "./../App.css";

const OfferItems = [
  { 
    id: 1, 
    name: "iPhone 13 Bundle", 
    description: "iPhone 13 + AirPods Pro 3 + Analog Watch", 
    price: 299, 
    image: "/promo1.jpg" 
  },
  { 
    id: 2, 
    name: "iPhone 15 Bundle", 
    description: "iPhone 15 + AirPods Pro 3 + Analog Watch", 
    price: 199, 
    image: "/promo2.jpg" 
  },
  { 
    id: 3, 
    name: "iPhone 15 Pro Bundle", 
    description: "iPhone 15 Pro + AirPods Pro 3 + Analog Watch", 
    price: 899, 
    image: "/promo3.jpg" 
  },
  { 
    id: 4, 
    name: "iPhone 14 Bundle", 
    description: "iPhone 14 + AirPods Pro 3 + Analog Watch", 
    price: 899, 
    image: "/promo4.jpg" 
  },
  { 
    id: 5, 
    name: "iPhone 15 Pro Max Bundle", 
    description: "iPhone 15 Pro Max + AirPods Pro 3 + Analog Watch", 
    price: 899, 
    image: "/promo5.jpg" 
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const carouselRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % OfferItems.length);
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const handleClick = (e) => {
    const { left, width } = carouselRef.current.getBoundingClientRect();
    const clickPosition = e.clientX - left;
    
    if (clickPosition < width / 2) {
      setCurrent((prev) => (prev - 1 + OfferItems.length) % OfferItems.length);
    } else {
      setCurrent((prev) => (prev + 1) % OfferItems.length);
    }
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="carousel-container">
      <div 
        className="carousel" 
        onClick={handleClick}
        ref={carouselRef}
      >
        <div 
          className="carousel-track" 
          style={{ 
            transform: `translateX(-${current * 100}%)` 
          }}
        >
          {OfferItems.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-slide ${index === current ? 'active' : ''}`}
            >
              <div className="slide-content">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                />
                <div className="slide-info">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">ZAR {item.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="carousel-dots">
        {OfferItems.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;