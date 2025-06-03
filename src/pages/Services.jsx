import { Footer, Navbar } from "../components";
import { dataImages, servicesLinksData } from "../constants/data";
import { EnergySub, IntroHead, TextParallaxContentSection } from "../containers";

const Services = () => {
  return (
    <section className="w-full h-auto bg-white s-customer">
      <Navbar bg='black' />
      <IntroHead text="Services" dataImages={dataImages} linksData={servicesLinksData} />
      {/* <ServiceDisc /> */}
      <TextParallaxContentSection />
      <EnergySub />
      <Footer />
    </section>
  );
};

export default Services;
