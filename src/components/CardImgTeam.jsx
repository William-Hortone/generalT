import React from "react";

const CardImgTeam = ({ member }) => {
  return (
    <>
      <div className="relative h-auto py-4 overflow-hidden bg-yellow-500 rounded-lg">
        <div className="h-[90%] overflow-hidden rounded-md mb-2">
          <img
            className="object-cover w-auto transition-all ease-in-out rounded-lg h-[100%] hover:scale-105"
            src={member.img}
            alt="description"
          />
        </div>

        {/* <div className="absolute bottom-0 w-full p-4 left-4">
          <p className="font-bold uppercase text-md font-robert-medium text-primary">
            {member.name}
          </p>
          <p className="text-white text-md font-robert-medium">
            {member.email}
          </p>
          <p className="text-white text-md font-robert-medium">{member.tel}</p>
        </div> */}

        <div>
          <h3 className="text-black text-md font-robert-medium ">
            {member.position}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CardImgTeam;
