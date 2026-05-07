import { Link } from "react-router-dom";
import PageTitle from "../reusable/PageTitle";
import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200"
    >
      <PageTitle title="Contact Trading Co. | 404 Page Not Found" />

      <div className="max-w-6xl w-full mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co/r03Pv6N/6342464-min.jpg"
            alt="404 Error"
            className="w-full max-w-md drop-shadow-2xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left space-y-6"
        >
          <h2 className="text-red-500 font-semibold text-lg tracking-wide">
            404 ERROR
          </h2>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Oops! Page Not Found
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            The page you are looking for might have been removed or is temporarily unavailable.
            If you need <span className="font-semibold">AC services</span> or want to
            <span className="font-semibold"> sell scrap in Qatar</span>, feel free to contact us directly.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <FaHome /> Home
            </Link>

            <a
              href="tel:+97450791874"
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href="https://wa.me/97450791874"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          {/* EXTRA INFO */}
          <div className="pt-4 text-sm text-gray-500">
            <p>📍 Doha, Qatar | CR No: 22927/6</p>
            <p>⏰ Available 24/7 for emergency AC service</p>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default ErrorPage;
