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
    label: "AC SERVICES ▼",
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
    label: "SCRAP BUYING ▼",
    to: "/services/scrap-buying",
    submenu: [

      { label: "Used NonWorkingACUnits", to: "/services/used-non-working-ac-units" },
      { label: "Copper Scrap", to: "/scrap-buying/copper" },
      { label: "Aluminum Scrap", to: "/scrap-buying/aluminum" },
      { label: "Electric Motor Scrap", to: "/scrap-buying/motor" },
      { label: "Battery Scrap", to: "/scrap-buying/battery" },
      { label: "Brass Scrap", to: "/scrap-buying/brass" },
      { label: "Compressors Scrap", to: "/services/compressors-scrap" },
      { label: "Electrical Metal Scrap", to: "/services/electrical-metal-scrap" },

    ],
  },

  // { label: "SERVICES", to: "/services" }, // optional but recommended
  { label: "GALLERY", to: "/gallery" },
  { label: "ABOUT US", to: "/about" },
  { label: "CONTACT US", to: "/contact" },
];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#111]">

      {/* Top Welcome Bar */}
      <div className="bg-[#222] py-1">
        <h1 className="text-sm md:text-lg text-center font-medium text-green-400">
          <Typed
            strings={[
              "Welcome to Contact Trading Co. – Doha Qatar",
              "Professional AC Service & Repair",
              "We Buy Used AC and Electrical Scrap",
              "Call Now for Fast Service Across Qatar",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h1>
      </div>

      {/* Search Bar */}
      <div className="bg-[#111] text-white shadow-md">
        <div className="flex justify-center px-4 py-2">
          <div className="relative w-full max-w-xl">

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search AC services, scrap buying, copper, motors..."
              className="w-full px-4 py-2 bg-white text-sm text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              className="absolute inset-y-0 right-0 flex items-center px-3 bg-green-500 rounded-r-md"
            >
              🔍
            </button>

          </div>
        </div>

        {/* Main Menu */}
        <div className="container flex flex-wrap justify-between items-center px-4 py-2 mx-auto">

          {/* Logo */}
          <div className="w-1/4">
            <NavLink to="/" className="flex items-center gap-2">

              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                CT
              </div>

              <span className="text-lg font-semibold text-white">
                Contact Trading Co.
              </span>

            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-3/4 justify-center space-x-4">

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
                    isActive
                      ? "text-green-400 px-4 py-2"
                      : "px-4 py-2 hover:text-green-400"
                  }
                >
                  {item.label}
                </NavLink>

                {item.submenu && activeSubMenu === index && (

                  <div className="absolute bg-[#222] mt-1 shadow-lg rounded-md py-2 z-50">

                    {item.submenu.map((sub, i) => (
                      <NavLink
                        key={i}
                        to={sub.to}
                        className="block px-6 py-2 text-sm hover:bg-[#333] hover:text-green-400"
                      >
                        {sub.label}
                      </NavLink>
                    ))}

                  </div>
                )}

              </div>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-green-500"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-[#111] text-white px-4 py-2">

            <ul className="space-y-2">

              {leftMenuItems.map((item, index) => (

                <li key={index}>

                  <NavLink
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-[#222] rounded"
                  >
                    {item.label}
                  </NavLink>

                  {item.submenu && (

                    <ul className="ml-4">

                      {item.submenu.map((sub, i) => (
                        <li key={i}>

                          <NavLink
                            to={sub.to}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-1 text-sm hover:text-green-400"
                          >
                            {sub.label}
                          </NavLink>

                        </li>
                      ))}

                    </ul>

                  )}

                </li>
              ))}

            </ul>

          </nav>
        )}

      </div>
    </div>
  );
};

export default HeaderACScrap;
