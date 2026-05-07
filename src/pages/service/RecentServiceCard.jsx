import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";
import { Transition } from "react-transition-group";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const MyServices = () => {
  const [Services, setServices] = useState([
    // Existing services (Cabinets, Beds, Curtains...) remain here
    {
      id: 12,
      title: "AC Services",
      description: "We provide comprehensive AC services in Qatar including repair, installation, removal, reinstallation, stand AC repair, gas charging, moving, and buying & selling working or non-working units.",
      keyFeatures: [
        "AC Service & Repair",
        "AC Installation & Fixing",
        "AC Removal & Reinstallation",
        "Stand AC Repair",
        "Gas Charging",
        "AC Moving Services",
        "Buying & Selling AC Units"
      ],
      technologies: [
        "Skilled Technicians",
        "Professional Tools & Equipment",
        "Quality Assurance for All Services"
      ],
      image: "https://8upload.com/image/your-AC-image.jpg", // Replace with actual image
      galleryImage: [
        "https://8upload.com/image/your-AC-gallery1.jpg",
        "https://8upload.com/image/your-AC-gallery2.jpg"
      ],
      githubLink: "",
      liveDemoLink: ""
    },
    {
      id: 13,
      title: "Scrap Buying Services",
      description: "We buy all kinds of scrap materials in Qatar including used & non-working AC units, compressors, copper pipes, aluminum, electric motors, batteries, brass, and all electrical & metal scrap.",
      keyFeatures: [
        "Used & Non-Working AC Units",
        "Compressors",
        "Copper Pipes",
        "Aluminum",
        "Electric Motors",
        "Batteries",
        "Brass",
        "All Electrical & Metal Scrap"
      ],
      technologies: [
        "Safe Material Handling",
        "Fair Pricing",
        "Eco-Friendly Disposal"
      ],
      image: "https://8upload.com/image/your-scrap-image.jpg", // Replace with actual image
      galleryImage: [
        "https://8upload.com/image/your-scrap-gallery1.jpg",
        "https://8upload.com/image/your-scrap-gallery2.jpg"
      ],
      githubLink: "",
      liveDemoLink: ""
    }
  ]);

  const [activeTheme] = useThemeSwitcher();
  const [selectedProject, setSelectedProject] = useState(null);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);

  const servicesRef = useRef(null);
  const detailsRef = useRef(null);

  const handleProjectClick = (project) => {
    setPreviousScrollPosition(window.scrollY);
    setSelectedProject(project);
    requestAnimationFrame(() => {
      if (detailsRef.current) {
        const rect = detailsRef.current.getBoundingClientRect();
        window.scrollTo({ top: rect.top + window.scrollY, behavior: "smooth" });
      }
    });
  };

  const [expandedCards, setExpandedCards] = useState({});
  const toggleReadMore = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const shortTextLength = 100;

  const handleCloseProject = () => {
    setSelectedProject(null);
    window.scrollTo({ top: previousScrollPosition, behavior: "smooth" });
  };

  const handleShowAllServices = () => setShowAllServices(true);
  const displayedServices = showAllServices ? Services : Services.slice(0, 15);

  return (
    <div className="px-6 py-8 lg:py-10 bg-[#F5F5DC] dark:bg-gray-800 dark:text-gray-100">
      <h1 className="text-center text-3xl font-bold mb-4">
        Our <span className="text-[#6B4226]">Services</span>
      </h1>
      <h2 className="text-center text-lg font-semibold mb-12">
        Delivering High-Quality Solutions to Meet Your Needs
      </h2>

      <div ref={servicesRef}></div>

      {selectedProject ? (
        <Transition in={true} timeout={300} mountOnEnter unmountOnExit>
          {(state) => (
            <div
              ref={detailsRef}
              className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 transition-all duration-300"
            >
              <div className="mb-6 overflow-hidden rounded-lg shadow-md">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-cover"
                />
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
              </div>

              {selectedProject.keyFeatures?.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedProject.keyFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.technologies?.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Technologies Used</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedProject.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.galleryImage?.length > 0 && (
                <div className="mt-8">
                  <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">
                    Work Gallery of {selectedProject.title}
                  </h1>
                  <div className="flex flex-wrap -m-1">
                    <div className="flex flex-wrap w-full md:w-1/2">
                      {selectedProject.galleryImage.slice(0, 3).map((gallery, i) => (
                        <div key={i} className={`p-1 w-full ${i === 2 ? "md:w-full" : "md:w-1/2"}`}>
                          <img
                            alt="gallery"
                            className="w-full object-cover h-48 md:h-full rounded-lg shadow-md"
                            src={gallery}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap w-full md:w-1/2">
                      {selectedProject.galleryImage.slice(3, 6).map((gallery, i) => (
                        <div key={i} className={`p-1 w-full ${i === 0 ? "md:w-full" : "md:w-1/2"}`}>
                          <img
                            alt="gallery"
                            className="w-full object-cover h-48 md:h-full rounded-lg shadow-md"
                            src={gallery}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-center pt-6 gap-4 flex-wrap">
                <button
                  className={`btn-hero bg-[#6B4226] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition-all duration-300 ${
                    activeTheme === "dark" ? "dark-mode-text" : ""
                  } text-base sm:text-lg md:text-xl`}
                  onClick={handleCloseProject}
                >
                  <FaArrowLeft className="mr-2 text-lg sm:text-xl" /> Back to Services
                </button>

                <a
                  href="https://wa.me/+97450791874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-hero flex items-center bg-[#27ae60] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#219653] transition-all duration-300 text-base sm:text-lg md:text-xl"
                >
                  Book an Appointment <FaWhatsapp className="ml-2 text-lg sm:text-xl" />
                </a>
              </div>
            </div>
          )}
        </Transition>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {displayedServices.map((project) => (
            <Transition key={project.id} in={true} timeout={300} mountOnEnter unmountOnExit>
              {(state) => (
                <div
                  className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 ${state} flex flex-col`}
                >
                  <img src={project.image} alt={project.title} className="w-full rounded-lg mb-4" />
                  <h2 className="text-xl font-semibold mb-2 px-4">{project.title}</h2>
                  <p className="text-gray-500 mb-4 px-4">
                    {expandedCards[project.id]
                      ? project.description
                      : `${project.description.slice(0, shortTextLength)}...`}
                    {project.description.length > shortTextLength && (
                      <button
                        onClick={() => toggleReadMore(project.id)}
                        className="text-blue-600 hover:underline ml-2"
                      >
                        {expandedCards[project.id] ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </p>
                  <div className="p-4 flex flex-wrap justify-center mt-auto gap-4">
                    <button
                      className="w-full btn-hero bg-[#6B4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition-all duration-300"
                      onClick={() => handleProjectClick(project)}
                    >
                      Details More <FaArrowRight className="ml-2 text-xl sm:text-2xl" />
                    </button>
                    <a
                      href="https://wa.me/+97450791874"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-hero flex items-center bg-[#27ae60] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#219653] transition-all duration-300"
                    >
                      Book an Appointment <FaWhatsapp className="ml-2 text-xl sm:text-2xl" />
                    </a>
                  </div>
                </div>
              )}
            </Transition>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyServices;
