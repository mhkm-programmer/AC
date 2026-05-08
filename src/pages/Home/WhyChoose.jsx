import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaClock,
  FaDollarSign,
  FaTools,
  FaHandshake,
  FaArrowLeft,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

// FEATURES
const features = [
  {
    id: 1,
    title: "Fast Response",
    description:
      "Quick and reliable AC repair, installation, and emergency support across Doha & Qatar.",
    icon: <FaClock />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Best Market Prices",
    description:
      "Affordable AC services and competitive scrap buying prices with honest quotations.",
    icon: <FaDollarSign />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Expert Technicians",
    description:
      "Experienced AC technicians for installation, maintenance, gas charging, and repair services.",
    icon: <FaTools />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 4,
    title: "Trusted Company",
    description:
      "A trusted AC services and scrap buying company serving homes and businesses in Qatar.",
    icon: <FaHandshake />,
    color: "from-red-500 to-pink-500",
  },
];

// CUSTOM ARROWS
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="
      hidden md:flex
      absolute right-[-15px] top-1/2 -translate-y-1/2 z-20
      w-12 h-12 items-center justify-center
      bg-white shadow-2xl rounded-full
      cursor-pointer hover:bg-blue-600
      hover:text-white transition-all duration-300
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
      absolute left-[-15px] top-1/2 -translate-y-1/2 z-20
      w-12 h-12 items-center justify-center
      bg-white shadow-2xl rounded-full
      cursor-pointer hover:bg-blue-600
      hover:text-white transition-all duration-300
    "
  >
    <FaArrowLeft />
  </div>
);

const WhyChoose = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
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
    <section className="relative overflow-hidden py-20 bg-gray-50">

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">

          {/* LOGO */}
          <div className="flex justify-center mb-6">

            <div className="
              p-2 rounded-full
              bg-white shadow-2xl
              border border-gray-100
            ">
              <img
                src="https://8upload.com/image/67a01c3b4ad22/Al-FWZ.jpg"
                alt="Company Logo"
                className="
                  w-24 h-24
                  rounded-full
                  object-cover
                "
              />
            </div>

          </div>

          <span className="
            text-blue-600
            font-semibold
            uppercase
            tracking-widest
          ">
            Why Choose Us
          </span>

          <h2 className="
            text-3xl
            md:text-5xl
            font-extrabold
            text-gray-900
            mt-4
          ">
            Trusted AC Services
            <br />
            & Scrap Buying Company
          </h2>

          <p className="
            mt-5
            text-lg
            text-gray-600
            max-w-3xl
            mx-auto
            leading-relaxed
          ">
            We provide professional AC repair,
            installation, maintenance, and scrap
            buying services across Doha & Qatar
            with fast response, expert technicians,
            and affordable pricing.
          </p>

        </div>

        {/* SLIDER */}
        <Slider {...settings}>

          {features.map((item) => (
            <div key={item.id} className="px-3 pb-5">

              <div className="
                relative
                h-full
                bg-white
                rounded-[30px]
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all duration-500
                group
                border border-gray-100
              ">

                {/* TOP GRADIENT */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

                {/* CONTENT */}
                <div className="p-8 text-center">

                  {/* ICON */}
                  <div className="
                    flex justify-center
                    mb-6
                  ">

                    <div className={`
                      w-24 h-24
                      rounded-3xl
                      flex items-center justify-center
                      text-white text-4xl
                      shadow-xl
                      bg-gradient-to-r ${item.color}
                      group-hover:scale-110
                      transition-transform duration-500
                    `}>
                      {item.icon}
                    </div>

                  </div>

                  {/* TITLE */}
                  <h3 className="
                    text-2xl
                    font-bold
                    text-gray-800
                    mb-4
                  ">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="
                    text-gray-600
                    leading-relaxed
                    text-base
                  ">
                    {item.description}
                  </p>

                  {/* BUTTON */}
                  <a
                    href="https://wa.me/97450791874"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-8
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      px-5 py-3
                      rounded-xl
                      font-semibold
                      transition-all duration-300
                    "
                  >
                    <FaWhatsapp />
                    Contact Now
                  </a>

                </div>

              </div>

            </div>
          ))}

        </Slider>

      </div>

    </section>
  );
};

export default WhyChoose;
