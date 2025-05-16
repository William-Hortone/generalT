import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./styles/horizontalScroll.css";
import CardImgTeam from "./CardImgTeam";
import { teamData } from "./../constants/data";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    const pin = pinRef.current;
    const container = containerRef.current;
    const scrollWidth = pin.scrollWidth - window.innerWidth;

    let ctx = gsap.context(() => {
      gsap.to(pin, {
        x: -scrollWidth / 2,
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sectionPin"
      className="flex flex-col justify-between bg-red-500 just"
      ref={containerRef}
    >
      <div className="z-50 flex justify-center w-full p-4 bg-purple-600">
        <h2 className="text-3xl font-bold font-zentry text-blue-50">
          Meet Our team
        </h2>
      </div>

      <div className="bg-green-200 pin-wrap" ref={pinRef}>
        {teamData.map((member, index) => (
          <CardImgTeam key={index} member={member} />
        ))}
      </div>

      <div className="z-50 flex justify-center w-full p-4 bg-purple-600">
        {/* <h2 className="z-40 text-blue-75 special-font hero-heading bottom-5 right-5">
          me<b>e</b>t our team
        </h2> */}
      </div>
    </section>
  );
};

export default HorizontalScroll;
