import React from 'react';

interface ProgramCardProps {
  title: string;
  color: string;
  link: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, color, link }) => (
  <div className="border rounded-md shadow-md p-4 w-64 flex flex-col items-center justify-between">
    {/* Placeholder for image */}
    <div className="w-full h-40 border mb-4 flex items-end">
      <span className={`text-white px-3 py-1 text-sm font-semibold`} style={{ backgroundColor: color }}>
        {title}
      </span>
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
        Enquire Now
      </button>
    </a>
  </div>
);

const TopPrograms: React.FC = () => {
  const programs = [
    { title: 'Management', color: '#5f882c', link: 'https://example.com/management' },
    { title: 'InfoTech', color: '#264d99', link: 'https://example.com/infotech' },
    { title: 'FinTech', color: '#bd5f1b', link: 'https://example.com/fintech' },
    { title: 'Banking & Commerce', color: '#1f6aad', link: 'https://example.com/banking-commerce' },
  ];

  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <h2 className="text-2xl font-bold text-green-800 mb-8">Top Ranked Programs</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {programs.map((program) => (
          <ProgramCard key={program.title} title={program.title} color={program.color} link={program.link} />
        ))}
      </div>
    </div>
  );
};

export default TopPrograms;
