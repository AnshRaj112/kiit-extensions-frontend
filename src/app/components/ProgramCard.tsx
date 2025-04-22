// components/ProgramCard.tsx
import React from "react";

type ProgramProps = {
  image: string;
  title: string;
  duration: string;
  fees: string;
};

const ProgramCard: React.FC<ProgramProps> = ({ image, title, duration, fees }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-xs hover:shadow-lg transition duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">Duration: {duration}</p>
        <p className="text-sm text-gray-800 font-medium mt-1">Program Fee: {fees}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
