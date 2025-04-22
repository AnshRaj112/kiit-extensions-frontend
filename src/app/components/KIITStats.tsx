"use client";

import Image from "next/image";
import {
  GraduationCap,
  User,
  Users,
  Globe,
  Landmark,
  Map,
} from "lucide-react";

const stats = [
  {
    icon: <GraduationCap size={20} />,
    color: "bg-cyan-400",
    value: "200+",
    label: "Academic Programmes",
  },
  {
    icon: <User size={20} />,
    color: "bg-green-400",
    value: "3000+",
    label: "Faculties",
  },
  {
    icon: <Users size={20} />,
    color: "bg-violet-400",
    value: "40,000+",
    label: "Students",
  },
  {
    icon: <Globe size={20} />,
    color: "bg-pink-400",
    value: "65",
    label: "Countries’ Students",
  },
  {
    icon: <Landmark size={20} />,
    color: "bg-orange-300",
    value: "1 Lac+",
    label: "Alumni Network",
  },
  {
    icon: <Map size={20} />,
    color: "bg-yellow-400",
    value: "6117 acres",
    label: "",
  },
];

export default function KIITStats() {
  return (
    <div className="w-full flex flex-col items-center mb-10 px-4">
      <h2 className="text-3xl font-bold text-green-600 mt-4 mb-2">The KiiT</h2>
      <div className="w-24 border-t-2 border-green-400 mb-6" />

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 relative aspect-video md:aspect-auto md:h-[500px]">
          <Image
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745350483/b902a7bc-915d-46c1-9de6-45a5c65da9fe.png"
            alt="KIIT"
            fill
            className="object-cover rounded-lg md:rounded-l-lg"
          />
        </div>

        {/* Right: Stats */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-4 py-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center px-5 py-4 ${stat.color} text-white text-lg font-semibold rounded-lg`}
            >
              <div className="w-10 h-10 border-2 border-white rounded-full mr-4 flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <div className="text-xl font-bold">{stat.value}</div>
                {stat.label && <div className="text-sm">{stat.label}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
    