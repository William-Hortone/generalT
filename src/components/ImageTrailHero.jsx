import { motion, useAnimate } from "framer-motion";
import { useRef } from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import images from "../constants/images";

export const ImageTrailHero = () => {
    return (
        <MouseImageTrail
            renderImageBuffer={50}
            rotationRange={25}
            images={[
                images.article1,
                images.article12,
                images.article13,
                images.article15,
                images.article6,
                images.pic1,
                images.pic5,
                images.pic9,
                images.article16,
                images.article17,
                images.article19,
                images.article18,
                images.product1,
                images.product28,
                images.product19,
                images.product30,
                images.product29,

            ]}
        >
            <section className="h-screen  mt-[15rem] bg-slate-200">
                <Copy />
                <WatermarkWrapper />
            </section>
        </MouseImageTrail>
    );
};



const Copy = () => {
    return (
        <div className="absolute bottom-0 left-0 right-0 z-[999999]">
            <div className="flex items-end justify-between p-4 mx-auto max-w-7xl md:p-8">
                <div>
                    <h1 className="mb-6 max-w-4xl font-zentry text-6xl font-black leading-[1.1] text-slate-900 md:text-8xl">
                        Company Profile <span className="text-indigo-500">GTTK</span>
                    </h1>
                    <p className="max-w-xl text-slate-700 md:text-lg">
                        General techniques and trade
                        Kouta is a dynamic enterprise
                        dedicated to revolutionizing the
                        trading experience by seamlessly
                        connecting China and Africa. We
                        specialize in providing superior
                        products and AI-driven solutions
                        tailored to meet diverse needs,
                        empowering individuals and
                        businesses to thrive in the global
                        marketplace.
                    </p>
                </div>
                <FiArrowDownCircle className="hidden text-8xl text-slate-500 md:block" />
            </div>
        </div>
    );
};

const WatermarkWrapper = () => {
    return (
        <>
            <Watermark text="Goods from China" />
            <Watermark text="Get motivated" reverse />
            <Watermark text="AI-powered solutions" />
            <Watermark text="International trade" reverse />
            <Watermark text="Goods from China" />
            <Watermark text="Get motivated" reverse />
            <Watermark text="AI-powered solutions" />
            <Watermark text="International trade" reverse />
        </>
    );
};

const Watermark = ({ reverse, text }) => (
    <div className="flex overflow-hidden -translate-y-12 select-none">
        <TranslateWrapper reverse={reverse}>
            <span className="w-fit whitespace-nowrap text-[20vmax] font-zentry font-black uppercase leading-[0.75] text-slate-300">
                {text}
            </span>
        </TranslateWrapper>
        <TranslateWrapper reverse={reverse}>
            <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black font-zentry uppercase leading-[0.75] text-slate-300">
                {text}
            </span>
        </TranslateWrapper>
    </div>
);

const TranslateWrapper = ({ children, reverse }) => {
    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
            className="flex"
        >
            {children}
        </motion.div>
    );
};

const MouseImageTrail = ({
    children,
    images,
    renderImageBuffer,
    rotationRange,
}) => {
    const [scope, animate] = useAnimate();

    const lastRenderPosition = useRef({ x: 0, y: 0 });
    const imageRenderCount = useRef(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;

        const distance = calculateDistance(
            clientX,
            clientY,
            lastRenderPosition.current.x,
            lastRenderPosition.current.y
        );

        if (distance >= renderImageBuffer) {
            lastRenderPosition.current.x = clientX;
            lastRenderPosition.current.y = clientY;

            renderNextImage();
        }
    };

    const calculateDistance = (x1, y1, x2, y2) => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;

        // Using the Pythagorean theorem to calculate the distance
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        return distance;
    };

    const renderNextImage = () => {
        const imageIndex = imageRenderCount.current % images.length;
        const selector = `[data-mouse-move-index="${imageIndex}"]`;

        const el = document.querySelector(selector);

        el.style.top = `${lastRenderPosition.current.y}px`;
        el.style.left = `${lastRenderPosition.current.x}px`;
        el.style.zIndex = imageRenderCount.current.toString();

        const rotation = Math.random() * rotationRange;

        animate(
            selector,
            {
                opacity: [0, 1],
                transform: [
                    `translate(-50%, -25%) scale(0.5) ${imageIndex % 2
                        ? `rotate(${rotation}deg)`
                        : `rotate(-${rotation}deg)`
                    }`,
                    `translate(-50%, -50%) scale(1) ${imageIndex % 2
                        ? `rotate(-${rotation}deg)`
                        : `rotate(${rotation}deg)`
                    }`,
                ],
            },
            { type: "spring", damping: 15, stiffness: 200 }
        );

        animate(
            selector,
            {
                opacity: [1, 0],
            },
            { ease: "linear", duration: 0.5, delay: 1 }
        );

        imageRenderCount.current = imageRenderCount.current + 1;
    };

    return (
        <div
            ref={scope}
            className="relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {children}

            {images.map((img, index) => (
                <img
                    className="absolute top-0 left-0 object-cover w-auto border-2 opacity-0 pointer-events-none h-36 rounded-xl border-slate-900 bg-slate-800"
                    src={img}
                    alt={`Mouse move description ${index}`}
                    key={index}
                    data-mouse-move-index={index}
                />
            ))}
        </div>
    );
};