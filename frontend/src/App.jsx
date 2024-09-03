import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SlideShow from "./components/SlideShow";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Manage from "./components/Manage";

function App() {
  const [count, setCount] = useState(0);

  return (

      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<SlideShow/>}/>
        <Route path="/home" element={<SlideShow/>}/>
        <Route path="/services" element={<Home/>}/>
         <Route path="/manage" element={<Manage/>}/>
      </Routes>
    
    </BrowserRouter>
   
  
  );
}

export default App;
