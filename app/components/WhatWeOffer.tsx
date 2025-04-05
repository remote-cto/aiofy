"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// import { CoolMode } from "../../components/ui/cool-mode";

const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const services = [
    {
      image: "/images/AIConsulting.jpg",
      title: "AI Consulting",
      description:
        "Gain a competitive edge with our AI Consulting services. Our experts dive deep into your business challenges, identifying opportunities to integrate AI seamlessly. We design strategic AI roadmaps that are practical, scalable, and result-driven—helping you move from concept to execution with confidence. We provide strategic AI consulting to help businesses identify opportunities, overcome challenges, and implement AI-driven solutions. From ideation to execution, our experts work with you to create a roadmap that aligns with your goals.",
      link: "/services/AiConsulting",
    },
    {
      image: "/images/AiModelTraining.png",
      title: "AI Model Training",
      description:
        "Empower your AI systems with precision. We offer end-to-end AI model training, leveraging state-of-the-art techniques and datasets to ensure your models are not just intelligent but also accurate and efficient. From supervised to unsupervised learning, we cover it all. Our team designs, trains, and deploys custom AI models tailored to your specific needs. Whether it’s predictive analytics, natural language processing, or computer vision, we ensure your models are accurate, scalable, and future-ready.",
      link: "/services/AiModelTraining",
    },
    {
      image: "/images/genAI.jpg",
      title: "Generative AI Solutions",
      description:
        "Reimagine what’s possible with our GEN AI solutions. From AI-driven content creation to automated code generation, our generative models push the boundaries of innovation. Transform how you interact, create, and communicate with AI capabilities designed for the future. Unlock creativity and efficiency with our Generative AI solutions. From content creation to design automation, we help you leverage the power of AI to generate innovative ideas, streamline workflows, and deliver exceptional results. ",
      link: "/services/GenerativeAiSolutions",
    },
  ];

  return (
    <motion.div
     id="services-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white py-16 "
    >
      <div className="container mx-auto px-4">
        <motion.h1
          variants={titleVariants}
          className="text-center text-3xl md:text-6xl font-extrabold mb-14  tracking-tight "
        >
          Our <span className="text-[#FFBF23]">Services</span>
        </motion.h1>
        {/* <h2 className=" text-black mb-4 text-3xl  sm:text-5xl font-['SpaceGrotesk'] text-center">
          Our <span className="text-[#FFBF23]">Services</span>
           </h2> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    duration: 0.8,
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-black mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  {/* <CoolMode> */}
                  <Link
                    href={service.link}
                    className="group relative block w-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center bg-[#FFBF23] text-black py-2 rounded-lg  transition-colors duration-300 ease-in-out"
                    >
                      <span className="mr-2">Know More</span>

                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-block"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </motion.div>
                  </Link>
                  {/* </CoolMode> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
