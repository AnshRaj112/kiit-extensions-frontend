// components/ProgramSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import ProgramCard from "./ProgramCard";

type Program = {
  _id: string;
  category: "undergraduate" | "postgraduate" | "certificate";
  image: string;
  title: string;
  duration: string;
  fees: string;
};

type SectionProps = {
  title: string;
  category: Program["category"];
  color?: string;
};

const ProgramSection: React.FC<SectionProps> = ({ title, category, color = "#37c55e" }) => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch(`/api/programs?category=${category}`);
        const result = await res.json();
        if (result.success) {
          setPrograms(result.data);
        } else {
          console.error("Error fetching programs:", result.message);
        }
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, [category]);

  return (
    <section className="my-8">
      <h2
        className="text-2xl font-bold text-center py-2 mb-4 rounded-lg"
        style={{ backgroundColor: color, color: "#fff" }}
      >
        {title}
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {programs.map((program) => (
          <ProgramCard
            key={program._id}
            image={program.image}
            title={program.title}
            duration={program.duration}
            fees={program.fees}
          />
        ))}
      </div>
    </section>
  );
};

export default ProgramSection;
