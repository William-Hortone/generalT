import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Lenis from "@studio-freight/lenis";
import "./global.css";

function CustomerWrapper ({ Component, pageProps }) {
  useEffect(() => {
    let lenis;
    let rafId;

    try {
      // Initialize Lenis smooth scroll
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      // Sync Lenis with GSAP
      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      // Handle resize events
      const handleResize = () => lenis.resize();
      window.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", handleResize);
        lenis.destroy();
      };
    } catch (error) {
      console.error("Lenis initialization error:", error);
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
      };
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Minimal portfolio design" />
      </Helmet>
      <Component {...pageProps} />
    </>
  );
}

export default CustomerWrapper ;
