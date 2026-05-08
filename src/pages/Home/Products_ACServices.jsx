import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaArrowLeft,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";

// ================= AC SERVICES =================
const acServices = [
  {
    id: 1,
    name: "AC Service & Repair",
    image: "https://i.ibb.co/HpkkKCnx/AC-Service-Repair-1.jpg",
    path: "/services/ac-repair",
  },
  {
    id: 2,
    name: "AC Installation",
    image: "https://i.ibb.co/8grZ9cjk/AC-Installation-1.jpg",
    path: "/services/ac-installation",
  },
  {
    id: 3,
    name: "AC Gas Charging",
    image: "https://i.ibb.co/chT3fHCk/image.png",
    path: "/services/ac-gas-charging",
  },
  {
    id: 4,
    name: "AC Maintenance",
    image: "https://i.ibb.co/1G6NFf22/image.png",
    path: "/services/ac-maintenance",
  },
  {
    id: 5,
    name: "AC Removal & Reinstall",
    image: "https://i.ibb.co/M5c7VXJ0/image.png",
    path: "/services/ac-remove-install",
  },
  {
    id: 6,
    name: "Used AC Buy & Sell",
    image: "https://i.ibb.co/4xMrycY/image.png",
    path: "/services/used-ac-buy-sell",
  },
];

// ================= SCRAP SERVICES =================
const scrapServices = [
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

// ================= ARROWS =================
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="
      hidden md:flex
      absolute right-2 top-1/2 -translate-y-1/2 z-20
      w-12 h-12 items-center justify-center
      bg-white rounded-full shadow-xl
      cursor-pointer hover:bg-blue-600
      hover:text-white transition
    "
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="
      hidden md:flex
      absolute left-2 top-1/2 -translate-y-1/2 z-20
      w-12 h-12 items-center justify-center
      bg-white rounded-full shadow-xl
      cursor-pointer hover:bg-blue-600
      hover:text-white transition
    "
  >
    <FaArrowLeft />
  </div>
);

const Products_ACServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
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

      {/* ================= AC SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">

        {/* TITLE */}
        <div className="text-center mb-12">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            AC Solutions
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
            Our AC Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Professional AC repair, installation,
            maintenance, gas charging, and AC solutions in Qatar.
          </p>

        </div>

        {/* SLIDER */}
        <Slider {...settings}>

          {acServices.map((service) => (
            <div key={service.id} className="px-3 pb-5">

              <div className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition duration-500
                group
              ">

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.name}
                    className="
                      w-full
                      h-64
                      object-cover
                      group-hover:scale-110
                      transition duration-700
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    Fast and affordable AC services for homes and businesses.
                  </p>

                  <div className="flex flex-col gap-3">

                    <Link
                      to={service.path}
                      className="
                        w-full
                        text-center
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        py-3 rounded-xl
                        font-semibold transition
                      "
                    >
                      View Details
                    </Link>

                    <a
                      href="https://wa.me/97450791874"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-full
                        flex items-center justify-center gap-2
                        bg-green-500 hover:bg-green-600
                        text-white py-3 rounded-xl
                        font-semibold transition
                      "
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

      </section>

      {/* ================= SCRAP BUYING ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-12">

          <span className="text-green-600 font-semibold uppercase tracking-wider">
            Scrap Buying
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
            Scrap Materials We Buy
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We buy AC scrap, copper, aluminum,
            compressors, motors, batteries,
            and electrical scrap in Qatar.
          </p>

        </div>

        {/* SLIDER */}
        <Slider {...settings}>

          {scrapServices.map((scrap) => (
            <div key={scrap.id} className="px-3 pb-5">

              <div className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition duration-500
                group
              ">

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={scrap.image}
                    alt={scrap.name}
                    className="
                      w-full
                      h-64
                      object-cover
                      group-hover:scale-110
                      transition duration-700
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {scrap.name}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    Best scrap buying price with quick pickup service.
                  </p>

                  <div className="flex flex-col gap-3">

                    <Link
                      to={scrap.path}
                      className="
                        w-full
                        text-center
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        py-3 rounded-xl
                        font-semibold transition
                      "
                    >
                      View Details
                    </Link>

                    <a
                      href="https://wa.me/97450791874"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-full
                        flex items-center justify-center gap-2
                        bg-green-500 hover:bg-green-600
                        text-white py-3 rounded-xl
                        font-semibold transition
                      "
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

      </section>

    </div>
  );
};

export default Products_ACServices;
