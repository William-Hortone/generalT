import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSections = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const contentRefs = useRef([]);

  // Content data with proper working image URLs
  const contentItems = [
    {
      title: "Beautiful Nature",
      text: "Explore the wonders of our natural world through breathtaking landscapes and wildlife.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Urban Life",
      text: "Discover the vibrant energy of city living with stunning urban photography.",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1144&q=80",
    },
    {
      title: "Modern Technology",
      text: "See the latest innovations that are shaping our future and changing how we live.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Set initial position to first section
    window.scrollTo(0, 0);

    const sections = contentRefs.current;

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
        markers: true, // Visible markers to help debug
      });
    });

    // Initial animation
    gsap.from(".text-content, .image-content", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Content change animation
    gsap.to(".text-content, .image-content", {
      opacity: 0,
      y: -20,
      duration: 0.4,
      onComplete: () => {
        gsap.to(".text-content, .image-content", {
          opacity: 1,
          y: 0,
          duration: 0.6,
        });
      },
    });
  }, [activeIndex]);

  return (
    <div className="relative">
      {/* Fixed viewport container */}
      <div
        ref={containerRef}
        className="relative z-10 flex w-full h-screen"
      >
        {/* Text content (left side) */}
        <div className="flex items-center justify-center w-1/2 h-full p-8 bg-white text-content">
          <div className="max-w-md">
            <h2 className="mb-6 text-4xl font-bold text-gray-800">
              {contentItems[activeIndex].title}
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              {contentItems[activeIndex].text}
            </p>
            <button className="px-8 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Image content (right side) */}
        <div className="w-1/2 h-full image-content">
          <img
            src={contentItems[activeIndex].image}
            alt={contentItems[activeIndex].title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Navigation indicators */}
        <div className="absolute z-20 flex space-x-3 transform -translate-x-1/2 left-1/2 bottom-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                window.scrollTo({
                  top: (index + 1) * window.innerHeight,
                  behavior: "smooth",
                });
              }}
              className={`w-4 h-4 rounded-full transition ${
                activeIndex === index ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll trigger sections */}
      <div
        className="relative"
        style={{ height: `${contentItems.length * 100}vh` }}
      >
        {contentItems.map((_, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="w-full h-screen"
            style={{ height: "100vh" }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedSections;
