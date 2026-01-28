import { WavyDivider } from "./WavyDivider";

export function ContentSection() {
  return (
    <section
      style={{
        background: "var(--maroon)",
        padding: "52px 24px",
        position: "relative",
      }}
    >
      {/* Stage curtain decoration - wavy border */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "5%",
          right: "5%",
          height: "2px",
          background: "var(--ink-beige)",
          opacity: 0.3,
        }}
      />

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Block: Nguồn gốc */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
          className="content-block"
        >
          {/* Left: Description */}
          <div>
            <h3
              style={{
                margin: "0 0 16px 0",
                color: "var(--ink-beige)",
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "'Patrick Hand', 'Caveat', cursive",
              }}
            >
              Nguồn gốc
            </h3>

            <p style={{ margin: "0 0 20px 0", color: "var(--ink-beige)", lineHeight: 1.8, fontSize: "15px", opacity: 0.9 }}>
              Nghệ thuật sân khấu dân gian Việt Nam có nguồn gốc từ các lễ hội tôn giáo, tín ngưỡng và sinh hoạt cộng đồng. 
              Từ hát chèo miền Bắc, tuồng cổ truyền, đến cải lương miền Nam, mỗi loại hình mang đậm bản sắc vùng miền 
              và phản ánh tâm hồn, khát vọng của người dân Việt qua các thời kỳ lịch sử.
            </p>
          </div>

          {/* Right: Additional description */}
          <div style={{ paddingTop: "48px" }}>
            <div style={{ padding: "16px", background: "rgba(238, 212, 178, 0.08)", borderRadius: "8px", border: "1px solid rgba(238, 212, 178, 0.2)" }}>
              <h4 style={{ margin: "0 0 12px 0", color: "var(--ink-beige)", fontSize: "18px", fontWeight: 600 }}>Giá trị văn hóa</h4>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--ink-beige)", lineHeight: 1.8, fontSize: "14px", opacity: 0.85 }}>
                <li>Thấm đẫm bản sắc dân tộc</li>
                <li>Tinh hoa nghìn năm văn hiến</li>
                <li>Dễ đọc, sâu lắng, chạm đến tâm hồn</li>
                <li>Di sản phi vật thể quý báu</li>
              </ul>
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
          .content-block {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
