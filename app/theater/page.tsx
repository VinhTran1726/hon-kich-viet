import { TheaterHeader } from "../../src/fe/components/TheaterHeader";
import { IntroSection } from "../../src/fe/components/IntroSection";
import { ContentSection } from "../../src/fe/components/ContentSection";
import { FeatureSection } from "../../src/fe/components/FeatureSection";
import { TheaterFooter } from "../../src/fe/components/TheaterFooter";

export default function TheaterPage() {
  return (
    <div id="top" style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Main page wrapper with max-width for desktop */}
      <div style={{ maxWidth: "600px", margin: "0 auto", boxShadow: "0 0 40px rgba(0,0,0,0.1)" }}>
        <TheaterHeader />
        <IntroSection />
        <ContentSection />
        <FeatureSection />
        <TheaterFooter />
      </div>
    </div>
  );
}
