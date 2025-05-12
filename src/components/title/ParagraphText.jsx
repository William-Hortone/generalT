import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ParagraphText = ({ text }) => {
  const containerRef = useRef(null);
  const words = text.split(' ');

  // Using a standard useEffect instead of useGSAP
  React.useEffect(() => {
    if (!containerRef.current) return;

    const wordElements = gsap.utils.toArray('.word');
    
    // Color change animation
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true
      },
      color: "#4f46e5"
    });

    // Word-by-word animation
    wordElements.forEach((word, i) => {
      gsap.from(word, {
        opacity: 0,
        y: 50,
        rotationX: -45,
        transformOrigin: "0% 50% -50",
        ease: "back.out(1.7)",
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
        delay: i * 0.08
      });
    });

    // Paragraph scale effect
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: 0.5
      },
      scale: 0.95,
      filter: "blur(2px)",
      ease: "power2.inOut"
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [text]);

  return (
    <div 
      ref={containerRef}
      className="max-w-full px-4 py-12 mx-auto text-lg leading-relaxed text-gray-800 md:text-xl dark:text-gray-200"
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="inline-block word will-change-transform">
            {word}
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </React.Fragment>


        
      ))}


      
    </div>
  );
};

export default ParagraphText;