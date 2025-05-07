import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => { 
    const footerPaths = document.querySelectorAll(".footer-svg-paths path");

    footerPaths.forEach((path, index) => {
      const startY = 50 + Math.random() * 30;
      gsap.set(path, {
        opacity: 0,
        y: startY,
        filter: "blur(8px)",
      });
    });

    let footerAnimated = false;
    const footerTl = gsap.timeline({ paused: true });

    footerPaths.forEach((path, index) => {
      const staggerDelay = index * 0.08;
      footerTl.to(
        path,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "svgEase",
          delay: staggerDelay,
        },
        0
      );
    });

    function checkFooterInView() {
      if (footerAnimated) return;

      const footer = document.querySelector(".footer");
      const rect = footer.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        footerTl.play();
        footerAnimated = true;
        window.removeEventListener("scroll", checkFooterInView);
      }
    }

    window.addEventListener("scroll", checkFooterInView);
    setTimeout(checkFooterInView, 100);

    ScrollTrigger.create({
      trigger: ".footer",
      start: "top bottom-=100",
      onEnter: function () {
        if (!footerAnimated) {
          footerTl.play();
          footerAnimated = true;
        }
      },
      onLeaveBack: function () {
        if (footerAnimated) {
          footerTl.reverse();
          footerAnimated = false;
        }
      },
    });

    // Footer CTA animation
    gsap.to(".footer-cta", {
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom-=200",
        end: "center center",
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "verticalEase",
    });
  }, []);

  return (
    <section id="footer" className="footer">
      <div className="footer-cta">
        <a href="mailto:hi@filip.fyi" className="footer-button">
          GET IN TOUCH
        </a>
        <a href="mailto:hi@filip.fyi" className="footer-email">
          [hi@filip.fyi](mailto:hi@filip.fyi)
        </a>
      </div>
      <div className="footer-svg-container">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 78 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="footer-svg-paths" fill="var(--offblack)">
            <path d="m62.7985 18v-17.159973h4.32l6 10.199973h.048v-10.199973h4.32v17.159973h-4.32l-6-10.19997h-.048v10.19997z" />
            <path d="m52.8726 18.384c-5.448 0-8.496-3.792-8.496-8.97601 0-5.16 3.048-8.951996 8.496-8.951996 5.4 0 8.496 3.791996 8.496 8.951996 0 5.18401-3.096 8.97601-8.496 8.97601zm-4.08-8.97601c0 3.00001.936 5.44801 4.08 5.44801 3.12 0 4.08-2.448 4.08-5.44801 0-2.976-.96-5.424-4.08-5.424-3.144 0-4.08 2.448-4.08 5.424z" />
            <path d="m38.6212 18v-17.159973h4.32v17.159973z" />
            <path d="m30.4798 18.384c-4.488 0-7.872-2.28-7.872-6.216h4.368c0 1.992 1.512 2.736 3.456 2.736 1.608 0 2.424-.648 2.424-1.536 0-1.464-1.704-1.848-4.08-2.568-2.976-.91201-5.64-2.06401-5.64-5.13601 0-3.744 2.928-5.207996 6.624-5.207996 4.008 0 7.152 2.111996 7.272 5.591996h-4.368c-.192-1.32-1.248-2.112-2.904-2.112-1.296 0-2.208.432-2.208 1.416 0 1.152.96 1.536 3.144 2.184 3.24.96 6.576 1.872 6.576 5.42401 0 3.288-2.496 5.424-6.792 5.424z" />
            <path d="m17.0925 18v-17.159973h4.32v17.159973z" />
            <path d="m6.10183 18-5.711998-17.159973h4.728008l3.23999 12.023973h.048l3.26397-12.023973h4.56l-5.568 17.159973z" />
          </g>
        </svg>
        <div className="svg-footer-overlay"></div>
      </div>
    </section>
  );
};

export default Footer;
