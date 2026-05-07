import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {

  const reviews = [
    {
      image: "https://8upload.com/image/67a01a1ccc5a5/Ahmed_Al-Ansari.jpg",
      quote:
        "Very fast AC repair service. The technician arrived on time and fixed our AC perfectly. Highly recommended in Doha.",
      name: "Ahmed Al-Ansari",
      title: "Business Owner, Doha",
    },
    {
      image: "https://8upload.com/image/67a01a1ca7613/Noor_Fatima.jpg",
      quote:
        "Contact Trading Co. installed our new AC unit professionally. Great service and reasonable price.",
      name: "Noor Fatima",
      title: "Office Manager, Qatar",
    },
    {
      image: "https://8upload.com/image/67a01a1c849be/Mohammed_Khalifa.jpg",
      quote:
        "Best scrap buyer in Qatar. They gave a fair price for our old AC and copper materials.",
      name: "Mohammed Khalifa",
      title: "Construction Contractor",
    },
    {
      image: "https://8upload.com/image/67a01a1c6130d/Sara_Ibrahim.jpg",
      quote:
        "Excellent AC gas charging service. Quick response and very professional team.",
      name: "Sara Ibrahim",
      title: "Homeowner, Doha",
    },
  ];

  const items = reviews.map((review, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-6 mx-3 rounded-xl bg-white shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 dark:bg-gray-900"
    >
      {/* Customer Image */}
      <img
        src={review.image}
        alt={review.name}
        loading="lazy"
        className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 mb-4"
      />

      {/* Star Rating */}
      <div className="flex text-yellow-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Review Text */}
      <blockquote className="text-gray-600 dark:text-gray-300 text-center italic mb-4">
        "{review.quote}"
      </blockquote>

      {/* Name */}
      <div className="text-center">
        <p className="font-semibold text-blue-700">{review.name}</p>
        <p className="text-sm text-gray-500">{review.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="py-12 bg-blue-50 dark:bg-gray-800">

      <div className="container mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-4">
          What Our Customers Say
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Our customers across Doha and Qatar trust Contact Trading Co. for
          reliable AC services and professional scrap buying solutions.
        </p>

        <div className="max-w-6xl mx-auto">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={3500}
            infinite
            animationDuration={900}
            disableButtonsControls
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            }}
          />
        </div>

      </div>

    </section>
  );
};

export default CustomerReviews;
