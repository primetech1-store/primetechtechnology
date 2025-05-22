import { useEffect, useState, useRef } from "react";
import "./../App.css";

const happyClients = [
  { 
    id: 1, 
    clientName: "Sarah Mpho.", 
    purchase: "Iphone 13 Pro Max", 
    testimonial: "I just got my phone am so happy and thanks for ukuthembeka kwakho.", 
    image: "/happyclient1.jpg" 
  },
  { 
    id: 2, 
    clientName: "Miss Thando", 
    purchase: "Iphone 15 Pro Max", 
    testimonial: "Thank you so much 🙏, this made my day! Thanks for the wonderful service 💯 and communication. Will come back soon.", 
    image: "/happyclient2.jpg" 
  },
  { 
    id: 3, 
    clientName: "Nkozi__", 
    purchase: "Iphone 15 Pro Max", 
    testimonial: "My phone is here. I am so happyyy 😄thank you so very much 🙏. Please you overly delivered!! I love it😍.", 
    image: "/happyclient3.jpg" 
  },
  { 
    id: 4, 
    clientName: "Tebogo_M", 
    purchase: "Iphone 13 Pro Max", 
    testimonial: "Thanks Chief😄. Ngizophinde ngi-ode kini bafo ngodadewethu for a discount😄", 
    image: "/happyclient4.jpg" 
  },
  { 
    id: 5, 
    clientName: "Emma", 
    purchase: "Iphone 12", 
    testimonial: "Love the camera📸 and fast delivery😄. Thankk youuuuuu🙌", 
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
