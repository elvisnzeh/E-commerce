import React from "react";
import first from "../../assets/Z6.png";
import { FaBagShopping } from "react-icons/fa6";

function Banner() {
  return (
    <div className="bg-pat py-12 xl:px-28 px-4 ">
      <div className="flex py-28 flex-col-reverse md:flex-row  items-center justify-between ">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collection</h1>
          <p className="text-xl mb-7">
            You can expole and shop any different collectons from various brand
          </p>
          <button className="bg-black hover:bg-orange-500 px-4 py-2 text-white font-semibold rounded-md flex items-center gap-2">
            {" "}
            <FaBagShopping className="inline-flex " />
            Shop now
          </button>
        </div>
        <div className="md:w-1/2">
        <img
  src={first}
  alt="Description of image"
  className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg mx-auto"
/>

        </div>
      </div>
    </div>
  );
}

export default Banner;
