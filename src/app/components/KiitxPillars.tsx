"use client";

import { useState } from "react";
import { Circle } from "lucide-react";

interface PillarProps {
  title: string;
  subtitle: string;
  description: string;
  colorClass: string;
  logoIndex: number;
  logoLink: string;
}

const LOGO_PLACEHOLDERS = [
  "/lovable-uploads/3f0af599-ceb3-405e-9bba-ce2e66aa6bd7.png", // Default logo
  "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=64&h=64", // CDOE
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=64&h=64", // KWIL
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=64&h=64", // KSDC
  "https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=64&h=64", // KALAM
];

const Pillar = ({
  title,
  subtitle,
  description,
  colorClass,
  logoIndex,
  logoLink,
}: PillarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col w-full h-full bg-white border rounded shadow-md overflow-hidden">
      {/* Logo Circle */}
      <div className="flex justify-center items-center py-5 bg-gray-200">
        <a
          href={logoLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <div
            className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center overflow-hidden transition-all duration-300"
            style={{ opacity: isHovered ? 0.9 : 1 }}
          >
            {logoIndex > 0 ? (
              <img
                src={LOGO_PLACEHOLDERS[logoIndex]}
                alt={`${title} logo`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = LOGO_PLACEHOLDERS[0];
                }}
              />
            ) : (
              <Circle className="w-10 h-10 text-gray-500" />
            )}
          </div>
          {isHovered && (
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded z-10 whitespace-nowrap">
              Visit {title}
            </div>
          )}
        </a>
      </div>

      {/* Title & Subtitle */}
      <div className={`${colorClass} py-4 px-3 text-center text-white`}>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm mt-1">{subtitle}</p>
      </div>

      {/* Description */}
      <div className="flex-grow bg-gray-100 p-4 text-center flex items-center justify-center">
        <p className="text-sm text-gray-800 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const KiiTX = () => {
  const pillars: PillarProps[] = [
    {
      title: "CDOE",
      subtitle: "Centre for Distance and Online Education",
      description:
        "Offers UGC Entitled online learning programs equivalent to regular degrees.",
      colorClass: "bg-pink-400",
      logoIndex: 1,
      logoLink: "https://example.com/cdoe",
    },
    {
      title: "KWIL",
      subtitle: "Kareer and Work-Integrated Learning",
      description:
        "Offers AICTE approved Engineering and Management programs for Working Professionals.",
      colorClass: "bg-cyan-400",
      logoIndex: 2,
      logoLink: "https://example.com/kwil",
    },
    {
      title: "KSDC",
      subtitle: "Kaizen Skill Development Center",
      description:
        "Offers short-term credit-linked certificate programs in various modes.",
      colorClass: "bg-purple-400",
      logoIndex: 3,
      logoLink: "https://example.com/ksdc",
    },
    {
      title: "KALAM",
      subtitle: "Kinetic Active Learning for Aspiring Minds",
      description:
        "Offers MOOCs linked to academic credit for UG/PG/PhD students.",
      colorClass: "bg-green-400",
      logoIndex: 4,
      logoLink: "https://example.com/kalam",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-500">KiiTX</h1>
        <div className="h-1 mx-auto mt-2 bg-gradient-to-r from-cyan-500 to-green-400 rounded-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" />
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-sm sm:text-base text-center">
          <span className="whitespace-wrap">
            <strong>KiiT eXtension School (KiiTX)</strong> extends individual’s
            learning horizons by providing opportunities to pursue flexible,
            accessible & affordable higher education in online or hybrid mode
            culminating in
          </span>
          <span>the form of certificates and degrees.</span>
        </p>
      </div>

      {/* Building Layout */}
      <div className="flex flex-col items-center gap-4">
        {/* Roof */}
        <div className="relative w-full max-w-5xl">
          <div className="w-full h-0 pb-[18%] bg-gray-300 clip-roof"></div>
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-500 aspect-square w-[12%] max-w-20 min-w-10"></div>
        </div>

        {/* Pillars */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => (
            <Pillar key={index} {...pillar} />
          ))}
        </div>

        {/* Foundation */}
        <div className="w-full max-w-5xl mt-4">
          <div className="h-8 bg-gray-300 rounded-lg mb-2" />
          <div className="h-6 w-[110%] -mx-[5%] bg-gray-300 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default KiiTX;
