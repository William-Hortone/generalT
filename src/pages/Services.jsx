import { Footer, Navbar, ServiceDisc } from "../components";
import { EnergySub, IntroHead, TextParallaxContentSection } from "../containers";

const Services = () => {
  return (
    <section className="bg-white container-customer">
      <Navbar bg='black' />
      <IntroHead />
      <ServiceDisc />
      <TextParallaxContentSection />
      {/* <Presentation /> */}
      <EnergySub />
      <Footer />
    </section>
  );
};

export default Services;
