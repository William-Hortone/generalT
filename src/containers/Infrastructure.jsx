import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import { useRef } from "react";
import { FiMapPin } from "react-icons/fi";
import { teamData } from "../constants/data";
import images from './../constants/images';

export const Infrastructure = () => {
    return (
        <div className="bg-zinc-950">
            <Hero />
            <Schedule />
        </div>
    );
};



const SECTION_HEIGHT = 2300;

const Hero = () => {
    return (
        <div
            style={{ height: `calc(${SECTION_HEIGHT}px)` }}
            className="relative w-full"
        >
            <CenterImage />
            <ParallaxImages />
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();

    const clip1 = useTransform(scrollY, [0, 2300], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 2300], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(
        scrollY,
        [0, SECTION_HEIGHT + 500],
        ["170%", "100%"]
    );
    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
    );

    return (
        <motion.div
            className="sticky top-0 w-full h-screen"
            style={{
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage: `url(${images.pic22})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

const ParallaxImages = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px]">
            <ParallaxImg
                src={images.pic5}
                alt="And example of a space launch"
                start={-200}
                end={200}
                className="w-1/3"
            />
            <ParallaxImg
                src={images.pic1}
                alt="An example of a space launch"
                start={200}
                end={-250}
                className="w-2/3 mx-auto"
            />
            <ParallaxImg
                src={images.product30}
                alt="Orbiting satellite"
                start={-200}
                end={200}
                className="w-1/3 ml-auto"
            />
            <ParallaxImg
                src={images.product19}
                alt="Orbiting satellite"
                start={0}
                end={-500}
                className="w-5/12 ml-24"
            />
        </div>
    );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.img
            src={src}
            alt={alt}
            className={className}
            ref={ref}
            style={{ transform, opacity }}
        />
    );
};

const Schedule = () => {
    return (
        <section
            id="launch-schedule"
            className="max-w-5xl px-4 py-48 mx-auto text-white"
        >
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-20 text-2xl font-black text-center uppercase md:text-4xl text-zinc-50"
            >
                Meet Our Team
            </motion.h1>

            {teamData.map((member, index) => (
                <ScheduleItem key={index} member={member} />
            ))}

        </section>
    );
};

const ScheduleItem = ({ member }) => {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="flex items-center justify-between px-3 border-b mb-9 border-zinc-800 pb-9"
        >

            <div className="flex items-center gap-4">

                <div className="w-auto md:h-[5rem] h-[10rem]">
                    <img src={member.img} alt="member" className="object-cover w-full h-full" />
                </div>
                <div className=" justify-self-start">

                    <p className="mb-1.5 text-sm md:text-xl text-zinc-50">{member.name}</p>
                    <p className="text-xs uppercase md:text-sm text-zinc-500">{member.position}</p>
                </div>
            </div>
            <div className=" items-center hidden md:flex gap-1.5 text-end text-sm uppercase text-zinc-500">
                <p className="">{member.location}</p>
                <FiMapPin />
            </div>
        </motion.div>
    );
};
