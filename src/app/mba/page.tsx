"use client";

import Hero from "./components/Hero";
import OnlineDegreeProgram from "./components/OnlineDegreeProgram";
import FeatureSection from "./components/FeatureSection";
import VideoFlyer from "./components/VideoFlyer";
import Curriculum from "./components/Curriculum";
import EligibilityMain from "./components/EligibilityMain";
import { FeeInformation } from "./components/EMI/FeeInformation";
import ScholarshipTable from "./components/ScholarshipTable";
import AdmissionProcess from "./components/AdmissionProcess";
import LearningJourney from "./components/LearningJourney";
import CertificateSection from "./components/CertificateSection";

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
      <FeeInformation />
      <ScholarshipTable />
      <AdmissionProcess />
      <LearningJourney />
      <CertificateSection />
    </div>
  );
}
