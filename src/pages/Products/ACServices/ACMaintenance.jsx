import React from "react";

import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const maintenanceGallery = [
  "https://i.ibb.co/vvkpTwcp/ac-maintenance-1.jpg",
  "https://i.ibb.co/Df06mHcw/ac-maintenance-2.jpg",
  "https://i.ibb.co/dw15V39R/ac-maintenance-3.jpg",
  "https://i.ibb.co/84M5sHfP/ac-maintenance-4.jpg",
  "https://i.ibb.co/0VBnr92W/ac-maintenance-5.jpg",
  "https://i.ibb.co/wh9rv9wg/ac-maintenance-6.jpg"
];


const ACMaintenance = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* SEO */}
      <PageTitle title="AC Maintenance Services in Doha | Contact Trading Co." />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://i.ibb.co/jcVq2my/image.png"
        title="AC Maintenance Services"
        subTitle="Keep Your AC Running Efficiently All Year"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
          Reliable AC Maintenance in Doha
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Regular AC maintenance is essential for efficient cooling, lower electricity bills,
          and longer system lifespan. At Contact Trading Co., we provide professional
          AC servicing for homes, offices, and commercial spaces across Qatar.
        </p>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Our Maintenance Services Include
            </h3>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Full AC cleaning (filters, coils, ducts)
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Checking gas level and cooling efficiency
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Electrical inspection and safety check
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Preventive maintenance to avoid breakdowns
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Annual maintenance contracts (AMC) available
            </p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/qYvc2DSX/ac-maintenance-7.jpg"
              alt="AC Maintenance"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold text-center text-[#0A2540] mb-10">
          Maintenance Work Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {maintenanceGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`Maintenance ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2540] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Keep Your AC in Perfect Condition
        </h2>
        <p className="text-lg mb-6">
          Book regular AC maintenance service in Doha today.
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

export default ACMaintenance;
