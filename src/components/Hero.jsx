import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import images from "../constants/images";

const Hero = () => {
  const heroRef = useRef(null);
  const svgTextRef = useRef(null);
  const subTextRef = useRef(null);
  const imageRef = useRef(null);
  const aboutTextRef = useRef(null);

  useEffect(() => {
    // Initial setup - hide elements before animation
    gsap.set(
      [
        svgTextRef.current,
        subTextRef.current,
        imageRef.current,
        aboutTextRef.current,
      ],
      {
        opacity: 0,
        y: 20,
      }
    );

    // Mount animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate main SVG text
    tl.fromTo(
      svgTextRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animate subtitle
    tl.fromTo(
      subTextRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.5"
    );

    // Animate hero image
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8, filter: "blur(5px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2 },
      "-=0.3"
    );

    // Animate about text
    tl.fromTo(
      aboutTextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    );

    // Scroll animations (your existing code)
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.5,
      ease: "blurEase",
    });

    gsap.to(aboutTextRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "verticalEase",
    });
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="container">
        <div className="row row-svg">
          <div className="col-12">
            <div className="svg-container">
              <svg
                ref={svgTextRef}
                width="100%"
                height="auto"
                viewBox="0 0 200 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="0"
                  y="35"
                  fill="#444"
                  fontWeight="900"
                  fontSize="40"
                  fontFamily="'PP Neue Montreal', sans-serif"
                >
                  GENERAL
                </text>
              </svg>

              <svg
                ref={subTextRef}
                width="100%"
                height="60"
                viewBox="0 0 100 20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMaxYMid meet"
              >
                <text
                  x="100%"
                  y="15"
                  textAnchor="end"
                  fill="#444"
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="'PP Neue Montreal', sans-serif"
                  letterSpacing="1"
                >
                  Techniques and trade kouta
                </text>
              </svg>

              <div className="svg-texture-overlay"></div>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-5 hero-left">
            <div className="hero-image" ref={imageRef}>
              <img src={images.pic1} alt="Portrait" />
              <div className="texture-overlay"></div>
            </div>
          </div>
          <div className="col-3"></div>
          <div className="col-4 hero-right">
            <p className="about-text" ref={aboutTextRef}>
              TRANSFORMING INTERNATIONAL TRADE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
