import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import images from "../constants/images";
import { RevealLinks } from "./title/RevealLinks";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    // Image animation
    gsap.set(imageRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 3% 3% 0%",
    });

    gsap.from(imageRef.current, {
      clipPath: "polygon(12% 0, 70% 0, 85% 88%, 0 93%)",
      borderRadius: "0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    // h3 Title animation on footer end
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotateX: 60,
        letterSpacing: "-0.1em",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        letterSpacing: "0.05em",
        duration: 2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
         start: "top 10%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={containerRef}
      className="flex flex-col items-center justify-between w-full pt-16 text-black bg-green-300 overflodw-hidden h-dvh"
    >
      {/* Top Section */}
      <div className="flex flex-col w-full h-auto md:flex-row">
        <div className="flex md:w-[25vw] w-[35vw] h-auto">
          <img
            ref={imageRef}
            src={images.pic1}
            alt="contact"
            className="object-cover w-full h-auto"
            style={{ willChange: "clip-path, border-radius" }}
          />
        </div>

        <div className="flex flex-col p-8 md:pl-16">
          <h2 className="text-2xl font-semibold">
            Tianjin General Kouta <br /> International Trade Co. Ltd
          </h2>
          <p className="font-robert-regular">
            Looking forward to your cooperation
          </p>
        </div>
      </div>

      {/* Reveal Links */}
      <RevealLinks />

      {/* Contact Info */}
      <div className="flex flex-col justify-between w-full gap-16 px-8 text-black font-robert-regular md:flex-row">
        <div className="flex flex-col">
          <p>+1 (289) 244-8690</p>
          <p>+86 13311876241</p>
        </div>

        <div className="flex flex-row justify-between md:flex-col">
          <div>
            <p>+236 75508705</p>
            <p>+236 72302835</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between w-full font-robert-regular md:justify-start">
            <p>Copyright</p>
            <p>©2025 GTTK</p>
          </div>
          <p>
            Developed by
            <a
              href="https://wan-tech.vercel.app/"
              className="font-bold text-primary hover:text-primary"
            >
              {" "}
              WanTech
            </a>
          </p>
        </div>
      </div>

      {/* Branding */}
      <div className="flex justify-center w-full p-4">
        <h3
          ref={titleRef}
          className="font-bold uppercase text-blue-75 special-font text-[4vw] hero-headding font-zentry whitespace-nowrap origin-center"
        >
          Gener<b>a</b>l T<b>T</b>k
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
