import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="lien-he" style={{ padding:"40px 0", background:"rgba(212,175,55,.02)" }}>
      <div className="container" style={{ display:"grid", gridTemplateColumns:"1.2fr .6fr .7fr", gap:24 }}>
        <div>
          <Link href="/" style={{ display:"inline-block" }}>
            {/* Đang dùng logo ảnh từ /images/logo.png */}
            <Logo width={200} height={52} imageUrl="/images/logo.png" />
          </Link>
          <p style={{ margin:"14px 0 0", color:"var(--muted)", lineHeight:1.85, fontSize:15 }}>
            Từng trang sách là cầu nối giữa quá khứ và hiện tại, giữa tổ tiên và con cháu.
            <br/>Chúng tôi không bán sách - chúng tôi gieo mầm yêu thương cho văn hóa dân tộc.
          </p>
        </div>
        <div>
          <div style={{ fontWeight:700, color:"var(--gold2)" }}>Liên kết</div>
          <div style={{ marginTop:12, display:"grid", gap:10, color:"var(--muted)", fontWeight:500 }}>
            <a href="#san-pham">Sản phẩm</a>
            <a href="#gioi-thieu">Giới thiệu</a>
            <Link href="/">Trang chủ</Link>
          </div>
        </div>
        <div>
          <div style={{ fontWeight:700, color:"var(--gold2)" }}>Liên hệ</div>
          <div style={{ marginTop:12, display:"grid", gap:10, color:"var(--muted)", fontSize:14.5, lineHeight:1.7 }}>
            <div>
              <div style={{ fontWeight:600, color:"var(--text)", marginBottom:4 }}>Địa chỉ:</div>
              600 Nguyễn Văn Cừ Nối Dài, An Bình, Bình Thủy, Cần Thơ 900000
            </div>
            <div>
              <div style={{ fontWeight:600, color:"var(--text)", marginBottom:4 }}>Fanpage:</div>
              <a href="https://www.facebook.com/honkichviet" target="_blank" rel="noopener noreferrer" style={{ color:"var(--gold2)" }}>
                fb.com/honkichviet
              </a>
            </div>
            <div>
              <div style={{ fontWeight:600, color:"var(--text)", marginBottom:4 }}>Số điện thoại:</div>
              <a href="tel:0123456789" style={{ color:"var(--gold2)" }}>0123 456 789</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
