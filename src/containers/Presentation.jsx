import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParagraphText } from "./../components";
import images from "../constants/images";

gsap.registerPlugin(ScrollTrigger);

const Presentation = () => {
  const imageGroupRef = useRef(null);
  const secondImageGroupRef = useRef(null);

  useEffect(() => {
    gsap.to(imageGroupRef.current, {
      x: "-100%",
      ease: "none",
      scrollTrigger: {
        trigger: imageGroupRef.current,
        start: "top bottom",
        end: "+=800",
        scrub: true,
      },
    });
    gsap.to(secondImageGroupRef.current, {
      x: "50%",
      ease: "none",
      scrollTrigger: {
        trigger: secondImageGroupRef.current,
        start: "top bottom",
        end: "+=800",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative flex flex-col w-full h-auto py-20 bg-white">
      {/* Text Section */}
      <div className="w-full px-4 py-20 md:pl-16 md:w-1/2">
        <h2 className="mb-4 text-4xl font-semibold uppercase text-primary md:text-xl font-zentry">
          Elektronic
        </h2>
        <ParagraphText
          text={`General techniques and trade 
Kouta offers a range of high-quality electronic products, 
including home appliances, smart 
devices, communication tools and 
office equipment. Our products are sourced from 
leading manufacturers in China, 
ensuring excellent performance 
and stylish design to meet the 
diverse needs of modern life.`}
        />
      </div>

      {/* Image Scroll Animation */}
      <div className="relative w-full md:h-[60vh] h-[30vh]  overflow-hidden  mt-10">
        <div
          ref={imageGroupRef}
          className="absolute top-0 left-[70%] flex gap-4 h-full px-4"
        >
          {[images.product7, images.product8].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-[30vh] md:h-[60vh] w-auto rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`product-${index}`}
                className="object-cover w-auto h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* second section */}
      <section className="relative flex flex-col w-full h-auto py-20 bg-white">
        {/* Text Section */}
        <div className="self-end w-full px-4 py-20 md:pl-16 md:w-1/2">
          <h2 className="mb-4 text-4xl font-semibold uppercase text-primary md:text-xl font-zentry">
            Beauty Products
          </h2>
          <ParagraphText
            text={`General techniques and 
trade Kouta offers a range of 
high-quality beauty products, 
including skincare, makeup, 
haircare, and personal care 
categories. Our products come from 
leading Chinese beauty 
brands, combining advanced 
technology and natural 
ingredients to meet the global 
demand for beauty and 
wellness. `}
          />
        </div>

        {/* Image Scroll Animation */}
        <div className="relative w-full md:h-[60vh] h-[30vh]  overflow-hidden  mt-10">
          <div
            ref={secondImageGroupRef}
            className="absolute top-0 left-[-32%] flex gap-4 h-full px-4"
          >
            {[images.product11, images.product12].map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-[30vh] md:h-[60vh] w-auto rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={src}
                  alt={`product-${index}`}
                  className="object-cover w-auto h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Presentation;
