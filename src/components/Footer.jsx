import React from "react";
import images from "../constants/images";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between w-full pt-16 text-white h-dvh bg-secondary">
      <div className="flex flex-col w-full h-auto md:flex-row bgd-red-500">
        <div className="flex md:w-[25vw] w-[35vw] h-auto bdg-red-500">
          <img
            src={images.pic1}
            alt="contact"
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="flex flex-col p-8 md:pl-16">
          <h2 className="text-2xl font-semibold">
            Tianjin General kouta <br /> international Trade Co. Ltd
          </h2>
          <p className="font-robert-regular">Looking forward to your cooperation</p>
        </div>
      </div>

      {/* <div className="flex w-full h-auto bgd-red-500"> */}
      <div className="flex flex-col justify-between w-full gap-16 px-8 font-robert-regular md:flex-row ">
        <div className="flex flex-col">
          <a href="mailto:Poumskito8@gmail.com">Poumskito8@gmail.com</a>
          <a href="mailto:generalkouta21@gmail.com">generalkouta21@gmail.com</a>
        </div>
        <div className="flex flex-row justify-between md:flex-col">
          <div>
            <p>+1 (289) 244-8690</p>
            <p>+86 13311876241</p>
          </div>
          <div>
            <p>+236 75508705</p>
            <p>+236 72302835</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between w-full font-robert-regular md:justify-start">
            <p>Copyright</p>
            <p>©2025 GTTK</p>
          </div>
          <p>
            Developed by <a href="#">WanTech</a>
          </p>
          {/* </div> */}
        </div>
      </div>
      <div className="z-50 flex justify-center w-full text-[10vw]  p-4 bgd-purple-600">
        <h2 className="z-40 font-bold uppercase text-blue-75 special-font hero-headding font-zentry whitespace-nowrap bottom-5 right-5">
          gener<b>a</b>l T<b>T</b>k
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
