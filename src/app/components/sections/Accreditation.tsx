"use client";

import React from "react";
import Image from "next/image";

interface AccreditationItem {
  img: string;
  alt: string;
  texts: string[];
  color: string;
  border?: string; 
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
      texts: ["UGC Entitled", "Online Degree", "Program"],
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
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745736616/cc5d6f9f-8e2e-4273-835d-184e420b7e4c.png",
      alt: "ABET",
      texts: ["ABET (US)", "Accrediated"],
      color: "Grey",
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745736727/c9adcb4e-69a8-4b87-be05-8d0578c02c67.png",
      alt: "IET",
      texts: [
        "The Institution of",
        "Engineering and",
        "Technology",
        "Accrediated",
      ],
      color: "#964f9f",
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
      texts: ["257th Rank", "In QS World University", "Rankings: ASIA 2025"],
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
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745734267/72b36b5e-64e9-434e-9931-05b1047bb2a2.png",
      alt: "QS 5 Star",
      border: "border-purple-400",
      texts: [
        "QS 5 Stars",
        "India’s first QS",
        "5 Stars Rated",
        "University – 2021",
      ],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745317095/f3aec781-6341-492d-af72-2b90e56f7957.png",
      alt: "The world ranking 2024",
      border: "border-green-400",
      texts: ["2024", "Ranked in", "601th-800th"],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745735107/64beb2a9-b652-4821-a31c-327a151f0a13.png",
      alt: "The World Ranking Young",
      border: "border-gray-400",
      texts: ["168th rank", "in world", ""],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745735107/64beb2a9-b652-4821-a31c-327a151f0a13.png",
      alt: "The World Ranking Young",
      border: "border-pink-400",
      texts: ["10th rank", "in India", ""],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745735697/258d01cb-8f39-42ed-b1ec-02acb16c1424.png",
      alt: "The World Ranking Asia 2025",
      border: "border-pink-400",
      texts: ["184th rank", "The Asia University", "Ranking - 2025"],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745735697/258d01cb-8f39-42ed-b1ec-02acb16c1424.png",
      alt: "The World Ranking Asia 2025",
      border: "border-blue-400",
      texts: ["8th best in", "India Among Gov.", "and Pvt. Institutions"],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745736454/592050c2-b468-4a5a-8014-72dda03ca239.png",
      alt: "The World Ranking Asia 2025",
      border: "border-red-400",
      texts: ["Ranking in", "201-300", ""],
    },
  ];

  // Function to make "st" and "th" bold
  const makeRankingsBold = (text: string) => {
    return text.replace(/(\d+(st|nd|rd|th))/g, (match) => {
      return `<span class="font-bold">${match}</span>`;
    });
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 py-16 max-w-[1600px] mx-auto overflow-hidden">
      {/* Accreditation Section */}
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        Accreditation
      </h2>
      <div className="h-0.5 mx-auto mb-12 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-1/2 md:w-1/3" />

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll">
          {[...accreditations, ...accreditations].map((item, idx) => (
            <div
              key={idx}
              className={`flex-none w-[250px] h-[250px] bg-white border-4 ${item.border} m-4 rounded-2xl shadow-xl p-4 text-center flex flex-col justify-center items-center`}
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={100}
                height={70}
                className="mx-auto mb-2 object-contain"
              />
              <div className="space-y-1 text-gray-700 text-sm font-semibold">
                {item.texts.map((text, i) => (
                  <p
                    key={i}
                    style={{
                      fontWeight: text === "Tier 1" ? "bold" : "normal", // Bold "Tier 1"
                      fontSize: text === "Tier 1" ? "1.25rem" : "1rem", // Increase font size for "Tier 1"
                      color:
                        text === "Accrediated" && item.alt === "IET" // Change color to gray for "Accrediated" of IET
                          ? "gray"
                          : item.color, // Retain normal color for other texts
                    }}
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
      <h2 className="text-4xl font-bold text-center text-green-700 mt-10 mb-8">
        Ranking
      </h2>
      <div className="h-0.5 mx-auto mb-12 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-1/2 md:w-1/3" />

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll-slow">
          {[...rankings, ...rankings].map((item, idx) => (
            <div
              key={idx}
              className={`flex-none w-[250px] h-[250px] bg-white border-4 ${item.border} m-4 rounded-2xl shadow-xl p-4 text-center flex flex-col justify-center items-center`}
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={100}
                height={70}
                className="mx-auto mb-2 object-contain"
              />
              <div
                className="space-y-1 text-gray-700 text-sm font-semibold"
                dangerouslySetInnerHTML={{
                  __html: item.texts
                    .map((text) => makeRankingsBold(text))
                    .join(" "),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccreditationAndRanking;
