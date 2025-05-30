import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowDown } from "react-icons/bs";
import images from "../constants/images";
import { CardImg, LinksOverview } from "../components";
import { list } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);



const dataImages = [
  {
    id: 1,
    image: images.pic1,
    alt: "Cargo"
  },
  {
    id: 2,
    image: images.pic5,
    alt: "Export"
  },
  {
    id: 3,
    image: images.pic3,
    alt: "Connectivity"
  },
  {
    id: 4,
    image: images.product14,
    alt: "Logistics"
  }
]

const IntroHead = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef(null);
  const text = "services";

  const [currentIndex, setCurrentIndex] = useState(0);


  //Rotate images every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataImages.length);
    }, 5000);
    return () => clearInterval(interval);
  })





  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered animations for panels
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
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

      // Animate h1 title characters
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

      // Animate each <li> one by one from bottom
      // const listItems = gsap.utils.toArray(
      //   listRef.current.querySelectorAll("li")
      // );

      // gsap.set(listItems, {
      //   opacity: 0,
      //   y: 40,
      // });

      // gsap.to(listItems, {
      //   opacity: 1,
      //   y: 0,
      //   duration: 0.6,
      //   stagger: 0.15,
      //   ease: "power3.out",
      //   delay: 0.8,
      // });
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      className="relative pt-[8rem] flex flex-col-reverse w-full min-h-screen overflow-hidden bg-white md:pt-20 md:flex-row"
    >
      <div
        ref={leftRef}
        className="flex  relative  flex-col pt-8 overflow-hidden justify-between border-r-2 border-b-2 border-b-neutral-400 border-r-neutral-400 w-full md:w-[50vw]  "
      >
        {/* Image Header */}

        <div className="w-full pl-8 pr-8 md:pr-8 h-[35vh]">
          <img className="object-cover w-full h-full transition-all duration-300 ease-in-out rounded-lg" src={dataImages[currentIndex].image} alt={dataImages[currentIndex].alt} loading="lazy" />

        </div>

        <LinksOverview />

        {/* services list */}
        {/* <ul ref={listRef} className="flex flex-col">
          {list.map((item, index) => (
            <li
              key={index}
              className="relative w-full h-auto py-4 border-b-2 whitespace-nowrap group border-b-lightBlack-100"
            >
              {item.text}
              <div className="absolute top-0 left-0 transition-all duration-300 ease-in-out scale-95 translate-y-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                <CardImg img={item.img} />
              </div>
            </li>
          ))}
        </ul> */}
        {/* <span /> */}
        {/* <p className="absolute hidden font-bold uppercase whitespace-nowrap animate-move-up left-8 md:block text-primary">Geneal Kouta</p> */}
      </div>

      <div
        ref={rightRef}
        className="flex flex-col items-center justify-center w-full h-auto min-h-full gap-4 p-8 pb-0 md:justify-between md:w-[50vw]"
      >
        <h1
          ref={titleRef}
          className="z-40 flex text-[1rem] gap-1 pb-0 special-font hero-heading-tertiary bottom-5 right-5"
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
