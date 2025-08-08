import React from "react";
import { Clock, Monitor, BookOpen, Award, Check } from "lucide-react";

interface FormatItemProps {
  icon: React.ReactNode;
  title: string;
  details?: string;
}

const FormatItem: React.FC<FormatItemProps> = ({ icon, title, details }) => (
  <div className="flex items-center space-x-4 mb-5 group">
    <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100">
      {icon}
    </div>
    <div className="flex-grow">
      <div className="flex items-center">
        <Check className="w-5 h-5 text-[#FDC700] mr-2" />
        <h3 className="font-medium text-gray-700">{title}</h3>
      </div>
      {details && <p className="text-gray-500 text-sm mt-1 ml-7">{details}</p>}
    </div>
  </div>
);

const CourseFormat: React.FC = () => {
  const formatItems = [
    {
      icon: <Clock className="w-6 h-6 text-coral-500" />,
      title: "Duration: 5 hours (Weekend & Weekday options)",
      details:
        "Flexible scheduling to fit your busy calendar - choose what works best for you.",
    },
    {
      icon: <Monitor className="w-6 h-6 text-coral-500" />,
      title: "Mode: Online / Hybrid",
      details:
        "Join remotely or in person - experience the same quality of instruction either way.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-coral-500" />,
      title: "Includes: Case studies, frameworks, live demos",
      details:
        "Learn through practical examples, structured approaches, and real-time applications.",
    },
    {
      icon: <Award className="w-6 h-6 text-coral-500" />,
      title: "Bonus: Project-based certification",
      details:
        "Apply what you've learned to a real-world challenge and earn recognition for your skills.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-900 mb-3">
            COURSE FORMAT
          </h2>
          <div className="w-24 h-1 bg-[#FDC700] mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formatItems.map((item, index) => (
              <FormatItem
                key={index}
                icon={item.icon}
                title={item.title}
                details={item.details}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFormat;
