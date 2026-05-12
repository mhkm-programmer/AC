import React from "react";

import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const motorScrapGallery = [
  "https://i.ibb.co/YFSTLK4k/Motor-Scrap-Buying-2.avif",
  "https://i.ibb.co/4qhjcpZ/Motor-Scrap-Buying-1.jpg",
  "https://i.ibb.co/99Qzmcy9/Motor-Scrap-Buying-2.jpg",
  "https://i.ibb.co/HLFVtT7t/Motor-Scrap-Buying-3.jpg",
  "https://i.ibb.co/Vc7nr7xL/Motor-Scrap-Buying-4.jpg",
  "https://i.ibb.co/VpxSwhcK/Motor-Scrap-Buying-1.webp",
  "https://i.ibb.co/gF7vkGMZ/Motor-Scrap-Buying-3.avif",
  "https://i.ibb.co/0y76Gq0N/Motor-Scrap-Buying-2.webp",
  "https://i.ibb.co/BKqM6fR8/Motor-Scrap-Buying-5.jpg"
];

const MotorScrap = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* SEO */}
      <PageTitle title="Motor Scrap Buying in Doha | Contact Trading Co." />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://i.ibb.co/qLWzN1xC/Motor-Scrap-Buying-6.jpg"
        title="Motor Scrap Buying"
        subTitle="Get Instant Quotes for Your Scrap Motors"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
          Sell Your Motor Scrap in Doha
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We buy all types of motor scrap at competitive prices. Our team
          provides fast inspection, fair valuation, and hassle-free pickup
          services anywhere in Doha. Turn your old or damaged motors into cash today!
        </p>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Why Sell Your Motor Scrap to Us
            </h3>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Competitive pricing for all motor types
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Fast inspection and instant quote
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Free pickup service in Doha
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Hassle-free and secure transaction
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Accepts small and large motor scrap quantities
            </p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/d01NzKT1/Motor-Scrap-Buying-1.avif"
              alt="Motor Scrap"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold text-center text-[#0A2540] mb-10">
          Collected Motor Scrap
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {motorScrapGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`Motor Scrap ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2540] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sell Your Motor Scrap Today
        </h2>
        <p className="text-lg mb-6">
          Get instant quotes and fast pickup anywhere in Doha.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://wa.me/97450791874?text=I%20want%20to%20sell%20my%20motor%20scrap"
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

export default MotorScrap;
