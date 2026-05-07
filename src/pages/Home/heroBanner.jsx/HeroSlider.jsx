import { FaMapMarkerAlt, FaWhatsapp, FaSnowflake, FaRecycle } from "react-icons/fa";
import React, { useState } from "react";
import Slider from "react-slick";

const HeroSlider = () => {
  const [showOptions, setShowOptions] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  const slides = [
    {
      src: "https://i.ibb.co/f7zzvhv/ac-servicing-dhaka-min-1-1024x858.png",
    },
    {
      src: "https://i.ibb.co/39MnJsZm/471189240-609566944889534-437495419646463025-n.jpg",
    },
    {
      src: "https://i.ibb.co/0VJg2KCp/services-installation-ma-climatisation-et-pompe-a-chaleur-1-min.jpg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-md px-4 py-2 rounded-full mb-5">
              <FaSnowflake className="text-blue-600 text-sm" />
              <span className="text-sm font-semibold text-gray-700">
                Qatar Trusted AC & Scrap Experts
              </span>
            </div>

            {/* TITLE */}
            <h1 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              xl:text-6xl
              font-extrabold
              leading-tight
              text-gray-900
            ">
              Professional <br className="hidden sm:block" />
              <span className="text-blue-600">
                AC Services
              </span>{" "}
              & Scrap Buying
            </h1>

            {/* DESCRIPTION */}
            <p className="
              mt-5
              text-gray-600
              text-base
              sm:text-lg
              leading-relaxed
              max-w-2xl
              mx-auto
              lg:mx-0
            ">
              We provide expert AC repair, installation,
              maintenance, gas refilling, AC dismantling,
              used AC purchasing, and AC scrap buying
              services across Doha & Qatar with fast
              response and affordable pricing.
            </p>

            {/* SERVICE TAGS */}
            <div className="
              mt-6
              flex
              flex-wrap
              gap-3
              justify-center
              lg:justify-start
            ">

              <div className="bg-white shadow-md px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                <FaSnowflake className="text-cyan-600" />
                AC Repair
              </div>

              <div className="bg-white shadow-md px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                <FaSnowflake className="text-blue-600" />
                Installation
              </div>

              <div className="bg-white shadow-md px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                <FaRecycle className="text-green-600" />
                Scrap Buying
              </div>

            </div>

            {/* CTA BUTTONS */}
            <div className="mt-8">

              {!showOptions ? (
                <button
                  onClick={() => setShowOptions(true)}
                  className="
                    bg-green-500
                    hover:bg-green-600
                    text-white
                    px-7
                    sm:px-8
                    py-3.5
                    sm:py-4
                    rounded-2xl
                    font-bold
                    text-base
                    sm:text-lg
                    shadow-xl
                    transition-all
                    duration-300
                    hover:scale-105
                    w-full
                    sm:w-auto
                  "
                >
                  Call or WhatsApp Now
                </button>
              ) : (
                <div className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  justify-center
                  lg:justify-start
                ">

                  <a
                    href="https://wa.me/97450791874"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      px-6
                      py-4
                      rounded-2xl
                      font-semibold
                      shadow-lg
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                  >
                    <FaWhatsapp size={20} />
                    WhatsApp Chat
                  </a>

                  <a
                    href="https://www.google.com/maps?q=Doha+Qatar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      px-6
                      py-4
                      rounded-2xl
                      font-semibold
                      shadow-lg
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                  >
                    <FaMapMarkerAlt size={18} />
                    Visit Office
                  </a>

                </div>
              )}

            </div>

          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="relative order-1 lg:order-2">

            <Slider {...sliderSettings}>
              {slides.map((slide, i) => (
                <div key={i} className="px-1">

                  <div className="
                    overflow-hidden
                    rounded-[24px]
                    sm:rounded-[30px]
                    shadow-2xl
                  ">

                    <img
                      src={slide.src}
                      alt={`Slide ${i + 1}`}
                      className="
                        w-full
                        h-[240px]
                        xs:h-[280px]
                        sm:h-[380px]
                        md:h-[480px]
                        lg:h-[550px]
                        xl:h-[620px]
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />

                  </div>

                </div>
              ))}
            </Slider>

            {/* FLOATING CARD */}
            <div className="
              absolute
              bottom-4
              left-4
              sm:bottom-6
              sm:left-6
              bg-white/90
              backdrop-blur-md
              px-4
              sm:px-5
              py-3
              rounded-2xl
              shadow-2xl
              max-w-[220px]
            ">
              <h3 className="font-bold text-gray-800 text-sm sm:text-base">
                24/7 Emergency Service
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Fast AC Repair & Scrap Buy Anywhere in Qatar
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSlider;
