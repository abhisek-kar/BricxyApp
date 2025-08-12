// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Home";
import HowItWorks from "./pages/Howitworkpage";
import Footersection from "./component/footersection";

export default function App() {
  return (
     <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
      <Footersection /> 
    </Router>
  );
}
