import { HomeCarousel } from "./components/Carousal";
import KIITXExtension from "./components/sections/Sec2";
import KiitxStructure from "./components/sections/Sec3";
import VisionMission from "./components/sections/Sec4";
import Sec5 from "./components/sections/Sec5";
import Sec6 from "./components/sections/Sec6";
export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <KIITXExtension />
      <KiitxStructure />
      <VisionMission />
      <Sec5 />
      <Sec6 />

      {/* <p>This is the search page.</p> */}
    </div>
  );
}
