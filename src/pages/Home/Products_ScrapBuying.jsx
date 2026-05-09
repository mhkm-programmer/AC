import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaArrowLeft,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

const services = [
{
    id: 1,
    name: "Used AC Units",
    image: "https://i.ibb.co/j9FSDBN2/image.png",
    path: "/services/used-non-working-ac-units",
  },
  {
    id: 2,
    name: "Compressors",
    image: "https://i.ibb.co/5tT2SR2/image.png",
    path: "/services/compressors-scrap",
  },
  {
    id: 3,
    name: "Copper Scrap",
    image: "https://i.ibb.co/WWCw8F5Z/image.png",
    path: "/scrap-buying/copper",
  },
  {
    id: 4,
    name: "Aluminum Scrap",
    image: "https://i.ibb.co/HfW4hHxh/image.png",
    path: "/scrap-buying/aluminum",
  },
  {
    id: 5,
    name: "Electric Motors",
    image: "https://i.ibb.co/zWdDjzPY/image.png",
    path: "/scrap-buying/motor",
  },
  {
    id: 6,
    name: "Battery Scrap",
    image: "https://i.ibb.co/YBjLcWJ0/image.png",
    path: "/scrap-buying/battery",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center bg-white rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition"
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center bg-white rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition"
  >
    <FaArrowLeft />
  </button>
);

const Products_ScrapBuying = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-16 overflow-hidden">

      {/* HEADING */}
      <div className="text-center mb-12 px-4">

        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          Scrap Buying
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
          What We Buy
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          We buy all types of AC scrap, copper, aluminum,
          motors, batteries, and electrical scrap anywhere in Qatar.
        </p>

      </div>

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto px-4">

        <Slider {...settings}>

          {services.map((service) => (
            <div key={service.id} className="px-3 pb-5">

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group">

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    Best market price with fast pickup service in Doha & Qatar.
                  </p>

                  <div className="flex flex-col gap-3">

                    <Link
                      to={service.path}
                      className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                      View Details
                    </Link>

                    <a
                      href="https://wa.me/97450791874"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
                    >
                      <FaWhatsapp />
                      WhatsApp
                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </Slider>

      </div>



    </div>
  );
};

export default Products_ScrapBuying;
