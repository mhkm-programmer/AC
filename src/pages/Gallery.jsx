import React, { useState } from "react";
import PageTitle from "./reusable/PageTitle";
import ParallaxSection from "./reusable/Parallax";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const galleryData = [
  {
    sectionTitle: "AC Installation Projects",
    items: [
      { src: "/images/ac_install_1.jpg", alt: "AC Installation", caption: "Professional AC Installation" },
      { src: "/images/ac_install_2.jpg", alt: "AC Setup", caption: "Efficient AC Setup" },
      { src: "/images/ac_install_3.jpg", alt: "Commercial AC", caption: "Commercial AC Installation" },
    ],
  },
  {
    sectionTitle: "AC Repair & Maintenance",
    items: [
      { src: "/images/ac_repair_1.jpg", alt: "AC Repair", caption: "Expert Repair Service" },
      { src: "/images/ac_repair_2.jpg", alt: "Gas Charging", caption: "Gas Charging Service" },
      { src: "/images/ac_repair_3.jpg", alt: "Cleaning", caption: "Deep Cleaning Service" },
    ],
  },
  {
    sectionTitle: "Scrap Buying Services",
    items: [
      { src: "/images/scrap_1.jpg", alt: "Scrap AC", caption: "Used AC Buying" },
      { src: "/images/scrap_2.jpg", alt: "Metal Scrap", caption: "Copper & Aluminum Scrap" },
      { src: "/images/scrap_3.jpg", alt: "Compressor Scrap", caption: "Compressor Buying" },
    ],
  },
];

const Gallery = () => {
  // MODAL STATE
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (images, index) => {
    setSelectedImages(images);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* SEO */}
      <PageTitle title="AC Services & Scrap Buying Gallery | Contact Trading Co. Doha Qatar" />

      {/* HERO */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67a7f51fa667f/About_Us-min.jpg"
        title="Our Work Gallery"
        subTitle="AC Installation, Repair & Scrap Services in Doha"
      />

      <section className="max-w-7xl mx-auto px-6 py-20 bg-[#f9f7f4] rounded-lg shadow-2xl">

        <h1 className="text-5xl font-extrabold text-center mb-16 text-[#4A342E]">
          Our Projects & Services
        </h1>

        {galleryData.map(({ sectionTitle, items }, index) => (
          <div key={index} className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-[#4A342E] border-b-4 inline-block pb-2">
              {sectionTitle}
            </h2>

            <motion.div
              className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {items.map((item, idx) => (
                <motion.figure
                  key={idx}
                  onClick={() => openModal(items, idx)}
                  className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover"
                  />
                  <figcaption className="p-4 text-center text-gray-700">
                    {item.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold mb-6 text-[#4A342E]">
            Need AC Service or Scrap Pickup?
          </h3>
          <p className="mb-8 text-gray-600">
            Contact us today for fast service anywhere in Doha.
          </p>

          <a
            href="https://wa.me/97450791874"
            className="inline-block bg-[#4A342E] text-white px-8 py-4 rounded-xl"
          >
            Contact on WhatsApp
          </a>
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">

          {/* CLOSE */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <FaTimes />
          </button>

          {/* LEFT */}
          {selectedImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-3xl"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* IMAGE */}
          <motion.img
            key={currentIndex}
            src={selectedImages[currentIndex].src}
            className="max-h-[80vh] max-w-[90%] rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          {/* RIGHT */}
          {selectedImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-3xl"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Gallery;
