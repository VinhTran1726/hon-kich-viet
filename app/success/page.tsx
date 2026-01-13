import Link from "next/link";

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ orderId?: string }> }) {
  const params = await searchParams;
  
  return (
    <main style={{ padding:"54px 0" }}>
      <div className="container">
        <div style={{
          border:"1px solid var(--line)",
          borderRadius:22,
          background:"rgba(255,255,255,.02)",
          padding:32,
          maxWidth:720,
          margin:"0 auto"
        }}>
          <div style={{ textAlign:"center", marginBottom:24 }}>
            <div style={{ 
              fontSize:56, 
              color:"var(--gold)", 
              marginBottom:12 
            }}>✓</div>
            <h1 style={{ margin:"0 0 12px", fontSize:32, color:"var(--gold)" }}>Đặt hàng thành công!</h1>
            <p style={{ color:"var(--muted)", lineHeight:1.75, margin:0, fontSize:16 }}>
              Cảm ơn bạn đã đặt hàng tại Hồn Kịch Việt.
            </p>
          </div>

          <div style={{ 
            background:"rgba(212,175,55,.08)", 
            border:"1px solid rgba(212,175,55,.2)", 
            borderRadius:12, 
            padding:20,
            marginBottom:24
          }}>
            <div style={{ color:"var(--muted)", fontSize:14, marginBottom:8 }}>Mã đơn hàng</div>
            <div style={{ 
              fontSize:20, 
              fontWeight:700, 
              color:"var(--gold)", 
              fontFamily:"monospace",
              letterSpacing:1
            }}>
              {params.orderId ?? "N/A"}
            </div>
          </div>

          <div style={{ 
            borderTop:"1px solid var(--line)", 
            paddingTop:20,
            color:"var(--muted)",
            fontSize:15,
            lineHeight:1.8
          }}>
            <p style={{ margin:"0 0 12px" }}>
              📦 Đơn hàng của bạn đã được ghi nhận và đang được xử lý.
            </p>
            <p style={{ margin:"0 0 12px" }}>
              📞 Chúng tôi sẽ liên hệ với bạn qua số điện thoại đã cung cấp để xác nhận đơn hàng.
            </p>
            <p style={{ margin:0 }}>
              🚚 Thời gian giao hàng dự kiến: 3-5 ngày làm việc.
            </p>
          </div>

          <div style={{ marginTop:28, textAlign:"center" }}>
            <Link href="/" style={{
              display:"inline-flex", 
              alignItems:"center", 
              gap:8,
              padding:"14px 24px", 
              borderRadius:999,
              background:"linear-gradient(180deg, var(--red2), var(--red))",
              boxShadow:"0 10px 32px var(--redGlow)", 
              border:"1px solid rgba(212,175,55,.15)", 
              fontWeight:700, 
              fontSize:15
            }}>
              <span>←</span> Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
