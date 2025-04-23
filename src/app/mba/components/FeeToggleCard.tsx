"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type StudentType = "indian" | "international";

type FeeInfo = {
  admissionFee: string;
  semesterCourseFee: string;
  totalCourseFee: string;
};

const feeData: Record<StudentType, FeeInfo> = {
  indian: {
    admissionFee: "INR 1,200",
    semesterCourseFee: "INR 30,000",
    totalCourseFee: "INR 1,20,000*",
  },
  international: {
    admissionFee: "USD 200",
    semesterCourseFee: "USD 1,000*",
    totalCourseFee: "USD 4,000*",
  },
};

export default function FeeToggleCard() {
  const [selectedType, setSelectedType] = useState<StudentType>("indian");

  return (
    <div className="max-w-29xl mx-auto">
      <h2 className="text-lg font-medium text-emerald-600 mb-2">Fee</h2>
      
      <div className="border rounded-md overflow-hidden">
        {/* Toggle Buttons */}
        <div className="flex border-b">
          <button
            onClick={() => setSelectedType("indian")}
            className={cn(
              "flex-1 py-2 text-center transition-colors",
              selectedType === "indian" 
                ? "bg-emerald-500 text-white font-medium" 
                : "bg-white text-gray-700 hover:bg-gray-50"
            )}
          >
            Indian Students
          </button>
          <button
            onClick={() => setSelectedType("international")}
            className={cn(
              "flex-1 py-2 text-center transition-colors",
              selectedType === "international" 
                ? "bg-emerald-500 text-white font-medium" 
                : "bg-white text-gray-700 hover:bg-gray-50"
            )}
          >
            International Students
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-start gap-6">
            {/* Illustration */}
            <div className="hidden sm:block">
              <img 
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1742974662/samples/shoe.jpg" 
                alt="Education Fee Illustration" 
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Fee Information */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                <div className="border rounded p-3">
                  <p className="text-xs text-gray-500 mb-1">Admission Fee</p>
                  <p className="font-medium">{feeData[selectedType].admissionFee}</p>
                  <p className="text-xs text-gray-500">*inclusive of all taxes</p>
                </div>
                <div className="border rounded p-3">
                  <p className="text-xs text-gray-500 mb-1">Semester Course Fee</p>
                  <p className="font-medium">{feeData[selectedType].semesterCourseFee}</p>
                  <p className="text-xs text-gray-500">*inclusive of all taxes</p>
                </div>
                <div className="border rounded p-3">
                  <p className="text-xs text-gray-500 mb-1">Total Course Fee</p>
                  <p className="font-medium">{feeData[selectedType].totalCourseFee}</p>
                  <p className="text-xs text-gray-500">*inclusive of all taxes</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Important note for Online Fee Payments</h3>
                <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5">
                  <li>Pay ONLY via official links on XXXXXX.com.</li>
                  <li>Do NOT pay unauthorized individuals or through unofficial links/QR codes/websites.</li>
                  <li>The University is not liable for payments outside the official platform.</li>
                  <li>
                    {selectedType === "indian" 
                      ? "Fees are for Indian and International Applicants of Sri Lanka, Bhutan, Nepal and Bangladesh."
                      : "Fees are applicable for all International Applicants except applicants from Sri Lanka, Bhutan, Nepal, and Bangladesh."}
                  </li>
                  <li>Course fee includes 12,000 exam fee/semester; excludes 12,000 non-refundable Admission fee.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* No-cost EMI Banner */}
        <div className="bg-emerald-700 text-white p-4">
          <h3 className="text-xl font-bold text-center mb-1">No-cost EMI</h3>
          <p className="text-center text-sm mb-3">Hassle-free learning with no-cost EMIs, low interest rates, and flexible part-payment options.</p>
          <div className="flex justify-center">
            <button className="bg-emerald-500 text-white text-sm px-5 py-1 rounded-sm hover:bg-emerald-600 transition-colors">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
