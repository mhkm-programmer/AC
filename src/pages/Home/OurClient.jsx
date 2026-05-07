import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import React from "react";

const OurClient = () => {

  const clients = [
    { src: "https://8upload.com/image/67a012759526a/logo1.png", alt: "Client Company 1" },
    { src: "https://8upload.com/image/67a0127588f6f/logo2.png", alt: "Client Company 2" },
    { src: "https://8upload.com/image/67a012757822f/logo3.png", alt: "Client Company 3" },
    { src: "https://8upload.com/image/67a01275685b3/logo4.png", alt: "Client Company 4" },
    { src: "https://8upload.com/image/67a012755c112/logo5.png", alt: "Client Company 5" },
    { src: "https://8upload.com/image/67a012754d00c/logo6.png", alt: "Client Company 6" },
    { src: "https://8upload.com/image/67a01275404f1/logo7.png", alt: "Client Company 7" },
    { src: "https://8upload.com/image/67a012752aa7e/logo8.png", alt: "Client Company 8" },
    { src: "https://8upload.com/image/67a012751e270/logo9.png", alt: "Client Company 9" },
    { src: "https://8upload.com/image/67a012750d508/logo10.png", alt: "Client Company 10" },
    { src: "https://8upload.com/image/67a013aaa8575/logo11.png", alt: "Client Company 11" },
    { src: "https://8upload.com/image/67a013aa913da/logo12.png", alt: "Client Company 12" },
    { src: "https://8upload.com/image/67a013aa84ff4/logo13.png", alt: "Client Company 13" },
    { src: "https://8upload.com/image/67a013aa7a8ce/logo14.png", alt: "Client Company 14" },
    { src: "https://8upload.com/image/67a013aa6d86e/logo15.png", alt: "Client Company 15" },
  ];

  const items = clients.map((client, index) => (
    <div key={index} className="flex justify-center items-center px-3">
      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
        <img
          src={client.src}
          alt={client.alt}
          loading="lazy"
          className="w-36 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </div>
  ));

  return (
    <section className="py-12 bg-blue-50 dark:bg-gray-900">

      <div className="container mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Our Trusted Clients
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          Contact Trading Co. proudly serves homes, offices, and commercial
          companies across Doha and Qatar with reliable AC services and
          professional scrap buying solutions.
        </p>

        <AliceCarousel
          autoPlay
          autoPlayInterval={1800}
          infinite
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          responsive={{
            0: { items: 2 },
            600: { items: 3 },
            768: { items: 4 },
            1024: { items: 5 },
          }}
        />

      </div>

    </section>
  );
};

export default OurClient;
