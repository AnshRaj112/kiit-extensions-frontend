import React from "react";
import {
  BookOpen,
  Briefcase,
  Calendar,
  GraduationCap,
  CircleDollarSign,
  Clock,
} from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem = ({ icon, value, label }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center mb-6 md:mb-0">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 mb-2">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-green-500 font-bold text-lg md:text-xl">{value}</p>
        <p className="text-sm md:text-base">{label}</p>
      </div>
    </div>
  );
};

const ProgramStats = () => {
  const stats = [
    {
      icon: <CircleDollarSign size={28} />,
      value: "80 credits",
      label: "Total Credits",
    },
    {
      icon: <BookOpen size={28} />,
      value: "23 Courses",
      label: "Total Courses",
    },
    {
      icon: <Briefcase size={28} />,
      value: "1 Internship",
      label: "Industry Experience",
    },
    {
      icon: <GraduationCap size={28} />,
      value: "1 Capstone Project",
      label: "Final Project",
    },
    {
      icon: <Clock size={28} />,
      value: "24 months",
      label: "Program Duration",
    },
    {
      icon: <Calendar size={28} />,
      value: "4 semesters",
      label: "Academic Terms",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 justify-items-center mb-12 w-full max-w-7xl mx-auto">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
};

export default ProgramStats;
