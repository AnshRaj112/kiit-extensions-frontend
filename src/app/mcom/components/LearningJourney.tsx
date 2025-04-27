import React from 'react';
import {  Headset, School, GraduationCap } from 'lucide-react';
import { GrResources } from 'react-icons/gr'; // react-icons for GrResources

const steps = [
  {
    number: 1,
    title: "Online Orientation",
    description: "Attend orientation sessions to familiarize yourself with the program, university policies, and resources.",
    color: "bg-purple-500",
    textColor: "text-purple-500",
    borderColor: "border-purple-500",
    Icon: Headset,
  },
  {
    number: 2,
    title: "On-Campus meet",
    description: "Meet your peers and Faculty in an on-campus meet event.",
    color: "bg-teal-500",
    textColor: "text-teal-500",
    borderColor: "border-teal-500",
    Icon: School,
  },
  {
    number: 3,
    title: "Academic Progress",
    description: "Attend Online Live and recorded classes, go through e-Content, complete your assignments, and maintain a strong academic performance.",
    color: "bg-orange-400",
    textColor: "text-orange-400",
    borderColor: "border-orange-400",
    Icon: GraduationCap,
  },
  {
    number: 4,
    title: "Utilize Resources",
    description: "Make use of library resources at the Bhubaneswar campus, online learning resources and academic support services to enhance your learning.",
    color: "bg-blue-500",
    textColor: "text-blue-500",
    borderColor: "border-blue-500",
    Icon: GrResources,
  }
];

const LearningJourney = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-500">
        Start your learning journey today!
      </h1>

      <div className="relative">
        {/* Timeline Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const IconComponent = step.Icon;
            return (
              <div key={index} className="relative flex flex-col items-center">
                {/* Number Circle */}
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white text-2xl font-bold mb-4 z-10`}>
                  {step.number}
                </div>

                {/* Card */}
                <div className={`w-full p-6 rounded-lg border-2 ${step.borderColor} bg-white h-full`}>
                  {/* Dynamic Logo Circle inside card */}
                  <div className={`w-12 h-12 rounded-full ${step.borderColor} border-2 mx-auto mb-4 flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${step.textColor}`} />
                  </div>

                  <h3 className={`text-xl font-semibold mb-3 text-center ${step.textColor}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {/* {index < steps.length - 1 && (
                  <div className={`hidden md:block absolute top-8 -right-4 w-8 h-2 ${step.color} transform translate-x-full`} />
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LearningJourney;
