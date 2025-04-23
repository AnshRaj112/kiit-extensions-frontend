import React from "react";
import { Button } from "@/components/ui/button";

const CurriculumHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold text-green-500">
          Program Curriculum
        </h1>
        <div className="h-1 bg-green-500 w-full md:w-[80%] mt-2"></div>
      </div>
      <Button className="mt-4 md:mt-0 bg-teal-500 hover:bg-teal-600 rounded-full text-white py-2 px-6 text-lg font-semibold">
        <a
          href="https://drive.google.com/uc?export=download&id=1kR29Qg-dVr9CN5kO3t_W9ZJsKQYTur4L"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Curriculum
        </a>
      </Button>
    </div>
  );
};

export default CurriculumHeader;
