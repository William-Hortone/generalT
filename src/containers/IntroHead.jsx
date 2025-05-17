import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowDown } from "react-icons/bs";
import images from "../constants/images";

gsap.registerPlugin(ScrollTrigger);

const IntroHead = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          // Left panel shrinks
          gsap.to(leftRef.current, {
            width: "0vw",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });

          // Right panel expands
          gsap.to(rightRef.current, {
            width: "100vw",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col-reverse md:flex-row w-full pt-20 bg-white h-[calc(100vh+5rem)]"
    >
      <div
        ref={leftRef}
        className="flex flex-col justify-between border-r-2 border-b-2 border-b-lightBlack-100 border-r-lightBlack-100 w-full overflow-auto md:w-[35vw] h-screen p-8 md:pr-0 "
      >
        <div className="w-full md:pr-8 h-[30vh]">
          <img
            src={images.pic1}
            className="object-cover w-full h-full rounded-lg"
            alt=""
          />
        </div>
        <ul className="flex flex-col">
          <li className="w-full h-auto py-4 border-y-2 border-y-lightBlack-100">
            Seamless Trade Connectivity
          </li>
          <li className="w-full h-auto py-4 border-b-2 border-b-lightBlack-100">
            AI-Driven Solutions
          </li>
          <li className="w-full h-auto py-4 border-b-2 border-b-lightBlack-100">
            Sustainable Energy and Infrastructure
          </li>
          <li className="w-full h-auto py-4 border-b-2 border-b-lightBlack-100">
            Seamless Transactions and Customer Support
          </li>
        </ul>
        <p className="hidden md:block">Geneal Kouta</p>
      </div>

      <div
        ref={rightRef}
        className="flex flex-col items-center justify-between w-full md:w-[65vw] h-screen gap-4 p-8 "
      >
        <h1 className="z-40 special-font hero-heading bottom-5 right-5">
          serv<b>i</b>ces
        </h1>
        <div className="hidden md:block">
          <BsArrowDown color="black" size={50} />
        </div>
      </div>
    </section>
  );
};

export default IntroHead;
