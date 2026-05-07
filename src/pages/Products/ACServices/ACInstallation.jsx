
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const installationGallery = [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df6b",
  "https://images.unsplash.com/photo-1600566752227-8f3f2fba4c79",
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  "https://images.unsplash.com/photo-1598300053653-3c10b3f2a0c3",
];

const ACInstallation = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO */}
      <PageTitle title="AC Installation Services in Doha | Contact Trading Co." />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
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
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df6b"
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
