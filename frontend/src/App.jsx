import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SlideShow from "./components/SlideShow";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Manage from "./components/Manage";
import Cart from "./components/Cart";

function App() {
  // Lift the cart state to the App component
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <NavBar showCartIcon={true} />
      
      <Routes>
        <Route path="/home" element={<SlideShow />} />
        <Route path="/services" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
