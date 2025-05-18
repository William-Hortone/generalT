import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./styles/horizontalScroll.css";
import CardImgTeam from "./CardImgTeam";
import { teamData } from "./../constants/data";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const pinWrapRef = useRef(null); // safer pin target

  useEffect(() => {
    const pinWrap = pinWrapRef.current;
    const container = containerRef.current;

    if (!pinWrap || !container) return;

    const scrollWidth = pinWrap.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      const scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: true,
        pin: pinWrap,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: self => {
          gsap.to(pinWrap, {
            x: -self.progress * scrollWidth,
            ease: "none",
            overwrite: "auto",
          });
        },
      });

      return () => {
        scrollTrigger.kill();
      };
    }, containerRef);

    return () => ctx.revert(); // GSAP cleanup
  }, []);

  return (
    <section
      id="sectionPin"
      className="flex flex-col justify-between bg-red-500"
      ref={containerRef}
    >
      <div className="z-50 flex justify-center w-full p-4 bg-purple-600">
        {/* Optional Top Content */}
      </div>

      <div className="overflow-hidden bg-green-200 pin-wrap" ref={pinWrapRef}>
        <div className="flex w-fit">
          {teamData.map((member, index) => (
            <CardImgTeam key={index} member={member} />
          ))}
        </div>
      </div>

      <div className="z-50 flex justify-center w-full p-4 bg-purple-600">
        <h2 className="z-40 text-blue-75 special-font hero-heading bottom-5 right-5">
          me<b>e</b>t our t<b>e</b>am
        </h2>
      </div>
    </section>
  );
};

export default HorizontalScroll;
