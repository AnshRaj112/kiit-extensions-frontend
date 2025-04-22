import { HomeCarousel } from "./components/Carousal";
// import KIITXExtension from "./components/sections/Sec2";
// import KiitxStructure from "./components/sections/Sec3";
// import VisionMission from "./components/sections/Sec4";
import KiiTX from "./components/KiitxPillars";
import KeyAdvantages from "./components/Advantage";
import Vision from "./components/Vision";
import CustomMissionSection from "./components/CustomMissionSection";
// import TopPrograms from "./components/sections/Sec5";
import AlumniSection from "./components/sections/Sec6";
import Inspiration from "./components/Inspiration";
import KIITStats from "./components/KIITStats";
// import Ranking from "./components/sections/Sec7";
import AccreditationAndRanking from "./components/sections/Accreditation";
import PageMain from "./components/PageMain";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <AccreditationAndRanking />
      <PageMain />
      <KiiTX />
      <KeyAdvantages />
      <Vision />
      <CustomMissionSection />
      <KIITStats />
      {/* <KIITXExtension /> */}
      {/* <KiitxStructure />
      <VisionMission /> */}
      {/* <TopPrograms /> */}
      <AlumniSection />
      <Inspiration />
      {/* <Ranking /> */}
      {/* <p>This is the search page.</p> */}
    </div>
  );
}
