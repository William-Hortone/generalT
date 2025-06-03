import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import images from "../constants/images";
import { Link } from "react-router-dom";

export const ServicesOverview = () => {
    return (
        <>
            <div className="relative min-h-[270vh] mt-[10rem] ">
                <Features />
            </div>
            {/* <div className="h-[50vh] " /> */}
        </>
    );
};

const Features = () => {
    return (
        <div className="relative grid w-full h-full grid-cols-1 gap-8 px-4 mx-auto max-w-7xl md:grid-cols-2">
            <Copy />
            <Carousel />
        </div>
    );
};

const Copy = () => {
    return (
        <div className="flex flex-col justify-center w-full py-12 md:sticky md:top-0 md:h-screen">

            <h2 className="mt-2 mb-4 text-5xl font-bold leading-tight font-zentry">
                Products and Services
            </h2>
            <p className="text-lg text-indigo-950">
                We build bridges between China and Africa, offering a
                diverse range of products tailored to meet various needs
            </p>
            <br />
            <p className="text-lg font-general text-indigo-950">
                Whether it’s cutting-edge electronics, luxurious beauty
                products, or innovative agricultural machinery, we
                meticulously source items to ensure quality and reliability.
            </p>

            <Link to="/services" className="px-4 py-2 mt-8 text-sm font-bold text-indigo-100 uppercase rounded-full bg-primary hover:bg-indigo-600 w-fit">
                View Services
            </Link>
        </div>
    );
};

const Carousel = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    return (
        <div className="relative w-full">
            <Gradient />

            <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
                <CarouselItem
                    scrollYProgress={scrollYProgress}
                    position={1}
                    numItems={4}
                    img={images.product14}
                />

                <CarouselItem
                    scrollYProgress={scrollYProgress}
                    position={3}
                    numItems={4}
                    img={images.pic18}

                />
                <CarouselItem
                    scrollYProgress={scrollYProgress}
                    position={2}
                    numItems={4}
                    img={images.product28}

                />
                <CarouselItem
                    scrollYProgress={scrollYProgress}
                    position={4}
                    numItems={4}
                    img={images.product30}

                />
            </div>

            <Buffer />
        </div>
    );
};

const CarouselItem = ({ scrollYProgress, img, position, numItems }) => {
    const stepSize = 1 / numItems;
    const end = stepSize * position;
    const start = end - stepSize;

    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

    return (
        <motion.div
            style={{
                opacity,
                scale,
            }}
            className="grid w-full aspect-video shrink-0 place-content-center rounded-2xl bg-neutral-900"
        >
            <img src={img} alt="" className="object-cover w-full h-full rounded-2xl " />
            {/* <span className="text-lg text-neutral-600">Feature demo here</span> */}
        </motion.div>
    );
};

const Gradient = () => (
    <div className="sticky top-0 z-10 hidden w-full h-24 bg-gradient-to-b from-indigo-100 to-indigo-50/0 md:block" />
);

const Buffer = () => <div className="w-full h-24 md:h-48" />;
