import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

import ContactPage from "../pages/contact/ContactPage";



import BlogPage from "../pages/blogs/BlogPage";
import FaqPage from "../pages/faq/FaqPage";
import Terms from "../pages/terms/Terms";
import ErrorPage from "../pages/errorPage/ErrorPage";

/* AC SERVICES */







/* SCRAP BUYING */

import AboutMePage from "../pages/about/AboutMePage";
import Gallery from "../pages/Gallery";
import Products_ScrapBuying from "../pages/Home/Products_ScrapBuying";

import ACRepair from "../pages/Products/ACServices/ACRepair";
import ACInstallation from "../pages/Products/ACServices/ACInstallation";
import ACGasInstallation from "../pages/Products/ACServices/ACGasInstallation";
import ACMaintenance from "../pages/Products/ACServices/ACMaintenance";
import ACRemovalReinstall from "../pages/Products/ACServices/ACRemovalReinstall";
import StandACRepair from "../pages/Products/ACServices/StandACRepair";
import UsedACBuySell from "../pages/Products/ACServices/UsedACBuySell";
import CopperScrap from "../pages/Products/ScrapBuying/CopperScrap";
import AluminumScrap from "../pages/Products/ScrapBuying/AluminumScrap";
import MotorScrap from "../pages/Products/ScrapBuying/MotorScrap";
import BatteryScrap from "../pages/Products/ScrapBuying/BatteryScrap";
import BrassScrap from "../pages/Products/ScrapBuying/BrassScrap";
import Products_ACServices from "../pages/Home/Products_ACServices";
import UsedNonWorkingACUnits from "../pages/Products/ScrapBuying/UsedNonWorkingACUnits";
import Compressors from "../pages/Products/ScrapBuying/Compressors";
import ElectricalMetalScrap from "../pages/Products/ScrapBuying/ElectricalMetalScrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Main />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [

      /* HOME */
      {
        path: "/",
        element: <Home />,
      },

      /* MAIN SERVICE PAGE */
      {
        path: "/services/ac-services",
        element: <Products_ACServices />,
      },

      /* AC SERVICES */
      {
        path: "/services/ac-repair",
        element: <ACRepair />,
      },
      {
        path: "/services/ac-installation",
        element: <ACInstallation />,
      },
      {
        path: "/services/ac-gas-charging",
        element: <ACGasInstallation />,
      },
      {
        path: "/services/ac-maintenance",
        element: <ACMaintenance />,
      },
      {
        path: "/services/ac-remove-install",
        element: <ACRemovalReinstall />,
      },
      {
        path: "/services/stand-ac-repair",
        element: <StandACRepair />,
      },
      {
        path: "/services/used-ac-buy-sell",
        element: <UsedACBuySell />,
      },

      /* SCRAP BUYING */
      {
        path: "/services/scrap-buying",
        element: <Products_ScrapBuying />,
      },
      {
        path: "/scrap-buying/copper",
        element: <CopperScrap />,
      },
      {
        path: "/scrap-buying/aluminum",
        element: <AluminumScrap />,
      },
      {
        path: "/scrap-buying/motor",
        element: <MotorScrap />,
      },
      {
        path: "/scrap-buying/battery",
        element: <BatteryScrap />,
      },
      {
        path: "/scrap-buying/brass",
        element: <BrassScrap />,
      },

       {
        path: "/scrap-buying/brass",
        element: <BrassScrap />,
      },

      {
        path: "/services/used-non-working-ac-units",
        element: <UsedNonWorkingACUnits />,
      },
      {
        path: "/services/compressors-scrap",
        element: <Compressors />,
      },
      {
        path: "/services/electrical-metal-scrap",
        element: <ElectricalMetalScrap />,
      },

      /* OTHER PAGES */
      // {
      //   path: "/gallery",
      //   element: <Gallery />,
      // },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/about",
        element: <AboutMePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
