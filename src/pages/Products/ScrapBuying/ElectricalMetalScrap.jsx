import React from "react";

import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const metalScrapGallery = [
  "https://i.ibb.co/3m9c3z6Z/Electrical-Metal-Scrap-1.jpg",
  "https://i.ibb.co/J8HDcz9/Electrical-Metal-Scrap-1.avif",
  "https://i.ibb.co/HDDTDkvY/Electrical-Metal-Scrap-2.jpg",
  "https://i.ibb.co/PsvyhTRG/Electrical-Metal-Scrap-3.jpg",
  "https://i.ibb.co/W4MbZQKd/Electrical-Metal-Scrap-4.jpg",
  "https://i.ibb.co/xSbG2Xwc/Electrical-Metal-Scrap-1.webp",
  "https://i.ibb.co/rfq6NxMS/Electrical-Metal-Scrap-5.jpg",
  "https://i.ibb.co/fz8f3NjH/Electrical-Metal-Scrap-6.jpg",
  "https://i.ibb.co/RTfB9vVL/Electrical-Metal-Scrap-2.webp"
];

const ElectricalMetalScrap = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* SEO */}
      <PageTitle title="Electrical Metal Scrap Buying in Doha | Contact Trading Co." />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://i.ibb.co/Gm7YfXq/Electrical-Metal-Scrap-7.jpg"
        title="Electrical Metal Scrap"
        subTitle="Turn Your Old Electrical Metals Into Cash"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
          Sell Your Electrical Metal Scrap in Doha
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Contact Trading Co. buys all types of electrical metal scrap at competitive prices.
          From copper wires and motors to aluminum and transformers, we provide fast
          inspection, fair pricing, and hassle-free pickup anywhere in Doha.
        </p>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Why Sell Electrical Metal Scrap to Us?
            </h3>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Competitive pricing for all types of electrical metals
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Quick inspection and instant quote
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Free pickup service anywhere in Doha
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Fast and hassle-free payment
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Accepts copper, aluminum, motors, wires, and transformers
            </p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/Z0mLMLJ/Electrical-Metal-Scrap-3.webp"
              alt="Electrical Metal Scrap"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold text-center text-[#0A2540] mb-10">
          Collected Electrical Metal Scrap
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {metalScrapGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`Electrical Metal Scrap ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2540] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sell Your Electrical Metal Scrap Today
        </h2>
        <p className="text-lg mb-6">
          Get a free quote and fast pickup anywhere in Doha.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://wa.me/97450791874?text=I%20want%20to%20sell%20electrical%20metal%20scrap"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            <FaWhatsapp /> WhatsApp Now
          </a>

          <a
            href="tel:+97450791874"
            className="inline-flex items-center justify-center gap-2 border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-[#0A2540] transition"
          >
            <FaPhoneAlt /> Call Now
          </a>
        </div>
      </section>

    </div>
  );
};

export default ElectricalMetalScrap;
