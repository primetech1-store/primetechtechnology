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
          WhatsApp
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link instagram"
        >
          Instagram
        </a>
      </div>
      <button className="floating-button" onClick={() => setOpen(!open)}>
      </button>
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <Link to="/" className="footer-title-link">SHOP & ENJOY</Link>
    <div className="footer-benefits">
      <div className="benefit">
        <img src="/icons/shipping-icon.png" alt="Shipping" />
        <h4 className="benefit-heading">Free Shipping</h4>
        <p>Get Free shipping countrywide</p>
      </div>
      <div className="benefit">
        <img src="/icons/secure-icon.png" alt="Secure" />
        <h4 className="benefit-heading">Secure Payment</h4>
        <p>Easily pay with our secure payment modes</p>
      </div>
    </div>
    <p className="footer-note">© {new Date().getFullYear()} PrimeTech Technology. All rights reserved.</p>
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
