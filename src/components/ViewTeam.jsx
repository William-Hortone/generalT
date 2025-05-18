import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { teamData } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

function ViewTeam() {
  const containerRef = useRef(null);
  const horizontalScrollRef = useRef(null);

  useEffect(() => {
    const section = containerRef.current;
    const scrollWidth = horizontalScrollRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    let ctx = gsap.context(() => {
      gsap.to(horizontalScrollRef.current, {
        x: () => `-${scrollWidth - viewportWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative  bg-white flex flex-col justify-center w-full h-[70vh] md:h-screen gap-16 itedms-center"
    >
      <div
        ref={horizontalScrollRef}
        className="flex items-center h-[50vh] gap-8 px-20 will-change-transform"
      >
        {teamData.map((member, index) => (
          <div
            key={index}
            className="shrink-0 w-[20vw] h-[60vh] overflow-hidden rounded-lg"
          >
            <div
              key={index}
              className="  flex items-end h-[90%] overflow-hidden rounded-lg"
            >
              <img
                src={member.img}
                alt={`Slide ${index}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            <p className="mt-2 text-black text-md font-robert-regular">
              {member.position}
            </p>
          </div>
        ))}
      </div>

      {/* <ImagesList /> */}

      <h2 className="z-40 text-center text-blue-75 special-font hero-heading bottom-5 right-5">
        me<b>e</b>t our t<b>e</b>am
      </h2>
    </section>
  );
}

export default ViewTeam;
