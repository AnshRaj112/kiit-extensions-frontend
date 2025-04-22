"use client";

import { GraduationCap, Globe, Lightbulb, Book, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CustomMissionSection = () => {
  const missionItems = [
    {
      color: "#0099a8", // teal
      icon: <GraduationCap size={28} />,
      description:
        "Cultivate a supportive learning environment that encourages continuous professional development and personal growth throughout learners' lives",
      footerText: "Empower Lifelong Learning",
    },
    {
      color: "#f8b858", // amber
      icon: <Globe size={28} />,
      description:
        "Provide flexible and frugal learning opportunities to a diverse global audience by removing barriers of location, background, and circumstances",
      footerText: "Access to High-Quality Affordable Education",
    },
    {
      color: "#00b971", // green
      icon: <Lightbulb size={28} />,
      description:
        "Develop and deliver engaging interactive online/hybrid programs leveraging cutting-edge digital technology for an enhanced learning experience",
      footerText: "Foster Innovation in Teaching-Learning",
    },
    {
      color: "#20b8e3", // cyan
      icon: <Book size={28} />,
      description:
        "Create and share impactful research-based content addressing global challenges to empower lifelong learners",
      footerText: "Dissemination of Advance Knowledge",
    },
    {
      color: "#94d13d", // lime
      icon: <Heart size={28} />,
      description:
        "Support communities to utilize knowledge and skills to address societal issues and create a more just and equitable world",
      footerText: "Promote Positive Societal Change",
    },
  ];

  // Reference for content boxes to ensure uniform height
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    // Function to calculate and set the maximum height
    const calculateMaxHeight = () => {
      const heights = contentRefs.current
        .filter(Boolean)
        .map((el) => el?.clientHeight || 0);

      if (heights.length > 0) {
        const maxHeight = Math.max(...heights);
        setContentHeight(maxHeight);
      }
    };

    // Calculate on mount and window resize
    calculateMaxHeight();
    window.addEventListener("resize", calculateMaxHeight);

    // Cleanup
    return () => window.removeEventListener("resize", calculateMaxHeight);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 overflow-hidden">
      {/* Title with underline */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#94d13d] mb-2">Mission</h2>
        <div className="h-1 bg-[#94d13d] w-full max-w-lg mx-auto"></div>
      </div>

      {/* Mission cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {missionItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            {/* Card with logo and description */}
            <div
              className="border-2 bg-white flex-grow"
              style={{ borderColor: item.color }}
            >
              <div
                className="flex flex-col items-center p-4 h-full"
                style={{ minHeight: contentHeight ? `${contentHeight}px` : "auto" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transform transition-transform hover:scale-105"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="text-white">{item.icon}</div>
                </div>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="text-sm text-center text-gray-700"
                >
                  {item.description}
                </div>
              </div>
            </div>

            {/* Colored footer */}
            <div className="p-3 text-center text-white" style={{ backgroundColor: item.color }}>
              <h3 className="font-medium text-sm whitespace-normal">{item.footerText}</h3>
            </div>

            {/* Triangle pointer */}
            <div className="flex justify-center">
              <div
                className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[20px] border-l-transparent border-r-transparent"
                style={{ borderTopColor: item.color }}
              ></div>
            </div>

            {/* Timeline node */}
            <div className="flex justify-center mt-2">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: item.color }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline connecting line */}
      <div className="hidden lg:block relative">
        <div
          className="absolute h-1 mx-auto left-[10%] right-[10%]"
          style={{
            backgroundColor: "#20b8e3",
            marginTop: "-18px",
            width: "80%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </div>
    </div>
  );
};

export default CustomMissionSection;