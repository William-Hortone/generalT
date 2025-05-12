import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

import images from "./../constants/images";

const Header = () => {
  const navigate = useNavigate(); // ✅ init navigator

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CustomEase);

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      infinite: false,
    });

    const scrollIndicator = document.querySelector(".scroll-indicator");

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollY = lenis.scroll;

      const progress = (scrollY / (scrollHeight - windowHeight)) * 100;
      if (scrollIndicator) {
        scrollIndicator.style.width = `${progress}%`;
      }
    };

    const raf = (time) => {
      lenis.raf(time);
      updateScrollProgress();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.ticker.lagSmoothing(0);

    CustomEase.create("verticalEase", "0.4, 0, 0.2, 1");

    const navLinks = document.querySelectorAll(
      ".nav-links a, .nav-links button"
    );

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

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  // ✅ Transition handler
  const handlePageChange = (path) => {
    // Example animation before leaving
    gsap.to(".image", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        navigate(path);
      },
    });
  };

  return (
    <header>
      <div className="bg-reds-600 header-container">
        <div className="w-[140px] md:w-[200px] h-[80px] md:h-[100px]">
          <img
            className="object-cover w-full h-full"
            src={images.logo}
            alt="logo"
          />
        </div>
        <div className="get-in-touch">
          <a href="#contact" className="bg-primary">
            +GET IN TOUCH
          </a>
          <div className="yellow-line-container">
            <div className="scroll-indicator"></div>
          </div>
        </div>
        <div className="nav-links">
          <button
            className="nav-links-btn"
            onClick={() => handlePageChange("/")}
          >
            Home
          </button>
          <button
            className="nav-links-btn"
            onClick={() => handlePageChange("/services")}
          >
            Services
          </button>
          <button
            className="nav-links-btn"
            onClick={() => handlePageChange("/customer")}
          >
            Customer
          </button>
          <button
            className="nav-links-btn"
            onClick={() => handlePageChange("/about")}
          >
            Gallery
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
