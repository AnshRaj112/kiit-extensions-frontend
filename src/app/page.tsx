import { HomeCarousel } from "./components/Carousal";
import KIITXExtension from "./components/sections/Sec2";
import KiitxStructure from "./components/sections/Sec3";
import VisionMission from "./components/sections/Sec4";
import TopPrograms from "./components/sections/Sec5";
import AlumniSection from "./components/sections/Sec6";
import Ranking from "./components/sections/Sec7";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <KIITXExtension />
      <KiitxStructure />
      <VisionMission />
      <TopPrograms />
      <AlumniSection />
      <Ranking />
      {/* <p>This is the search page.</p> */}
    </div>
  );
}
