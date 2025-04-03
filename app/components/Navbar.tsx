"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <>
      <nav className="bg-white py-4 px-6 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className=" h-15 w-15 lg:h-25 lg:w-22 rounded-lg flex items-center justify-center">
              <Image
                src="/images/aiofyLogo.jpg" 
                width={150} 
                height={150}
                className="text-white"
                alt="Company Logo"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">AIOFY</h1>
              <p className="text-xs text-gray-800 ">
                Building Intelligent AI Solutions{" "}
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-gray-900 hover:text-gray-900 relative group"
            >
              <span className="">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/contact"
              className="text-gray-900 hover:text-gray-900 relative group"
            >
              <span className="">Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button
              onClick={scrollToServices}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-md "
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none w-10 h-10 flex items-center justify-center relative"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-gray-800 top-3 transition-all duration-200 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div
          className={`md:hidden fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4 ">
              <a
                href="/"
                className="text-gray-800 hover:text-gray-900 py-2 border-b border-gray-100 hover:border-yellow-400 transition-colors duration-300 "
              >
                Home
              </a>
              <a
                href="/contact"
                className="text-gray-800 hover:text-gray-900 py-2 border-b border-gray-100 hover:border-yellow-400 transition-colors duration-300 "
              >
                Contact
              </a>
              <div className="pt-4">
                <button
                  onClick={scrollToServices}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-4 rounded-md w-full transition-all duration-300 shadow-sm hover:shadow"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
