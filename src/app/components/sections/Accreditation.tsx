"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const AccreditationAndRanking = () => {
  const accreditations = [
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745307229/270-2706316_ugc-logo-ugc-net_lbyyki.png",
      alt: "UGC Logo",
      texts: ["UGC", "Entitled", "Online Degree", "Program"],
      color: "#a40046",
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316167/AICTE-Logo-250x250-1_bzyaqy.png",
      alt: "AICTE Logo",
      texts: ["AICTE", "Approved", "Programs"],
      color: "#004aad",
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316490/f1f1a227-e74e-4859-905a-8228ce4a7f71.png",
      alt: "NAAC Logo",
      texts: ["A++ Grade", "Accredited by", "NAAC"],
      color: "#737373",
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316597/445f1c76-6728-4cb5-b8ee-89420af6a41b.png",
      alt: "NBA Logo",
      texts: ["Tier 1", "Accreditation", "Washington Accord"],
      color: "#0097b2",
    },
  ];

  const rankings = [
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316828/46fcf251-f75a-4a70-bbdb-5a32ac003fca.png",
      alt: "NIRF Logo",
      border: "border-pink-300",
      texts: ["15th Rank", "Among All Public & Private", "Universities in India"],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316931/4413100a-f28b-43ce-99a9-9db1a9535ede.png",
      alt: "QS Logo",
      border: "border-green-300",
      texts: ["QS 5 Stars", "India’s first QS 5 Stars Rated", "University – 2021", "257th Rank", "In QS World University Rankings: ASIA 2025"],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745317017/157bcf7d-49fe-4b4d-bce1-a66d3e97798b.png",
      alt: "ARIIA Logo",
      border: "border-purple-400",
      texts: ["1st Rank", "for second time", "Continuously"],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745317095/f3aec781-6341-492d-af72-2b90e56f7957.png",
      alt: "THE Logo",
      border: "border-cyan-400",
      texts: ["6th Rank", "in the Overall Category", "among Indian universities"],
    },
  ];

  // Accreditation slider
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: accreditations.length > 4 ? 4 : accreditations.length,
          spacing: 16,
        },
      },
    },
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    renderMode: "performance",
  });

  // Ranking slider
  const [sliderRefRanking, instanceRefRanking] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: rankings.length > 4 ? 4 : rankings.length,
          spacing: 16,
        },
      },
    },
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    renderMode: "performance",
  });

  // Auto-slide for Accreditation (only on mobile)
  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile && instanceRef.current) {
      const interval = setInterval(() => {
        instanceRef.current?.next();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [instanceRef]);

  // Auto-slide for Ranking (only on mobile)
  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile && instanceRefRanking.current) {
      const interval = setInterval(() => {
        instanceRefRanking.current?.next();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [instanceRefRanking]);

  return (
    <div className="p-4 sm:p-6 md:p-12 max-w-7xl mx-auto">
      {/* Accreditation Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-4">
        Accreditation
      </h2>
      <div className="h-1 mx-auto mt-2 mb-8 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4" />

      {/* Accreditation carousel */}
      <div ref={sliderRef} className="keen-slider">
        {accreditations.map((item, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex flex-col items-center text-center w-full"
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="mt-2 space-y-1">
              {item.texts.map((text, i) => (
                <p
                  key={i}
                  className="font-bold text-sm sm:text-base"
                  style={{ color: item.color }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Ranking Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mt-14 mb-4">
        Ranking
      </h2>
      <div className="h-1 mx-auto mb-10 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4" />

      {/* Ranking carousel */}
      <div ref={sliderRefRanking} className="keen-slider">
        {rankings.map((item, idx) => (
          <div
            key={idx}
            className={`keen-slider__slide border-4 ${item.border} rounded-2xl p-6 flex flex-col items-center`}
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={160}
              height={100}
              className="mb-4"
            />
            <div className="space-y-1 text-gray-700 text-sm sm:text-base font-medium text-center">
              {item.texts.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccreditationAndRanking;
