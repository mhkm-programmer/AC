import React from "react";

import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const scrapACGallery = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  "https://images.unsplash.com/photo-1600566752227-8f3f2fba4c79",
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df6b",
  "https://images.unsplash.com/photo-1598300053653-3c10b3f2a0c3",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
];

const UsedNonWorkingACUnits = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* SEO */}
      <PageTitle title="Sell Non-Working AC Units in Doha | Contact Trading Co." />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
        title="Sell Your Non-Working AC"
        subTitle="Turn Your Old AC Into Instant Cash"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
          We Buy Non-Working AC Units in Doha
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Got a broken or old AC that no longer works? Don’t throw it away!
          Contact Trading Co. offers competitive prices for non-working AC units.
          We provide quick evaluation, fast pickup, and instant payment anywhere in Doha.
        </p>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Why Sell Your AC to Us?
            </h3>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Best market price for scrap and damaged AC units
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Free inspection and instant quotation
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Fast pickup service across Doha
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Instant cash or transfer payment
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              We accept all types: split, window, and stand ACs
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1600566752227-8f3f2fba4c79"
              alt="Non Working AC"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold text-center text-[#0A2540] mb-10">
          Collected AC Units
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {scrapACGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`Scrap AC ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2540] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sell Your Old AC Today
        </h2>
        <p className="text-lg mb-6">
          Get instant quote and quick pickup anywhere in Doha.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://wa.me/97450791874?text=I%20want%20to%20sell%20my%20non-working%20AC"
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

export default UsedNonWorkingACUnits;
