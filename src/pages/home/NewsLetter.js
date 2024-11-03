import React from "react";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="bg-[#1e2832] bg-opacity-5 xl:px-28 px-4 py-16">
      <h2 className="title mb-8">Follow product and discount on Instagram</h2>
      <div className="flex flex-wrap gap-4 items-center justify-center mb-20">
        <Link to="/">
          <img src="../public/Images/wall.jpg" alt="" />
        </Link>
        <Link to="/">
          <img src="../public/Images/wall.jpg" alt="" />
        </Link>
        <Link to="/">
          <img src="../public/Images/wall.jpg" alt="" />
        </Link>
        <Link to="/">
          <img src="../public/Images/wall.jpg" alt="" />
        </Link>
        <Link to="/">
          <img src="../public/Images/wall.jpg" alt="" />
        </Link>
        <Link to="/">
          <img src="../public/Images/wall.jpg" alt="" />
        </Link>
      </div>
      <div>
        <h2 className="title mb-8">or Subscribe to the Newsletter</h2>
        <form className="md:w-1/2 mx-auto text-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email address..."
            className="h-5 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-black text-white px-6 py-1 rounded-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
