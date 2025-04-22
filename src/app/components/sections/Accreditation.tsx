"use client";

import React from "react";
import Image from "next/image";

const AccreditationAndRanking = () => {
  return (
    <div className="p-4 sm:p-6 md:p-12 max-w-7xl mx-auto">
      {/* Accreditation Section */}
      <h2 className="text-3xl font-semibold text-center text-green-600 mb-2">
        Accreditation
      </h2>
      <div className="h-1 w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 bg-green-400 mx-auto mb-6 rounded-full" />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center border-b pb-10 border-green-400">
        {/* UGC */}
        <div className="text-center">
          <Image
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745307229/270-2706316_ugc-logo-ugc-net_lbyyki.png"
            alt="UGC Logo"
            width={160}
            height={160}
            className="mb-2 mx-auto"
          />
          <p className="font-bold text-[#a40046]">UGC</p>
          <p>Entitled</p>
          <p>Online Degree Program</p>
        </div>
        {/* AICTE */}
        <div className="text-center">
          <Image
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316167/AICTE-Logo-250x250-1_bzyaqy.png"
            alt="AICTE Logo"
            width={160}
            height={160}
            className="mb-2 mx-auto"
          />
          <p className="font-bold text-[#004aad]">AICTE</p>
          <p>Approved</p>
          <p>Programs</p>
        </div>
        {/* NAAC */}
        <div className="text-center">
          <Image
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316490/f1f1a227-e74e-4859-905a-8228ce4a7f71.png"
            alt="NAAC Logo"
            width={180}
            height={180}
            className="mb-2 mx-auto"
          />
          <p className="font-bold text-red-600">A++ Grade</p>
          <p>Accredited by</p>
          <p className="font-bold">NAAC</p>
        </div>
        {/* NBA */}
        <div className="text-center">
          <Image
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316597/445f1c76-6728-4cb5-b8ee-89420af6a41b.png"
            alt="NBA Logo"
            width={180}
            height={180}
            className="mb-2 mx-auto"
          />
          <p className="font-bold text-cyan-700">Tier 1</p>
          <p>Accreditation</p>
          <p>Washington Accord</p>
        </div>
      </div>

      {/* Ranking Section */}
      <h2 className="text-3xl font-semibold text-center text-green-600 mt-10 mb-2">
        Ranking
      </h2>
      <div className="h-1 w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 bg-green-400 mx-auto mb-6 rounded-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {/* NIRF */}
        <div className="border-4 border-pink-300 rounded-2xl p-4">
          <Image
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316828/46fcf251-f75a-4a70-bbdb-5a32ac003fca.png"
            alt="NIRF Logo"
            width={180}
            height={100}
            className="mb-2 mx-auto"
          />
          <p className="text-2xl font-bold text-gray-800">
            15<sup>th</sup> Rank
          </p>
          <p>Among All Public & Private</p>
          <p>Universities in India</p>
        </div>
        {/* QS */}
        <div className="border-4 border-green-300 rounded-2xl p-4">
          <Image
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316931/4413100a-f28b-43ce-99a9-9db1a9535ede.png"
            alt="QS Logo"
            width={180}
            height={100}
            className="mb-2 mx-auto"
          />
          <p className="text-xl font-bold text-yellow-600">QS 5 Stars</p>
          <p>India’s first QS 5 Stars Rated</p>
          <p>University – 2021</p>
          <p className="font-semibold mt-2 text-sm">
            257<sup>th</sup> Rank
          </p>
          <p>In QS World University</p>
          <p>Rankings: ASIA 2025</p>
        </div>
        {/* ARIIA */}
        <div className="border-4 border-purple-400 rounded-2xl p-4">
          <Image
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745317017/157bcf7d-49fe-4b4d-bce1-a66d3e97798b.png"
            alt="ARIIA Logo"
            width={180}
            height={100}
            className="mb-2 mx-auto"
          />
          <p className="text-2xl font-bold text-gray-800">1<sup>st</sup> Rank</p>
          <p>for second time</p>
          <p>Continuously</p>
        </div>
        {/* THE */}
        <div className="border-4 border-cyan-400 rounded-2xl p-4">
          <Image
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745317095/f3aec781-6341-492d-af72-2b90e56f7957.png"
            alt="THE Logo"
            width={180}
            height={100}
            className="mb-2 mx-auto"
          />
          <p className="text-2xl font-bold text-gray-800">6<sup>th</sup> Rank</p>
          <p>in the Overall Category</p>
          <p>among Indian universities</p>
        </div>
      </div>
    </div>
  );
};

export default AccreditationAndRanking;
