import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase, ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";
import "./styles/description.css";

const Description = () => {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const videoOverlayRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CustomEase);

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Custom eases
    CustomEase.create("softReveal", "0.5, 0, 0, 1");
    CustomEase.create("smoothBlur", "0.25, 0.1, 0.25, 1");

    // Elements
    const videoContainer = videoContainerRef.current;
    const video = videoRef.current;
    const videoOverlay = videoOverlayRef.current;
    const overlayCaption = videoOverlay?.querySelector(".caption");
    const overlayContent = videoOverlay?.querySelector(".content");

    // Only proceed if all elements exist
    if (!videoContainer || !video || !videoOverlay || !overlayCaption || !overlayContent) return;

    // Set initial video styles
    gsap.set(videoContainer, {
      width: "300px",
      height: "300px",
      borderRadius: "50%",
    });

    gsap.set(video, {
      scale: 1.2,
      transformOrigin: "center center"
    });

    // Header animation
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "+=400",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      }
    });

    headerTl
      .to(titleRef.current, {
        rotationX: 90,
        y: -30,
        scale: 0.7,
        opacity: 0,
        filter: "blur(4px)",
        ease: "power3.inOut",
        transformOrigin: "center top",
      })
      .to(subtitleRef.current, {
        rotationX: 90,
        y: -30,
        scale: 0.7,
        opacity: 0,
        filter: "blur(4px)",
        ease: "power3.inOut",
        transformOrigin: "center top",
      }, "<0.1");

    // Video animation timeline
    const videoTl = gsap.timeline({
      scrollTrigger: {
        trigger: videoContainer,
        start: "center center",
        end: "+=100%",
        scrub: 1.2,
        pin: true,
        onEnter: () => video.play().catch(e => console.log("Video play error:", e)),
        onLeaveBack: () => video.pause(),
      }
    });

    // Animate container expansion and video scaling
    videoTl
      .to(videoContainer, {
        width: "90vw",
        height: "90vh",
        borderRadius: 0,
        ease: "expo.out",
      }, 0)
      .to(video, {
        scale: 1,
        ease: "expo.out",
      }, 0)
      .to(videoOverlay, {
        clipPath: "inset(0% 0 0 0)",
        backdropFilter: "blur(8px)",
        ease: "expo.out",
      }, 0.4)
      .to(overlayCaption, {
        y: 0,
        ease: "expo.out",
      }, 0.45)
      .to(overlayContent, {
        filter: "blur(0px)",
        scale: 1,
        ease: "expo.out",
      }, 0.45);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="wrapper-section" ref={containerRef}>
      <div className="wrapper-container" ref={headerRef}>
        <div className="wrapper-header-content">
          <h1 className="title" ref={titleRef}>Silence and Sound</h1>
          <h2 className="subtitle" ref={subtitleRef}>The Creative Mind</h2>
          <div className="date">2025.04</div>
          <div className="credits">
            <p>Reflections on</p>
            <p>The Way of Being</p>
          </div>
        </div>
      </div>

      <div className="scroll-container">
        <div className="video-wrapper">
          <div id="video-container" ref={videoContainerRef}>
            {/* <video id="video" loop muted playsInline ref={videoRef}>
              <source
                src="https://cdn.cosmos.so/74eaa492-31ae-4550-b5a1-40917d873af5.mp4"
                type="video/mp4"
              />
            </video> */}
            {/* <div className="video-overlay" ref={videoOverlayRef}>
              <div className="caption">THOUGHT VESSEL 01</div>
              <div className="content">
                <h2>Clarity in Silence</h2>
                <p>
                  Design emerges from emptiness. Mental clarity precedes visual
                  harmony.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;