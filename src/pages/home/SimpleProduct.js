import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const SimpleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Product.json");
        const data = await response.json();
        const product = data.filter((p) => p.id === parseInt(id));
        setProducts(product[0]);
      } catch (error) {
        console.log("error:", error);
      }
    };

    fetchData();
  }, [id]);

  const { title, category, price, image, status } = products;

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 h-max gap-3">
            <div>
              <img src={`/${image}`} alt={title} className="w-full" />
            </div>

            <div>
            <h2 className="title text-right md:text-left ">{title}</h2>

              <p className="mt-3 text-gray-600 text-base text-justify sm:text-left sm:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
                malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                venenatis euismod malesuada.
              </p>
              <span className="my-2 flex text-xl text-yellow-400 items-center gap-1 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              {/* <p>Category: {category}</p> */}
              <p className="text-xl text-red-400 font-semibold sm:text-2xl">
                Price: ${price}
              </p>
              {/* <p>Status: {status}</p> */}
              <div className="mt-4">
                <div className="text-left flex flex-col gap-2 w-full">
                  <label className="font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    required
                    className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 my-3 px-4 md:px-4 md:py-3
                    focus:border-red-500"
                  />
                  <div>
                    <button className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500
                    rounded-md ease-in-out duration-500 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6">
                      <span><FaArrowAltCircleRight /></span>
                      Confirmed Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black/75 mt-10">
            <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
                malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                venenatis euismod malesuada.
              </p>
              <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
                malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                venenatis euismod malesuada.
              </p>
              <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
                malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                venenatis euismod malesuada.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleProduct;
