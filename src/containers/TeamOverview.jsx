import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { teamData } from "../constants/data";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
    sm: 640,
    lg: 1024,
};

const TeamOverview = () => {
    const [ref, { width }] = useMeasure();
    const [offset, setOffset] = useState(0);

    const CARD_BUFFER =
        width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

    const CAN_SHIFT_LEFT = offset < 0;

    const CAN_SHIFT_RIGHT =
        Math.abs(offset) < CARD_SIZE * (teamData.length - CARD_BUFFER);

    const shiftLeft = () => {
        if (!CAN_SHIFT_LEFT) {
            return;
        }
        setOffset((pv) => (pv += CARD_SIZE));
    };

    const shiftRight = () => {
        if (!CAN_SHIFT_RIGHT) {
            return;
        }
        setOffset((pv) => (pv -= CARD_SIZE));
    };

    return (
        <section className="my-[10rem]" ref={ref}>
            <div className="relative p-4 overflow-hidden">
                {/* CARDS */}
                <div className="max-w-6xl mx-auto">
                    {/* <p className="mb-4 text-2xl font-semibold">
                        Meet our. <span className="text-slate-500"></span>
                    </p> */}
                    <h2 className="text-black special-font title-heading mb-9">
                        Meet our Te<b>a</b>m
                    </h2>
                    <motion.div
                        animate={{
                            x: offset,
                        }}
                        className="flex"
                    >
                        {teamData.map((item, index) => {
                            return <Card key={index} item={item} />;
                        })}
                    </motion.div>
                </div>

                {/* BUTTONS */}
                <>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_LEFT ? "0%" : "-100%",
                        }}
                        className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
                        onClick={shiftLeft}
                    >
                        <FiChevronLeft />
                    </motion.button>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_RIGHT ? "0%" : "100%",
                        }}
                        className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
                        onClick={shiftRight}
                    >
                        <FiChevronRight />
                    </motion.button>
                </>
            </div>
        </section>
    );
};

const Card = ({ item }) => {
    return (
        <div
            className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
            style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginRight: MARGIN,
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
            }}
        >
            <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-t from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] backdrop-blur-sm hover:backdrop-blur-none">
                <span className="text-xs font-bold uppercase text-violet-300">
                    {item.position}
                </span>
                <p className="absolute my-2 text-3xl font-bold left-2 bottom-4">{item.name}</p>
            </div>
        </div>
    );
};


export default TeamOverview;


//     {
//         id: 1,
//         url: "/imgs/computer/mouse.png",
//         category: "Mice",
//         title: "Just feels right",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
//     },
//     {
//         id: 2,
//         url: "/imgs/computer/keyboard.png",
//         category: "Keyboards",
//         title: "Type in style",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
//     },
//     {
//         id: 3,
//         url: "/imgs/computer/monitor.png",
//         category: "Monitors",
//         title: "Looks like a win",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
//     },
//     {
//         id: 4,
//         url: "/imgs/computer/chair.png",
//         category: "Chairs",
//         title: "Back feels great",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
//     },
//     {
//         id: 5,
//         url: "/imgs/computer/lights.png",
//         category: "Lights",
//         title: "It's lit",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
//     },
//     {
//         id: 6,
//         url: "/imgs/computer/desk.png",
//         category: "Desks",
//         title: "Stand up straight",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
//     },
//     {
//         id: 7,
//         url: "/imgs/computer/headphones.png",
//         category: "Headphones",
//         title: "Sounds good",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
//     },
// ];