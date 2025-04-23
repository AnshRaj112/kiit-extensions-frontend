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
      <div className="flex flex-col md:flex-row w-full mb-8">
        <button
          onClick={() => setActiveTab("accounting")}
          className={cn(
            "py-4 px-6 text-center font-medium text-lg md:text-xl transition-all flex-1 rounded-t-md md:rounded-l-md md:rounded-tr-none",
            activeTab === "accounting"
              ? "bg-teal-500 text-white"
              : "bg-white border border-gray-200 hover:bg-gray-50 text-gray-700"
          )}
        >
          MCom (Accounting and Finance)
        </button>
        <button
          onClick={() => setActiveTab("marketing")}
          className={cn(
            "py-4 px-6 text-center font-medium text-lg md:text-xl transition-all flex-1 rounded-b-md md:rounded-r-md md:rounded-bl-none",
            activeTab === "marketing"
              ? "bg-green-500 text-white"
              : "bg-white border border-gray-200 hover:bg-gray-50 text-gray-700"
          )}
        >
          MCom (International Business and Marketing)
        </button>
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
