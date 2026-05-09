import React from "react";

import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const standACGallery = [
  "https://i.ibb.co/sv0Cm8H8/floor-standing-ac-maintenance-service.jpg",
  "https://i.ibb.co/gMQWVj2q/standac-repair-1.jpg",
  "https://i.ibb.co/v44ssvMD/AC-Installation-3.jpg",
  "https://i.ibb.co/VR1fccZ/standac-repair-3.jpg",
  "https://i.ibb.co/0R5433nb/standac-repair-4.jpg",
  "https://i.ibb.co/1fHThHrd/standac-repair-5.jpg"
];


const StandACRepair = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* SEO */}
      <PageTitle title="Stand AC Repair Services in Doha | Contact Trading Co." />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://i.ibb.co/LD6PP3sq/image.png"
        title="Stand AC Repair Services"
        subTitle="Powerful Cooling. Professional Repair Solutions"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
          Expert Stand AC Repair in Doha
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stand air conditioners require specialized care due to their powerful
          cooling capacity. At Contact Trading Co., we provide expert repair
          services for all types of standing AC units, ensuring fast diagnosis,
          efficient repair, and long-lasting performance.
        </p>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Our Stand AC Repair Services Include
            </h3>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Fixing cooling issues and airflow problems
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Diagnosing and repairing compressor faults
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Electrical troubleshooting and safety checks
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Gas leak detection and refilling service
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Noise reduction and performance optimization
            </p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/Ld5DqLfL/image.png"
              alt="Stand AC Repair"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold text-center text-[#0A2540] mb-10">
          Stand AC Repair Work Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {standACGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`Stand AC Repair ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2540] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Fix Your Stand AC Today
        </h2>
        <p className="text-lg mb-6">
          Fast and reliable stand AC repair service anywhere in Doha.
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

export default StandACRepair;
