import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./TextAnimation.css";

const FluidTextAnimation = () => {
  const maskRef = useRef(null);
  const svgRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize animation
    const initAnimation = () => {
      // Set up GSAP timeline
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        repeat: -1,
        yoyo: true,
      });

      // Create fluid distortion effect
      tl.to(svgRef.current, {
        duration: 2,
        attr: {
          transform: "translate(-50%, -50%) scale(1.05)",
        },
      }).to(
        ".st0",
        {
          duration: 1.5,
          attr: {
            d: "M108.7,155.2l24.8,23.3c-2.1,3.1-4.9,6.2-8.3,9.2c-10.2,8.8-26.2,16.4-48.5,16.4C33.4,204.1,1,174.8,1,131.2c0-43.3,32.4-72.6,75.7-72.6c29.8,0,48.4,13.2,56.8,25.5l-28.7,26.7c-5.5-8-14.3-13.2-26.1-13.2c-18.3,0-32.4,12.6-32.4,33.6c0,3.7,0.4,7.2,1.3,10.4c1.5,5.9,4.4,10.8,8.2,14.5c5,4.9,11.6,8,19.1,8.7c1.2,0.1,2.5,0.2,3.8,0.2c10.5,0,18.7-4.6,24.2-11.1c0.7-0.8,1.3-1.6,1.8-2.4L108.7,155.2z",
          },
        },
        0
      );
    };

    // Set up mouse interaction
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      gsap.to(svgRef.current, {
        x: (x - 0.5) * 20,
        y: (y - 0.5) * 20,
        duration: 1.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    initAnimation();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="animation-container">
      <div className="mask" ref={maskRef}>
        <svg
          ref={svgRef}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1040 205.1"
          className="fluid-svg"
        >
          <style type="text/css">
            {`
              .st0 {
                fill-rule: evenodd;
                clip-rule: evenodd;
                fill: #000;
                transition: all 0.5s ease-out;
              }
            `}
          </style>
          <g>
            <g>
              <path
                className="st0"
                d="M108.7,155.2l24.8,23.3c-2.1,3.1-4.9,6.2-8.3,9.2c-10.2,8.8-26.2,16.4-48.5,16.4C33.4,204.1,1,174.8,1,131.2
                c0-43.3,32.4-72.6,75.7-72.6c29.8,0,48.4,13.2,56.8,25.5l-28.7,26.7c-5.5-8-14.3-13.2-26.1-13.2c-18.3,0-32.4,12.6-32.4,33.6
                c0,3.7,0.4,7.2,1.3,10.4c1.5,5.9,4.4,10.8,8.2,14.5c5,4.9,11.6,8,19.1,8.7c1.2,0.1,2.5,0.2,3.8,0.2c10.5,0,18.7-4.6,24.2-11.1
                c0.7-0.8,1.3-1.6,1.8-2.4L108.7,155.2z"
              />
              {/* Include all your SVG paths here */}
            </g>
          </g>
        </svg>
      </div>
      <canvas ref={canvasRef} className="fluid-canvas"></canvas>
    </div>
  );
};

export default FluidTextAnimation;
