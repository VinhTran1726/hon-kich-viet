import { TheaterHeader } from "../src/fe/components/TheaterHeader";
import { IntroSection } from "../src/fe/components/IntroSection";
import { ContentSection } from "../src/fe/components/ContentSection";
import { FeatureSection } from "../src/fe/components/FeatureSection";
import { TheaterProductSection } from "../src/fe/components/TheaterProductSection";
import { TheaterFooter } from "../src/fe/components/TheaterFooter";
import { CartDrawer } from "../src/fe/components/CartDrawer";
import { PRODUCTS } from "../src/fe/data/products";

export default function Page() {
  return (
    <div id="top" style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Main page wrapper with max-width for desktop */}
      <div style={{ maxWidth: "600px", margin: "0 auto", boxShadow: "0 0 40px rgba(0,0,0,0.1)" }}>
        <TheaterHeader />
        <IntroSection />
        <ContentSection />
        <FeatureSection />
        <TheaterProductSection products={PRODUCTS} />
        <TheaterFooter />
      </div>
      <CartDrawer />
    </div>
  );
}
