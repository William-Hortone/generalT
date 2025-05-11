import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const containerRef = useRef(null);
  const footerTl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!footerRef.current || !containerRef.current) return;

    // Set up the sticky behavior
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: 1,
      }
    });

    // Animation for SVG paths
    const footerPaths = footerRef.current.querySelectorAll(".footer-svg-paths path");
    footerPaths.forEach((path, index) => {
      const startY = 50 + Math.random() * 30;
      gsap.set(path, {
        opacity: 0,
        y: startY,
        filter: "blur(8px)",
      });
    });

    // Create animation timeline
    footerPaths.forEach((path, index) => {
      const staggerDelay = index * 0.08;
      footerTl.current.to(
        path,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power2.out",
          delay: staggerDelay,
        },
        0
      );
    });

    // Animate when footer comes into view
    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top center",
      onEnter: () => footerTl.current.play(),
      onLeaveBack: () => footerTl.current.reverse(),
    });

    return () => {
      footerTl.current.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="footer-container">
      <section ref={footerRef} className="footer">
        <div className="footer-svg-container">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 78 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="footer-svg-paths" fill="var(--offblack)">
              {/* Your SVG paths */}
              <path d="m62.7985 18v-17.159973h4.32l6 10.199973h.048v-10.199973h4.32v17.159973h-4.32l-6-10.19997h-.048v10.19997z" />
              {/* Other paths... */}
            </g>
          </svg>
          <div className="svg-footer-overlay"></div>
        </div>
        <div className="footer-content">
          <p>WanTech</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;