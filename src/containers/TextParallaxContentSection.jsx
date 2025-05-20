import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import images from "../constants/images";

export const TextParallaxContentSection = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={images.product28}
        subheading="Electronic"
        heading="Seamless Trade Connectivity"
      >
        <ExampleContent
          title='Electronic'
          text1='General techniques and trade 
Kouta offers a range of high quality electronic products, 
including home appliances, smart 
devices, communication tools and 
office equipment.'
          text2='Our products are sourced from 
leading manufacturers in China, 
ensuring excellent performance 
and stylish design to meet the 
diverse needs of modern life'

        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={images.product14}
        subheading="Beauty Products"
        heading="Seamless Trade Connectivity"
      >
        <ExampleContent
          title='Beauty Products'
          text1='General techniques and 
trade Kouta offers a range of 
high-quality beauty products, 
including skincare, makeup, 
haircare, and personal care 
categories'
          text2='Our products come from 
leading Chinese beauty 
brands, combining advanced 
technology and natural 
ingredients to meet the global 
demand for beauty and 
wellness'

        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={images.pic16}
        subheading=""
        heading="AI-Driven Solutions"
      >
        <ExampleContent
          title='AI-Driven Solutions'
          text1='General techniques and trade Kouta offers a range of advanced agricultural machinery, covering plowing, planting, 
harvesting, and irrigation processes. Our machinery comes from leading Chinese manufacturers, combining innovative 
technology and durable designs to help farmers improve productivity and reduce labor intensity.'

          text2='Beyond traditional trade, we leverage AI 
technology to revolutionize housing solutions
and agricultural practices, enhancing
efficiency and promoting growth.'

        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-white"
    >
      <p className="mb-2 text-xl text-center md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-4xl font-bold text-center md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ title, text1, text2 }) => (
  <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold uppercase font-zentry md:col-span-4">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        {text1}
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        {text2}
      </p>

    </div>
  </div>
);