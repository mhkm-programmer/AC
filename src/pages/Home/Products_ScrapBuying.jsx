import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";

// Scrap Services
const services = [
  { id: 1, name: "Used & Non-Working AC Units", image: "/images/scrap-ac.jpg", path: "/services/used-non-working-ac-units" },
  { id: 2, name: "Compressors", image: "/images/scrap-compressor.jpg", path: "/services/compressors-scrap" },
  { id: 3, name: "Copper Pipes", image: "/images/scrap-copper.jpg", path: "/scrap-buying/copper" },
  { id: 4, name: "Aluminum", image: "/images/scrap-aluminum.jpg", path: "/scrap-buying/aluminum" },
  { id: 5, name: "Electric Motors", image: "/images/scrap-motor.jpg", path: "/scrap-buying/motor" },
  { id: 6, name: "Batteries", image: "/images/scrap-battery.jpg", path: "/scrap-buying/battery" },
  { id: 7, name: "Brass", image: "/images/scrap-brass.jpg", path: "/scrap-buying/brass" },
  { id: 8, name: "All Electrical & Metal Scrap", image: "/images/scrap-metal.jpg", path: "/services/electrical-metal-scrap" },
];

// Arrows
const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 rounded-full shadow cursor-pointer hover:bg-blue-600 hover:text-white transition">
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 rounded-full shadow cursor-pointer hover:bg-blue-600 hover:text-white transition">
    <FaArrowLeft />
  </div>
);

const Products_ScrapBuying = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* 🔥 HERO SECTION */}
      <section
        className="relative h-[65vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/scrap-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Scrap Buying Services in Doha
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Sell your AC, metals, motors, batteries, and more. Get the best price with fast pickup anywhere in Qatar.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/97450791874"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              <FaWhatsapp /> Sell Now on WhatsApp
            </a>

            <Link
              to="/scrap-buying/copper"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              Explore Scrap Types
            </Link>
          </div>
        </div>
      </section>

      {/* 🔥 SERVICES SLIDER */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What We Buy
        </h2>

        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-3">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col h-44 justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.name}
                  </h3>

                  <div className="flex flex-col gap-2 mt-auto">
                    <Link
                      to={service.path}
                      className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                    >
                      View Details
                    </Link>

                    <a
                      href="https://wa.me/97450791874"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm font-medium"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* 🔥 EXTRA CTA SECTION */}
      <section className="bg-blue-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Want to Sell Scrap Fast?
        </h2>
        <p className="mb-6 text-lg">
          Send us photos on WhatsApp and get an instant price quote.
        </p>

        <a
          href="https://wa.me/97450791874"
          className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-200 transition"
        >
          <FaWhatsapp /> Get Instant Quote
        </a>
      </section>
    </>
  );
};

export default Products_ScrapBuying;
