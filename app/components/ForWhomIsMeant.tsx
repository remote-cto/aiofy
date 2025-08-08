import React from "react";
import { Crown, Check, Users, Building, GraduationCap, PieChart } from "lucide-react";

const ForWhomIsMeant: React.FC = () => {
  const targetAudiences = [
    {
      title: "Business Owners & Founders",
      icon: <Users className="w-6 h-6 text-[#FDC700]" />,
      description:
        "Learn how AI can drive growth and innovation in your business regardless of size or industry.",
    },
    {
      title: "C-Level Executives & Senior Leaders",
      icon: <Crown className="w-6 h-6 text-[#FDC700]" />,
      description:
        "Shape your organization’s AI vision, identify strategic opportunities, and lead responsible adoption that delivers measurable business impact. ",
    },
    {
      title: "Corporate Professional and Analysts",
      icon: <Building className="w-6 h-6 text-[#FDC700]" />,
      description:
        "Understand how to implement AI solutions that improve efficiency and decision-making in your department.",
    },
    ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-900 mb-3">
            FOR WHOM IS THIS MEANT?
          </h2>
          <div className="w-24 h-1 bg-[#FDC700] mx-auto"></div>
        </div>

        <div className="space-y-6 mt-10">
          {targetAudiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-start"
            >
              <div className="flex-shrink-0 mr-4">
                <div className="bg-white p-3 rounded-full">
                  {audience.icon}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  <Check className="w-5 h-5 text-[#FDC700] mr-2 flex-shrink-0" />
                  <h3 className="font-semibold text-xl text-gray-700">
                    {audience.title}
                  </h3>
                </div>
                <p className="text-gray-600 ml-7">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForWhomIsMeant;
