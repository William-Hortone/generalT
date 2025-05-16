import React from "react";
import CardImg from "../components/CardImg";
import images from "../constants/images";

const CompanyOverview = () => {
  return (
    <>
      <section className="flex w-full h-full my-20 border-y-2 bg-yelldow-200 border-y-lightBlack-100 ">
        <div className="flex flex-col w-1/2 h-full gap-4 p-8 divider">
          <CardImg img={images.pic1} />
          <CardImg img={images.pic2} />
          <CardImg img={images.pic3} />
          {/* <CardImg img={images.pic4} /> */}
          <CardImg img={images.pic5} />
        </div>

        <div className="w-full h-full min-h-[60vh] md:min-h-[150vh] flex flex-col bg-white justify-between bdg-red-500 top-8">
          <div className="sticky w-full  md:h-[20vh]  top-8 bg-dneutral-400  p-8">
            <h2 className="mb-4 text-3xl font-semibold uppercase md:text-xl font-zentry ">
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
          <div className="sticky self-center w-full h-auto p-8 bg-white top-8 justify-self-center">
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
