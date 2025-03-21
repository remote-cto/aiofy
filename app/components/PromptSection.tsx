"use client";
import React, { useState } from "react";

const PromptSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission here
    console.log("Form data submitted:", formData);
    // You can add your API call or processing logic here

    // Show submission message
    setSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        website: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="p-5 bg-white rounded-lg shadow-sm mb-8">
        {submitted ? (
          <div className="p-4 bg-green-100 text-green-700 rounded-lg mb-4">
            Your data has been successfully submitted!
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBF23]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
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
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBF23]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-black mb-1"
            >
              Website URL
            </label>
            <input
              id="website"
              name="website"
              type="url"
              required
              value={formData.website}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBF23]"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-md "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromptSection;
