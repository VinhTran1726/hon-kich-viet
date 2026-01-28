import { WavyDivider } from "./WavyDivider";

export function FeatureSection() {
  return (
    <section
      style={{
        background: "linear-gradient(to bottom, var(--paper) 0%, var(--paper-hi) 50%, var(--paper) 100%)",
        padding: "48px 24px",
        position: "relative",
      }}
    >
      {/* Top wavy divider */}
      <div style={{ position: "absolute", top: "-12px", left: 0, right: 0 }}>
        <WavyDivider />
      </div>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            margin: "0 0 20px 0",
            color: "var(--ink-brown)",
            fontSize: "24px",
            fontWeight: 700,
            fontFamily: "'Patrick Hand', 'Caveat', cursive",
          }}
        >
          Đặc trưng:
        </h2>

        <p style={{ margin: "0 0 28px 0", color: "var(--ink-brown)", lineHeight: 1.8, fontSize: "15px", opacity: 0.9 }}>
          Mỗi cuốn sách là một hành trình khám phá nghệ thuật sân khấu dân gian Việt Nam. 
          Được biên soạn tâm huyết bởi các chuyên gia, mang đến cho bạn cái nhìn sâu sắc về văn hóa truyền thống.
        </p>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
            alignItems: "start",
          }}
          className="feature-grid"
        >
          {/* Left: Features list */}
          <div style={{ padding: "18px", background: "rgba(137, 75, 52, 0.06)", borderRadius: "8px", border: "1px solid rgba(137, 75, 52, 0.15)" }}>
            <div style={{ color: "var(--ink-brown)", fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>Điểm nổi bật</div>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--ink-brown)", lineHeight: 1.9, fontSize: "14px", opacity: 0.85 }}>
              <li>Từng trang sách thấm đẫm hồn Việt</li>
              <li>Biên soạn tâm huyết từ chuyên gia</li>
              <li>Món quà ý nghĩa cho người yêu văn hóa</li>
            </ul>
          </div>

          {/* Right: Product info */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ color: "var(--ink-brown)", fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>📚 Phiên bản đơn</div>
              <div style={{ color: "var(--ink-brown)", fontSize: "20px", fontWeight: 700, marginBottom: "4px" }}>55.000đ <span style={{ fontSize: "16px", textDecoration: "line-through", opacity: 0.5, fontWeight: 400 }}>150.000đ</span></div>
              <p style={{ margin: 0, color: "var(--ink-brown)", fontSize: "13px", lineHeight: 1.6, opacity: 0.75 }}>Hành trình tìm về cội nguồn văn hóa sân khấu dân gian</p>
            </div>
            <div>
              <div style={{ color: "var(--ink-brown)", fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>🎁 Combo quà tặng</div>
              <div style={{ color: "var(--ink-brown)", fontSize: "20px", fontWeight: 700, marginBottom: "4px" }}>150.000đ <span style={{ fontSize: "16px", textDecoration: "line-through", opacity: 0.5, fontWeight: 400 }}>419.000đ</span></div>
              <p style={{ margin: 0, color: "var(--ink-brown)", fontSize: "13px", lineHeight: 1.6, opacity: 0.75 }}>Trọn bộ quà tặng tri ân người giữ hồn Việt</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wavy divider */}
      <div style={{ position: "absolute", bottom: "-12px", left: 0, right: 0 }}>
        <WavyDivider />
      </div>

      {/* Responsive: mobile stacking */}
      <style>{`
        @media (max-width: 640px) {
          .feature-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
