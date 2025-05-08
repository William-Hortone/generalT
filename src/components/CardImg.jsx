import React from "react";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const CardImg = ({ img, member }) => {
  //   const image = { img };

  return (
    <>
      <div className="h-[80vh]  relative  flex items-center bg-osrange-200 justify-center mr-2">
        <DirectionAwareHover imageUrl={member.img}>
          <h2 className="text-4xl font-bold text-primary ">
            {member.position}
          </h2>
          <h4 className="font-bold text-xxl">{member.name}</h4>
          <p className="text-xl font-bold">{member.phone}</p>
          <p className="text-xl font-normal">{member.email}</p>
          <p className="text-xl font-normal">{member.location}</p>
          <p className="text-xl font-normal">{member.x}</p>
        </DirectionAwareHover>
      </div>
    </>
  );
};

export default CardImg;
