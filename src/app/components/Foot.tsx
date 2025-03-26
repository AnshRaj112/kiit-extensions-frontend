import React from "react";

const Foot: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row text-xl w-full space-x-8 bg-[#548235]">
      {/* Academic Programs */}
      <div className="flex flex-col w-fit p-4">
        <h3 className="font-semibold mb-2">Academic Programs</h3>
        <ul className="space-y-1">
          {[
            "BBA",
            "BCA",
            "BCom",
            "MBA",
            "MCA",
            "MSc. (Maths & Data Sci.)",
            "MA (JMC)",
            "MCom",
            "M. Lib. & Info. Sci.",
            "MA (Psychology)",
            "MA (English)",
            "MA (Sociology)",
          ].map((program, index) => (
            <li key={index}>{program}</li>
          ))}
        </ul>
      </div>

      {/* Executive & WILP Programs */}
      <div className="flex flex-col p-4">
        <h3 className="font-semibold mb-2">Executive & WILP Programs</h3>
        <ul className="space-y-1">
          {[
            "WILP B. Tech. (Corporate Collaboration)",
            "Executive M. Tech. (2 years)",
            "Executive M. Tech (1 year)",
            "Post Graduate Program (1 year)",
            "Executive MBA (2 years)",
            "Post Graduate Program (1 year)",
            "Executive MBA (2 years)",
            "Executive PhD (4 years)",
          ].map((program, index) => (
            <li key={index}>{program}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row">
        {/* Certificate & Diploma Programs */}
        <div className="flex flex-col p-4">
          <h3 className="font-semibold mb-2">Certificate & Diploma Programs</h3>
          <ul className="space-y-1">
            <li>
              Post Graduate Diploma Program (6 months) on Trending Tech. like:
            </li>
            <ul className="ml-4 list-disc">
              {[
                "AI & ML, Robotics",
                "Cyber Security",
                "Data Science/ Data Analytics/ Big Data",
                "Business Analytics",
                "Quantum Computing",
              ].map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <li>Certificate Program (3 months) in Foreign Languages</li>
            <li>Certificate Program on Management</li>
            <li>Certificate Program on Law</li>
            <li>Certificate Program on Nursing, Paramedical, Public Health</li>
          </ul>
        </div>
      </div>

      {/* Institutes & Policies */}
      <div className="flex flex-col p-4">
        <h3 className="font-semibold mb-2">Institutes & Policies</h3>
        <ul className="space-y-1">
          {[
            "KALAM for MOOCs Certificate Course",
            "KIIT",
            "KISS",
            "KIMS",
            "CDOE (Center for Distance and Online Education)",
            "KWIL (Kareer and Work-Integrated Learning)",
            "KSDC (Kaizen Skill Development Center)",
            "CIQA",
            "Course Conduction",
            "Assessment",
            "Admission Policy",
            "Admission Process",
            "Admission Cancellation",
            "Contact Us",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="pt-4 text-2xl">Follow us:</p>
        <div></div>
      </div>
    </div>
  );
};

export default Foot;
