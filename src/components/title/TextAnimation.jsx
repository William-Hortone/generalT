import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = ({ textContent }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = gsap.utils.toArray(containerRef.current.querySelectorAll(".char"));

    gsap.set(chars, {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    tl.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.03,
      ease: "back.out(1.7)",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-auto p-8 ">
      <div className="mb-12 text-xl leading-relaxed md:text-3xl">
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
