import React, { useRef } from "react";
import {
  Footer,
  Header,
  HorizontalScrollGallery,
  ServiceContent,
} from "../components";
import ProjectContent from "../components/ProjectsContent";
import Product from "../containers/Product";
import FooterService from "../components/FooterService";
// import Footer from "./Footer";
// import { Header } from "./Header";
import "./global.css";

const Services = () => {
  const mainContainerRef = useRef(null);

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
