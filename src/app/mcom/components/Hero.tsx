"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import EnquiryForm from "./EnquiryForm"; // adjust the path if needed

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleDownloadClick = () => {
    if (!formSubmitted) {
      setShowForm(true);
    } else {
      window.open(
        "https://drive.google.com/uc?export=download&id=1kR29Qg-dVr9CN5kO3t_W9ZJsKQYTur4L",
        "_blank"
      );
    }
  };

  const handleFormSuccess = () => {
    setFormSubmitted(true);
    setShowForm(false);
    // Automatically download after successful form submission
    window.open(
      "https://drive.google.com/uc?export=download&id=1kR29Qg-dVr9CN5kO3t_W9ZJsKQYTur4L",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen pt-6 mt-10 relative z-0">
      {/* Enquiry Form Modal */}
      {showForm && (
        <EnquiryForm
          onSuccess={handleFormSuccess}
          close={() => setShowForm(false)}
        />
      )}

      {/* Hero Section */}
      <div className="relative">
        {/* Image Container */}
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <img
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745777839/4126d11c-af37-42ec-8f8d-70bc21fcf419.png"
            alt="Student studying online"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Certification Logos - Top Right */}
        <div className="absolute top-0 right-0 flex flex-wrap md:flex-nowrap space-x-2 md:space-x-2 p-2 md:p-4 gap-2">
          {/* UGC */}
          <div className="bg-white rounded-md p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745307229/270-2706316_ugc-logo-ugc-net_lbyyki.png"
              alt="UGC Entitled Online Program"
              className="h-8 md:h-10"
            />
            <div className="text-[10px] md:text-xs ml-1">
              <div className="font-bold text-orange-600">UGC Entitled</div>
              <div className="text-orange-600">Online Program</div>
            </div>
          </div>

          {/* NAAC */}
          <div className="bg-white rounded-md p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316490/f1f1a227-e74e-4859-905a-8228ce4a7f71.png"
              alt="NAAC A++ Accredited"
              className="h-8 md:h-10"
            />
            <div className="text-[10px] md:text-xs ml-1">
              <div className="font-bold text-blue-800">NAAC A++</div>
              <div className="text-blue-800">Accredited</div>
            </div>
          </div>
        </div>

        {/* Text Overlay */}
        <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 text-right max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl px-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-indigo-900"> </span>
            <span className="text-red-500"> </span>
            <span className="text-indigo-900"></span>
            <br />
            <span className="text-green-500"> </span>
            <br />
            <span className="text-green-500"></span>
          </h1>
          <div className="mt-20 sm:mt-56 flex justify-end">
            <button
              onClick={handleDownloadClick}
              className="flex items-center px-4 sm:px-6 py-2 sm:py-3 text-white rounded-full font-bold text-sm sm:text-base"
              style={{ background: "linear-gradient(90deg, #0097b2, #7ed952)" }}
            >
              <span>Download Brochure</span>
              <Download className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {/* KIIT */}
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745759124/fe79fb38-91bd-40fa-aa35-5138be9cc77c.png"
                alt="KIIT"
                className="h-16 md:h-20"
              />
            </div>

            {/* UGC */}
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745759574/43110121-a16e-45ed-8618-98ce7dca334c.png"
                alt="UGC"
                className="h-14 md:h-16"
              />
            </div>

            {/* NAAC */}
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745759914/7d19bc26-3dae-4df1-b3b4-99c6da33ff94.png"
                alt="NAAC"
                className="h-14 md:h-16"
              />
            </div>

            {/* AIU */}
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745760458/dbf0225a-ce08-4f96-b841-a23d753cc8bc.png"
                alt="AIU"
                className="h-14 md:h-16"
              />
            </div>

            {/* NIRF */}
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745760448/a8515449-f40a-41a2-838c-1b994d8f4a26.png"
                alt="NIRF"
                className="h-14 md:h-16"
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2d3748] mt-10">
            Master of Commerce
          </h2>
        </div>
      </div>

      {/* Program Details Section */}
      <div className="py-6 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="border-2 border-green-400 rounded-lg overflow-hidden">
            <div className="flex flex-wrap divide-y md:divide-y-0 md:divide-x divide-green-400">
              {[
                {
                  label: "Duration",
                  value: "24 months",
                  sub: "Total 4 semesters",
                },
                {
                  label: "Modality",
                  value: "Live + Recorded",
                  sub: "by Subject Matter Experts",
                },
                {
                  label: "Fee per Semester",
                  value: "INR 30,000",
                  sub: "No Cost EMI available",
                },
                {
                  label: "Eligibility",
                  value: "Bachelor's Degree",
                  sub: "in relevant Stream",
                },
                {
                  label: "Commitment per week",
                  value: "15-20 hours",
                  sub: "recommended for the program",
                },
              ].map((item, idx) => (
                <div key={idx} className="w-full md:w-1/5 p-4 text-center">
                  <div className="text-gray-700 font-medium">{item.label}</div>
                  <div className="text-2xl font-bold text-green-600">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
