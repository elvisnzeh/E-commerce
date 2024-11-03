import { Link } from "react-router-dom";
import React from "react";

const Category = () => {
  const Logo = [
    { id: 1, img: "Images/eight.png" },
    { id: 2, img: "Images/nine.webp" },
    { id: 3, img: "Images/eleven.jpg" },
    { id: 4, img: "Images/ten.webp" },
    { id: 5, img: "Images/seven.webp" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-18 ">
      <div className="flex md:flex-row flex-col items-center justify-around  py-20">
        {Logo.map(({ img, id }) => (
          <div key={id}>
            <img
              src={img}
              alt={`Logo ${id}`}
              className="w-32 h-32 object-contain"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-7 ">
        <p className="font-semibold uppercase text-center md:-rotate-90 bg-black text-white md:p-1 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div className="md:w-1/2 mb-4">
  <Link to="/">
    <img
      src="Images/arm1.webp"
      alt="Popular style"
      className="w-full hover:scale-105 transition-all duration-200 "
    />
  </Link>
</div>

<div className="md:w-1/2">
  <div className="grid grid-cols-2 gap-4">
    <Link to="/">
      <img
        src="Images/arm2.jpg"
        alt="Style 1"
        className="w-full hover:scale-105 transition-all duration-200"
      />
    </Link>
    <Link to="/">
      <img
        src="Images/arm3.jpg"
        alt="Style 2"
        className="w-full hover:scale-105 transition-all duration-200"
      />
    </Link>
    <Link to="/">
      <img
        src="Images/arm4.avif"
        alt="Style 3"
        className="w-full hover:scale-105 transition-all duration-200"
      />
    </Link>
    <Link to="/">
      <img
        src="Images/amr5.png"
        alt="Style 4"
        className="w-full hover:scale-105 transition-all duration-200"
      />
    </Link>
  </div>
</div>

        </div>
      </div>

  );
};

export default Category;
