import {
  Header
} from "../components";
import Product from "../containers/Product";
import FooterService from "./../components/FooterService";
import ProjectContent from "./../components/ProjectsContent";
import "./global.css";

const Customer = () => {
  return (
    <>
      <section className="container-customer">
        {/* <ServiceHeader /> */}
        <Header />
        <ProjectContent />
        {/* <AnimatedSections /> */}
        <Product />
        <FooterService />
      </section>
    </>
  );
};

export default Customer;
