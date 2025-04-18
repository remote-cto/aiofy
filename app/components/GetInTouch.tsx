"use client";
import React, { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/getInTouch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message:
            data.message || "Thanks for reaching out! We'll contact you soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitStatus({});
        }, 5000);
      } else {
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to submit form. Please try again.",
      });

      setTimeout(() => {
        setSubmitStatus({});
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-2 mb-2">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-4">
        <h2 className="text-center text-white text-2xl font-bold tracking-wide">
          GET IN TOUCH
        </h2>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-medium py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex justify-center items-center"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Submit"
            )}
          </button>

          {submitStatus.message && (
            <div
              className={`mt-4 p-3 rounded-md ${
                submitStatus.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
