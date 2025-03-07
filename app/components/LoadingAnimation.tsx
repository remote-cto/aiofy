"use client";
import React, { useState, useEffect } from "react";

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Initializing...");
  const [dots, setDots] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Random increment between 1-5%
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prevProgress + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Update loading message based on progress
  useEffect(() => {
    if (progress < 30) {
      setMessage("Initializing...");
    } else if (progress < 60) {
      setMessage("Preparing your experience...");
    } else if (progress < 90) {
      setMessage("Almost there...");
    } else if (progress >= 100) {
      setMessage("Ready!");
    }
  }, [progress]);

  // Animate loading dots
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prevDots) => (prevDots + 1) % 4);
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  // Format dots display
  const formatDots = () => ".".repeat(dots);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md text-center">
        {/* Logo section */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-16 w-16 bg-black rounded-lg flex items-center justify-center">
            <svg
              className="h-10 w-10 text-white"
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
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Nirvana.AI</h1>
            <p className="text-xs text-gray-800">
              Building Intelligent AI Solutions
            </p>
          </div>
        </div>

        {/* Loading animation */}
        <div className="relative mb-8">
          <div className="flex justify-center">
            <div className="relative w-40 h-40">
              {/* Rotating outer circle */}
              <div className="absolute inset-0 rounded-full border-4 border-yellow-300 border-t-yellow-500 animate-spin"></div>
              
              {/* Inner circles */}
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-yellow-400"
                  style={{
                    width: `${20 - (i * 5)}px`,
                    height: `${20 - (i * 5)}px`,
                    top: `calc(50% - ${(20 - (i * 5)) / 2}px)`,
                    left: `calc(50% - ${(20 - (i * 5)) / 2}px)`,
                    opacity: 0.7 + (i * 0.1),
                    animation: `pulse 1.5s infinite ${i * 0.3}s`
                  }}
                ></div>
              ))}
              
              {/* Percentage display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">{progress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-yellow-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading message */}
        <p className="text-gray-700 text-lg font-medium">
          {message}<span>{formatDots()}</span>
        </p>
        
        {/* Interactive tip */}
        <div className="mt-8 text-sm text-gray-500 bg-gray-100 p-3 rounded-lg">
          <p>Tip: Our AI is analyzing your preferences for a personalized experience</p>
        </div>
        
        {/* Skip button (appears at 70% progress) */}
        {progress >= 70 && (
          <button 
            className="mt-6 px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setProgress(100)}
          >
            Skip loading
          </button>
        )}
      </div>
      
      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;