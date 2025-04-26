import React from "react";

const ScholarshipTable: React.FC = () => {
  const scholarshipData = [
    {
      category: "Divyaang (For persons with disabilities)",
      credit: "20%",
      eligibility: "Divyaang certificate",
    },
    {
      category: "Defence personnel",
      credit: "20%",
      eligibility: "UG/PG alumni card of KIIT",
    },
    {
      category: "KIIT Alumni",
      credit: "20%",
      eligibility: "UG/PG alumni card of KIIT",
    },
    {
      category: "Government employees",
      credit: "10%",
      eligibility: "Employee Identity card",
    },
    {
      category: "Merit ( 80% and above in bachelor's degree)",
      credit: "10%",
      eligibility: "Marksheet",
    },
    {
      category: "National/International level achievements",
      credit: "10%",
      eligibility:
        "Verifiable National/International level achievements in Sports, R & D, Social Science, Cultural and Co-curricular activities",
    },
  ];

  const concessionData = [
    {
      concession: "Fee concession",
      discount: "10%",
      criteria: "Upfront payment of full program fee",
    },
    {
      concession: "",
      discount: "5%",
      criteria: "Upfront payment of annual fee",
    },
  ];

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl sm:text-4xl font-bold text-green-500 mb-2">
        Scholarship & Concession
      </h1>
      <div className="w-full h-1 bg-gradient-to-r from-green-500 to-green-400 mb-8"></div>

      {/* Scholarship Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full table-fixed border border-gray-200">
          <colgroup>
            <col className="w-1/3" />
            <col className="w-1/3" />
            <col className="w-1/3" />
          </colgroup>
          <thead>
            <tr>
              <th className="bg-green-500 text-white px-4 py-3 text-left border">
                Category
              </th>
              <th className="bg-green-500 text-white px-4 py-3 text-center border">
                Scholarship Credit*
              </th>
              <th className="bg-green-500 text-white px-4 py-3 text-left border">
                Eligibility / Documents
              </th>
            </tr>
          </thead>
          <tbody>
            {scholarshipData.map((item, index) => (
              <tr key={index} className="bg-white">
                <td className="px-4 py-3 border">{item.category}</td>
                <td className="px-4 py-3 text-center border">{item.credit}</td>
                <td className="px-4 py-3 border">{item.eligibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Concession Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border border-gray-200">
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr>
                <th className="bg-green-500 text-white px-4 py-3 text-left border">
                  Concessions
                </th>
                <th className="bg-green-500 text-white px-4 py-3 text-center border">
                  Discount*
                </th>
                <th className="bg-green-500 text-white px-4 py-3 text-left border">
                  Eligibility criteria
                </th>
              </tr>
            </thead>
            <tbody>
              {concessionData.map((item, index) => (
                <tr key={index} className="bg-white">
                  {index === 0 && (
                    <td
                      className="px-4 py-3 border"
                      rowSpan={concessionData.length}
                    >
                      {item.concession}
                    </td>
                  )}
                  <td className="px-4 py-3 text-center border">
                    {item.discount}
                  </td>
                  <td className="px-4 py-3 border">{item.criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      {/* Footer Note */}
      <div className="text-right mt-2">
        <p className="text-sm font-medium">
          *Excluding Admssission fee, Reexam fee
        </p>
      </div>
    </div>
  );
};

export default ScholarshipTable;
