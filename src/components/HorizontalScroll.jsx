import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const HorizontalScroll = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex items-center justify-center h-48">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex items-center justify-center h-48">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (scrollContainerRef.current) {
      const totalScrollWidth = scrollContainerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setScrollWidth(totalScrollWidth - viewportWidth);
    }
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div
          ref={scrollContainerRef}
          style={{ x }}
          className="flex gap-4 px-20"
        >
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="p-8 text-6xl font-black text-white uppercase bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScroll;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
