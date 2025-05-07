// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About, Customer, Home, Services } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </>
  );
}

export default App;
