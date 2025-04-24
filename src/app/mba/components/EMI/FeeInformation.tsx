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
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-green-500 mb-4">Fee</h1>
      <div className="h-1 w-full bg-gradient-to-r from-green-400 to-teal-500 mb-8"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="border border-gray-200 rounded-lg p-4 h-full flex items-center justify-center">
            <img 
              src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1742974664/samples/breakfast.jpg" 
              alt="Education and fees illustration" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
        
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