import React from "react";
import { Button } from "@/components/ui/button";

const CurriculumHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h1
          className="relative inline-block text-4xl font-bold text-green-500 
          after:content-[''] 
          after:absolute 
          after:left-0 
          after:bottom-[-19px] 
          after:w-full 
          sm:after:w-[118%] 
          after:h-1 
          after:bg-gradient-to-r 
          after:from-[#0097b2] 
          after:to-[#7ed952]"
        >
          Program Curriculum
        </h1>
      </div>
      <div className="mt-10 md:mt-0">
        <Button className="bg-gradient-to-r from-[#0097b2] to-[#7ed952] hover:bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full text-white py-2 px-6 text-lg font-semibold">
          <a
            href="https://drive.google.com/uc?export=download&id=1kR29Qg-dVr9CN5kO3t_W9ZJsKQYTur4L"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Curriculum
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CurriculumHeader;
