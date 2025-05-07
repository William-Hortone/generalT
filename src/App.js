// src/App.js
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {


  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}









export default App;
