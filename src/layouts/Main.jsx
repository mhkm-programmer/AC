import ContactBubble from "../pages/share/ContactBubble";
import Footer from "../pages/share/footer/Footer";
import HeaderACScrap from "../pages/share/header/HeaderACScrap";

import { Outlet } from "react-router-dom";

const Main = () => {


  return (
    <div className="main-container relative">
      <HeaderACScrap />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
      <ContactBubble />


    </div>
  );
};

export default Main;
