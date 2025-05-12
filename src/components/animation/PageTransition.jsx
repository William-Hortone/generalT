import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './pageTransition.css';

const PageTransition = ({ children }) => {
  const transitionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pageDivs = gsap.utils.selector(transitionRef)('.div');
      const preloadItems = gsap.utils.selector(transitionRef)('.preload li');

      // Initial state
      gsap.set(pageDivs, { bottom: "100%" });
      gsap.set(preloadItems, { opacity: 0 });

      // Create animation sequence
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onStart: () => gsap.set(transitionRef.current, { pointerEvents: "all" }),
        onComplete: () => gsap.set(transitionRef.current, { pointerEvents: "none" })
      });

      tl.to(pageDivs, {
        bottom: "0%",
        duration: 0.6,
        stagger: 0.1
      })
      .to(preloadItems, {
        opacity: 1,
        y: -15,
        duration: 0.3,
        stagger: 0.1
      }, "-=0.3")
      .to(preloadItems, {
        opacity: 0,
        y: 15,
        duration: 0.3,
        stagger: 0.1
      })
      .to(pageDivs, {
        bottom: "100%",
        duration: 0.6,
        stagger: 0.1
      });
    }, transitionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="page-transition" ref={transitionRef}>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <ul className="preload">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {children}
    </>
  );
};

export default PageTransition;