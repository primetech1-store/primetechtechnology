import { useEffect, useState, useRef } from "react";
import "./../App.css";

const OfferItems = [
  { id: 4, name: "Smart Watch", description: "30% off!", price: 299, image: "/iphone16.jpg" },
  { id: 5, name: "Wireless Earbuds", description: "Limited stock", price: 199, image: "/iphone16.jpg" },
  { id: 6, name: "4K TV", description: "Special deal", price: 899, image: "/iphone16.jpg" },
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
      setCurrent((prev) => (prev + 1) % OfferItems.length);
    }, 2000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const handleClick = (e) => {
    const width = e.currentTarget.offsetWidth;
    const x = e.nativeEvent.offsetX;
    if (x < width / 2) {
      setCurrent((prev) => (prev - 1 + OfferItems.length) % OfferItems.length);
    } else {
      setCurrent((prev) => (prev + 1) % OfferItems.length);
    }
  };

  return (
    <div className="carousel" onClick={handleClick}>
      <div 
        className="carousel-track" 
        style={{ 
          display: 'flex', 
          transition: 'transform 0.6s ease', 
          transform: `translateX(-${current * 100}%)` 
        }}
      >
        {bottomOfferItems.map((item, index) => (
          <div
            key={item.id}
            className="carousel-item"
            style={{
              flex: '0 0 100%',
              opacity: index === current ? 1 : 0.4,
              transform: index === current ? 'scale(1)' : 'scale(0.9)',
              transition: 'opacity 0.5s, transform 0.5s',
            }}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>ZAR {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;