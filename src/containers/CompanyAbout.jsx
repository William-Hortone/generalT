import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import images from "../constants/images";

const CompanyAbout = () => {
    return (
        <section className="grid items-center bg-[#ffff]  w-full max-w-6xl grid-cols-1 gap-8 px-8 my-[8rem] py-12 mx-auto md:grid-cols-2">
            <div>
                {/* <span className="block mb-4 text-xs font-medium text-indigo-500 md:text-sm">
                    Better every day
                </span> */}
                <h3 className="text-4xl font-semibold md:text-6xl">
                    GTTK
                </h3>
                <p className="my-4 text-base md:text-lg text-slate-700 md:my-6">
                    General Techniques and Trade Kouta is  a dynamic company founded in 2024 by the children of the African continent, specializing in import-export, general trade, and soon in Construction and Public Works (BTP). With an international presence, the company is committed to providing high-quality commercial and technical solutions.

                </p>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: images.pic1,
    },
    {
        id: 2,
        src: images.article1,
    },
    {
        id: 3,
        src: images.article10,
    },
    {
        id: 4,
        src: images.article15,
    },
    {
        id: 5,
        src: images.article16,
    },
    {
        id: 6,
        src: images.article13,
    },
    {
        id: 7,
        src: images.product11,
    },
    {
        id: 8,
        src: images.article12,
    },
    {
        id: 9,
        src: images.pic3,
    },
    {
        id: 10,
        src: images.article1,
    },
    {
        id: 11,
        src: images.article12,
    },
    {
        id: 12,
        src: images.article13,
    },
    {
        id: 13,
        src: images.article15,
    },
    {
        id: 14,
        src: images.article1,
    },
    {
        id: 15,
        src: images.article3,
    },
    {
        id: 16,
        src: images.article1,
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default CompanyAbout;