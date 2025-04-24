"use client";

import { cn } from "@/lib/utils";

interface StudentTypeToggleProps {
  activeType: 'indian' | 'international';
  onToggle: (type: 'indian' | 'international') => void;
}

export function StudentTypeToggle({ activeType, onToggle }: StudentTypeToggleProps) {
  return (
    <div className="flex border rounded-md overflow-hidden">
      <button
        onClick={() => onToggle('indian')}
        className={cn(
          "py-3 px-8 text-center transition-colors font-medium",
          activeType === 'indian' 
            ? "bg-gradient-to-r from-[#0097b2] to-[#7ed952] text-white" 
            : "bg-white text-green-600 hover:bg-gray-50"
        )}
      >
        Indian Students
      </button>
      <button
        onClick={() => onToggle('international')}
        className={cn(
          "py-3 px-8 text-center transition-colors font-medium",
          activeType === 'international' 
            ? "bg-gradient-to-l from-[#0097b2] to-[#7ed952] text-white" 
            : "bg-white text-green-600 hover:bg-gray-50 border-l"
        )}
      >
        International Students
      </button>
    </div>
  );
}