import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import WhyChoose from "./WhyChoose";
import CustomerReviews from "./CustomerReviews";

const services = [
  { id: 1, name: "AC Service & Repair", image: "/images/ac-service.jpg", path: "/services/ac-repair" },
  { id: 2, name: "AC Installation", image: "/images/ac-installation.jpg", path: "/services/ac-installation" },
  { id: 3, name: "AC Gas Charging", image: "/images/ac-gas.jpg", path: "/services/ac-gas-charging" },
  { id: 4, name: "AC Maintenance", image: "/images/ac-stand.jpg", path: "/services/ac-maintenance" },
  { id: 5, name: "AC Removal & Reinstall", image: "/images/ac-removal.jpg", path: "/services/ac-remove-install" },
  { id: 6, name: "Stand AC Repair", image: "/images/ac-buy-sell.jpg", path: "/services/stand-ac-repair" },
  { id: 7, name: "Used AC Buy & Sell", image: "/images/ac-buy-sell.jpg", path: "/services/used-ac-buy-sell" },
];

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur rounded-full shadow-lg cursor-pointer hover:bg-blue-600 hover:text-white transition"
  >
    <FaArrowRight size={18} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur rounded-full shadow-lg cursor-pointer hover:bg-blue-600 hover:text-white transition"
  >
    <FaArrowLeft size={18} />
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* 🔥 MODERN HERO SECTION */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/ac-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional AC Services in Qatar
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Fast, reliable & affordable AC repair, installation, and maintenance services across Doha.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/97450791874"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              <FaWhatsapp /> WhatsApp Now
            </a>

            <Link
              to="/services/ac-repair"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SLIDER */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our AC Services
        </h2>

        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-3">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition">

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col h-48 justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.name}
                  </h3>

                  <div className="flex flex-col gap-3 mt-auto">
                    <Link
                      to={service.path}
                      onClick={() => sessionStorage.setItem("scrollPosition", window.scrollY)}
                      className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow"
                    >
                      View Details
                    </Link>

                    <a
                      href="https://wa.me/97450791874"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium"
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

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <WhyChoose />
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <CustomerReviews />
        </div>
      </section>
    </>
  );
};

export default Products_ACServices;
