import { Badge } from "./Badge";

export function Hero() {
  return (
    <section style={{ 
      position:"relative", 
      overflow:"hidden",
      background: "url('/images/hero-bg.jpg') no-repeat center center",
      backgroundSize: "cover"
    }}>
      {/* Overlay gradient để text dễ đọc */}
      <div style={{ 
        position:"absolute", 
        inset:0,
        background:
          "linear-gradient(to right, rgba(10,6,5,0.92) 0%, rgba(10,6,5,0.75) 50%, rgba(10,6,5,0.88) 100%)," +
          "linear-gradient(to bottom, rgba(10,6,5,0.60) 0%, rgba(10,6,5,0.85) 70%, rgba(10,6,5,0.95) 100%)"
      }} />
      <div className="container" style={{ position:"relative", padding:"72px 0 62px" }}>
        <div style={{ maxWidth:820 }}>
          <Badge>Văn hoá • Nghệ thuật • Sân khấu</Badge>
          <h1 style={{ margin:"18px 0 14px", fontSize:58, lineHeight:1.1, letterSpacing:0.5, fontWeight:700, color:"var(--gold)", textShadow:"0 2px 24px var(--goldGlow)" }}>Hồn Kịch Việt</h1>
          <p style={{ margin:0, color:"var(--muted)", fontSize:18.5, lineHeight:1.8, fontWeight:400 }}>
            Từng trang sách là một hồi ức, từng câu chữ là một mảnh hồn Việt. Hãy để nghệ thuật sân khấu dân gian đưa bạn về với cội nguồn, nơi tâm hồn dân tộc còn mãi trong từng vần điệu.
          </p>

          <div style={{ display:"flex", gap:12, marginTop:24, flexWrap:"wrap" }}>
            <a href="#san-pham" style={{
              display:"inline-flex", alignItems:"center", gap:8, padding:"13px 20px", borderRadius:999,
              background:"linear-gradient(180deg, var(--red2), var(--red))",
              boxShadow:"0 10px 32px var(--redGlow)", border:"1px solid rgba(212,175,55,.15)", fontWeight:700, fontSize:15
            }}>
              Xem sản phẩm <span style={{ opacity:0.9 }}>→</span>
            </a>

            <a href="#gioi-thieu" style={{
              display:"inline-flex", alignItems:"center", padding:"13px 20px", borderRadius:999,
              border:"1px solid var(--line)", background:"rgba(212,175,55,.04)", fontWeight:600, fontSize:15
            }}>
              Đọc mô tả
            </a>
          </div>

          <div style={{ marginTop:32, display:"grid", gridTemplateColumns:"repeat(3, minmax(0,1fr))", gap:12 }}>
            {[
              { k:"Thấm đẫm bản sắc", v:"Tinh hoa nghìn năm" },
              { k:"Dễ đọc, sâu lắng", v:"Chạm đến tâm hồn" },
              { k:"Tận tâm giao hàng", v:"Khắp mọi miền đất nước" },
            ].map(x => (
              <div key={x.k} style={{
                border:"1px solid var(--line)", borderRadius:"var(--radius)", background:"rgba(212,175,55,.03)", padding:14
              }}>
                <div style={{ color:"var(--muted)", fontSize:12.5, fontWeight:500 }}>{x.k}</div>
                <div style={{ fontWeight:700, marginTop:8, color:"var(--gold2)" }}>{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
