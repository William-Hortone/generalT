import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
    return (
        <section className="grid gap-2 px-8 py-2 text-black bg-green-300 md:py-24 place-content-center">
            <FlipLink href="#">Poumskito8@gmail.com</FlipLink>
            <FlipLink href="#">generalkouta21@gmail.com</FlipLink>
            {/* <FlipLink href="#">Facebook</FlipLink>
            <FlipLink href="#">General TTK</FlipLink> */}
        </section>
    );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden text-3xl font-black uppercase whitespace-nowrap sm:text-4xl md:text-8xl lg:text-[5vw]"
            style={{
                lineHeight: 0.75,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};