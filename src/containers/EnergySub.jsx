import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProductOverview } from "../components";
import images from "../constants/images";


gsap.registerPlugin(ScrollTrigger);

const EnergySub = () => {
  //   const itemContent = useRef(null);

  //   useEffect(() => {
  //     gsap.to(itemContent.current, {
  //       x: "-50%",
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: itemContent.current,
  //         start: "top bottom",
  //         end: "+=800",
  //         scrub: true,
  //       },
  //     });
  //   }, []);

  //   useGSAP(() => {
  //     // Clip path animation
  //     gsap.set("#image-frame", {
  //       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //       borderRadius: "0% 0% 0% 0%",
  //     });

  //     gsap.from("#image-frame", {
  //       clipPath: "polygon(12% 0, 70% 0, 85% 88%, 0 93%)",
  //       borderRadius: "0% 0% 35% 8%",
  //       ease: "power1.inOut",
  //       scrollTrigger: {
  //         trigger: "#image-frame",
  //         start: "center center",
  //         end: "bottom center",
  //         scrub: true,
  //       },
  //     });

  //     // Scroll-triggered border bottom animation
  //     gsap.to("#scroll-border", {
  //       scaleX: 1,
  //       ease: "power1.out",
  //       scrollTrigger: {
  //         trigger: "#image-frame",
  //         start: "top bottom",
  //         end: "center center",
  //         scrub: true,
  //       },
  //     });
  //   });

  return (
    <section className="flex flex-col w-full h-auto py-8 pb-20 mt-20 bg-secondary ">
      <div>
        <h2 className="p-8 text-3xl font-semibold uppercase text-primary md:text-xl font-zentry">
          AI-Driven Solutions
        </h2>
      </div>

      <div className="relative flex flex-col w-full h-auto border-t border-t-lightBlack-200">
        {/* Content with animated border */}
        <ProductOverview
          x="-50%"
          title="AI Smart Agriculture"
          text="General techniques and trade Kouta is committed to bringing
                    state-of-the-art AI technology to the agricultural sector,
                    helping farmers and agribusinesses modernize and transform."
          image={images.pic18}
        />

        <ProductOverview
          x="-50%"
          title="AI Smart Home"
          text="General techniques and trade 
Kouta provides comprehensive 
smart home solutions to help 
users create a safe, comfortable 
and productive living environment."
          image={images.pic16}
        />
        <ProductOverview
          x="-50%"
          title="Sustainable Energy"
          text="We provide sustainable energy solutions such as solar 
panels and advanced infrastructure like panel tool gate 
construction, driving green development."
          image={images.pic21}
        />
        <ProductOverview
          x="-50%"
          title="Sustainable Energy"
          text="Innovative traffic management systems (e.g., red traffic 
lights) and electric vehicles support the development 
of smart cities."
          image={images.pic19}
        />
      </div>
    </section>
  );
};

export default EnergySub;
