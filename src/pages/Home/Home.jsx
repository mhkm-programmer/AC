import CustomerReviews from "./CustomerReviews";
import HeroSlider from "./heroBanner.jsx/HeroSlider";
import OurClient from "./OurClient";
import PageTitle from "../reusable/PageTitle";
import SubscreibeContact from "../contact/SubscreibeContact";
import WhyChoose from "./WhyChoose";
import Products_ACServices from "./Products_ACServices";
import Products_ScrapBuying from "./Products_ScrapBuying";

const Home = () => {
  return (
    <div>
    <PageTitle title="Curtains Furniture | Home"/>
      <HeroSlider />
      <Products_ACServices />
      <Products_ScrapBuying />
        <WhyChoose/>
      <OurClient/>
      <CustomerReviews/>
     <SubscreibeContact/>
    </div>
  );
};

export default Home;
