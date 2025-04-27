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
  "/lovable-uploads/3f0af599-ceb3-405e-9bba-ce2e66aa6bd7.png",
  "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=64&h=64",
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
    <div className="flex flex-col w-[200px] h-[350px] md:h-[380px] bg-white border rounded shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Logo Circle */}
      <div className="flex justify-center items-center py-3 bg-gray-200">
        <a
          href={logoLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-400 flex items-center justify-center overflow-hidden transition-all duration-300"
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
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded z-10 whitespace-nowrap">
              Visit {title}
            </div>
          )}
        </a>
      </div>

      {/* Title & Subtitle */}
      <div className={`${colorClass} py-3 px-3 text-center text-white`}>
        <h2 className="text-base md:text-lg font-bold">{title}</h2>
        <p className="text-sm md:text-base mt-1">{subtitle}</p>
      </div>

      {/* Description */}
      <div className="flex-grow bg-gray-100 p-3 text-center flex items-center justify-center">
        <p className="text-sm md:text-base text-gray-800 leading-relaxed">
          {description}
        </p>
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
    <div className="min-h-screen bg-white p-5 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-4xl font-bold text-green-700">KiiTX</h1>
        <div className="h-0.5 mx-auto my-2 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-1/2 md:w-1/3" />
        <p className="mt-8 text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
          <strong>KiiT eXtension School (KiiTX)</strong> extends
          individuals&apos; learning horizons by providing opportunities to
          pursue flexible, accessible & affordable higher education in online or
          hybrid mode culminating in the form of certificates and degrees.
        </p>
      </div>

      {/* Roof */}
      <div className="flex justify-center w-full relative mt-16">
        <img
          src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745748715/71be29d9-0392-4415-be74-e9c6fe7a57c3.png"
          alt="Roof"
          className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] object-contain h-auto"
          style={{ maxHeight: "300px" }}
        />
      </div>

      {/* Pillars */}
      <div className="flex max-w-5xl justify-center w-full mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 max-w-4xl px-2">
          {" "}
          {/* Increased gap to gap-16 */}
          {pillars.map((pillar, index) => (
            <Pillar key={index} {...pillar} />
          ))}
        </div>
      </div>

      {/* Foundation */}
      <div className="w-full max-w-6xl mt-4 flex flex-col items-center">
        <div className="h-6 w-full sm:w-10/12 md:w-8/12 lg:w-full bg-gray-300 rounded-lg mb-2" />
        <div className="h-6 w-full sm:w-10/12 md:w-8/12 lg:w-[110%] bg-gray-300 rounded-lg" />
      </div>
    </div>
  );
};

export default KiiTX;
