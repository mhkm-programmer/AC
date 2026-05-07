import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";
import Slider from "react-slick";

const HeroSlider = () => {
  const [showOptions, setShowOptions] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const slides = [
    { type: "image", src: "/images/ac-service.jpg" },
    { type: "image", src: "/images/scrap-buying.jpg" },
    { type: "image", src: "/images/ac-technician.jpg" },
  ];

  return (
    <div className="bg-blue-50 py-16 px-4 md:px-12 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 max-w-xl space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Professional AC Services & Scrap Buying
        </h1>
        <p className="text-lg text-gray-600">
          Contact Trading Co. provides reliable AC repair, installation, gas charging, and scrap buying across Doha & Qatar.
        </p>

        {!showOptions ? (
          <button
            onClick={() => setShowOptions(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Call or WhatsApp Now
          </button>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.google.com/maps?q=Contact+Trading+Co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg"
            >
              <FaMapMarkerAlt /> Visit Our Office
            </a>
            <a
              href="https://wa.me/97450791874"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        )}
      </div>

      <div className="flex-1 w-full max-w-xl">
        <Slider {...sliderSettings}>
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt={`Slide ${i + 1}`}
              className="rounded-2xl shadow-lg w-full h-[400px] md:h-[500px] object-cover"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;
