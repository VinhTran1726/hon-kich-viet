export function TheaterFooter() {
  return (
    <footer
      style={{
        background: "var(--maroon)",
        padding: "40px 24px",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2
          style={{
            margin: "0 0 24px 0",
            textAlign: "center",
            color: "var(--ink-beige)",
            fontSize: "32px",
            fontWeight: 700,
            fontFamily: "'Patrick Hand', 'Caveat', cursive",
          }}
        >
          Thông tin liên hệ
        </h2>

        <div style={{ display: "grid", gap: "16px", color: "var(--ink-beige)" }}>
          <div style={{ padding: "14px 18px", background: "rgba(238, 212, 178, 0.08)", borderRadius: "8px", border: "1px solid rgba(238, 212, 178, 0.2)" }}>
            <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "6px", opacity: 0.8 }}>📍 Địa chỉ</div>
            <div style={{ fontSize: "15px", lineHeight: 1.6 }}>600 Nguyễn Văn Cừ Nối Dài, An Bình, Bình Thủy, Cần Thơ 900000</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="footer-contact-grid">
            <div style={{ padding: "14px 18px", background: "rgba(238, 212, 178, 0.08)", borderRadius: "8px", border: "1px solid rgba(238, 212, 178, 0.2)" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "6px", opacity: 0.8 }}>📱 Điện thoại</div>
              <a href="tel:0123456789" style={{ fontSize: "15px", color: "var(--ink-beige)", textDecoration: "none", fontWeight: 600 }}>0329166499</a>
            </div>

            <div style={{ padding: "14px 18px", background: "rgba(238, 212, 178, 0.08)", borderRadius: "8px", border: "1px solid rgba(238, 212, 178, 0.2)" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "6px", opacity: 0.8 }}>📘 Fanpage</div>
              <a href="https://www.facebook.com/honkichviet" target="_blank" rel="noopener noreferrer" style={{ fontSize: "15px", color: "var(--ink-beige)", textDecoration: "none", fontWeight: 600 }}>fb.com/honkichviet</a>
            </div>
          </div>

          <div style={{ marginTop: "12px", padding: "14px 0", borderTop: "1px solid rgba(238, 212, 178, 0.2)", textAlign: "center", fontSize: "14px", opacity: 0.7 }}>
            Từng trang sách là cầu nối giữa quá khứ và hiện tại. Chúng tôi không bán sách - chúng tôi gieo mầm yêu thương cho văn hóa dân tộc.
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .footer-contact-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
