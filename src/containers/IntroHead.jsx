import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowDown } from "react-icons/bs";
import images from "../constants/images";
import { CardImg } from "../components";
import { list } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const IntroHead = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);


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


      // ✨ Mount animation for h1
      const chars = titleRef.current.querySelectorAll("span");

      gsap.set(chars, {
        opacity: 0,
        y: 40,
        rotateX: 90,
      });

      gsap.to(chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const text = "services";

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col-reverse w-full min-h-screen overflow-hidden bg-white md:pt-20 md:flex-row "
    >
      <div
        ref={leftRef}
        className="flex flex-col pt-8   overflow-hidden justify-between border-r-2 border-b-2 border-b-lightBlack-100 border-r-lightBlack-100 w-full  md:w-[35vw]  p-8 md:pr-0 "
      >
        <div className="w-full md:pr-8 h-[30vh]">
          <img
            src={images.pic1}
            className="object-cover w-full h-full rounded-lg"
            alt="overview"
          />
        </div>
        <ul className="flex flex-col">
          {list.map((item, index) => (
            <li
              key={index}
              className="relative w-full h-auto py-4 border-b-2 group border-b-lightBlack-100"
            >
              {item.text}

              <div
                className="absolute top-0 left-0 transition-all duration-300 ease-in-out scale-95 translate-y-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
              >
                <CardImg img={item.img} />
              </div>
            </li>
          ))}
        </ul>


        <p className="hidden font-bold md:block ">Geneal Kouta</p>
      </div>

      <div
        ref={rightRef}
        className="flex flex-col items-center min-h-full  pb-24 h-auto justify-center md:justify-between w-full md:w-[65vw]   gap-4 p-8 "
      >
        <h1
          ref={titleRef}
          className="z-40 flex gap-1 special-font hero-heading bottom-5 right-5"
        >
          {text.split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className="relative hidden md:block">
          <BsArrowDown color="#C02C2F" className="scroll-arrow" size={50} />
        </div>
      </div>
    </section>
  );
};

export default IntroHead;


