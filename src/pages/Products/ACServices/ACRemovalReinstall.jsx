import React from "react";

import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const removalGallery = [
  "https://i.ibb.co/rfNh1C5z/ac-removeal-installation-1.jpg",
  "https://i.ibb.co/Kz81L5ZF/ac-removeal-installation-2.jpg",
  "https://i.ibb.co/5hrJ7p0g/ac-removeal-installation-3.jpg",
  "https://i.ibb.co/1ft3yKb8/ac-removeal-installation-4.jpg",
  "https://i.ibb.co/hRDwmbXZ/ac-removeal-installation-5.jpg",
  "https://i.ibb.co/Q3xHQ0zb/image.png"
];

const ACRemovalReinstall = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* SEO */}
      <PageTitle title="AC Removal & Reinstallation in Doha | Contact Trading Co." />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://i.ibb.co/vx4SQfBT/image.png"
        title="AC Removal & Reinstallation"
        subTitle="Safe Dismantling & Expert Reinstallation"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
          Professional AC Relocation Services in Doha
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Moving to a new home or office? We provide complete AC removal and
          reinstallation services ensuring safe dismantling, transportation,
          and proper setup at your new location. Our skilled technicians handle
          everything with care and precision.
        </p>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Our Service Includes
            </h3>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Safe AC dismantling without damage
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Secure handling and relocation support
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Professional reinstallation at new location
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Gas check and refilling if required
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Testing for proper cooling performance
            </p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/wZpvB73X/image.png"
              alt="AC Removal Reinstall"
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
          {removalGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`AC Removal ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2540] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Moving Your AC? We’ve Got You Covered
        </h2>
        <p className="text-lg mb-6">
          Safe and hassle-free AC relocation service anywhere in Doha.
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

export default ACRemovalReinstall;
