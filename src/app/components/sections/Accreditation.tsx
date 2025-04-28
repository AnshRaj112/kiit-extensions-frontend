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
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745820210/15573ee7-7bc0-4576-af9f-174ddcf993f6.png",
      alt: "NIRF Logo",
      border: "border-pink-300",
      texts: [
        "15th Rank",
        "Among All Public & Private",
        "Universities in India",
      ],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745820260/6a0e4c26-ac8c-48fb-9bd7-f0217dc9a9a5.png",
      alt: "QS Logo",
      border: "border-green-300",
      texts: ["257th Rank", "In QS World University", "Rankings: ASIA 2025"],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745820319/60f2f4c2-6948-4b5a-87e2-24ac51510152.png",
      alt: "ARIIA Logo",
      border: "border-purple-400",
      texts: ["1st Rank", "for second time", "Continuously"],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745820357/8d2a9246-ae2b-4ae3-b048-2767efde7cd3.png",
      alt: "THE Logo",
      border: "border-cyan-400",
      texts: [
        "6th Rank",
        "in the Overall Category",
        "among Indian universities",
      ],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745820420/c918835d-3db2-417a-ada2-1a9417eb495c.png",
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
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745820463/a913f108-7730-420d-90d1-5d610cd0bcaa.png",
      alt: "The world ranking 2024",
      border: "border-green-400",
      texts: ["2024", "Ranked in", "601th-800th"],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745820487/6a3ef1a6-a873-4256-bf00-f7ac92385402.png",
      alt: "The World Ranking Young",
      border: "border-gray-400",
      texts: ["168th rank", "in world", ""],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745820582/cda2f08b-c66f-4d67-b4d5-009a06abc452.png",
      alt: "The World Ranking Young",
      border: "border-pink-400",
      texts: ["10th rank", "in India", ""],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745820599/6dca3ba4-6329-471b-a9ae-f18485ce1a0f.png",
      alt: "The World Ranking Asia 2025",
      border: "border-pink-400",
      texts: ["184th rank", "The Asia University", "Ranking - 2025"],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745820624/0dd067e9-8737-4a0d-afae-8b2b5a1c900b.png",
      alt: "The World Ranking Asia 2025",
      border: "border-blue-400",
      texts: ["8th best in", "India Among Gov.", "and Pvt. Institutions"],
    },
    {
      img: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745818391/c3ac0a4b-c2f3-42a8-8457-f47973213376.png",
      alt: "The World Ranking Asia 2025",
      border: "border-red-400",
      texts: ["Ranking in", "201-300", ""],
    },
  ];

  // Function to make "st" and "th" bold
  // const makeRankingsBold = (text: string) => {
  //   return text.replace(/(\d+(st|nd|rd|th))/g, (match) => {
  //     return `<span class="font-bold">${match}</span>`;
  //   });
  // };

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
      <h2 className="text-4xl font-bold text-center text-green-700 mt-20 mb-8">
        Rankings
      </h2>
      <div className="h-0.5 mx-auto mb-12 bg-gradient-to-r from-[#7ed952] to-[#0097b2] rounded-full w-1/2 md:w-1/3" />

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll">
          {[...rankings, ...rankings].map((item, idx) => (
            <div
              key={idx}
              className={`flex-none w-[250px] h-[250px] bg-white border-4 ${item.border} m-4 rounded-2xl shadow-xl overflow-hidden relative`}
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccreditationAndRanking;
