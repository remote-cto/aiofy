import React from "react";

const WorkshopHeading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      <h1 className="text-2xl lg:text-4xl font-bold text-center text-blue-900 mb-12">
        AI FOR BUSINESS LEADERS
      </h1>

      <div className="mb-10">
        <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto text-center">
          <span className="font-medium text-gray-700">
            AI for Business Leaders
          </span>{" "}
          is a power-packed, one-day workshop designed for decision-makers who
          want to harness the power of artificial intelligence without getting
          lost in the tech. Learn how AI can drive smarter strategy, streamline
          operations, and unlock growth in your business. Through real-world
          case studies and practical frameworks, this workshop helps you move
          from curiosity to confident action — no coding required.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 shadow-sm max-w-3xl mx-auto">
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 text-[#FDC700] mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-gray-700">
              Make informed, AI-driven decisions
            </span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 text-[#FDC700] mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-gray-700">
              Identify high-impact use cases in your industry
            </span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 text-[#FDC700] mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-gray-700">
              Build a roadmap to integrate AI into your business
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkshopHeading;
