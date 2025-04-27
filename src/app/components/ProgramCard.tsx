// components/ProgramCard.tsx
import React from "react";
import Link from "next/link";

type ProgramProps = {
  image: string;
  title: string;
  duration: string;
  fees: string;
  link: string;  // Ensure this is used correctly
};

const ProgramCard: React.FC<ProgramProps> = ({
  image,
  title,
  duration,
  fees,
  link,
}) => {
  return (
    <Link href={link}>
      <div
        className="bg-white shadow-md rounded-4xl overflow-hidden w-full max-w-xs hover:shadow-lg transition duration-300 border"
        style={{ borderColor: "#37c55e" }}
      >
        <img src={image} alt={title} className="w-full h-70 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">Duration: {duration}</p>
          <p className="text-sm text-gray-800 font-medium mt-1">
            Program Fee: {fees}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProgramCard;
