import React from "react";

const WhatYouWillLearn = () => {
  const learningPoints = [
    {
      icon: "🔍",
      text: "AI Demystified: What AI really is — and what it's not",
    },
    {
      icon: "💼",
      text: "AI in Business Today: Case studies from finance, retail, healthcare, and marketing",
    },
    {
      icon: "🧠",
      text: "Understanding Machine Learning & Neural Networks (no code needed)",
    },
    {
      icon: "⚙️",
      text: "AI Tools & Platforms: What you can use without being a techie",
    },
    {
      icon: "🌟",
      text: "Designing AI-Enabled Products & Services",
    },
    {
      icon: "📊",
      text: "Data for AI: How to source, structure, and use data effectively",
    },
    {
      icon: "🤖",
      text: "AI Agents & Automation in Business Workflows",
    },
    {
      icon: "🚀",
      text: "Building Your First AI Strategy for your company/startup",
    },
    {
      icon: "📝",
      text: "Risks, Ethics & Limitations of AI",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-sans">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-900 mb-12">
        WHAT YOU WILL LEARN?
      </h2>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-8 max-w-4xl mx-auto">
        <ul className="space-y-6">
          {learningPoints.map((point, index) => (
            <li key={index} className="flex items-start group">
              <span className="text-2xl mr-4 flex-shrink-0 bg-white p-2 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                {point.icon}
              </span>
              <div className="pt-1">
                <p className="text-lg text-gray-800 group-hover:text-[#FDC700] transition-colors duration-300">
                  {point.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
