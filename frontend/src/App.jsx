import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./components/Items";
import Topbar from "./components/Topbar";
import Login from "./Login";
import Signup from "./Signup";
import Carousel from "./components/carousel";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <img src="/logo.png" alt="Company Logo" />
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </header>

      <main>
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/" element={<><Carousel /><Items /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/completion" element={<Completion />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;