import React from "react";

const EligibilitySection: React.FC = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-green-500">Eligibility</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        {" "}
        <div className="h-1 bg-green-500 w-full md:w-[80%] mt-2"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="lg:w-3/5 border border-green-200 rounded-lg p-6">
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <span className="font-semibold">
                3 or 4 year Bachelor&apos;s degree
              </span>{" "}
              (Commerce or Management or Economics or Accounts or Math/Economics
              as one of the subjects/ courses) or equivalent.
            </li>
            <li>Fresh graduates or final year graduation students</li>
            <li>
              Entrepreneurs who want to improve their financial management
              skills and update their knowledge of statistics, law and other
              financial aspects.
            </li>
            <li>
              Professionals who want to explore career opportunities in
              private/public sector organizations and government departments in
              industries including Financial Services, Insurance,
              Infrastructure, Banking and many more as Finance Manager, Banking
              Officer, Financial/ Insurance Advisor, and Finance Controller,
              among others.
            </li>
            <li>
              Applicants must possess sufficient knowledge and understanding of
              the English Language.
            </li>
            <li>
              Eligibility, admission criteria or any other condition mentioned
              here in or otherwise for admission to any Program is subject to
              change as prescribed by the university.
            </li>
          </ul>
        </div>

        <div className="lg:w-2/5">
          <div className="rounded-lg overflow-hidden h-full">
            <img
              src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1742974664/samples/breakfast.jpg"
              alt="Eligibility Check"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="w-full py-4 px-6 text-xl font-bold text-white rounded-full bg-gradient-to-r from-[#0097b2] to-[#7ed957] hover:from-[#0087a2] hover:to-[#6ec947] transition-all shadow-lg">
          Unlock your potential with KiiTX
        </button>
      </div>
    </div>
  );
};

export default EligibilitySection;
