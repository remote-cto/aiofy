"use client";
import React, { useState } from "react";

interface ServiceProps {
  title: string;
  description: string;
  extendedDescription: string;
  imageSrc: string;
  imageAlt: string;
}

const Service: React.FC<ServiceProps> = ({
  title,
  description,
  extendedDescription,
  imageSrc,
  imageAlt,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div
      className="flex flex-col h-full transition-all duration-300 rounded-lg p-4 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-6 overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`rounded-lg shadow-lg w-full h-64 object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>
        <p className="text-gray-800 mb-4">{description}</p>

        {showFullDescription ? (
          <div className="animate-fadeIn">
            <p className="text-gray-800 mb-4">{extendedDescription}</p>
            <button
              onClick={() => setShowFullDescription(false)}
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 mt-2"
            >
              Read Less
            </button>
          </div>
        ) : (
          <CoolMode
        options={{
          particle:
            "https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg",
        }}
      >
          <button
            onClick={() => setShowFullDescription(true)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Learn More
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          </CoolMode>
        )}
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: "AI Consulting",
      description:
        "Gain a competitive edge with our AI Consulting services. Our experts dive deep into your business challenges, identifying opportunities to integrate AI seamlessly. We design strategic AI roadmaps that are practical, scalable, and result-driven—helping you move from concept to execution with confidence..",
      extendedDescription:
        "We provide strategic AI consulting to help businesses identify opportunities, overcome challenges, and implement AI-driven solutions. From ideation to execution, our experts work with you to create a roadmap that aligns with your goals.",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
      imageAlt: "AI Consulting Service",
    },
    {
      title: "AI Model Training",
      description:
        "Empower your AI systems with precision. We offer end-to-end AI model training, leveraging state-of-the-art techniques and datasets to ensure your models are not just intelligent but also accurate and efficient. From supervised to unsupervised learning, we cover it all.",
      extendedDescription:
        "Our team designs, trains, and deploys custom AI models tailored to your specific needs. Whether it's predictive analytics, natural language processing, or computer vision, we ensure your models are accurate, scalable, and future-ready.",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
      imageAlt: "AI Model Training Service",
    },
    {
      title: "Generative AI Solutions",
      description:
        "Reimagine what's possible with our GEN AI solutions. From AI-driven content creation to automated code generation, our generative models push the boundaries of innovation. Transform how you interact, create, and communicate with AI capabilities designed for the future.",
      extendedDescription:
        "Unlock creativity and efficiency with our Generative AI solutions. From content creation to design automation, we help you leverage the power of AI to generate innovative ideas, streamline workflows, and deliver exceptional results.",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
      imageAlt: "Generative AI Solutions Service",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-14 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-black mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming businesses through cutting-edge AI solutions tailored
            to your specific needs.
          </p>
        </div>

        {/* Mobile view */}
        <div className="block md:hidden space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-10 last:border-0"
            >
              <Service {...service} />
            </div>
          ))}
        </div>

        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-r border-gray-200 last:border-0 px-4"
            >
              <Service {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
