import { TheaterHeader } from "../src/fe/components/TheaterHeader";
import { IntroSection } from "../src/fe/components/IntroSection";
import { ContentSection } from "../src/fe/components/ContentSection";
import { FeatureSection } from "../src/fe/components/FeatureSection";
import { TheaterProductSection } from "../src/fe/components/TheaterProductSection";
import { TheaterFooter } from "../src/fe/components/TheaterFooter";
import { CartDrawer } from "../src/fe/components/CartDrawer";
import { FloatingClouds } from "../src/fe/components/FloatingClouds";
import { PRODUCTS } from "../src/fe/data/products";
import Image from "next/image";

export default function Page() {
  return (
    <div
      id="top"
      style={{
        background: "linear-gradient(180deg, #6B2028 0%, #C9B591 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating clouds decoration */}
      <FloatingClouds />

      {/* Green border decoration at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "150px",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/green-border.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          priority
        />
      </div>

      {/* Green border decoration at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "150px",
          zIndex: 2,
          pointerEvents: "none",
          transform: "rotate(180deg)",
        }}
      >
        <Image
          src="/images/green-border.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      {/* Main page wrapper with max-width for desktop */}
      <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 3 }}>
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
