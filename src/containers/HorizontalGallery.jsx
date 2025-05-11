import React from "react";
import HorizontalScrollGallery from "../components/HorizontalScrollGallery";

const HorizontalGallery = () => {
  return (
    <>
      <section className="w-full h-full bg-red-400">
        <HorizontalScrollGallery />
      </section>
    </>
  );
};

export default HorizontalGallery;
