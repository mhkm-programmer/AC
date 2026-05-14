import Contact from './Contact';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';
import React from 'react';

const ContactPage = () => {
  return (
    <div>
      {/* SEO Title */}
      <PageTitle title="Contact Trading Co. | AC Services & Scrap Buying in Doha Qatar" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://i.ibb.co/XkCR7pv1/Pngtree-architecture-of-doha-outdoors-city-11906274.jpg"
        title="Contact Trading Co."
        subTitle="Professional AC Services & Scrap Buying in Doha, Qatar"
      />

      {/* Contact Component */}
      <Contact />
    </div>
  );
};

export default ContactPage;
