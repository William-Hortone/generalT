import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

export default function LayoutGridView({ img1, img2, img3, img4 }) {
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: img1,
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: img2,
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: img3,
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: img4,
    },
  ];

  return (
    <div className="w-full h-screen py-20">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">House in the woods</p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">House above the clouds</p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">Greens all over</p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        A house surrounded by greenery and nature's beauty. It's the perfect
        place to relax and unwind.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">Rivers are serene</p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        A house by the river is a place of peace and tranquility.
      </p>
    </div>
  );
};