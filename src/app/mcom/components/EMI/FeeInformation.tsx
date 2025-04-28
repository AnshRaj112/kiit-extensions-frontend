"use client";

import { useState } from 'react';
import { StudentTypeToggle } from './StudentTypeToggle';
import { FeeCard } from './FeeCard';
import { NotesSection } from './NotesSection';
import { EMISection } from './EMISection';

interface FeeStructure {
  admissionFee: string;
  semesterFee: string;
  totalFee: string;
}

const feeData: Record<'indian' | 'international', FeeStructure> = {
  indian: {
    admissionFee: 'INR 1,200',
    semesterFee: 'INR 30,000',
    totalFee: 'INR 1,20,000'
  },
  international: {
    admissionFee: 'USD 200',
    semesterFee: 'USD 1,000',
    totalFee: 'USD 4,000'
  }
};

export function FeeInformation() {
  const [activeStudentType, setActiveStudentType] = useState<'indian' | 'international'>('indian');
  
  const currentFees = feeData[activeStudentType];
  
  return (
    <div className="mx-auto px-4" style={{ maxWidth: "68rem" }}>
      <h1
        className="relative mb-8 inline-block text-4xl font-bold text-green-500 
          after:content-[''] 
          after:absolute 
          after:left-0 
          after:bottom-[-19px] 
          after:w-full 
          sm:after:w-[688%] 
          after:h-1 
          after:bg-gradient-to-r 
          after:from-[#0097b2] 
          after:to-[#7ed952]"
      >
        Fee
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Image Section */}
        <div className="md:col-span-1">
          <div className="border border-gray-200 rounded-lg overflow-hidden h-[500px] flex justify-end items-center">
            <img 
              src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745843232/right_pointing_v1d4n6.png" 
              alt="Education and fees illustration" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        {/* Fee Info Section */}
        <div className="md:col-span-2">
          <div className="flex justify-center mb-6">
            <StudentTypeToggle 
              activeType={activeStudentType} 
              onToggle={setActiveStudentType} 
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FeeCard 
              title="Admission fee" 
              amount={currentFees.admissionFee}
            />
            <FeeCard 
              title="Semester Course fee"
              amount={currentFees.semesterFee}
            />
            <FeeCard 
              title="Total Course fee"
              amount={currentFees.totalFee}
            />
          </div>
          
          <NotesSection studentType={activeStudentType} />
        </div>
      </div>
      
      <EMISection />
    </div>
  );
}