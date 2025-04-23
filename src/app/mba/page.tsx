"use client";

import Hero from "./components/Hero";
import OnlineDegreeProgram from "./components/OnlineDegreeProgram";
import FeatureSection from "./components/FeatureSection";
import VideoFlyer from "./components/VideoFlyer"; 
import Curriculum from "./components/Curriculum";
import EligibilityMain from "./components/EligibilityMain";
import FeeToggleCard from "./components/FeeToggleCard";
import ScholarshipTable from "./components/ScholarshipTable";


export default function MBA() {
  return (
    <div>
      <Hero />
      <OnlineDegreeProgram />
      <FeatureSection />
      <VideoFlyer
        videoId="nrv_W1XA3KQ?list=RDAY9blLYMKnI"
        title="Program Overview"
      />
      <Curriculum />
      <EligibilityMain />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-41xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Student Fee Information</h1>
        <FeeToggleCard />
      </div>
    </div>
    <ScholarshipTable />
    </div>
  );
}
