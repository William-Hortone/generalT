import {
  Header
} from "../components";
import FooterService from "../components/FooterService";
import ProjectContent from "../components/ProjectsContent";
import Product from "../containers/Product";
import "./global.css";

const Services = () => {
  return (
    <section className="container-customer">
      {/* <ServiceHeader /> */}
      <Header />
      <ProjectContent />
      {/* <AnimatedSections /> */}
      <Product />
      <FooterService />
    </section>
  );
};

export default Services;
