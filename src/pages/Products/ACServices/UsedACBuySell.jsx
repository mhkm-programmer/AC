import React from "react";

import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const usedACGallery = [
  "https://i.ibb.co/nN8w0BQv/used-ac-buy-sell-1.jpg",
  "https://i.ibb.co/HLsddD7d/used-ac-buy-sell-2.jpg",
  "https://i.ibb.co/cKszxdcn/used-ac-buy-sell-3.jpg",
  "https://i.ibb.co/qLBwT1RX/used-ac-buy-sell-4.jpg",
  "https://i.ibb.co/cct15HSF/used-ac-buy-sell-5.jpg",
  "https://i.ibb.co/zVw5sBzQ/used-ac-buy-sell-6.jpg",
  "https://i.ibb.co/mkW236Q/used-ac-buy-sell-7.jpg",
  "https://i.ibb.co/bgSPsrK1/used-ac-buy-sell-8.jpg",
  "https://i.ibb.co/6Rwv5TTC/used-ac-buy-sell-9.jpg",
  "https://i.ibb.co/cSBS9jRK/used-ac-buy-sell-10.jpg"
];

const UsedACBuySell = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* SEO */}
      <PageTitle title="Used AC Buy & Sell in Doha | Contact Trading Co." />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://i.ibb.co/WpdPXyCC/used-ac-buy-sell-12.jpg"
        title="Used AC Buy & Sell"
        subTitle="Affordable Cooling Solutions & Easy Selling"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
          Buy & Sell Used ACs in Doha
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Looking for budget-friendly air conditioners or want to sell your old unit?
          Contact Trading Co. offers reliable used AC buying and selling services
          across Doha with fair pricing and trusted quality.
        </p>
      </section>

      {/* Buy & Sell Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Buy */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition space-y-4">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Buy Used AC
            </h3>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Affordable prices compared to new units
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Fully tested and quality-checked ACs
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Available in split, window, and stand models
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Installation support available
            </p>
          </div>

          {/* Sell */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition space-y-4">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Sell Your AC
            </h3>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Get competitive price for your used AC
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Free inspection and evaluation
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Fast pickup service anywhere in Doha
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Hassle-free and quick payment process
            </p>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold text-center text-[#0A2540] mb-10">
          Available & Sold Units
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {usedACGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`Used AC ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2540] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Buy or Sell Your AC Today
        </h2>
        <p className="text-lg mb-6">
          Contact us now for the best deals on used ACs in Doha.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://wa.me/97450791874"
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

export default UsedACBuySell;
