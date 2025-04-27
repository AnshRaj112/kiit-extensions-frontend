import { 
    Landmark,
    BarChart, 
    Briefcase, 
    GraduationCap
  } from "lucide-react";
  
  interface CareerCategory {
    title: string;
    icon?: React.ReactNode;
    careers: string[];
  }
  
  const CareerPaths = () => {
    const careerCategories: CareerCategory[] = [
      {
        title: "Finance & Banking",
        icon: <Landmark className="w-6 h-6" />,
        careers: [
          "Financial Analyst",
          "Investment Banker",
          "Credit Analyst",
          "Bank Officer/Manager",
          "Asset Manager",
          "Risk Manager",
          "Treasury Manager",
          "Personal Financial Advisor",
          "FinTech Analyst",
          "Data Analyst (Finance Focused)",
          "Sustainability/ESG Analyst"
        ]
      },
      {
        title: "Accounting & Auditing",
        icon: <BarChart className="w-6 h-6" />,
        careers: [
          "Auditor (Internal & External)",
          "Accountant (Corporate & Public)",
          "Cost Accountant",
          "Tax Consultant"
        ]
      },
      {
        title: "Business & Management",
        icon: <Briefcase className="w-6 h-6" />,
        careers: [
          "Business Analyst",
          "Management Consultant",
          "Business Development Manager",
          "Operations Manager",
          "Marketing Analyst"
        ]
      },
      {
        title: "Other",
        icon: <GraduationCap className="w-6 h-6" />,
        careers: [
          "Financial Planner",
          "Equity Research Analyst",
          "Compliance Officer",
          "Business Process Optimizer",
          "Lecturer/Academician"
        ]
      }
    ];
  
    return (
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
        <h1
          className="relative inline-block text-4xl font-bold mb-10 text-green-500 
          after:content-[''] 
          after:absolute 
          after:left-0 
          after:bottom-[-19px] 
          after:w-full 
          sm:after:w-[103%] 
          after:h-1 
          after:bg-gradient-to-r 
          after:from-[#0097b2] 
          after:to-[#7ed952]"
        >
          Potential Career Paths
        </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-2">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.careers.map((career, careerIndex) => (
                    <li key={careerIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CareerPaths;