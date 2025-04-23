import React from "react";
// import admissionImage from "/lovable-uploads/17fd6bb6-53d2-4370-8f95-ee71b09963f2.png";

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
    <div className="flex flex-col relative">
      <div
        className={`${bgColor} rounded-full p-4 md:p-6 text-center w-full max-w-[300px] min-h-[100px] flex flex-col justify-center items-center`}
      >
        <h3 className="font-bold text-lg md:text-xl mb-1">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
      {!isLast && (
        <svg
          className="w-8 h-16 md:w-12 md:h-20 text-emerald-400 self-center mt-1 md:mt-2"
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
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-500 mb-4 pb-2 border-b-4 border-emerald-500 inline-block">
        Admission Process
      </h1>

      <div className="mt-8 border border-emerald-200 rounded-lg p-4 md:p-6 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col space-y-2 md:space-y-4 md:justify-between">
          {/* Desktop Steps without Arrows */}
          <div className="hidden md:flex flex-col space-y-4 items-start">
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

          {/* Mobile Steps with Vertical Arrows */}
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

        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1742974664/samples/breakfast.jpg"
            alt="Student applying online"
            className="rounded-lg w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;