import React from "react";

import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const gasGallery = [
  "https://i.ibb.co/sdvb5znz/AC-Installation-1.jpg",
  "https://i.ibb.co/Qjnb1JDC/AC-Installation-2.jpg",
  "https://i.ibb.co/v44ssvMD/AC-Installation-3.jpg",
  "https://i.ibb.co/jPVw11TH/AC-Installation-4.jpg",
  "https://i.ibb.co/4g5kNM9k/image.png",
  "https://i.ibb.co/XrxdyC93/image.png",
];

const ACGasInstallation = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* SEO */}
      <PageTitle title="AC Gas Filling & Installation in Doha | Contact Trading Co." />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://i.ibb.co/4nndL6zM/image.png"
        title="AC Gas Filling & Installation"
        subTitle="Restore Cooling Power with Expert Gas Charging"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
          Professional AC Gas Installation in Doha
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Low cooling? Your AC might need gas refilling. At Contact Trading Co.,
          we provide expert AC gas charging and installation services using
          safe refrigerants and advanced tools to ensure maximum cooling efficiency.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Our AC Gas Services Include
            </h3>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              AC gas refill for split, window, and central units
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Leak detection and repair before gas charging
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Use of eco-friendly and approved refrigerants
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Pressure testing and performance check
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Quick service across all areas in Doha
            </p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/BK4hxxny/image.png"
              alt="AC Gas Filling"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold text-center text-[#0A2540] mb-10">
          Our Work Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gasGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`AC Gas Service ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A2540] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Restore Your AC Cooling Today
        </h2>
        <p className="text-lg mb-6">
          Fast, affordable, and professional AC gas filling service in Doha.
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

export default ACGasInstallation;
