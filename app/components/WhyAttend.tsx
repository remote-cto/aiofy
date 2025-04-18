import React from "react";
import {
  BookOpen,
  TrendingUp,
  Target,
  BarChart,
  Compass,
  Briefcase,
} from "lucide-react";

const WhyAttend: React.FC = () => {
  const benefits = [
    {
      title: "Understand AI Without the Jargon",
      description:
        "Cut through the buzzwords and grasp what AI really means for your business — in plain, practical terms.",
      icon: "BookOpen",
    },
    {
      title: "Stay Ahead of the Curve",
      description:
        "AI is changing the way decisions are made. Learn how to lead with insight, not instinct.",
      icon: "TrendingUp",
    },
    {
      title: "Identify Real Opportunities",
      description:
        "Spot where AI can create immediate value — whether it's in marketing, operations, customer experience, or strategy.",
      icon: "Target",
    },
    {
      title: "Make Confident, Data-Driven Decisions",
      description:
        "Equip yourself with the mindset and frameworks to use AI as a decision-support tool, not just a buzzword.",
      icon: "BarChart",
    },
    {
      title: "Lead the Change, Don't Chase It",
      description:
        "Position yourself as a future-ready leader who understands how to guide AI adoption within your organization.",
      icon: "Compass",
    },
    {
      title: "Learn from Real-World Case Studies",
      description:
        "Discover how companies are using AI right now — and how you can start doing the same.",
      icon: "Briefcase",
    },
  ];

  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-[#FDC700]" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-[#FDC700]" />;
      case "Target":
        return <Target className="w-6 h-6 text-[#FDC700]" />;
      case "BarChart":
        return <BarChart className="w-6 h-6 text-[#FDC700]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#FDC700]" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#FDC700]" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-900 mb-3">
            WHY ATTEND?
          </h2>
          <div className="w-24 h-1 bg-[#FDC700] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#FDC700]"
            >
              <div className="flex items-center mb-4">
                <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                  {getIcon(benefit.icon)}
                </div>
                <h3 className="font-semibold text-lg text-gray-700">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAttend;
