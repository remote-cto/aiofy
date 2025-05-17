"use client";
import React, { useState } from "react";
import { Calendar, CheckCircle, ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";

// Define typescript interfaces
interface Industry {
  name: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const StrategySessionPage = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [industry, setIndustry] = useState("");
  const [challenge, setChallenge] = useState("");
 const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({});


  // Animation variants
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

  // Industries we serve
//   const industries: Industry[] = [
//     { name: "Healthcare" },
//     { name: "FinTech" },
//     { name: "Smart Cities" },
//     { name: "Cybersecurity" },
//     { name: "Government" },
//     { name: "Media" },
//     { name: "Defense" },
//     { name: "Hospitality" },
//     { name: "Logistics" },
//     { name: "Crime Tech" },
//   ];

  // FAQs
  const faqs: FAQ[] = [
    {
      question: "What happens after I book?",
      answer:
        "You'll get a calendar invite and a short form to tell us more about your business goals and challenges.",
    },
    {
      question: "Is this only for AI-ready companies?",
      answer: "Not at all. If you're AI-curious, this is a great first step.",
    },
    {
      question: "How long does the session last?",
      answer:
        "Each strategy session is 30 minutes long, focused specifically on your business needs.",
    },
  ];

  // AI benefits you'll get
  const benefits = [
    {
      title: "Personalized AI Opportunity Map",
      description: "Tailored to your business domain and specific needs.",
    },
    {
      title: "AI Readiness Assessment",
      description:
        "Evaluation of your tech infrastructure, data assets, and operations.",
    },
    {
      title: "Use Case Brainstorming",
      description: "Specific to your business goals and challenges.",
    },
    {
      title: "Live AI Demo",
      description:
        "See relevant agentic AI capabilities from AIofy's suite in action.",
    },
    {
      title: "Strategic Implementation Plan",
      description: "Clear next steps to begin or accelerate your AI journey.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would connect to backend in real implementation
    console.log({ name, company, role, industry, challenge });
    alert(
      "Thank you for booking a strategy call! We will be in touch shortly."
    );
  };
 const toggleFaq = (index: number): void => {
  setExpandedFaqs(prev => ({
    ...prev,
    [index]: !prev[index]
  }));
};

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <header className="bg-[#FFBF23] text-blue-900 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            variants={titleVariants}
            className="text-3xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            AIofy <span className="text-blue-900">Strategy</span> Session
          </motion.h1>
          <h2 className="text-xl md:text-2xl mb-8">
            Unlock the Potential of AI for Your Business
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 mb-6"
          >
            <span className="mr-2">Book a Free 30-Minute Strategy Call</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <ArrowRight className="w-5 h-5 inline" />
            </motion.span>
          </motion.div>
          <p className="text-lg max-w-3xl mx-auto">
            Whether you're exploring AI for the first time or ready to scale
            your intelligent systems, this session is your gateway to actionable
            insights, clarity, and transformation.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-16">
        {/* What You'll Get Section */}
        <section className="mb-20">
          <motion.h2
            variants={titleVariants}
            className="text-center text-3xl md:text-5xl font-extrabold mb-14 text-blue-900 tracking-tight"
          >
            What You'll <span className="text-[#FFBF23]">Get</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl border border-gray-100"
              >
                <CheckCircle className="w-10 h-10 text-[#FFBF23] mb-4" />
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Who Should Book Section */}
        <section className="mb-20">
          <motion.h2
            variants={titleVariants}
            className="text-center text-3xl md:text-5xl font-extrabold mb-14 text-blue-900 tracking-tight"
          >
            Who Should <span className="text-[#FFBF23]">Book</span>
          </motion.h2>

          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#FFBF23] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-800 text-lg">
                  CTOs, CIOs & Heads of Innovation
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#FFBF23] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-800 text-lg">
                  Business Owners exploring digital transformation
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#FFBF23] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-800 text-lg">
                  Consultants or System Integrators looking to partner
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#FFBF23] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-800 text-lg">
                  Product Leaders seeking to embed AI into offerings
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Booking Form Section */}
        <section className="mb-20">
          <motion.h2
            variants={titleVariants}
            className="text-center text-3xl md:text-5xl font-extrabold mb-14 text-blue-900 tracking-tight"
          >
            Book Your <span className="text-[#FFBF23]">Strategy Call</span>
          </motion.h2>

          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-lg max-w-4xl mx-auto p-8 border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-blue-900">
                  A short intake form:
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Role / Title
                    </label>
                    <input
                      type="text"
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Industry
                    </label>
                    <input
                      type="text"
                      id="industry"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="challenge"
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      What challenge or goal would you like to explore?
                    </label>
                    <textarea
                      id="challenge"
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-[#FFBF23] text-blue-900 py-3 px-6 rounded-lg transition duration-300 font-medium flex items-center justify-center"
                  >
                    <span className="mr-2">Book Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>

              {/* Calendar Widget Placeholder */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-blue-900 mx-auto mb-4" />
                  <p className="text-lg font-medium text-blue-900">
                    Calendar Widget
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Select your preferred date and time
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Industries We Serve Section */}
        {/* <section className="mb-20">
          <motion.h2
            variants={titleVariants}
            className="text-center text-3xl md:text-5xl font-extrabold mb-14 text-blue-900 tracking-tight"
          >
            Industries We <span className="text-[#FFBF23]">Serve</span>
          </motion.h2>

          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <motion.span
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#FFBF23",
                    color: "#1e3a8a",
                  }}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full transition-all duration-300"
                >
                  {industry.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section> */}

        {/* Why AIofy Section */}
        <section className="mb-20">
          <motion.h2
            variants={titleVariants}
            className="text-center text-3xl md:text-5xl font-extrabold mb-14 text-blue-900 tracking-tight"
          >
            Why <span className="text-[#FFBF23]">AIofy</span>
          </motion.h2>

          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <p className="text-center mb-8 text-lg">
              We are a deep-tech solutions company specializing in:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="border border-blue-200 rounded-lg p-6 bg-white hover:bg-blue-50 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  Agentic AI systems
                </h3>
                <p className="text-gray-700">
                  Building intelligent systems that act autonomously on your
                  behalf.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="border border-blue-200 rounded-lg p-6 bg-white hover:bg-blue-50 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  Domain-specific LLM training
                </h3>
                <p className="text-gray-700">
                  Custom AI models trained specifically for your industry needs.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="border border-blue-200 rounded-lg p-6 bg-white hover:bg-blue-50 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  Custom AI integrations
                </h3>
                <p className="text-gray-700">
                  Seamlessly connect AI solutions with your existing systems.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="border border-blue-200 rounded-lg p-6 bg-white hover:bg-blue-50 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  Enterprise-grade deployment
                </h3>
                <p className="text-gray-700">
                  Scale with confidence and maintain regulatory compliance.
                </p>
              </motion.div>
            </div>

            <p className="text-center text-lg font-medium text-gray-800">
              Trusted by early adopters and enterprise teams globally.
            </p>
          </motion.div>
        </section>

        {/* Trustworthy Banner */}
        <section className="mb-20">
          <motion.div
            variants={cardVariants}
            className="bg-[#FFBF23] text-blue-900 py-10 px-6 rounded-2xl text-center shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">
              100% Confidential | No Sales Pitch | Pure Strategy
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center mx-auto"
            >
              <span className="mr-2">Book Your Free Strategy Call Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </section>

        {/* FAQs Section */}
       <section className="mb-20">
  <motion.h2
    variants={titleVariants}
    className="text-center text-3xl md:text-5xl font-extrabold mb-14 text-blue-900 tracking-tight"
  >
    <span className="text-[#FFBF23]">FAQs</span>
  </motion.h2>

  <motion.div
    variants={cardVariants}
    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
  >
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.01 }}
          className="border-b border-gray-200 pb-4 last:border-b-0"
        >
          <div 
            className="flex justify-between items-center cursor-pointer py-2"
            onClick={() => toggleFaq(index)}
          >
            <h3 className="text-xl font-bold text-blue-900">{faq.question}</h3>
            <div className="text-blue-900 text-2xl font-bold">
              {expandedFaqs[index] ? '-' : '+'}
            </div>
          </div>
          
          {expandedFaqs[index] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-gray-700"
            >
              <p>{faq.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>
      </main>

      <footer className="bg-gray-50 py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2025 AIofy. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default StrategySessionPage;
