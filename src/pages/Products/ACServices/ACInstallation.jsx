
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const installationGallery = [
  "https://i.ibb.co/ds2vvrtc/ac-installation-qatar-1.jpg",
  "https://i.ibb.co/cKHXLJ82/ac-installation-qatar-1.webp",
  "https://i.ibb.co/4Z5Hn9n2/ac-installation-qatar-1.jpg",
  "https://i.ibb.co/4wX01dCY/ac-installation-qatar-2.webp",
  "https://i.ibb.co/y95tS93/ac-installation-qatar-2.jpg",
  "https://i.ibb.co/NgzFMRKT/ac-installation-qatar-3.jpg",

];

const ACInstallation = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO */}
      <PageTitle title="AC Installation Services in Doha | Contact Trading Co." />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://i.ibb.co/675L3TDj/image.png"
        title="AC Installation Services"
        subTitle="Efficient Cooling Starts with Perfect Installation"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
          Professional AC Installation in Doha
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Contact Trading Co., we provide expert AC installation services
          for residential and commercial spaces. Our experienced technicians
          ensure your system is installed correctly for maximum efficiency,
          durability, and optimal cooling performance.
        </p>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Why Choose Our Installation Service?
            </h3>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Expert assessment to select the right AC unit for your space
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Proper installation ensuring energy efficiency and performance
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Safe electrical connections and industry-standard setup
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Installation of split, window, and central AC systems
            </p>

            <p className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Old AC replacement and upgrade solutions
            </p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/S71P6D5G/image.png"
              alt="AC Installation"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold text-center text-[#0A2540] mb-10">
          Installation Work Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {installationGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`Installation ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2540] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need New AC Installation?
        </h2>
        <p className="text-lg mb-6">
          Book professional AC installation service anywhere in Doha today.
        </p>
        <a
          href="https://wa.me/97450791874"
          className="inline-flex items-center gap-2 bg-white text-[#0A2540] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition"
        >
          <FaWhatsapp /> Book via WhatsApp
        </a>
      </section>
    </div>
  );
};

export default ACInstallation;
