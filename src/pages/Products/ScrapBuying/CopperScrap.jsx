import React from "react";

import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const copperGallery = [
 "https://i.ibb.co/bMr8cyn1/Copper-Scrap-Buying-2.jpg",
 "https://i.ibb.co/gZNFZDNd/Copper-Scrap-Buying-3.jpg",
 "https://i.ibb.co/84nPkCHg/Copper-Scrap-Buying-1.webp",
 "https://i.ibb.co/LzKJ9TD9/Copper-Scrap-Buying-4.jpg",
 "https://i.ibb.co/gbFMWqKd/Copper-Scrap-Buying-2.webp",
 "https://i.ibb.co/9kdLR97G/Copper-Scrap-Buying-2.png",
 "https://i.ibb.co/Z1NDtHsY/Copper-Scrap-Buying-5.jpg",
 "https://i.ibb.co/4nQrMwxV/Copper-Scrap-Buying-6.jpg",
];

const CopperScrap = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* SEO */}
      <PageTitle title="Copper Scrap Buying in Doha | Contact Trading Co." />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://i.ibb.co/27PXC1xZ/Copper-Scrap-Buying-1.jpg"
        title="Copper Scrap Buying"
        subTitle="Sell Your Copper Scrap for Instant Cash"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
          Sell Your Copper Scrap in Doha
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Contact Trading Co. buys all types of copper scrap at competitive prices.
          We provide fast inspection, fair valuation, and hassle-free pickup anywhere in Doha.
          Turn your copper scrap into cash today!
        </p>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Why Sell Copper Scrap to Us?
            </h3>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Competitive pricing for all copper types
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Quick inspection and instant quote
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Free pickup service in Doha
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Fast and hassle-free payment
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Accepts wires, pipes, sheets, and all copper scrap forms
            </p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/jPNkgZ14/Copper-Scrap-Buying-1.png"
              alt="Copper Scrap"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold text-center text-[#0A2540] mb-10">
          Collected Copper Scrap
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {copperGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`Copper Scrap ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2540] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sell Your Copper Scrap Today
        </h2>
        <p className="text-lg mb-6">
          Get instant quotes and fast pickup anywhere in Doha.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://wa.me/97450791874?text=I%20want%20to%20sell%20copper%20scrap"
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

export default CopperScrap;
