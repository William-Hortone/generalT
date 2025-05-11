import React, { useRef } from "react";
// import HorizontalScrollGallery from "./HorizontalScrollGallery";
import {
  Footer,
  Header,
  HorizontalScrollGallery,
  ServiceContent,
} from "../components";
// import Footer from "./Footer";
// import { Header } from "./Header";

const Services = () => {
  const mainContainerRef = useRef(null);

  return (
    <div ref={mainContainerRef} className="services-container">
      <Header />

      {/* Horizontal Scroll Section - will be fully scrolled before footer appears */}
      {/* <HorizontalScrollGallery /> */}
      <div className="w-full h-auto ">
        <ServiceContent />
      </div>
      {/* Sticky Footer Section */}
      {/* <Footer /> */}

      {/* Next content section */}
      {/* <div className="w-full h-screen bg-yellow-500">Next section content</div> */}
    </div>
  );
};

export default Services;
