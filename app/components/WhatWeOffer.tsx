
import React from 'react';

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
  imageAlt 
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-600">{extendedDescription}</p>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: "AI Consulting",
      description: "Gain a competitive edge with our AI Consulting services. Our experts dive deep into your business challenges, identifying opportunities to integrate AI seamlessly. We design strategic AI roadmaps that are practical, scalable, and result-driven—helping you move from concept to execution with confidence..",
      extendedDescription: "We provide strategic AI consulting to help businesses identify opportunities, overcome challenges, and implement AI-driven solutions. From ideation to execution, our experts work with you to create a roadmap that aligns with your goals.",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
      imageAlt: "AI Consulting Service"
    },
    {
      title: "AI Model Training",
      description: "Empower your AI systems with precision. We offer end-to-end AI model training, leveraging state-of-the-art techniques and datasets to ensure your models are not just intelligent but also accurate and efficient. From supervised to unsupervised learning, we cover it all.",
      extendedDescription: "Our team designs, trains, and deploys custom AI models tailored to your specific needs. Whether it’s predictive analytics, natural language processing, or computer vision, we ensure your models are accurate, scalable, and future-ready.",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
      imageAlt: "AI Model Training Service"
    },
    {
      title: "Generative AI Solutions",
      description: "Reimagine what’s possible with our GEN AI solutions. From AI-driven content creation to automated code generation, our generative models push the boundaries of innovation. Transform how you interact, create, and communicate with AI capabilities designed for the future.",
      extendedDescription: "Unlock creativity and efficiency with our Generative AI solutions. From content creation to design automation, we help you leverage the power of AI to generate innovative ideas, streamline workflows, and deliver exceptional results.",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
      imageAlt: "Generative AI Solutions Service"
    }
  ];

  return (
    <div className="container mx-auto px-14 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transforming businesses through cutting-edge AI solutions tailored to your specific needs.
        </p>
      </div>

      
      <div className="block md:hidden space-y-12">
        {services.map((service, index) => (
          <div key={index} className="border-b border-gray-200 pb-10 last:border-0">
            <Service {...service} />
          </div>
        ))}
      </div>

   
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border-r border-gray-200 last:border-0 px-4">
            <Service {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;