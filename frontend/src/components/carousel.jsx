import { useEffect, useState, useRef } from "react";
import "./../App.css";

const offerItems = [
  { id: 1, name: "Iphone 16 promax", description: "20% off!", price: 400, image: "iphone15plus.jpg" },
  { id: 2, name: "PS 4", description: "Limited time deal", price: 1020, image: "playstation 4 pro 1 TB.jpg" },
  { id: 3, name: "PS 5", description: "Buy 1 Get 1 Free", price: 600, image: "playstation 5 standard edition.jpg" },
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
      setCurrent((prev) => (prev + 1) % offerItems.length);
    }, 2000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const handleClick = (e) => {
    const width = e.currentTarget.offsetWidth;
    const x = e.nativeEvent.offsetX;
    if (x < width / 2) {
      setCurrent((prev) => (prev - 1 + offerItems.length) % offerItems.length);
    } else {
      setCurrent((prev) => (prev + 1) % offerItems.length);
    }
  };

  return (
    <div className="carousel" onClick={handleClick}>
      <div className="carousel-track" style={{ display: 'flex', transition: 'transform 0.6s ease', transform: `translateX(-${current * 100}%)` }}>
        {offerItems.map((item, index) => (
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
            <p>TL {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
