import React from "react";
import AboutMe from "./AboutMe";
import PageTitle from "../reusable/PageTitle";
import ParallaxSection from "../reusable/Parallax";

const AboutMePage = () => {
  return (
    <div className="w-full">

      {/* SEO Page Title */}
      <PageTitle title="About Contact Trading Co. | AC Services & Scrap Buying in Doha Qatar" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67a7f51fa667f/About_Us-min.jpg"
        title="About Contact Trading Co."
        subTitle="Professional AC Installation, Repair & Scrap Buying Services in Doha, Qatar"
      />

      {/* About Content */}
      <section className="container mx-auto px-4 py-12">
        <AboutMe />
      </section>

    </div>
  );
};

export default AboutMePage;
