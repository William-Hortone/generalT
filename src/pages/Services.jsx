import { Hero, Navbar } from "../components";
import { IntroHead } from "../containers";

const Services = () => {
  return (
    <section className="bg-yellow-200 container-customer">
      <Navbar />
      {/* <Hero /> */}
      <IntroHead />
      <div className="h-[100vh] w-full"></div>
    </section>
  );
};

export default Services;
