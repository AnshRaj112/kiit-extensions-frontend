"use client" 
import React from "react";
import Image from "next/image"; // If you're using Next.js. Otherwise, use <img />

const Ranking = () => {
  return (
    <div className="px-8 py-12 bg-white">
      <h2 className="text-center text-3xl font-bold text-green-700 mb-12">
        Ranking
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* NIRF Ranking */}
        <div className="space-y-4">
          <Image src="/nirf.png" alt="NIRF Logo" width={80} height={80} className="w-20 h-auto" />
          <p className="text-sm text-gray-800">
            <span className="font-semibold">15th</span> in India Rankings by NIRF – 2024
            <br />
            Ministry of Education, Government of India.
          </p>
        </div>

        {/* Times Higher Education */}
        <div className="space-y-4">
          <Image src="/the-logo.png" alt="THE Logo" width={112} height={112} className="w-28 h-auto" />
          <p className="text-sm text-gray-800">
            <span className="font-semibold">601-800</span> in Times Higher Education
            World University Rankings 2024
            <br />
            <span className="font-semibold">168</span> (<span className="font-semibold">10th best among Indian Universities</span>)
            <br />
            In Times Higher Education Young University Ranking 2024
            <br />
            <span className="font-semibold">147</span> in Times Higher Education Asia University Rankings 2023
            <br />
            <span className="font-semibold">6th Rank</span> in the Overall Category among Indian universities
          </p>
        </div>

        {/* QS World Ranking */}
        <div className="space-y-4">
          <Image src="/qs-logo.png" alt="QS Logo" width={112} height={112} className="w-28 h-auto" />
          <p className="text-sm text-gray-800">
            <span className="font-semibold">QS 5 Stars</span><br />
            India&apos;s first QS 5 Stars Rated University – 2021
            <br />
            <span className="font-semibold">351-400</span> In QS World University Rankings: ASIA 2024
            <br />
            <span className="font-semibold">90th Rank</span> in QS Asian University Rankings, Southern Asia 2024
            <br />
            <span className="font-semibold">81th Rank</span> in QS World University Rankings: Environmental Sustainability 2024
          </p>
        </div>

        {/* Empty cards for spacing or future content */}
        <div className="border border-green-200 h-64"></div>
        <div className="border border-green-200 h-64"></div>
      </div>
    </div>
  );
};

export default Ranking;
