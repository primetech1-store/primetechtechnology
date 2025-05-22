import { useEffect, useState, useRef } from "react";
import "./../App.css";

const happyClients = [
  { 
    id: 1, 
    clientName: "Sarah M.", 
    purchase: "Smart Watch", 
    testimonial: "Absolutely love my new watch! The health tracking features are amazing.", 
    image: "/happyclient1.jpg" 
  },
  { 
    id: 2, 
    clientName: "James T.", 
    purchase: "Wireless Earbuds", 
    testimonial: "Best earbuds I've ever owned. The battery life is incredible!", 
    image: "/happyclient2.jpg" 
  },
  { 
    id: 3, 
    clientName: "The Johnson Family", 
    purchase: "4K Ultra HD TV", 
    testimonial: "Movie nights will never be the same. The picture quality is stunning!", 
    image: "/happyclient3.jpg" 
  },
  { 
    id: 4, 
    clientName: "Lisa K.", 
    purchase: "Premium Headphones", 
    testimonial: "Worth every penny! The noise cancellation is perfect for my commute.", 
    image: "/happyclient4.jpg" 
  },
  { 
    id: 5, 
    clientName: "David & Emma", 
    purchase: "Smart Home Bundle", 
    testimonial: "Transformed our home. The installation team was fantastic!", 
    image: "/happyclient5.jpg" 
  },
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
      setCurrent((prev) => (prev + 1) % happyClients.length);
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const nextClient = () => {
    setCurrent((prev) => (prev + 1) % happyClients.length);
  };

  const prevClient = () => {
    setCurrent((prev) => (prev - 1 + happyClients.length) % happyClients.length);
  };

  return (
    <div className="testimonial-carousel">
      <h2 className="testimonial-title">Our Happy Clients</h2>
      <div className="testimonial-container">
        <button className="testimonial-arrow left" onClick={prevClient}>&lt;</button>
        
        <div className="testimonial-track">
          {happyClients.map((client, index) => (
            <div
              key={client.id}
              className={`testimonial-slide ${
                index === current ? 'active' : 
                index === (current - 1 + happyClients.length) % happyClients.length ? 'prev' :
                index === (current + 1) % happyClients.length ? 'next' : ''
              }`}
            >
              <div className="client-content">
                <img src={client.image} alt={client.clientName} className="client-image" />
                <div className="client-details">
                  <h3>{client.clientName}</h3>
                  <p className="client-purchase">Purchased: {client.purchase}</p>
                  <p className="client-testimonial">"{client.testimonial}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="testimonial-arrow right" onClick={nextClient}>&gt;</button>
      </div>
    </div>
  );
};

export default BottomCarousel;