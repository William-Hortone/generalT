import { motion } from "framer-motion";
import { useState } from "react";
import {
    FiArrowUp,
    FiChevronLeft,
    FiChevronRight,
    FiLink,
    FiTarget,
    FiTool,
    FiUpload,
} from "react-icons/fi";

const CompanyDesc = () => {
    const [position, setPosition] = useState(0);

    const shiftLeft = () => {
        if (position > 0) {
            setPosition((pv) => pv - 1);
        }
    };

    const shiftRight = () => {
        if (position < features.length - 1) {
            setPosition((pv) => pv + 1);
        }
    };

    return (
        <section className="px-4 py-[15rem] overflow-hidden bg-white bdg-neutral-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between gap-4 mb-8">
                    <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl">
                        Company <span className="text-neutral-400">Overview</span>
                    </h2>
                    <div className="flex gap-2">
                        <button
                            className="p-4 text-2xl text-white transition-colors bg-black h-fit hover:bg-neutral-700"
                            onClick={shiftLeft}
                        >
                            <FiChevronLeft />
                        </button>
                        <button
                            className="p-4 text-2xl text-white transition-colors bg-black h-fit hover:bg-neutral-700"
                            onClick={shiftRight}
                        >
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
                <div className="flex gap-4">
                    {features.map((feat, index) => (
                        <Feature {...feat} key={index} position={position} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Feature = ({ position, index, title, secondDesc, description, Icon, title1, title2 }) => {
    const translateAmt =
        position >= index ? index * 100 : index * 100 - 100 * (index - position);

    return (
        <motion.div
            animate={{ x: `${-translateAmt}%` }}
            transition={{
                ease: "easeInOut",
                duration: 0.35,
            }}
            className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${index % 2 ? "bg-black text-white" : " bg-neutral-100"
                }`}
        >
            <Icon className="absolute right-2 top-2 text-7xl opacity-20" />
            <h3 className="mb-8 text-3xl font-bold">{title}</h3>
            <h4 className="mb-4 text-xl font-bold">{title1}</h4>
            <p>{description}</p>
            <h4 className="my-4 text-xl font-bold">{title2}</h4>
            <p>{secondDesc}</p>
        </motion.div>
    );
};

export default CompanyDesc;

const features = [
    {
        title: "Geographic Locations",
        Icon: FiUpload,
        description: "The company has offices in several countries: Central African Republic, China, Ivory Coast Cameroon",
        secondDesc: "This multinational presence allows for better coverage of African and Asian markets."
    },
    {
        title: "Areas of Activity",
        Icon: FiArrowUp,
        description: "Supply of Various Products (materials, equipment, consumer goods). Procurement from Asia and Africa",
        secondDesc: "Distribution of various products on local and international markets",
        title1: "Import-Export",
        title2: "General Trade",
    },
    {
        title: "Future Development (Construction and Public Works)",
        Icon: FiTarget,
        description: "Infrastructure construction",
        secondDesc: "Implementation of real estate and road projects",
        title1: "Buildings and Public Works",
        title2: "",
    },
    {
        title: "Objectives and Vision",
        Icon: FiLink,
        description: "Develop a strong commercial network in Africa and Asia",
        secondDesc: "Become a leader in import-export and construction/public works in the Central African Republic and the sub-region. Promote strategic partnerships with international suppliers and investor",
        title1: "",
        title2: "",
    },
    {
        title: "Future Outlook",
        Icon: FiTool,
        description: "Strengthening of logistical capabilities",
        secondDesc: "Diversification of products and services. Penetration into new markets (Europe, Middle East)",
        title1: "",
        title2: "",
    },
];