import React from 'react';

const CertificateSection = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-yellow-300 to-orange-400 p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 text-center md:text-left mb-4">
          Sample Certificate
        </h1>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-800">
              Earn a prestigious degree
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-green-900 leading-relaxed">
              The degree is globally recognized, accepted and validated for further 
              education and job prospects. The online degrees offered by KIIT hold 
              the same merit as a regular one and open doors to better professional 
              opportunities.
            </p>
          </div>

          {/* Right Column - Certificate Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full sm:w-3/4 md:w-full bg-white p-3 sm:p-6 rounded-lg shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1742974665/samples/coffee.jpg"
                alt="Sample KIIT Certificate"
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
