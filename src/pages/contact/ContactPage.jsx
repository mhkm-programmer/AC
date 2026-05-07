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
        imagePath="https://8upload.com/image/67a7ffa390ec8/Contact-min.jpg"
        title="Contact Trading Co."
        subTitle="Professional AC Services & Scrap Buying in Doha, Qatar"
      />

      {/* Contact Component */}
      <Contact />
    </div>
  );
};

export default ContactPage;
