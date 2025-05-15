// filepath: /home/kim/Documents/stripe1/react-stripe-payment/frontend/src/components/carousel.jsx
import { useState } from "react";
import "./../App.css";

const offerItems = [
  { id: 1, name: "Iphone 16 promax", description: "20% off!", price: 400, image: "iphone15plus.jpg" },
  { id: 2, name: "PS 4", description: "Limited time deal", price: 1020, image: "playstation 4 pro 1 TB.jpg" },
  { id: 3, name: "PS 5", description: "Buy 1 Get 1 Free", price: 600, image: "playstation 5 standard edition.jpg" },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % offerItems.length);
  const prev = () => setCurrent((current - 1 + offerItems.length) % offerItems.length);

  return (
    <div className="carousel">
      <button onClick={prev}>&lt;</button>
      <div className="carousel-item">
        <img src={offerItems[current].image} alt={offerItems[current].name} />
        <h3>{offerItems[current].name}</h3>
        <p>{offerItems[current].description}</p>
        <p>ZAR {offerItems[current].price}</p>
      </div>
      <button onClick={next}>&gt;</button>
    </div>
  );
};

export default Carousel;