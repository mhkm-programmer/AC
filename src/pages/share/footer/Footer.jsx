import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about" },
        { label: "AC Services", to: "/services/ac-services" },
        { label: "Scrap Buying", to: "/services/scrap-buying" }, // ✅ FIXED
        { label: "Gallery", to: "/gallery" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
    {
      title: "AC Services",
      links: [
        { label: "AC Service & Repair", to: "/services/ac-repair" },
        { label: "AC Installation", to: "/services/ac-installation" },
        { label: "AC Gas Charging", to: "/services/ac-gas-charging" },
        { label: "AC Maintenance", to: "/services/ac-maintenance" },
        { label: "AC Removal & Reinstallation", to: "/services/ac-remove-install" },
        { label: "Stand AC Repair", to: "/services/stand-ac-repair" },
        { label: "Buy & Sell Used AC", to: "/services/used-ac-buy-sell" },
      ],
    },
    {
      title: "Scrap Buying",
      links: [
        { label: "Used AC Units", to: "/services/used-non-working-ac-units" }, // ✅ FIXED
        { label: "Compressors", to: "/services/compressors-scrap" }, // ✅ FIXED
        { label: "Copper Scrap", to: "/scrap-buying/copper" },
        { label: "Aluminum Scrap", to: "/scrap-buying/aluminum" },
        { label: "Electric Motors", to: "/scrap-buying/motor" },
        { label: "Battery Scrap", to: "/scrap-buying/battery" },
        { label: "Brass Scrap", to: "/scrap-buying/brass" },
        { label: "All Scrap", to: "/services/electrical-metal-scrap" }, // ✅ FIXED
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-300 mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center">
                <span className="text-blue-600 font-bold text-lg">CT</span>
              </div>

              <span className="text-xl font-bold text-white">
                Contact Trading Co.
              </span>
            </NavLink>

            <p className="text-sm text-gray-400">
              Professional AC Service & Scrap Buying Company in Doha, Qatar.
              Fast, reliable and affordable services across Qatar.
            </p>

            <p className="text-sm text-gray-500">
              CR No: 22927/6 <br />
              Doha, Qatar
            </p>
          </div>

          {/* Dynamic Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `transition ${
                          isActive
                            ? "text-green-400 font-semibold"
                            : "text-gray-400 hover:text-green-400"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p className="mb-4 md:mb-0">
            © 2026{" "}
            <NavLink to="/" className="text-white font-medium">
              Contact Trading Co.
            </NavLink>{" "}
            – AC Service & Scrap Buyer in Qatar. All rights reserved.
          </p>

          <div className="flex space-x-6">

            <a href="tel:+97450791874" className="hover:text-green-400">
              <FaPhoneAlt size={20} />
            </a>

            <a
              href="https://www.facebook.com/share/1Fz8aNC56J/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://www.instagram.com/al_taweel_international"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://wa.me/97450791874"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href="mailto:kaioumabdul551@gmail.com"
              className="hover:text-green-400"
            >
              <FaEnvelope size={20} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
