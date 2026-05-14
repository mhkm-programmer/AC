import { NavLink } from "react-router-dom";
import Typed from "react-typed";
import { useState } from "react";

const HeaderACScrap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const leftMenuItems = [
    { label: "HOME", to: "/" },

    {
      label: "AC SERVICES",
      to: "/services/ac-services",
      submenu: [
        { label: "AC Repair", to: "/services/ac-repair" },
        { label: "AC Installation", to: "/services/ac-installation" },
        { label: "AC Gas Charging", to: "/services/ac-gas-charging" },
        { label: "AC Maintenance", to: "/services/ac-maintenance" },
        { label: "AC Removal & Reinstall", to: "/services/ac-remove-install" },
        { label: "Stand AC Repair", to: "/services/stand-ac-repair" },
        { label: "Used AC Buy & Sell", to: "/services/used-ac-buy-sell" },
      ],
    },

    {
      label: "SCRAP BUYING",
      to: "/services/scrap-buying",
      submenu: [
        {
          label: "Used Non Working AC Units",
          to: "/services/used-non-working-ac-units",
        },
        { label: "Copper Scrap", to: "/scrap-buying/copper" },
        { label: "Aluminum Scrap", to: "/scrap-buying/aluminum" },
        { label: "Electric Motor Scrap", to: "/scrap-buying/motor" },
        { label: "Battery Scrap", to: "/scrap-buying/battery" },
        { label: "Brass Scrap", to: "/scrap-buying/brass" },
        { label: "Compressors Scrap", to: "/services/compressors-scrap" },
        {
          label: "Electrical Metal Scrap",
          to: "/services/electrical-metal-scrap",
        },
      ],
    },

    { label: "ABOUT US", to: "/about" },
    { label: "CONTACT US", to: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg">

      {/* TOP TYPED BAR */}
      <div className="bg-black py-2 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-xs sm:text-sm md:text-base text-center font-medium text-green-400">

            <Typed
              strings={[
                "Welcome to Qatar AC Scrap – Doha Qatar",
                "Professional AC Repair & Installation Services",
                "We Buy AC Scrap, Copper, Motors & Electrical Scrap",
                "Fast Service Across Doha & All Qatar",
              ]}
              typeSpeed={50}
              backSpeed={35}
              loop
            />

          </h1>

        </div>

      </div>

      {/* MAIN HEADER */}
      <div className="bg-[#111] text-white border-b border-gray-800">

        {/* SEARCH BAR */}
        <div className="border-b border-gray-800">

          <div className="max-w-7xl mx-auto px-4 py-3">

            <div className="relative w-full max-w-2xl mx-auto">

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AC services, scrap buying, copper, motors..."
                className="
                  w-full
                  px-5 py-3
                  rounded-full
                  text-black
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-500
                "
              />

              <button
                className="
                  absolute right-1 top-1/2 -translate-y-1/2
                  bg-green-500 hover:bg-green-600
                  text-white
                  px-5 py-2
                  rounded-full
                  transition
                "
              >
                🔍
              </button>

            </div>

          </div>

        </div>

        {/* NAVBAR */}
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-between py-4">

            {/* LOGO */}
            <div className="flex items-center">

              <NavLink to="/" className="flex items-center gap-3">

                <img
                  src="https://i.ibb.co/b83dWD5/AC-Services-Scrap.png"
                  alt="Qatar AC Scrap Logo"
                  className="
                    w-12 h-12
                    md:w-14 md:h-14
                    rounded-full
                    object-cover
                    border-2 border-green-500
                    shadow-lg
                    hover:scale-105
                    transition duration-300
                  "
                />

                <div className="leading-tight">

                  <h2 className="text-white font-bold text-sm md:text-lg">
                    Qatar AC Scrap
                  </h2>

                  <p className="text-green-400 text-xs md:text-sm">
                    AC Services & Scrap Buying
                  </p>

                </div>

              </NavLink>

            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-2">

              {leftMenuItems.map((item, index) => (

                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveSubMenu(index)}
                  onMouseLeave={() => setActiveSubMenu(null)}
                >

                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `
                      px-4 py-2 rounded-lg
                      font-medium text-sm
                      transition duration-300
                      ${
                        isActive
                          ? "bg-green-500 text-white"
                          : "hover:bg-[#222] hover:text-green-400"
                      }
                    `
                    }
                  >
                    {item.label}
                    {item.submenu && (
                      <span className="ml-1 text-xs">▼</span>
                    )}
                  </NavLink>

                  {/* SUBMENU */}
                  {item.submenu && activeSubMenu === index && (

                    <div
                      className="
                        absolute left-0 top-full mt-2
                        w-64
                        bg-[#1a1a1a]
                        rounded-2xl
                        shadow-2xl
                        border border-gray-700
                        overflow-hidden
                        z-50
                      "
                    >

                      {item.submenu.map((sub, i) => (

                        <NavLink
                          key={i}
                          to={sub.to}
                          className="
                            block
                            px-5 py-3
                            text-sm
                            border-b border-gray-800 last:border-none
                            hover:bg-green-500
                            hover:text-white
                            transition
                          "
                        >
                          {sub.label}
                        </NavLink>

                      ))}

                    </div>

                  )}

                </div>

              ))}

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={toggleMobileMenu}
              className="
                lg:hidden
                w-11 h-11
                rounded-lg
                bg-green-500
                hover:bg-green-600
                flex items-center justify-center
                text-xl
                transition
              "
            >
              ☰
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (

          <div className="lg:hidden bg-[#111] border-t border-gray-800">

            <div className="px-4 py-4 space-y-2">

              {leftMenuItems.map((item, index) => (

                <div key={index}>

                  <NavLink
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="
                      block
                      px-4 py-3
                      rounded-xl
                      bg-[#1a1a1a]
                      hover:bg-green-500
                      transition
                      font-medium
                    "
                  >
                    {item.label}
                  </NavLink>

                  {/* MOBILE SUBMENU */}
                  {item.submenu && (

                    <div className="ml-4 mt-2 space-y-2">

                      {item.submenu.map((sub, i) => (

                        <NavLink
                          key={i}
                          to={sub.to}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="
                            block
                            px-4 py-2
                            text-sm
                            text-gray-300
                            hover:text-green-400
                            transition
                          "
                        >
                          • {sub.label}
                        </NavLink>

                      ))}

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </header>
  );
};

export default HeaderACScrap;
