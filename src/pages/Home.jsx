import React from "react";
import { Footer, Hero, HorizontalScroll, Navbar } from "../components";
import { CompanyOverview } from "../containers";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyOverview />
      <HorizontalScroll />
      <Footer />
      {/* <div className="h-[100vh]"></div> */}
    </>
  );
};

export default Home;
