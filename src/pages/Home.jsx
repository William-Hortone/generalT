import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
// import './App.css';
import { Description, Gallery, Header, Hero, Title } from "../components";
import FooterService from "../components/FooterService";
import MeetTeam from "../containers/MeetTeam";

function Home() {
  useEffect(() => {
    // Initialize GSAP plugins
    gsap.registerPlugin(ScrollTrigger, CustomEase);

    // Initialize Lenis for smooth scrolling
    // const lenis = new Lenis();

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

    // Inside your useEffect hook
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      infinite: false,
    });

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

    // Hero animations
    gsap.to(".hero-image", {
      scrollTrigger: {
        trigger: ".hero",
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

    gsap.to(".about-text", {
      scrollTrigger: {
        trigger: ".hero",
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

    // Gallery animations
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach((item, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: item.parentElement,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          item,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            delay: index * 0.1,
            ease: "verticalEase",
          }
        );
    });

    // Gallery caption animation
    gsap.to(".gallery-caption", {
      scrollTrigger: {
        trigger: ".gallery",
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "blurEase",
    });

    // Footer SVG animation
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
    <div className="wrapper">
      <Header />
      <Hero />

      <div className="text-center my-[22rem] bdg-slate-600">
        <Title />
        {/* <FluidTextAnimation /> */}
      </div>
      {/* <Description /> */}
      <Gallery />
      <MeetTeam />
      <FooterService />
    </div>
  );
}

export default Home;
