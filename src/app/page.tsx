import { HomeCarousel } from "./components/Carousal";
import AccreditationAndRanking from "./components/sections/Accreditation";
import PageMain from "./components/PageMain";
import KiiTX from "./components/KiitxPillars";
import KeyAdvantages from "./components/Advantage";
import Vision from "./components/Vision";
import CustomMissionSection from "./components/CustomMissionSection";
import KIITStats from "./components/KIITStats";
import AlumniSection from "./components/sections/Sec6";
import Inspiration from "./components/Inspiration";

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
      <AlumniSection />
      <Inspiration />
    </div>
  );
}
