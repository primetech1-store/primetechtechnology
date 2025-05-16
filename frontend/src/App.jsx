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
import { FaFacebookMessenger, FaWhatsapp, FaInstagram } from "react-icons/fa";

function App() {
  const [showContacts, setShowContacts] = useState(false);

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

      <div className="floating-button-container">
        <button className="floating-button" onClick={() => setShowContacts(!showContacts)}>
          <FaFacebookMessenger size={24} />
        </button>
        <div className={`contact-options ${showContacts ? 'open' : ''}`}>
          <a href="https://wa.me/27721234567" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
