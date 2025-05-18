import React from "react";
import {
  Footer,
  Hero,
  HorizontalScroll,
  Navbar,
  ViewTeam,
} from "../components";
import { CompanyOverview } from "../containers";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <CompanyOverview />
      <ViewTeam />
      <Footer />
    </div>
  );
};

export default Home;
