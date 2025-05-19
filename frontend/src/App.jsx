import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Items from "./components/Items";
import Topbar from "./components/Topbar";
import Login from "./Login";
import Signup from "./Signup";
import Carousel from "./components/carousel";
import { useState } from "react";

// ✅ Import social icons
import { FaWhatsapp, FaInstagram, FaFacebookMessenger } from "react-icons/fa";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-button-container">
      <div className={`contact-options ${open ? "open" : ""}`}>
        <a
          href="https://wa.me/27721234567"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link whatsapp"
        >
          <FaWhatsapp style={{ marginRight: "6px" }} />
          WhatsApp
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link instagram"
        >
          <FaInstagram style={{ marginRight: "6px" }} />
          Instagram
        </a>
      </div>
      <button className="floating-button" onClick={() => setOpen(!open)}>
        <FaFacebookMessenger size={22} />
      </button>
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <h2 className="footer-title">
      <a href="/" className="shop-button">SHOP & ENJOY</a>
    </h2>

    <div className="footer-features">
      <div className="footer-feature">
        <img src="/icons/shipping-icon.png" alt="Free Shipping" />
        <h4>Free Shipping</h4>
        <p>Get Free shipping countryWide</p>
      </div>
      <div className="footer-feature">
        <img src="/icons/secure-icon.png" alt="Secure Payment" />
        <h4>Secure Payment</h4>
        <p>Easily Pay with our secure payment modes</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <BrowserRouter>
      <header>
        <img src="/logo.jpg" alt="Company Logo" />
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </header>

      <main>
        <Topbar />
        <Routes>
          <Route path="/" element={<><Carousel /><Items /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </main>

      <Footer />
      <FloatingContactButton />
    </BrowserRouter>
  );
}

export default App;
