import { FishDecor, WavyDivider } from "./WavyDivider";

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
        {/* Block 1: Múa Rối Nước */}
        <div
          style={{
            marginBottom: "48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
          className="content-block-1"
        >
          {/* Left: Title and description */}
          <div>
            <h2
              style={{
                margin: "0 0 18px 0",
                color: "var(--ink-beige)",
                fontSize: "34px",
                fontWeight: 700,
                fontFamily: "'Patrick Hand', 'Caveat', cursive",
              }}
            >
              Múa Rối Nước
            </h2>

            <p style={{ margin: 0, color: "var(--ink-beige)", lineHeight: 1.8, fontSize: "15px", opacity: 0.9 }}>
              Múa rối nước là một loại hình nghệ thuật biểu diễn độc đáo của Việt Nam, xuất hiện từ thế kỷ XI. 
              Nghệ thuật này kết hợp giữa điêu khắc, hội họa, âm nhạc dân gian và kỹ thuật điều khiển rối dưới nước, 
              tạo nên một màn trình diễn sinh động về đời sống nông thôn Việt Nam.
            </p>

            <div style={{ marginTop: "20px", padding: "14px 16px", background: "rgba(238, 212, 178, 0.12)", borderRadius: "6px", borderLeft: "3px solid var(--ink-beige)" }}>
              <p style={{ margin: 0, color: "var(--ink-beige)", lineHeight: 1.7, fontSize: "14px", opacity: 0.85, fontStyle: "italic" }}>
                "Mỗi con rối là một linh hồn, mỗi màn diễn là một câu chuyện về cuộc sống, về con người Việt Nam."
              </p>
            </div>
          </div>

          {/* Right: Overlapping image boxes */}
          <div style={{ position: "relative", paddingTop: "24px", paddingLeft: "24px" }}>
            {/* Back image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "160px",
                height: "110px",
                border: "2px solid var(--ink-beige)",
                borderRadius: "6px",
                background: "rgba(238, 212, 178, 0.08)",
              }}
            />
            {/* Front image */}
            <div
              style={{
                position: "relative",
                width: "160px",
                height: "110px",
                border: "2px solid var(--ink-beige)",
                borderRadius: "6px",
                background: "rgba(238, 212, 178, 0.05)",
                marginLeft: "24px",
              }}
            />
          </div>
        </div>

        {/* Block 2: Nguồn gốc */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
          className="content-block-2"
        >
          {/* Left: Description and large image */}
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

            {/* Large image box */}
            <div
              style={{
                width: "100%",
                height: "140px",
                border: "2px solid var(--ink-beige)",
                borderRadius: "6px",
                background: "rgba(238, 212, 178, 0.05)",
              }}
            />
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

        {/* Fish decoration */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "flex-end",
            opacity: 0.8,
          }}
        >
          <FishDecor />
        </div>
      </div>

      {/* Bottom wavy divider */}
      <div style={{ position: "absolute", bottom: "-12px", left: 0, right: 0 }}>
        <WavyDivider />
      </div>

      {/* Responsive: mobile stacking */}
      <style>{`
        @media (max-width: 640px) {
          .content-block-1,
          .content-block-2 {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .content-block-1 > div:last-child {
            padding-left: 0;
            padding-top: 0;
          }
        }
      `}</style>
    </section>
  );
}
