import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProductOverview } from "../components";
import images from "../constants/images";


gsap.registerPlugin(ScrollTrigger);

const EnergySub = () => {

  return (
    <section id="aiDriven" className="flex flex-col w-full h-auto py-8 pb-20 mt-20 bg-secondary ">
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
