import React from "react";

const CardImgTeam = ({ member }) => {
  return (
    <>
      <div className="bg-yellow-500 rounded-lg">
        <img
          className="object-cover w-auto h-full rounded-lg"
          src={member.img}
          alt="description"
        />
      </div>
    </>
  );
};

export default CardImgTeam;
