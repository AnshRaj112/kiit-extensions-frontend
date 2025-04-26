import React from "react";

interface Course {
  name: string;
}

interface SemesterData {
  title: string;
  courses: Course[];
}

interface SemesterCardsProps {
  courses: SemesterData[];
  specialization: "accounting" | "marketing";
}

const SemesterCards = ({ courses, specialization }: SemesterCardsProps) => {
  const getBorderColor = (specialization: string, index: number) => {
    if (specialization === "accounting") {
      return index % 2 === 0 ? "border-l-teal-500" : "border-l-green-500";
    } else {
      return index % 2 === 0 ? "border-l-green-500" : "border-l-teal-500";
    }
  };

  const getHeaderColor = (specialization: string, index: number) => {
    if (specialization === "accounting") {
      return index % 2 === 0 ? "bg-teal-500" : "bg-green-500";
    } else {
      return index % 2 === 0 ? "bg-green-500" : "bg-teal-500";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {courses.map((semester, index) => (
        <div
          key={index}
          className={`bg-white shadow-md rounded-md overflow-hidden border-l-4 ${getBorderColor(
            specialization,
            index
          )}`}
        >
          <div
            className={`${getHeaderColor(
              specialization,
              index
            )} text-white py-4 px-4 text-center`}
          >
            <h3 className="text-xl font-bold">{semester.title}</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-left">
              {semester.courses.map((course, courseIndex) => (
                <li key={courseIndex} className="flex items-start">
                  <span className="text-green-500 font-bold mr-2 flex-shrink-0">•</span>
                  <span className="text-sm md:text-base">{course.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SemesterCards;
