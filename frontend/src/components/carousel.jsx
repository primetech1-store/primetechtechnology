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

  const handleClick = (e) => {
    const width = e.currentTarget.offsetWidth;
    const x = e.nativeEvent.offsetX;
    if (x < width / 2) {
      setCurrent((prev) => (prev - 1 + specialOffers.length) % specialOffers.length);
    } else {
      setCurrent((prev) => (prev + 1) % specialOffers.length);
    }
  };

  return (
    <div className="items-wrapper">
      <div className="carousel" onClick={handleClick}>
        <div 
          className="item-container" 
          style={{ 
            display: 'flex',
            transition: 'transform 0.6s ease',
            transform: `translateX(-${current * 100}%)`,
            width: `${specialOffers.length * 100}%`
          }}
        >
          {specialOffers.map((item, index) => (
            <div
              key={item.id}
              className="item-card"
              style={{
                flex: '0 0 25%', // Show 4 items at a time (25% width each)
                opacity: index === current ? 1 : 0.8,
                transform: index === current ? 'scale(1.02)' : 'scale(0.98)',
                transition: 'all 0.3s ease',
                boxShadow: index === current ? '0 8px 24px rgba(30, 144, 255, 0.2)' : '0 4px 12px rgba(30, 144, 255, 0.1)',
                border: index === current ? '2px solid #1e90ff' : '1px solid #d0d7e0'
              }}
            >
              <div className="special-badge">{item.discount}</div>
              <img src={item.image} className="product-image" alt={item.title} />
              <div className="product-details">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-description">{item.description}</p>
                <p className="product-price">ZAR {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;