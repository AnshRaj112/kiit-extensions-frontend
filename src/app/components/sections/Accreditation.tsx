"use client";

import React from "react";
import Image from "next/image";

interface AccreditationItem {
  img: string;
  alt: string;
  texts: string[];
  color: string;
}

interface RankingItem {
  img: string;
  alt: string;
  border: string;
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
      texts: ["15th Rank", "Among All Public & Private", "Universities in India"],
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
        "In QS World University", "Rankings: ASIA 2025",
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

  return (
    <div className="px-4 sm:px-8 md:px-16 py-16 max-w-[1600px] mx-auto overflow-hidden">
      {/* Accreditation Section */}
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        Accreditation
      </h2>
      <div className="h-0.5 mx-auto mb-12 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-1/2 md:w-1/3" />

      <div className="relative w-full overflow-hidden">
        <div className="flex min-w-max animate-infinite-scroll">
          {[...accreditations, ...accreditations].map((item, idx) => (
            <div
              key={idx}
              className="flex-none w-48 h-48 bg-white m-4 p-4 rounded-2xl shadow-xl text-center flex flex-col justify-center items-center gap-2"
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={70}
                height={70}
                className="mx-auto object-contain"
              />
              <div className="mt-2 space-y-1">
                {item.texts.map((text, i) => (
                  <p
                    key={i}
                    className="font-bold text-sm"
                    style={{ color: item.color }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ranking Section */}
      <h2 className="text-4xl font-bold text-center text-green-700 mt-28 mb-8">
        Ranking
      </h2>
      <div className="h-0.5 mx-auto mb-12 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-1/2 md:w-1/3" />

      <div className="relative w-full overflow-hidden">
        <div className="flex min-w-max animate-infinite-scroll">
          {[...rankings, ...rankings].map((item, idx) => (
            <div
              key={idx}
              className={`flex-none w-56 h-56 bg-white border-4 ${item.border} m-4 rounded-2xl shadow-xl p-4 text-center flex flex-col justify-center items-center`}
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={90}
                height={60}
                className="mx-auto mb-2 object-contain"
              />
              <div className="space-y-1 text-gray-700 text-sm font-semibold">
                {item.texts.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccreditationAndRanking;
