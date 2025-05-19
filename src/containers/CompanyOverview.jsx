import React, { useEffect, useRef } from "react";
import CardImg from "../components/CardImg";
import images from "../constants/images";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyOverview = () => {
  const textAnimRef = useRef(null);
  const secondTextAnimRef = useRef(null);

  useEffect(() => {
    const textAnim = textAnimRef.current;
    const secondTextAnim = secondTextAnimRef.current;

    gsap.fromTo(
      textAnim,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textAnim,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      secondTextAnim,
      {
        y: 400,
        opacity: 0,
      },
      {
        y: 200,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: secondTextAnim,
          start: "top 100%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <section className="flex w-full h-full my-20 overflow-scroll bg-white border-y-2 border-y-lightBlack-100 ">
        <div className="flex flex-col w-1/2 h-full gap-4 p-8 divider">
          <CardImg img={images.pic1} />
          <CardImg img={images.pic2} />
          <CardImg img={images.pic3} />
          {/* <CardImg img={images.pic4} /> */}
          <CardImg img={images.pic5} />
        </div>

        <div className="w-full overflow-scroll h-[60vh] md:h-[150vh] flex flex-col justify-between ">
          <div
            ref={textAnimRef}
            className="sticky w-full h-[20vh] top-8 bg-white p-8"
          >
            <h2 className="mb-4 text-3xl font-semibold uppercase md:text-xl font-zentry">
              Company Profile
            </h2>
            <p>
              General techniques and trade Kouta is a dynamic enterprise
              dedicated to revolutionizing the trading experience by seamlessly
              connecting China and Africa. We specialize in providing superior
              products and AI-driven solutions tailored to meet diverse needs,
              empowering individuals and businesses to thrive in the global
              marketplace.
            </p>
          </div>
          <div
            ref={secondTextAnimRef}
            className="self-center w-full h-auto p-8 bg-white top-8 justify-self-center"
          >
            <h2 className="mb-4 text-3xl font-semibold uppercase md:text-xl font-zentry ">
              Our Mission
            </h2>
            <p>
              To transform international trade by offering unparalleled access
              to high-quality goods from China, supported by innovative
              AI-powered solutions that ensure efficiency, growth, and
              reliability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyOverview;
