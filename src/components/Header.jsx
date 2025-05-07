import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "@studio-freight/lenis";

const Header = () => {
  useEffect(() => {
    // Initialize GSAP plugins
    gsap.registerPlugin(ScrollTrigger, CustomEase);

    // Initialize Lenis for smooth scrolling
    // const lenis = new Lenis();
    // Inside your useEffect hook
    const lenis = new Lenis({
      lerp: 0.1, // Lower values make scroll more immediate (default: 0.1)
      smoothWheel: true, // Enable smooth wheel scrolling
      infinite: false, // Disable infinite scrolling
    });

    const scrollIndicator = document.querySelector(".scroll-indicator");

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollY = lenis.scroll; // use Lenis scroll value

      const progress = (scrollY / (scrollHeight - windowHeight)) * 100;
      if (scrollIndicator) {
        scrollIndicator.style.width = `${progress}%`;
      }
    };

    // const raf = (time) => {
    //   lenis.raf(time);
    //   updateScrollProgress(); // sync progress bar with scroll
    //   requestAnimationFrame(raf);
    // };

    // Optimized RAF handling
    const raf = (time) => {
      lenis.raf(time);
      updateScrollProgress();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.ticker.lagSmoothing(0);

    // Custom eases
    CustomEase.create("verticalEase", "0.4, 0, 0.2, 1");
    CustomEase.create("blurEase", "0.65, 0, 0.35, 1");
    CustomEase.create("svgEase", "0.25, 0.1, 0.25, 1");


 

    // Menu hover effects
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          filter: "blur(0px)",
          duration: 0.3,
          ease: "verticalEase",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          filter: "blur(1px)",
          duration: 0.3,
          ease: "verticalEase",
        });
      });
    });

    // Cleanup function
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);
  return (
    <header>
      <div className="header-container">
        <div className="logo">ARTISTRY</div>
        <div className="get-in-touch">
          <a href="#contact">+GET IN TOUCH</a>
          <div className="yellow-line-container">
            <div className="scroll-indicator"></div>
          </div>
        </div>
        <div className="nav-links">
          <a href="#home">home</a> <a href="#about">about</a>
          <a href="#portfolio">portfolio</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

