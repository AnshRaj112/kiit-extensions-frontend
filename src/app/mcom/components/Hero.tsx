import { Download } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[500px] overflow-hidden">
          <img
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745777839/4126d11c-af37-42ec-8f8d-70bc21fcf419.png"
            alt="Student studying online"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Certification Logos - Top Right */}
        <div className="absolute top-0 right-0 flex space-x-2 p-4">
          <div className="bg-white rounded-md p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745307229/270-2706316_ugc-logo-ugc-net_lbyyki.png"
              alt="UGC Entitled Online Program"
              className="h-10"
            />
            <div className="text-xs ml-1">
              <div className="font-bold text-orange-600">UGC Entitled</div>
              <div className="text-orange-600">Online Program</div>
            </div>
          </div>
          <div className="bg-white rounded-md p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745316490/f1f1a227-e74e-4859-905a-8228ce4a7f71.png"
              alt="NAAC A++ Accredited"
              className="h-10"
            />
            <div className="text-xs ml-1">
              <div className="font-bold text-blue-800">NAAC A++</div>
              <div className="text-blue-800">Accredited</div>
            </div>
          </div>
        </div>

        {/* Text Overlay */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-right max-w-lg md:max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="text-indigo-900"> </span>
            <span className="text-red-500"> </span>
            <span className="text-indigo-900"></span>
            <br />
            <span className="text-green-500"> </span>
            <br />
            <span className="text-green-500"></span>
          </h1>
          <div className="mt-68 flex justify-end">
            <a
              href="https://drive.google.com/uc?export=download&id=1kR29Qg-dVr9CN5kO3t_W9ZJsKQYTur4L"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 text-white rounded-full font-bold"
              style={{ background: "linear-gradient(90deg, #0097b2, #7ed952)" }}
            >
              <span>Download Brochure</span>
              <Download className="ml-2 h-5 w-5" />
            </a>
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
              {/* <div className="text-xs ml-1 text-orange-600">
                <div className="font-bold">UGC Entitled</div>
                <div>Online Program</div>
              </div> */}
            </div>

            {/* NAAC */}
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745759914/7d19bc26-3dae-4df1-b3b4-99c6da33ff94.png"
                alt="NAAC"
                className="h-14 md:h-16"
              />
              {/* <div className="text-xs ml-1 text-blue-800">
                <div className="font-bold">NAAC A++</div>
                <div>Accredited</div>
              </div> */}
            </div>

            {/* Association of Indian Universities */}
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745760458/dbf0225a-ce08-4f96-b841-a23d753cc8bc.png"
                alt="AIU"
                className="h-14 md:h-16"
              />
              {/* <div className="text-xs ml-1 text-blue-700">
                <div className="font-bold">Association of Indian</div>
                <div>Universities Member</div>
              </div> */}
            </div>

            {/* NIRF */}
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745760448/a8515449-f40a-41a2-838c-1b994d8f4a26.png"
                alt="NIRF"
                className="h-14 md:h-16"
              />
              {/* <div className="text-xs ml-1 text-red-600">
                <div className="font-bold">NIRF</div>
                <div>
                  Rank 15<sup>th</sup>
                </div>
              </div> */}
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2d3748] mt-10">
            Master of Commerce
          </h2>
        </div>
      </div>

      {/* Program Details Section */}
      <div className="py-6 bg-white">
        <div className="container max-w-[1320px] mx-auto px-4">
          <div className="border-2 border-green-400 rounded-lg overflow-hidden">
            <div className="flex flex-wrap divide-y md:divide-y-0 md:divide-x divide-green-400">
              {/* Duration */}
              <div className="w-full md:w-1/5 p-4 text-center">
                <div className="text-gray-700 font-medium">Duration</div>
                <div className="text-2xl font-bold text-green-600">
                  24 months
                </div>
                <div className="text-sm text-gray-600">Total 4 semesters</div>
              </div>

              {/* Modality */}
              <div className="w-full md:w-1/5 p-4 text-center">
                <div className="text-gray-700 font-medium">Modality</div>
                <div className="text-2xl font-bold text-green-600">
                  Live + Recorded
                </div>
                <div className="text-sm text-gray-600">
                  by Subject Matter Experts
                </div>
              </div>

              {/* Fee per Semester */}
              <div className="w-full md:w-1/5 p-4 text-center">
                <div className="text-gray-700 font-medium">
                  Fee per Semester
                </div>
                <div className="text-2xl font-bold text-green-600">
                  INR 30,000
                </div>
                <div className="text-sm text-gray-600">
                  No Cost EMI available
                </div>
              </div>

              {/* Eligibility */}
              <div className="w-full md:w-1/5 p-4 text-center">
                <div className="text-gray-700 font-medium">Eligibility</div>
                <div className="text-2xl font-bold text-green-600">
                  Bachelor&apos;s Degree
                </div>
                <div className="text-sm text-gray-600">in relevant Stream</div>
              </div>

              {/* Commitment per week */}
              <div className="w-full md:w-1/5 p-4 text-center">
                <div className="text-gray-700 font-medium">
                  Commitment per week
                </div>
                <div className="text-2xl font-bold text-green-600">
                  15-20 hours
                </div>
                <div className="text-sm text-gray-600">
                  recommended for the program
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
