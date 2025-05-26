import { Footer, Hero, Navbar, TextAnimation } from "../components";
import { Infrastructure } from "../containers";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar />
      <Hero />

      <div className="md:my-[10rem] mt-24 py-8 md:px-8  text-black w-full md:w-1/2   ">
        <h2 className="pl-6 text-3xl font-bold text-black uppercase font-zentry text-start">
          Company Profile
        </h2>
        <TextAnimation
          textContent='General techniques and trade Kouta is a dynamic enterprise dedicated to revolutionizing the trading experience by seamlessly connecting China and Africa. We specialize in providing superior products and AI-driven solutions tailored to meet diverse needs, empowering individuals and businesses to thrive in the global marketplace'
        />
      </div>
      <div className="md:my-[10rem] py-8  md:px-8  flex  text-black w-full   ">
        <div className="hidden md:w-1/2 md:block" />
        <div className="w-full md:w-1/2">

          <h2 className="pl-6 text-3xl font-bold text-black uppercase font-zentry text-start">
            Our Mission
          </h2>
          <TextAnimation
            textContent='To transform international trade by offering unparalleled access
              to high-quality goods from China, supported by innovative
              AI-powered solutions that ensure efficiency, growth, and
              reliability.'/>
        </div>
      </div>
      <Infrastructure />
      <Footer />
    </div>
  );
};

export default Home;
