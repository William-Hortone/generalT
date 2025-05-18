import { Hero, Navbar, ServiceDisc } from "../components";
import { IntroHead, Presentation } from "../containers";

const Services = () => {
  return (
    <section className="bg-white container-customer">
      <Navbar />
      {/* <Hero /> */}
      <IntroHead />
      <ServiceDisc />
      <Presentation />
      <div className="h-[100vh] w-full"></div>
    </section>
  );
};

export default Services;
