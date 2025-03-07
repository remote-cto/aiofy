"use client";
import React, { useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
   
    <nav className="bg-white py-4 px-6 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 bg-black rounded-lg flex items-center justify-center">
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold">Nirvana.AI</h1>
            <p className="text-xs text-gray-800">
              Building Intelligent AI Solutions{" "}
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-900 hover:text-gray-900">
            Home
          </a>
          <a href="/" className="text-gray-900 hover:text-gray-900">
            Contact
          </a>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-md w-full">
              Get Started
            </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 px-4">
          <div className="flex flex-col space-y-3">
            <a href="/" className="text-gray-700 hover:text-gray-900 py-2">
              Home
            </a>
            <a href="/" className="text-gray-700 hover:text-gray-900 py-2">
              Contact
            </a>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-md w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
