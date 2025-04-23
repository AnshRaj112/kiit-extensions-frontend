import React from 'react';

const CertificateSection = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-yellow-300 to-orange-400 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-8">
          Sample Certificate
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-green-800">
              Earn a prestigious degree
            </h2>
            <p className="text-lg md:text-xl text-green-900 leading-relaxed">
              The degree is globally recognized, accepted and validated for further 
              education and job prospects. The online degrees offered by KIIT hold 
              the same merit as a regular one and open doors to better professional 
              opportunities.
            </p>
          </div>

          {/* Right Column - Certificate Image */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <img 
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1742974665/samples/coffee.jpg"
                alt="Sample KIIT Certificate"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;