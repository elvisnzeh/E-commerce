import React from "react";

const Collection = () => {
  return (
    <div className='bg-[url("../public/Images/wall.jpg")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'>
      <div className="h-[580px] flex justify-center flex-col md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src="/Images/wall.jpg" alt="" />
          <p className="text-xl text-black capitalize my-8 md:w-2/3 font-bold">
            Welcome to Armani Boutique – where fashion meets sophistication.
            Discover the latest in elegant designs, crafted with precision and
            high-quality materials to elevate your wardrobe.
          </p>
          <button className="px-6 py-2 bg-white text-black rounded-md font-semibold">See collectons</button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
