"use client";

import { useState } from "react";

type FeeContent = {
  admission: string;
  semester: string;
  total: string;
  note: string;
  infoList: string[];
};

const FeeSection = () => {
  const [activeTab, setActiveTab] = useState<"indian" | "international">("indian");

  const gradient = "bg-[linear-gradient(90deg,#0097b2,#7ed952)]";
  const gradientBorder = "border-[3px] border-transparent bg-clip-padding bg-white bg-origin-border";
  const buttonBase = "py-2 px-4 font-semibold text-white rounded-t-md transition-all duration-300";

  const indianFee: FeeContent = {
    admission: "INR 1,200",
    semester: "INR 30,000*",
    total: "INR 1,20,000*",
    note: "*Inclusive of all taxes",
    infoList: [
      "Pay ONLY via official links on XXXXX.com.",
      "Do NOT pay unauthorized individuals or through unofficial links/QR codes/websites.",
      "The University is not liable for payments outside the official platform.",
      "Fees are for Indian and International Applicants of Sri Lanka, Bhutan, Nepal and Bangladesh.",
      "Course fee includes ₹2,000 exam fee/semester; excludes ₹1,200 non-refundable Admission fee.",
    ],
  };

  const internationalFee: FeeContent = {
    admission: "USD 100",
    semester: "USD 1,000*",
    total: "USD 4,000*",
    note: "*Inclusive of all taxes",
    infoList: [
      "Pay ONLY via official links on XXXXX.com.",
      "Never transfer fees via unofficial channels or unauthorized persons.",
      "University is not responsible for third-party payments.",
      "Fees apply to all international students excluding South Asia.",
      "Exam and registration charges may vary by country and are exclusive.",
    ],
  };

  const feeData = activeTab === "indian" ? indianFee : internationalFee;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#37c55e] mb-4">Fee</h2>

      <div className="flex">
        <button
          className={`${buttonBase} ${gradient} ${activeTab === "indian" ? "opacity-100" : "opacity-50"}`}
          onClick={() => setActiveTab("indian")}
        >
          Indian Students
        </button>
        <button
          className={`${buttonBase} ${gradient} ${activeTab === "international" ? "opacity-100" : "opacity-50"}`}
          onClick={() => setActiveTab("international")}
        >
          International Students
        </button>
      </div>

      <div className={`p-6 mt-2 border rounded-b-md ${gradientBorder}`}>
        <div className="grid sm:grid-cols-3 gap-4 text-center font-semibold text-[#0097b2]">
          <div>
            Admission Fee<br />
            <span className="text-black">{feeData.admission}</span><br />
            <small>{feeData.note}</small>
          </div>
          <div>
            Semester Course Fee<br />
            <span className="text-black">{feeData.semester}</span><br />
            <small>{feeData.note}</small>
          </div>
          <div>
            Total Course Fee<br />
            <span className="text-black">{feeData.total}</span><br />
            <small>{feeData.note}</small>
          </div>
        </div>

        <ul className="mt-6 text-sm text-gray-700 list-disc list-inside">
          {feeData.infoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10 bg-[#006d4e] text-white text-center p-6 rounded-md">
        <h3 className="text-2xl font-bold mb-2">No-cost EMI</h3>
        <p>Hassle-free learning with no-cost EMIs, low interest rates, and flexible part-payment options.</p>
        <button className="mt-4 py-2 px-6 rounded-full font-semibold bg-[linear-gradient(90deg,#0097b2,#7ed952)]">
          Know More
        </button>
      </div>
    </div>
  );
};

export default FeeSection;
