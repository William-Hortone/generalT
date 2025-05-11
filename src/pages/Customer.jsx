import React from "react";
import ServiceHeader from "./../components/ServicesHeader";
import FooterService from "./../components/FooterService";
import ProjectContent from "./../components/ProjectsContent";
import { Header, ServiceContent } from "../components";
import './global.css'

const Customer = () => {
  return (
    <>
      <section className="container-customer">
        {/* <ServiceHeader /> */}
        <Header />
        <ProjectContent />
        <ServiceContent />
        <FooterService />
      </section>
    </>
  );
};

export default Customer;
