import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = ({ textContent }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Wait for DOM to be fully rendered
    const chars = gsap.utils.toArray(".char");

    // Set initial state
    gsap.set(chars, {
      opacity: 0,
      y: 20,
    });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    // Character animation
    tl.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "back.out(1.7)",
    });

    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-auto p-8 ">
      <div className="mb-12 text-3xl leading-relaxed">
        {textContent.split("").map((char, i) => (
          <span key={`char-${i}`} className="inline-block char">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextAnimation;
