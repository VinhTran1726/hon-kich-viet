"use client";
import Link from "next/link";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { useCart } from "../state/CartProvider";

export function Header() {
  const { state, dispatch } = useCart();
  const count = state.items.reduce((s, i) => s + i.qty, 0);

  return (
    <header style={{ position:"sticky", top:0, zIndex:30, backdropFilter:"blur(12px)", background:"rgba(10,6,5,.85)", boxShadow:"0 2px 12px rgba(212,175,55,.08)" }}>
      <div className="container" style={{ padding:"16px 0" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:14 }}>
          <Link href="/" style={{ display:"flex", alignItems:"center" }}>
            {/* Đang dùng logo ảnh từ /images/logo.png */}
            <Logo width={200} height={52} imageUrl="/images/logo.png" />
          </Link>
          <nav style={{ display:"flex", gap:18, flexWrap:"wrap", color:"var(--muted)", fontSize:14.5, fontWeight:500 }}>
            <a href="#san-pham" style={{ transition:"all 0.2s ease" }}>Sản phẩm</a>
            <a href="#gioi-thieu" style={{ transition:"all 0.2s ease" }}>Giới thiệu</a>
            <a href="#lien-he" style={{ transition:"all 0.2s ease" }}>Liên hệ</a>
          </nav>
          <Button variant="primary" onClick={() => dispatch({ type: "OPEN" })}>Giỏ hàng ({count})</Button>
        </div>
      </div>
    </header>
  );
}
