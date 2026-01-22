import { WavyDivider } from "./WavyDivider";
import { Logo } from "./Logo";

export function IntroSection() {
  return (
    <section
      style={{
        background: "var(--paper)",
        padding: "48px 24px",
        position: "relative",
      }}
    >
      {/* Top wavy divider */}
      <div style={{ position: "absolute", top: "-12px", left: 0, right: 0 }}>
        <WavyDivider />
      </div>

      <div
        className="intro-grid"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "28px",
          alignItems: "start",
        }}
      >
        {/* Left: Logo box */}
        <div
          className="intro-logo"
          style={{
            aspectRatio: "1",
            border: "2px solid var(--ink-brown)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(137, 75, 52, 0.03)",
            padding: "16px",
          }}
        >
          <Logo width={140} height={140} imageUrl="/images/logo.png" />
        </div>

        {/* Right: Content */}
        <div>
          <h2
            style={{
              margin: "0 0 16px 0",
              color: "var(--ink-brown)",
              fontSize: "26px",
              fontWeight: 700,
              fontFamily: "'Patrick Hand', 'Caveat', cursive",
            }}
          >
            Hồn kịch Việt là gì?
          </h2>

          <p style={{ margin: 0, color: "var(--ink-brown)", lineHeight: 1.8, fontSize: "15px", opacity: 0.9 }}>
            Trong mỗi vần điệu chèo, tuồng, cải lương là tiếng nói của tổ tiên, là tinh thần bất khuất của dân tộc. 
            Chúng tôi trân trọng lưu giữ và lan tỏa những giá trị nghệ thuật quý báu ấy, để thế hệ hôm nay 
            và mai sau không quên cội nguồn, không mất gốc trong dòng chảy thời gian.
          </p>

          <div style={{ marginTop: "20px", padding: "16px", background: "rgba(137, 75, 52, 0.06)", borderRadius: "8px", border: "1px solid rgba(137, 75, 52, 0.15)" }}>
            <div style={{ color: "var(--ink-brown)", fontSize: "14px", fontWeight: 700, marginBottom: "10px" }}>Trái tim chúng tôi dành cho bạn</div>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--ink-brown)", lineHeight: 1.9, fontSize: "14px", opacity: 0.85 }}>
              <li>Nội dung chọn lọc từ tâm huyết, gìn giữ giá trị xưa</li>
              <li>Gói ghém cẩn trọng từng trang sách, trao gửi khắp ba miền</li>
              <li>Lắng nghe và hỗ trợ tận tình như người thân</li>
              <li>Cùng nhau gìn giữ hồn Việt, lưu truyền di sản ngàn đời</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Responsive: mobile stacking */}
      <style>{`
        @media (max-width: 640px) {
          .intro-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .intro-logo {
            max-width: 160px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
