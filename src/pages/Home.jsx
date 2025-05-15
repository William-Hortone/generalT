import React from "react";
import {Hero, Navbar} from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="h-[100vh]"></div>
    </>
  );
};

export default Home;
