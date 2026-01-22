"use client";

import { CloudDecor, WavyDivider } from "./WavyDivider";
import { Logo } from "./Logo";

export function TheaterHeader() {
  return (
    <header
      style={{
        background: "var(--maroon)",
        padding: "32px 24px 28px",
        position: "relative",
      }}
    >
      {/* Top cloud decoration */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        <CloudDecor />
      </div>

      {/* Content */}
      <div
        style={{
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          paddingTop: "24px",
        }}
      >
        {/* Logo box */}
        <div
          style={{
            width: "80px",
            height: "80px",
            border: "2px solid var(--ink-beige)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            background: "rgba(238, 212, 178, 0.08)",
            padding: "8px",
          }}
        >
          <Logo width={64} height={64} imageUrl="/images/logo.png" />
        </div>

        {/* Title */}
        <h1
          style={{
            margin: 0,
            color: "var(--ink-beige)",
            fontSize: "38px",
            fontWeight: 700,
            fontFamily: "'Patrick Hand', 'Caveat', cursive",
            letterSpacing: "0.5px",
          }}
        >
          Hồn Kịch Việt
        </h1>

        {/* Subtitle */}
        <p
          style={{
            margin: 0,
            color: "var(--ink-beige)",
            fontSize: "15px",
            opacity: 0.95,
          }}
        >
          Hồn kịch dân phương - Văn hoá truyền thế
        </p>

        {/* CTA Button */}
        <button
          style={{
            marginTop: "4px",
            padding: "10px 20px",
            background: "transparent",
            border: "2px solid var(--ink-beige)",
            borderRadius: "8px",
            color: "var(--ink-beige)",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(238, 212, 178, 0.1)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Tìm hiểu ngay
        </button>
      </div>

      {/* Bottom wavy divider */}
      <div style={{ position: "absolute", bottom: "-12px", left: 0, right: 0 }}>
        <WavyDivider />
      </div>
    </header>
  );
}
