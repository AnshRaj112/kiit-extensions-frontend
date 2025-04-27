import React from "react";
import CurriculumHeader from "./MCurriculum/CurriculumHeader";
import ProgramStats from "./MCurriculum/ProgramStats";
import SpecializationTabs from "./MCurriculum/SpecializationTabs";
import {
  accountingFinanceCourses,
  internationalMarketingCourses,
} from "@/data/curriculum-data";

const Curriculum = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <CurriculumHeader />
        <ProgramStats />
        <SpecializationTabs
          accountingCourses={accountingFinanceCourses}
          marketingCourses={internationalMarketingCourses}
        />
      </div>
    </div>
  );
};

export default Curriculum;
