import React from "react";

function Sec5() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="w-full">
        <p className="text-4xl py-[2%] font-bold text-green-600 text-center">
          Top Ranked Programs
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full m-1">
        <div className="border-2 border-black h-[10%] p-[5%]">
          <div className="border-2 border-black p-[5%] bg-green-600 text-white">
            <p>Management</p>
          </div>
        </div>
        <div className="border-2 border-black h-[10%] p-[5%]">
          <div>
            <p>InfoTech</p>
          </div>
        </div>
        <div className="border-2 border-black h-[10%] p-[5%]">
          <div>
            <p>FinTech</p>
          </div>
        </div>
        <div className="border-2 border-black h-[10%] p-[5%]">
          <div>
            <p>Banking & Commerce</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec5;
