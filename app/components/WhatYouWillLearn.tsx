import React from "react";

const WhatYouWillLearn = () => {
  const learningPoints = [
    {
      icon: "🔍",
      title: "AI Demystified: What AI really is — and what it's not",
      description: "Cut through the hype to understand exactly what AI can (and can’t) do — so you can make confident business calls without getting lost in jargon.",
    },
    {
      icon: "💼",
      title: "AI’s Impact on Competitive Advantage",
      description: "How leading companies are using AI to reduce costs, accelerate growth, and disrupt industries — and what this means for your market.",
    },
    {
      icon: "🧠",
      title: " Strategic AI Literacy for Leaders",
      description: "Understand how machine learning, neural networks, and AI agents work — in plain English — so you can evaluate proposals, vendors, and investments.",
    },
    {
      icon: "⚙️",
      title: "AI Tools That Deliver Business Value",
      description: "Non-technical tools and platforms you can deploy immediately for marketing, operations, decision-making, and customer engagement.",
    },
    {
      icon: "🌟",
      title: "Designing AI-Driven Offerings",
      description: "Spot opportunities to create AI-enabled products or services that enhance your current portfolio and open new revenue streams.",
    },
    {
      icon: "📊",
      title: "Data as Your New Growth Engine",
      description: "The board-level essentials: how to identify, acquire, structure, and leverage data to power AI — while ensuring compliance and security.",
    },
    {
      icon: "🤖",
      title: "AI Agents & Workflow Automation",
      description: "Where AI can replace, augment, or enhance human decision-making across your organization — with examples you can start on tomorrow.",
    },
    {
      icon: "🚀 ",
      title: "Building an AI Roadmap",
      description: "A clear, action-focused framework to pilot AI in your business within 90 days and scale responsibly.",
    },
    {
      icon: "📝 ",
      title: "Ethics, Risk & Governance",
      description: "How to lead with AI responsibly: bias, transparency, accountability, and regulatory considerations every CXO must be prepared for.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-sans">
      <div className="text-center mb-2">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-900 mb-4">
          WHAT YOU WILL LEARN?
        </h2>
        <div className="w-24 h-1 bg-[#FDC700] mx-auto mb-12"></div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-8 max-w-4xl mx-auto">
        <ul className="space-y-6">
          {learningPoints.map((point, index) => (
            <li key={index} className="flex items-start group"> 
              <span className="text-2xl mr-4 flex-shrink-0 bg-white p-2 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                {point.icon}
              </span>
                {/* Text container */}
            <div>
              <p className="text-lg font-bold text-gray-900 group-hover:text-[#FDC700] transition-colors duration-300">
                {point.title}
              </p>
              <p className="text-gray-700 mt-1">
                {point.description}
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
