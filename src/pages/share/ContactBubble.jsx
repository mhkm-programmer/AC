import {
  FaArrowDown,
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";

const ContactBubble = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      setShowScrollTop(scrollTop > 120);
      setShowScrollBottom(scrollTop + clientHeight < scrollHeight - 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll functions
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  return (
    <>
      {/* Contact Bubble */}
      <div className="fixed bottom-32 right-5 flex flex-col items-center space-y-3 z-50">

        {/* WhatsApp */}
        <a
          href="https://wa.me/97450791874"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="p-4 rounded-full text-white bg-green-500 hover:bg-green-600 shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp size={isMobile ? 22 : 28} />
        </a>

        {/* Phone */}
        <a
          href="tel:+97450791874"
          title="Call Now"
          className="p-4 rounded-full text-white bg-blue-500 hover:bg-blue-600 shadow-lg hover:scale-110 transition"
        >
          <FaPhoneAlt size={isMobile ? 22 : 28} />
        </a>

        {/* Email */}
        <a
          href="mailto:kaioumabdul551@gmail.com"
          title="Send Email"
          className="p-4 rounded-full text-white bg-red-500 hover:bg-red-600 shadow-lg hover:scale-110 transition"
        >
          <FaEnvelope size={isMobile ? 22 : 28} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/al_taweel_international"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Instagram"
          className="p-4 rounded-full text-white bg-pink-500 hover:bg-pink-600 shadow-lg hover:scale-110 transition"
        >
          <FaInstagram size={isMobile ? 22 : 28} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1Fz8aNC56J/"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Facebook"
          className="p-4 rounded-full text-white bg-blue-700 hover:bg-blue-800 shadow-lg hover:scale-110 transition"
        >
          <FaFacebook size={isMobile ? 22 : 28} />
        </a>

      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          className="fixed bottom-16 right-5 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
          onClick={scrollToTop}
          title="Scroll to Top"
        >
          <FaArrowUp size={22} />
        </button>
      )}

      {/* Scroll to Bottom */}
      {showScrollBottom && (
        <button
          className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
          onClick={scrollToBottom}
          title="Scroll to Bottom"
        >
          <FaArrowDown size={22} />
        </button>
      )}
    </>
  );
};

export default ContactBubble;
