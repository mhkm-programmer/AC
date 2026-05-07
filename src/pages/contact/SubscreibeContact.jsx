import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const SubscribeContact = () => {
  const [activeTheme] = useThemeSwitcher();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7b92lcx",
        "template_k6p49ij",
        e.target,
        "wqQwMjjepKRfJ6ah-"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", phone: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="container mx-auto py-14 px-4 max-w-6xl">

      {/* Heading */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Contact Trading Co.
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide professional <strong>AC services, installation, repair, gas charging</strong>
          and <strong>scrap buying services</strong> across Doha and all areas of Qatar.
          Contact us today for fast service and the best prices.
        </p>
      </motion.div>

      <section className="grid md:grid-cols-2 gap-8">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-blue-50 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-5">
            Contact Information
          </h2>

          <div className="text-gray-700 space-y-3">

            <p>
              <strong>Company:</strong> Contact Trading Co.
            </p>

            <p>
              <strong>C.R. No.:</strong> 22927/6
            </p>

            <p>
              <strong>Location:</strong> Doha, Qatar
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:kaioumabdul551@gmail.com"
                className="text-blue-600 hover:underline"
              >
                kaioumabdul551@gmail.com
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+97450791874"
                className="text-blue-600 hover:underline"
              >
                +974 50791874
              </a>
            </p>

            <p>
              <strong>Service Areas:</strong> Doha | Al Wakrah | Al Rayyan |
              Industrial Area | All Qatar
            </p>

            <p>
              <strong>Business Hours:</strong> 7 Days a Week – 8 AM to 10 PM
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-xl">

            <a href="tel:+97450791874" className="text-blue-600 hover:text-blue-800">
              <FaPhoneAlt />
            </a>

            <a
              href="https://www.facebook.com/share/1Fz8aNC56J/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/al_taweel_international?igsh=c2llcG05cGgxeXEw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/97450791874"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              <FaWhatsapp />
            </a>

          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Request Service
          </h2>

          <p className="text-gray-600 mb-4">
            Send us a message and our team will contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

          {status && (
            <p className="text-center text-gray-600 mt-4">{status}</p>
          )}

        </motion.div>
      </section>
    </div>
  );
};

export default SubscribeContact;
