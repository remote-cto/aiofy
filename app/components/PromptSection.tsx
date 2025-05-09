"use client";
import React, { useState, useEffect } from "react";

interface AIUseCase {
  id: number;
  title: string;
  description: string;
}

const PromptSection = () => {
  const [formData, setFormData] = useState({
    website: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    website: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [useCases, setUseCases] = useState<AIUseCase[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDomainPopup, setShowDomainPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
  };

  const extractWebsiteDomain = (website: string): string => {
    let domain = website.replace(/^(https?:\/\/)?(www\.)?/, "");

    domain = domain.split("/")[0];
    return domain.toLowerCase();
  };

  const extractEmailDomain = (email: string): string => {
    const parts = email.split("@");
    return parts.length > 1 ? parts[1].toLowerCase() : "";
  };

  const doDomainsMatch = (website: string, email: string): boolean => {
    const websiteDomain = extractWebsiteDomain(website);
    const emailDomain = extractEmailDomain(email);
    return websiteDomain === emailDomain;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateWebsite = (website: string): boolean => {
    const urlRegex =
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    return urlRegex.test(website);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }

    if (showDomainPopup) {
      setShowDomainPopup(false);
    }
  };

  const fetchAIUseCases = async (website: string, email: string) => {
    try {
      setLoading(true);
      setError(null);
      setEmailSent(false);

      const response = await fetch("/api/generateUsecase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Analyse the website ${website} in real time and create three innovative, practical, and relevant AI use cases with custom "AI Can" headings.`,
          website: website,
          email: email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch AI use cases");
      }

      const data = await response.json();

      setUseCases(data.useCases);
      setEmailSent(true);
    } catch (error) {
      console.error("Error fetching AI use cases:", error);
      setError("Unable to generate AI use cases. Please try again later.");
      setUseCases([]);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors = { website: "", email: "" };

    if (!validateWebsite(formData.website)) {
      newErrors.website = "Please enter a valid website URL";
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (isValid && formData.website && formData.email) {
      if (!doDomainsMatch(formData.website, formData.email)) {
        setShowDomainPopup(true);
        isValid = false;
      }
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Form data submitted:", formData);

    await fetchAIUseCases(formData.website, formData.email);
    setSubmitted(true);
  };

  const handleClosePopup = () => {
    setShowDomainPopup(false);
  };

  return (
    <div className="lg:max-w-screen-xl mx-auto">
      <h1
        className="text-xl lg:text-3xl mt-10 transition-all duration-300 cursor-pointer text-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="bg-blue-900 bg-clip-text font-bold text-transparent text-center">
          AI CAN TRANSFORM{" "}
          <span className="relative text-blue-900">
            YOUR BUSINESS
            <span
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 w-full transform transition-all duration-500 ${
                isAnimating ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </span>
          . SEE RIGHT NOW
        </span>
      </h1>
      <div className="p-5 bg-white rounded-lg shadow-sm mb-8">
        {showDomainPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-bold text-red-600 mb-3">
                Email Domain Error
              </h3>
              <p className="mb-4">
                Please use an email address with the same domain as your
                website. Your email domain should match your business website
                domain.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={handleClosePopup}
                  className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-start">
            <div className="flex-grow">
              <label
                htmlFor="website"
                className="block text-sm font-medium text-black mb-1"
              >
                Your Business Website
              </label>
              <input
                id="website"
                name="website"
                type="text"
                required
                value={formData.website}
                onChange={handleChange}
                placeholder="www.yourwebsite.com"
                className={`w-full p-3 border ${
                  formErrors.website ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBF23]`}
              />
              {formErrors.website && (
                <p className="mt-1 text-sm text-red-600">
                  {formErrors.website}
                </p>
              )}
            </div>
            <div className="flex-grow">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full p-3 border ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBF23]`}
              />
              <p className="mt-1 text-xs text-gray-500">
                Email must be from the same domain as your website
              </p>
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>
            <div className="w-full md:w-auto mt-2 md:mt-8">
              <button
                type="submit"
                className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Submit"}
              </button>
            </div>
          </div>
        </form>

        {submitted && (
          <div>
            {error ? (
              <div className="p-4 bg-red-100 text-red-700 rounded-lg mb-6">
                {error}
              </div>
            ) : (
              <div></div>
            )}

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
              </div>
            ) : (
              useCases.length > 0 && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {useCases.map((useCase) => (
                      <div
                        key={useCase.id}
                        className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-bold text-lg mb-2 text-blue-900">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-700">{useCase.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-5 bg-yellow-50 rounded-lg border-yellow-300 text-center">
                    <h3 className="text-[35px] font-bold text-blue-900 mb-2">
                      We can get this done for you. FAST!
                    </h3>
                    <a
                      href="/contact"
                      className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                    >
                      Contact NOW
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptSection;
