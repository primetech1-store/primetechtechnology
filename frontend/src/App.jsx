import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Items from "./components/Items";
import Topbar from "./components/Topbar";
import Login from "./Login";
import Signup from "./Signup";
import Carousel from "./components/carousel";

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

      {/* Floating Text Buttons */}
      <a
        href="https://wa.me/+27616117311"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-text-button whatsapp"
      >
        WhatsApp
      </a>
      <a
        href="https://instagram.com/primetech_technology"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-text-button instagram"
      >
        Instagram
      </a>
    </BrowserRouter>
  );
}

export default App;
