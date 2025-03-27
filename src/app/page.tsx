import { HomeCarousel } from "./components/Carousal";
import Sec5 from "./components/sections/Sec5";
import Sec6 from "./components/sections/Sec6";
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Sec5 />
      <Sec6 />
      <HomeCarousel />
      {/* <p>This is the search page.</p> */}
    </div>
  );
}
