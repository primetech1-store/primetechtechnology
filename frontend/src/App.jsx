import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./components/Items";
import Topbar from "./components/Topbar";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
