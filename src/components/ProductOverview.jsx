import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ProductOverview = ({ x, title, text, image }) => {
  const itemContent = useRef(null);
  const imageRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    gsap.to(itemContent.current, {
      x: x,
      ease: "none",
      scrollTrigger: {
        trigger: itemContent.current,
        start: "top bottom",
        end: "+=800",
        scrub: true,
      },
    });
  }, [x]);

  useGSAP(() => {
    // Clip path animation
    gsap.set(imageRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "3%",
    });

    gsap.from(imageRef.current, {
      clipPath: "polygon(12% 0, 70% 0, 85% 88%, 0 93%)",
      borderRadius: "0% 0% 35% 8%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Scroll-triggered border bottom animation
    gsap.to(borderRef.current, {
      scaleX: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });
  });

  return (
    <div
      ref={itemContent}
      className="relative top-0 left-[50%] flex flex-row md:flex-col h-auto md:h-[30vh] w-full"
    >
      <div className="flex flex-col justify-between w-full h-full md:flex-row">
        <div className="md:w-[20%] w-full p-8">
          <h2 className="text-lg font-semibold text-white uppercase md:text-2xl">
            {title}
          </h2>
        </div>

        <div className="md:w-[40%] w-full flex justify-center h-full md:p-4">
          <img
            ref={imageRef}
            src={image}
            className="object-cover w-auto max-w-[90%] md:max-w-[50%] h-full"
            alt="agriculture"
            loading="lazy"
          />
        </div>

        <div className="md:w-[40%] w-full py-8 md:px-16 px-8">
          <p className="text-white">{text}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
        <div
          ref={borderRef}
          className="h-full origin-right scale-x-0 bg-white"
        ></div>
      </div>
    </div>
  );
};

export default ProductOverview;
