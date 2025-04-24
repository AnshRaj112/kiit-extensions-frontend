import React from "react";

const OnlineDegreeProgram: React.FC = () => {
  return (
<div className="max-w-[1320px] mx-auto px-4 py-8">
      <div className="rounded-2xl overflow-hidden">
        {/* Main gradient header */}
        <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed952] py-8 px-6 text-white">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-3">Same Degree, Different Delivery</h1>
          <p className="text-center text-lg md:text-xl">
            This online degree is recognized by all relevant regulatory bodies and is considered on par with our regular campus-based degree.
          </p>
        </div>
        
        {/* White card with content */}
        <div className="bg-white p-6 md:p-10 border-2 border-[#0097b2]/20 rounded-b-2xl">
          {/* Program Overview Section */}
          <div className="mb-8">
            <h2 className="text-[#00a86b] text-2xl md:text-3xl font-semibold mb-2">Program Overview</h2>
            <div className="w-full h-[2px] bg-[#00a86b] mb-6"></div>
            
            <p className="mb-4 text-gray-800">
              An online M.Com (Master of Commerce) is a postgraduate degree program in commerce delivered entirely online. The program equips students with 
              advanced knowledge and skills in accounting, finance, business management, economics, and other key areas of commerce.
            </p>
            
            <p className="text-gray-800">
              An online M.Com is ideal for working professionals aiming to upskill, recent graduates seeking careers in commerce, and entrepreneurs looking to 
              leverage business principles in their ventures.
            </p>
          </div>
          
          {/* Objective Section */}
          <div>
            <h2 className="text-[#00a86b] text-2xl md:text-3xl font-semibold mb-2">Objective</h2>
            <div className="w-full h-[2px] bg-[#00a86b] mb-6"></div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>To equip students with comprehensive and pragmatic knowledge in the field of Commerce.</li>
              <li>To develop expertise in corporate accounting methods and the skills necessary for preparing and analyzing accounting statements.</li>
              <li>To instill a strong understanding of Accounting, Banking, and Business principles essential for students aspiring to excel in the domain of Commerce.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineDegreeProgram;