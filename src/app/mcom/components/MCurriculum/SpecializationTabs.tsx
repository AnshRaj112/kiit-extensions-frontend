import React, { useState } from "react";
import { cn } from "@/lib/utils";
import SemesterCards from "./SemesterCards";

interface Course {
  name: string;
}

interface Semester {
  title: string;
  courses: Course[];
}

interface SpecializationTabsProps {
  accountingCourses: Semester[];
  marketingCourses: Semester[];
}

const SpecializationTabs = ({
  accountingCourses,
  marketingCourses,
}: SpecializationTabsProps) => {
  const [activeTab, setActiveTab] = useState<"accounting" | "marketing">("accounting");

  return (
    <div className="w-full">
      <div className="flex w-full mb-8">
        <div className="flex flex-col md:flex-row w-full">
          <button
            onClick={() => setActiveTab("accounting")}
            className={cn(
              "flex-1 py-4 px-6 text-center font-medium text-lg md:text-xl transition-all",
              "rounded-t-md md:rounded-l-md md:rounded-tr-none",
              "h-16 md:h-20", // <-- FIX height for both mobile and desktop
              activeTab === "accounting"
                ? "bg-gradient-to-r from-[#0097b2] to-[#7ed952] text-white"
                : "bg-white border border-gray-200 hover:bg-gray-50 text-gray-700"
            )}
          >
            MCom (Accounting and Finance)
          </button>
          <button
            onClick={() => setActiveTab("marketing")}
            className={cn(
              "flex-1 py-4 px-6 text-center font-medium text-lg md:text-xl transition-all",
              "rounded-b-md md:rounded-r-md md:rounded-bl-none",
              "h-16 md:h-20", // <-- FIX height for both mobile and desktop
              activeTab === "marketing"
                ? "bg-gradient-to-l from-[#0097b2] to-[#7ed952] text-white"
                : "bg-white border border-gray-200 hover:bg-gray-50 text-gray-700"
            )}
          >
            MCom (International Business and Marketing)
          </button>
        </div>
      </div>

      <div className="mt-6" key={activeTab}>
        {activeTab === "accounting" ? (
          <SemesterCards courses={accountingCourses} specialization="accounting" />
        ) : (
          <SemesterCards courses={marketingCourses} specialization="marketing" />
        )}
      </div>
    </div>
  );
};

export default SpecializationTabs;
