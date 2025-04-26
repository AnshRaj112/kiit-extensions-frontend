import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  gradientFrom,
  gradientTo,
  icon,
  className,
}) => {
  return (
    <div className={cn("rounded-3xl bg-white shadow-md p-6 flex flex-col items-center border border-gray-200", className)}>
      <div 
        className="h-8 w-full rounded-full mb-4"
        style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }}
      />
      
      <h3 className="text-lg md:text-xl font-medium text-center mb-2">{title}</h3>
      
      <p className="text-sm md:text-base text-gray-600 text-center mb-6 flex-grow">
        {description}
      </p>
      
      <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};

export default FeatureCard;