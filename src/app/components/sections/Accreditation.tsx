"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface AccreditationItem {
  img: string;
  alt: string;
  texts: string[];
  color: string; // Only in AccreditationItem
}

interface RankingItem {
  img: string;
  alt: string;
  border: string; // Only in RankingItem
  texts: string[];
}

const AccreditationAndRanking = () => {
  const accreditations: AccreditationItem[] = [
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

  const rankings: RankingItem[] = [
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316828/46fcf251-f75a-4a70-bbdb-5a32ac003fca.png",
      alt: "NIRF Logo",
      border: "border-pink-300",
      texts: [
        "15th Rank",
        "Among All Public & Private",
        "Universities in India",
      ],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316931/4413100a-f28b-43ce-99a9-9db1a9535ede.png",
      alt: "QS Logo",
      border: "border-green-300",
      texts: [
        "QS 5 Stars",
        "India’s first QS 5 Stars Rated",
        "University – 2021",
        "257th Rank",
        "In QS World University Rankings: ASIA 2025",
      ],
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
      texts: [
        "6th Rank",
        "in the Overall Category",
        "among Indian universities",
      ],
    },
  ];

  const accreditationRef = useRef<HTMLDivElement | null>(null);
  const rankingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = (
      ref: React.RefObject<HTMLDivElement | null>,
      speed: number
    ) => {
      if (!ref.current) return;
      let animationFrameId: number;
      const scroll = () => {
        if (ref.current) {
          ref.current.scrollLeft += speed;
          if (ref.current.scrollLeft >= ref.current.scrollWidth / 2) {
            ref.current.scrollLeft = 0;
          }
        }
        animationFrameId = requestAnimationFrame(scroll);
      };
      scroll();
      return () => cancelAnimationFrame(animationFrameId);
    };

    const cleanup1 = scrollContainer(accreditationRef, 0.5);
    const cleanup2 = scrollContainer(rankingRef, 0.7);

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  const duplicateItems = (items: AccreditationItem[] | RankingItem[]) => [
    ...items,
    ...items,
  ]; // duplicate for seamless loop

  return (
    <div className="px-4 sm:px-8 md:px-16 py-16 max-w-[1600px] mx-auto">
      {/* Accreditation Section */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-8">
        Accreditation
      </h2>
      <div className="h-0.5 mx-auto mb-12 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-1/2 md:w-1/3" />

      <div
        ref={accreditationRef}
        className="flex overflow-hidden whitespace-nowrap gap-10 h-[400px]"
      >
        {duplicateItems(accreditations).map((item, idx) => (
          <div
            key={idx}
            className="flex-none w-80 h-80 bg-white p-6 rounded-2xl shadow-xl text-center flex flex-row justify-center items-center gap-4"
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={140}
              height={140}
              className="mx-auto object-contain"
            />
            <div className="mt-6 space-y-2">
              {item.texts.map((text, i) => (
                <p
                  key={i}
                  className="font-bold text-lg"
                  style={{ color: (item as AccreditationItem).color }} // Type narrow for AccreditationItem
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Ranking Section */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-700 mt-28 mb-8">
        Ranking
      </h2>
<div className="h-0.5 mx-auto mb-12 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-1/2 md:w-1/3" />

      <div
        ref={rankingRef}
        className="flex overflow-hidden whitespace-nowrap gap-10 h-[450px]"
      >
        {duplicateItems(rankings).map((item, idx) => (
          <div
            key={idx}
            className={`flex-none w-96 h-96 bg-white border-4 ${
              (item as RankingItem).border
            } rounded-2xl shadow-xl p-8 text-center flex flex-col justify-center items-center`} // Type narrow for RankingItem
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={180}
              height={120}
              className="mx-auto mb-6 object-contain"
            />
            <div className="space-y-2 text-gray-700 text-lg font-semibold">
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
