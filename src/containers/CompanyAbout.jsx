import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import {squareData} from "../constants/data";


const CompanyAbout = () => {
    return (
        <section className="grid items-center bg-[#ffff]  w-full max-w-6xl grid-cols-1 gap-8 px-8 my-[8rem] py-12 mx-auto md:grid-cols-2">
            <div>
                <h3 className="text-4xl font-semibold md:text-6xl">
                    GTTK
                </h3>
                <p className="my-4 text-base md:text-lg text-slate-700 md:my-6">
                    General Techniques and Trade Kouta is a dynamic company founded in 2024 by the children of the African continent, specializing in import-export, general trade, and soon in Construction and Public Works (BTP). With an international presence, the company is committed to providing high-quality commercial and technical solutions.
                </p>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

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


const generateSquares = () => {
    return shuffle([...squareData]).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        />
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares);

    const shuffleSquares = useCallback(() => {
        setSquares(generateSquares());
        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    }, []);

    useEffect(() => {
        shuffleSquares();
        return () => clearTimeout(timeoutRef.current);
    }, [shuffleSquares]);

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares}
        </div>
    );
};

export default CompanyAbout;
