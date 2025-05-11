import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./HorizontalScrollGallery.css";

const HorizontalScrollGallery = () => {
  const containerRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    scrollInstance.current = new LocomotiveScroll({
      el: containerRef.current,
      direction: "horizontal",
      smooth: true,
      lerp: 0.05,
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });

    // Get all images
    const images = containerRef.current.querySelectorAll(".image");

    // Show images with animation
    const showImages = () => {
      gsap.to(images, {
        opacity: 0.8,
        scale: 1,
        x: 0,
        y: 0,
        filter: "grayscale(1)",
        duration: 1,
        stagger: 0.05,
        ease: "power2.out",
      });
    };

    // Hide images with animation
    const hideImages = () => {
      gsap.to(images, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.in",
      });
    };

    // Click handler for images
    const handleImageClick = (e) => {
      const image = e.target;
      gsap.to(image, {
        scale: 5,
        opacity: 0,
        duration: 1,
        ease: "power2.in",
        onComplete: () => {
          hideImages();
          setTimeout(showImages, 2000);
        },
      });
    };

    // Add click event to each image
    images.forEach((image) => {
      image.addEventListener("click", handleImageClick);
    });

    // Initial show after 1 second
    const showTimeout = setTimeout(showImages, 1000);

    // Cleanup
    return () => {
      clearTimeout(showTimeout);
      images.forEach((image) => {
        image.removeEventListener("click", handleImageClick);
      });
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="scroll-gallery-container">
      {/* Fake UI Elements */}
      {/* <div className="fake-ui">
        <div className="logo"></div>
        <div className="nav">
          <span className="item"></span>
          <span className="item"></span>
          <span className="item"></span>
        </div>
      </div> */}

      {/* Main Scroll Container */}
      <div
        className="scroll-animations-example"
        ref={containerRef}
        data-scroll-container
      >
        <div className="scrollsection" data-scroll-section>
          {[
            { size: "normal", orientation: "vertical", speed: 2, id: 1005 },
            { size: "big", orientation: "vertical", speed: 1, id: 1019 },
            { size: "small", orientation: "horizontal", speed: 4, id: 1027 },
            { size: "normal", orientation: "vertical", speed: 3, id: 1028 },
            { size: "normal", orientation: "horizontal", speed: 2, id: 1041 },
            { size: "big", orientation: "horizontal", speed: 4, id: 1042 },
            { size: "small", orientation: "vertical", speed: 2, id: 1049 },
            { size: "normal", orientation: "horizontal", speed: 1, id: 1056 },
            { size: "small", orientation: "horizontal", speed: 3, id: 1062 },
            { size: "big", orientation: "vertical", speed: 1, id: 1068 },
            { size: "normal", orientation: "horizontal", speed: 2, id: 1069 },
            { size: "normal", orientation: "horizontal", speed: 1, id: 1072 },
            { size: "small", orientation: "horizontal", speed: 4, id: 1075 },
            { size: "big", orientation: "vertical", speed: 3, id: 1081 },
            { size: "normal", orientation: "horizontal", speed: 2, id: 111 },
            { size: "small", orientation: "horizontal", speed: 4, id: 129 },
            { size: "big", orientation: "vertical", speed: 2, id: 137 },
            { size: "normal", orientation: "horizontal", speed: 1, id: 141 },
            { size: "small", orientation: "horizontal", speed: 3, id: 145 },
            { size: "normal", orientation: "vertical", speed: 1, id: 147 },
          ].map((item, index) => (
            <div
              key={index}
              className={`item -${item.size} ${
                item.orientation === "horizontal" ? "-horizontal" : ""
              }`}
              data-scroll
              data-scroll-speed={item.speed}
            >
              <img
                className="image"
                src={`https://picsum.photos/id/${item.id}/${
                  item.orientation === "horizontal" ? "400/300" : "300/400"
                }`}
                alt={`Gallery item ${index}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollGallery;
