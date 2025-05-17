"use client";
import React, { useState, useEffect, useRef } from "react";
import { Calendar, CheckCircle, ArrowRight, Users, Mail } from "lucide-react";

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
  const [email, setEmail] = useState(""); // Added email field
  const [challenge, setChallenge] = useState("");
  const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({});
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({
    text: "",
    isError: false,
  });
  const calendlyWidgetRef = useRef<HTMLDivElement>(null);
  const formDataRef = useRef({
    name: "",
    company: "",
    role: "",
    industry: "",
    email: "",
    challenge: "",
  });

  // Update formDataRef when form fields change
  useEffect(() => {
    formDataRef.current = { name, company, role, industry, email, challenge };
  }, [name, company, role, industry, email, challenge]);

  // Load Calendly script & initialize widget once
  useEffect(() => {
    // Check if script already exists to prevent duplicate loading
    if (
      document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      )
    ) {
      setCalendarLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    script.setAttribute("type", "text/javascript");
    script.setAttribute("async", "");

    // Handle loading success
    script.onload = () => {
      console.log("Calendly script loaded successfully");
      setCalendarLoaded(true);

      // Delay initialization to ensure Calendly is fully loaded
      setTimeout(initializeCalendly, 1000);
    };

    // Handle loading failure
    script.onerror = (error) => {
      console.error("Failed to load Calendly script:", error);
    };

    document.head.appendChild(script);

    return () => {
      // Clean up only if we actually added the script
      try {
        const existingScript = document.querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]'
        );
        if (existingScript && document.head.contains(existingScript)) {
          document.head.removeChild(existingScript);
        }
      } catch (error) {
        console.error("Error removing Calendly script:", error);
      }
    };
  }, []);

  const initializeCalendly = () => {
    if (window.Calendly && calendlyWidgetRef.current) {
      try {
        const { name, company, role, industry, email, challenge } =
          formDataRef.current;

        window.Calendly.initInlineWidget({
          url: "https://calendly.com/real-human-aiofy?hide_gdpr_banner=1",
          parentElement: calendlyWidgetRef.current,
          prefill: {
            name,
            email: email || "",
            customAnswers: {
              a1: company,
              a2: role,
              a3: industry,
              a4: challenge,
            },
          },
        });
      } catch (error) {
        console.error("Error initializing Calendly widget:", error);
      }
    }
  };

 
  const sendFormData = async () => {
    setIsSubmitting(true);
    setSubmitMessage({ text: "", isError: false });

    try {
      const response = await fetch("/api/strategySession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message: `
Company: ${company}
Role: ${role}
Industry: ${industry}
Challenge/Goal: ${challenge}
          `,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      
      setSubmitMessage({
        text: "Thank you! Your information has been submitted successfully.",
        isError: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage({
        text:
          error instanceof Error
            ? error.message
            : "Failed to submit form. Please try again.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, company, role, industry, email, challenge });

    await sendFormData();
  };

  const toggleFaq = (index: number): void => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
     {
      title: "Clarity on ROI",
      description: "Know exactly what to expect and how soon results can be delivered.",
    },

  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[#FFBF23] text-blue-900 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 tracking-tight">
            AIofy <span className="text-blue-900">Strategy</span> Session
          </h1>
          <h2 className="text-xl md:text-2xl mb-8">
            Unlock the Potential of AI for Your Business
          </h2>
          <div className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 mb-6">
            <a href="#booking-section" className="flex items-center">
              <span className="mr-2">Book a Free 30-Minute Strategy Call</span>
              <span className="inline-block">
                <ArrowRight className="w-5 h-5 inline" />
              </span>
            </a>
          </div>
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
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-14 text-blue-900 tracking-tight">
            What You'll <span className="text-[#FFBF23]">Get</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl border border-gray-100"
              >
                <CheckCircle className="w-10 h-10 text-[#FFBF23] mb-4" />
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Should Book Section */}
        <section className="mb-20">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-14 text-blue-900 tracking-tight">
            Who Should <span className="text-[#FFBF23]">Book</span>
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
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
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking-section" className="mb-20">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-14 text-blue-900 tracking-tight">
            Book Your <span className="text-[#FFBF23]">Strategy Call</span>
          </h2>

          <div className="bg-white rounded-2xl shadow-lg max-w-5xl mx-auto p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row">
              {/* Form */}
              <div className="md:w-5/12">
                <h3 className="font-semibold text-lg mb-4 text-blue-900">
                  Submit your information:
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
                      htmlFor="email"
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FFBF23] text-blue-900 py-3 px-6 rounded-lg transition duration-300 font-medium flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-2" />
                        <span>Submit Information</span>
                      </>
                    )}
                  </button>

                  {submitMessage.text && (
                    <div
                      className={`mt-4 p-3 rounded-md ${
                        submitMessage.isError
                          ? "bg-red-50 text-red-700"
                          : "bg-green-50 text-green-700"
                      }`}
                    >
                      {submitMessage.text}
                    </div>
                  )}
                </form>
              </div>

              {/* Divider with OR */}
              <div className="flex flex-col items-center justify-center py-6 md:py-0 md:px-6">
                <div className="hidden md:block h-full w-px bg-blue-900"></div>
                <div className="md:hidden w-full h-px bg-blue-900my-4"></div>
                <div className="bg-white px-3 py-2 text-blue-900 font-medium text-lg my-4">
                  OR
                </div>
                <div className="hidden md:block h-full w-px bg-blue-900"></div>
                <div className="md:hidden w-full h-px bg-blue-900 my-4"></div>
              </div>

              {/* Calendly Widget */}
              <div className="md:w-7/12">
                <h3 className="font-semibold text-lg mb-4 text-blue-900">
                  Book directly via calendar:
                </h3>
                <div className="h-full min-h-96">
                  {!calendarLoaded ? (
                    <div className="flex flex-col items-center justify-center h-full min-h-96 bg-gray-50 rounded-lg border border-gray-200">
                      <Calendar className="w-16 h-16 text-blue-900 mx-auto mb-4" />
                      <p className="text-lg font-medium text-blue-900">
                        Loading Calendar...
                      </p>
                    </div>
                  ) : (
                    <div
                      ref={calendlyWidgetRef}
                      className="calendly-inline-widget w-full h-full min-h-96"
                    ></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why AIofy Section */}
        <section className="mb-20">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-14 text-blue-900 tracking-tight">
            Why <span className="text-[#FFBF23]">AIofy</span>
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-center mb-8 text-lg">
              We are a deep-tech solutions company specializing in:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-blue-200 rounded-lg p-6 bg-white hover:bg-blue-50 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  Agentic AI systems
                </h3>
                <p className="text-gray-700">
                  Building intelligent systems that act autonomously on your
                  behalf.
                </p>
              </div>

              <div className="border border-blue-200 rounded-lg p-6 bg-white hover:bg-blue-50 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  Domain-specific LLM training
                </h3>
                <p className="text-gray-700">
                  Custom AI models trained specifically for your industry needs.
                </p>
              </div>

              <div className="border border-blue-200 rounded-lg p-6 bg-white hover:bg-blue-50 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  Custom AI integrations
                </h3>
                <p className="text-gray-700">
                  Seamlessly connect AI solutions with your existing systems.
                </p>
              </div>

              <div className="border border-blue-200 rounded-lg p-6 bg-white hover:bg-blue-50 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  Enterprise-grade deployment
                </h3>
                <p className="text-gray-700">
                  Scale with confidence and maintain regulatory compliance.
                </p>
              </div>
            </div>

            <p className="text-center text-lg font-medium text-gray-800">
              Trusted by early adopters and enterprise teams globally.
            </p>
          </div>
        </section>

        {/* Trustworthy Banner */}
        <section className="mb-20">
          <div className="bg-[#FFBF23] text-blue-900 py-10 px-6 rounded-2xl text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-6">
              100% Confidential | No Sales Pitch | Pure Strategy
            </h2>
            <a
              href="#booking-section"
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center mx-auto w-fit"
            >
              <span className="mr-2">Book Your Free Strategy Call Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-20">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-14 text-blue-900 tracking-tight">
            <span className="text-[#FFBF23]">FAQs</span>
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer py-2"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-xl font-bold text-blue-900">
                      {faq.question}
                    </h3>
                    <div className="text-blue-900 text-2xl font-bold">
                      {expandedFaqs[index] ? "-" : "+"}
                    </div>
                  </div>

                  {expandedFaqs[index] && (
                    <div className="mt-2 text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2025 AIofy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Add TypeScript interface for the Window object
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default StrategySessionPage;
