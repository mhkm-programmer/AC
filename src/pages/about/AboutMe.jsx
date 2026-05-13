import {
  FaBuilding,
  FaTools,
  FaSnowflake,
  FaRecycle,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaCogs,
} from "react-icons/fa";

import { motion } from "framer-motion";

const AboutMe = () => {
  const companyImages = [
   "https://i.ibb.co/fzBDxxWJ/ac-installation-hero-quiet-corners-mechanical-services-llc-640w.webp",
   "https://i.ibb.co/JRRYr0rV/hero-ac-install-r0d-Nu-HEs.jpg",
   "https://i.ibb.co/d0C8QwBP/hero-ac-repair-Bl1-ZE5-SR.jpg",
   "https://i.ibb.co/67VmJvGr/male-technician-cleaning-air-conditioner-indoors-repairman-washing-dirty-compartments-air-conditione.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-12">

      {/* HERO */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#6B4226] mb-4">
          Welcome to Contact Trading Co.
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your trusted partner in AC services, installation, and scrap buying solutions across Doha, Qatar.
          We deliver reliable, fast, and professional services tailored to your needs.
        </p>
      </div>

      {/* MISSION / VISION / VALUES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-12">
        {[{
          icon: <FaBuilding className="text-[#6B4226] text-4xl mx-auto mb-4" />,
          title: "Our Mission",
          description: "To provide reliable AC services and fair-value scrap buying with professionalism and customer satisfaction."
        }, {
          icon: <FaCogs className="text-[#6B4226] text-4xl mx-auto mb-4" />,
          title: "Our Vision",
          description: "To become a leading service provider in Qatar for AC maintenance and recycling solutions."
        }, {
          icon: <FaTools className="text-[#6B4226] text-4xl mx-auto mb-4" />,
          title: "Our Values",
          description: "Integrity, fast service, fair pricing, and customer trust are at the core of our business."
        }].map((item, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-xl">
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* SERVICES */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#6B4226] mb-6">Our Services</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We provide complete AC solutions and scrap material buying services across Doha with professional support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {[{
          title: "AC Installation & Repair",
          icon: <FaSnowflake className="text-[#6B4226] text-4xl mx-auto mb-4" />,
          desc: "Professional AC installation, maintenance, gas charging, and repair services."
        }, {
          title: "AC Relocation Services",
          icon: <FaTools className="text-[#6B4226] text-4xl mx-auto mb-4" />,
          desc: "Safe removal, moving, and reinstallation of all types of air conditioning units."
        }, {
          title: "Scrap Buying",
          icon: <FaRecycle className="text-[#6B4226] text-4xl mx-auto mb-4" />,
          desc: "We buy AC units, compressors, copper, aluminum, motors, batteries, and all metal scrap."
        }].map((service, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-xl">
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* GALLERY */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-[#6B4226] text-center mb-8">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companyImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-[#6B4226] mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Contact us today for fast and reliable service anywhere in Doha.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:kaioumabdul551@gmail.com" className="text-[#6B4226] flex items-center gap-2">
            <FaEnvelope /> kaioumabdul551@gmail.com
          </a>

          <a href="tel:+97450791874" className="text-[#6B4226] flex items-center gap-2">
            <FaPhone /> +974 5079 1874
          </a>

          <a href="https://www.instagram.com/al_taweel_international" target="_blank" rel="noopener noreferrer" className="text-[#6B4226] flex items-center gap-2">
            <FaInstagram /> Instagram
          </a>

          <a href="https://www.facebook.com/share/1Fz8aNC56J/" target="_blank" rel="noopener noreferrer" className="text-[#6B4226] flex items-center gap-2">
            <FaFacebook /> Facebook
          </a>

          <a href="https://wa.me/97450791874" target="_blank" rel="noopener noreferrer" className="text-[#6B4226] flex items-center gap-2">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
