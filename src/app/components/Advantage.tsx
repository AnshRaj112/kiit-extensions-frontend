import React from "react";
import { 
  BookOpen, 
  Clock, 
  Scale, 
  PiggyBank, 
  KeyRound 
} from "lucide-react";

const KeyAdvantages: React.FC = () => {
  const advantages = [
    {
      title: "Diverse Inter-disciplinary Options",
      description: "Explore diverse programs, from short courses to degrees, designed to align with your career goals and tailored for your future.",
      color: "bg-green-500",
      borderColor: "border-green-500",
      icon: <BookOpen className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Self-Paced - Learning",
      description: "Freedom to study at own pace from anywhere and progress through course materials unlike traditional classroom",
      color: "bg-purple-500",
      borderColor: "border-purple-500",
      icon: <Clock className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "Balanced Work-Life-Education",
      description: "Weekend/ off-work hours classes fostering learn while your work concept of Education 4.0",
      color: "bg-rose-700",
      borderColor: "border-rose-700",
      icon: <Scale className="h-10 w-10 text-rose-800" />,
    },
    {
      title: "Save Time And Money",
      description: "Eliminates the need for commuting to a physical location including spends on textbooks, study materials, etc",
      color: "bg-teal-600",
      borderColor: "border-teal-600",
      icon: <PiggyBank className="h-10 w-10 text-teal-700" />,
    },
    {
      title: "Open Doors for Opportunities",
      description: "Enhance resume & Proof-of-Work leading to multiple career opportunities",
      color: "bg-purple-600",
      borderColor: "border-purple-600", 
      icon: <KeyRound className="h-10 w-10 text-purple-700" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-4">
        KiiTX: Key Advantages
      </h1>
      <div className="h-0.5 mx-auto mb-12 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-1/2 md:w-1/3" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
        {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col items-center h-full"> 
              {/* Hexagon card with circular logo at top */}
              <div className="relative flex flex-col items-center h-full w-full">
                {/* Circle for logo */}
                <div className={`absolute -top-5 rounded-full p-4 ${advantage.color} border-3 ${advantage.borderColor} bg-white z-10 h-20 w-20 flex items-center justify-center`}>
                  {advantage.icon}
                </div>
                
                {/* Hexagon-like shape with reduced height */}
                <div className={`${advantage.color} pt-12 pb-6 px-2 text-center rounded-t-lg w-full mt-6 h-full flex flex-col`}>
                  <h3 className="text-m font-bold text-white mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-white text-sm flex-grow">
                    {advantage.description}
                  </p>
                </div>
                
                {/* Bottom pointy part of hexagon */}
                <div className={`${advantage.color} w-full h-10 clip-path-polygon`}></div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default KeyAdvantages;
