import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Items from "./components/Items";
import Topbar from "./components/Topbar";
import Login from "./Login";
import Signup from "./Signup";
import Carousel from "./components/carousel";

function App() {
  return (
    <BrowserRouter>
      <header>
        <img src="https://drive.google.com/file/d/1_MpD8Wb_SOy0iBem6kV6KTV_fyf3_HoM/view?usp=drive_link" alt="Company Logo" />
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
    </BrowserRouter>
  );
}

export default App;
