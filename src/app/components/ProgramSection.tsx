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
  link: string;  // Ensure this is included in the data model
};

type SectionProps = {
  title: string;
  category: Program["category"];
  color?: string;
};

const ProgramSection: React.FC<SectionProps> = ({
  title,
  category,
  color = "#37c55e",
}) => {
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

  const isCertificateSection = title.trim() === "Certificate Program (Online)";

  const headerStyles = isCertificateSection
    ? {
        backgroundColor: "#fff",
        border: `2px solid #37c55e`,
        color: "#37c55e",
      }
    : {
        backgroundColor: color,
        color: "#fff",
      };

  return (
    <section className="my-12 flex justify-center">
      <div className="w-full max-w-5xl">
        <h2
          className="text-xl font-medium text-center py-2 mb-6 rounded-2xl shadow"
          style={headerStyles}
        >
          {title}
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {programs.length > 0 ? (
            programs.map((program) => (
              <ProgramCard
                key={program._id}
                image={program.image}
                title={program.title}
                duration={program.duration}
                fees={program.fees}
                link={program.link || "/default-link"}  // Use a fallback link if `link` is missing
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No programs available yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
