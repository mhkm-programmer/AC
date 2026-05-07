import React from "react";
import { FaClock, FaDollarSign, FaTools, FaHandshake } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="px-6 py-6 lg:py-12 bg-[#F5F5DC] dark:bg-gray-800 dark:text-gray-100">
      {/* Company Logo */}
      <div className="flex items-center justify-center mb-8">
        <img
          src="https://8upload.com/image/67a01c3b4ad22/Al-FWZ.jpg" // Replace with your company logo
          alt="Contact Trading Co. Logo"
          className="h-20 w-20 rounded-full shadow-lg"
        />
      </div>

      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose <span className="text-blue-600">Contact Trading Co.</span>
        </h2>
        <p className="mb-8 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We provide professional AC services and scrap buying across Doha & Qatar. Here's why our customers trust us:
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Fast Response */}
          <div className="group flex flex-col items-center p-6 space-y-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center w-24 h-24 rounded bg-blue-100 dark:bg-blue-700 transition-colors duration-300 group-hover:bg-blue-600">
              <FaClock className="text-3xl text-blue-600 dark:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Fast Response</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Quick and reliable service for all AC repairs and installations, ensuring minimal downtime.
            </p>
          </div>

          {/* Card 2: Best Market Prices */}
          <div className="group flex flex-col items-center p-6 space-y-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center w-24 h-24 rounded bg-green-100 dark:bg-green-700 transition-colors duration-300 group-hover:bg-green-600">
              <FaDollarSign className="text-3xl text-green-600 dark:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Best Market Prices</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Fair and competitive pricing for AC services and scrap buying, giving you the best value.
            </p>
          </div>

          {/* Card 3: Experienced Technicians */}
          <div className="group flex flex-col items-center p-6 space-y-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center w-24 h-24 rounded bg-yellow-100 dark:bg-yellow-700 transition-colors duration-300 group-hover:bg-yellow-600">
              <FaTools className="text-3xl text-yellow-600 dark:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Experienced Technicians</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Skilled and certified technicians to handle all types of AC repairs, installation, and gas services.
            </p>
          </div>

          {/* Card 4: Trusted Local Company */}
          <div className="group flex flex-col items-center p-6 space-y-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center w-24 h-24 rounded bg-red-100 dark:bg-red-700 transition-colors duration-300 group-hover:bg-red-600">
              <FaHandshake className="text-3xl text-red-600 dark:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Trusted Local Company</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              A reliable AC service and scrap buying company known across Doha and Qatar for integrity and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
