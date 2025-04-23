import React from "react";
import FeatureCard from "./FeatureCard";
import { 
  CircleDot, 
  CircleUser, 
  CircleCheck, 
  CirclePlus, 
  CircleMinus, 
  CircleX,
  Circle
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      title: "AI-Powered LMS",
      description: "AI Driven Technology for online learning.",
      gradientFrom: "#0CC7E0",
      gradientTo: "#065BBB",
      icon: <CircleDot className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Learning Resources",
      description: "Engaging videos, e-books, e-notes, web links, live sessions, forums, self-tests, assignments.",
      gradientFrom: "#FFCC33",
      gradientTo: "#FF9933",
      icon: <CircleCheck className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Doorstep Book Delivery",
            description: "Receive your study books delivered directly to your doorstep.",
            gradientFrom: "#0CC7E0",
            gradientTo: "#DCFF6B",
            icon: <CircleX className="w-8 h-8 text-teal-500" />
    },
    {
      title: "Campus Immersion",
      description: "Forge lasting connections with faculty and peers through on-Campus events.",
      gradientFrom: "#6366F1",
      gradientTo: "#EC4899",
      icon: <CircleUser className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Global Alumni Network",
      description: "Benefit from lifelong connections with over 100,000+ successful alumni worldwide.",
      gradientFrom: "#FFCC33",
      gradientTo: "#FF6B95",
      icon: <Circle className="w-8 h-8 text-pink-500" />
    },
    {
      title: "24/7 Support",
      description: "Program mentors and faculty are accessible anytime via phone or email for academic and career assistance.",
      gradientFrom: "#4ADE80",
      gradientTo: "#0CC7E0",
      icon: <CirclePlus className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Career Assistance",
      description: "Workshop on Job Interviews preparations, Resumes Building, and Group Discussions.",
      gradientFrom: "#A855F7",
      gradientTo: "#0CC7E0",
      icon: <CircleMinus className="w-8 h-8 text-indigo-500" />
    },
    {
      title: "Scholarship Opportunities",
      description: "Recognizing excellence and supporting diverse backgrounds (merit, defense, government, differently-abled, achievements.",
      gradientFrom: "#F87171",
      gradientTo: "#FB923C",
      icon: <CircleCheck className="w-8 h-8 text-red-500" />
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#0097b2]">
          Elevate Your Learning Journey with KiiTX!!
        </h1>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              gradientFrom={feature.gradientFrom}
              gradientTo={feature.gradientTo}
              icon={feature.icon}
              className="h-full"
            />
          ))}
        </div>
        
        {/* Footer CTA */}
        <div 
          className="rounded-full py-4 px-8 text-center text-white font-bold text-lg md:text-xl mb-8"
          style={{ background: "linear-gradient(90deg, #0097b2, #7ed952)" }}
        >
          Choose KiiTX: Learn Smarter, Grow Faster, Connect Globally.
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;