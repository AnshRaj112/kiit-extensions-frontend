import Hero from "./components/Hero";
import FeeSection from "./components/FeeSection";
import OnlineDegreeProgram from "./components/OnlineDegreeProgram";
import FeatureSection from "./components/FeatureSection";

export default function MBA(){
    return (
        <div>
            <Hero />
            <OnlineDegreeProgram />
            <FeatureSection />
            <FeeSection />
        </div>
    )
}