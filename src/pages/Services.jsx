import { Footer, Navbar, ServiceDisc } from "../components";
import { EnergySub, IntroHead, Presentation } from "../containers";

const Services = () => {
  return (
    <section className="bg-white container-customer">
      <Navbar bg='black' />
      <IntroHead />
      <ServiceDisc />
      <Presentation />
      <EnergySub />
      <Footer />
    </section>
  );
};

export default Services;
