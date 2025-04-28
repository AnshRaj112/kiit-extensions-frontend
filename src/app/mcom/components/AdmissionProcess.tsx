import React from "react";

interface ProcessStepProps {
  title: string;
  description: string;
  bgColor: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  bgColor,
  isLast = false,
}) => {
  return (
    <div className="flex flex-col relative items-center w-full">
      <div
        className={`${bgColor} rounded-full p-4 md:p-6 text-center w-full max-w-[360px] min-h-[110px] flex flex-col justify-center items-center`}
      >
        <h3 className="font-bold text-lg md:text-xl mb-1">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
      {!isLast && (
        <svg
          className="w-5 h-10 md:w-6 md:h-12 text-emerald-400 mt-1 md:mt-2"
          viewBox="0 0 24 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0V40M12 40L22 30M12 40L2 30"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

const AdmissionProcess: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto" style={{ maxWidth: "67rem" }}>
        <h1
          className="relative inline-block text-4xl font-bold text-green-500 
          after:content-[''] 
          after:absolute 
          after:left-0 
          after:bottom-[-19px] 
          after:w-full 
          sm:after:w-[130%] 
          after:h-1 
          after:bg-gradient-to-r 
          after:from-[#0097b2] 
          after:to-[#7ed952]"
        >
          Admission Process
        </h1>

        <div className="mt-10 border border-emerald-200 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6">
          {/* Steps */}
          <div className="md:w-3/5 flex flex-col space-y-6">
            {/* Desktop view */}
            <div className="hidden md:flex flex-col space-y-6 items-center">
              <ProcessStep
                title="Choose Your Program"
                description="Find the perfect fit for your aspirations"
                bgColor="bg-purple-500 text-white"
              />
              <ProcessStep
                title="Apply & Register"
                description="Share your details and pay the application fee"
                bgColor="bg-emerald-400 text-white"
              />
              <ProcessStep
                title="Submit Documents"
                description="Upload required files and complete your application"
                bgColor="bg-yellow-300 text-gray-800"
              />
              <ProcessStep
                title="University Approval"
                description="We'll review your application for admission confirmation"
                bgColor="bg-pink-400 text-white"
              />
              <ProcessStep
                title="Pay Program Fees"
                description="Secure your spot with your first installment"
                bgColor="bg-sky-400 text-white"
                isLast={true}
              />
            </div>

            {/* Mobile view */}
            <div className="md:hidden flex flex-col items-center space-y-4">
              <ProcessStep
                title="Choose Your Program"
                description="Find the perfect fit for your aspirations"
                bgColor="bg-purple-500 text-white"
              />
              <ProcessStep
                title="Apply & Register"
                description="Share your details and pay the application fee"
                bgColor="bg-emerald-400 text-white"
              />
              <ProcessStep
                title="Submit Documents"
                description="Upload required files and complete your application"
                bgColor="bg-yellow-300 text-gray-800"
              />
              <ProcessStep
                title="University Approval"
                description="We'll review your application for admission confirmation"
                bgColor="bg-pink-400 text-white"
              />
              <ProcessStep
                title="Pay Program Fees"
                description="Secure your spot with your first installment"
                bgColor="bg-sky-400 text-white"
                isLast={true}
              />
            </div>
          </div>

          {/* Image */}
          <div className="md:w-3/5 flex justify-center items-center h-[500px] mt-20 mx-auto">
            <img
              src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745843232/admission_rnao8j.png"
              alt="Student applying online"
              className="rounded-lg w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
