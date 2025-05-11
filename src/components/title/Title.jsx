import React from "react";
import "./title.css";

const Title = () => {
  return (
    <>
      <h2 className="font-fontAlt text-[8rem] line-height-[0.85] font-bold">
        <span class="word">
          Company<span class="superscript">*</span>
        </span>
        <span class="word text-primary">Overview</span>
      </h2>
    </>
  );
};

export default Title;
