"use client";

import Hero from "./components/Hero";
import FeeSection from "./components/FeeSection";
import OnlineDegreeProgram from "./components/OnlineDegreeProgram";
import FeatureSection from "./components/FeatureSection";
import VideoFlyer from "./components/VideoFlyer"; 
import Curriculum from "./components/Curriculum";


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
      <FeeSection />
    </div>
  );
}
