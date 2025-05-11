import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./horizontalScroll.css";
import CardImg from "./CardImg";
import images from "../constants/images";
import team from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const pinRef = useRef(null);
  const containerRef = useRef(null);

  //   useEffect(() => {
  //     const pin = pinRef.current;
  //     const container = containerRef.current;
  //     const scrollWidth = pin.scrollWidth - window.innerWidth;

  //     gsap.to(pin, {
  //       x: -scrollWidth,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: container,
  //         start: "top top",
  //         end: () => `+=${scrollWidth}`,
  //         scrub: true,
  //         pin: true,
  //         anticipatePin: 1,
  //       },
  //     });

  //     return () => ScrollTrigger.kill();
  //   }, []);

  useEffect(() => {
    const pin = pinRef.current;
    const container = containerRef.current;
    const scrollWidth = pin.scrollWidth - window.innerWidth;

    const animation = gsap.to(pin, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // 👇 Clean up properly
    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []);

  return (
    <section id="sectionPin" ref={containerRef}>
      <div className="pin-wrap" ref={pinRef}>
        <h2>Meet the team</h2>
        {/* <img
          src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
          alt=""
        /> */}
        
        {team.map((member, index) => (
          <CardImg key={index} member={member} />
        ))}

        {/* <CardImg img={images.team2} infos={infos} /> */}
        {/* <CardImg img={images.team3} />
        <CardImg img={images.team4} /> */}

        {/* <img
          src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
          alt=""
        /> */}
      </div>
    </section>
  );
};

export default HorizontalScroll;
