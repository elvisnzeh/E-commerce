import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/Product.json")
      .then((res) => res.json()) // Call .json() as a function
      .then((data) => setProducts(data));
  }, []);

  const BestSellers = products.filter((item) => item.status === "Best Sellers");
  console.log(BestSellers);
 

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px:28 px-4">
      <div className="text-center">
        <h2 className="font-bold">Best Sellers</h2>
        <p className="text-black capitalize md:w-2/3 mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="mt-8 w-2/3 mx-auto">
          <Swiper
          slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {BestSellers.map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`/shop/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="mx-auto w-full hover:scale-105 transition-all duration-300"
                  />
                </Link>
                <div className="mt-4 pt-4">
                  <h1 className="text-base font-semibold mb-1">
                    {product.title}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <p className="text-black/50">{product.category}</p>
                  <p className="font-semibold">${product.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
