
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const acGallery = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  "https://images.unsplash.com/photo-1600566752227-8f3f2fba4c79",
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df6b",
  "https://images.unsplash.com/photo-1598300053653-3c10b3f2a0c3",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
];

const ACRepair = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Title */}
      <PageTitle title="AC Repair Services in Doha | Contact Trading Co." />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
        title="AC Repair & Maintenance"
        subTitle="Fast. Reliable. Professional Cooling Solutions"
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
          Expert AC Repair Services in Doha
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Contact Trading Co., we specialize in air conditioning repair,
          servicing, and maintenance for residential and commercial spaces across Qatar.
          Our experienced technicians ensure efficient cooling, energy savings,
          and long-lasting AC performance.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">AC Repair</h3>
            <p className="text-gray-600">
              Quick diagnosis and repair of all AC issues including cooling problems,
              gas leaks, and electrical faults.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">AC Maintenance</h3>
            <p className="text-gray-600">
              Regular servicing to improve efficiency, reduce electricity bills,
              and extend AC lifespan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">AC Installation</h3>
            <p className="text-gray-600">
              Professional installation of split, window, and central AC systems
              for homes and offices.
            </p>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold text-center text-[#0A2540] mb-10">
          Our Work Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {acGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`AC service ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#0A2540] text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Trading Co.
        </h2>
        <p className="mb-2">C.R. No. 22927/6, Doha - Qatar</p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">

          <a href="tel:+97450791874" className="flex items-center gap-2 hover:text-gray-300">
            <FaPhoneAlt /> +974 50791874
          </a>

          <a href="https://wa.me/97450791874" className="flex items-center gap-2 hover:text-gray-300">
            <FaWhatsapp /> WhatsApp
          </a>

          <a href="mailto:kaioumabdul551@gmail.com" className="flex items-center gap-2 hover:text-gray-300">
            <FaEnvelope /> Email
          </a>

        </div>

        <div className="flex justify-center gap-6 mt-6 text-xl">
          <a href="https://www.facebook.com/share/1Fz8aNC56J/" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/al_taweel_international?igsh=c2llcG05cGgxeXEw" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Urgent AC Repair?
        </h2>
        <p className="mb-6 text-gray-600">
          We are available across Doha for fast and reliable service.
        </p>
        <a
          href="https://wa.me/97450791874"
          className="inline-block bg-[#0A2540] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#163a5f] transition"
        >
          Book via WhatsApp
        </a>
      </section>
    </div>
  );
};

export default ACRepair;
