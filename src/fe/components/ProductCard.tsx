"use client";
import type { Product } from "../data/products";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { formatVND } from "../utils/formatMoney";
import { useCart } from "../state/CartProvider";

function Cover({ kind, imageUrl }: { kind: Product["coverKind"]; imageUrl?: string }) {
  // Nếu có imageUrl thì dùng ảnh thật, không thì dùng gradient
  if (imageUrl) {
    return (
      <div style={{ height:300, borderRadius:"var(--radius)", border:"1px solid var(--line)", boxShadow:"var(--shadow)", position:"relative", overflow:"hidden", background:"#FEF8C8" }}>
        <img 
          src={imageUrl} 
          alt="Cover" 
          style={{ width:"100%", height:"100%", objectFit:"contain" }}
        />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, transparent 70%, rgba(0,0,0,.4))", pointerEvents:"none" }} />
        <div style={{ position:"absolute", left:14, bottom:14, fontWeight:700, letterSpacing:0.9, color:"var(--gold)", textShadow:"0 2px 8px rgba(0,0,0,.8)" }}>
          HỒN KỊCH VIỆT
        </div>
      </div>
    );
  }

  // Fallback: gradient nếu chưa có ảnh
  const bg =
    kind === "combo"
      ? "radial-gradient(600px 220px at 30% 20%, rgba(184,46,46,.38), transparent 60%), linear-gradient(135deg, rgba(212,175,55,.06), rgba(184,46,46,.02))"
      : "radial-gradient(600px 220px at 30% 20%, rgba(212,175,55,.18), transparent 60%), radial-gradient(700px 260px at 80% 70%, rgba(184,46,46,.22), transparent 60%), linear-gradient(135deg, rgba(212,175,55,.06), rgba(184,46,46,.02))";

  return (
    <div style={{ height:260, borderRadius:"var(--radius)", border:"1px solid var(--line)", background:bg, boxShadow:"var(--shadow)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, opacity:0.25, background:"linear-gradient(to bottom, transparent, rgba(0,0,0,.7))" }} />
      <div style={{ position:"absolute", left:14, bottom:14, fontWeight:700, letterSpacing:0.9, color:"var(--gold)", textShadow:"0 0 12px var(--goldGlow)" }}>
        HỒN KỊCH VIỆT
      </div>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        productId: product.id,
        title: product.title,
        unitPriceVND: product.priceVND,
        qty: 1,
        badge: product.badge,
      },
    });
  };

  return (
    <article style={{
      border:"1px solid var(--line)",
      background:"linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.015))",
      borderRadius:22,
      padding:14,
      display:"flex",
      flexDirection:"column",
      gap:12,
    }}>
      <Cover kind={product.coverKind} imageUrl={product.imageUrl} />

      <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
        {product.badge && <Badge>{product.badge}</Badge>}
        {product.compareAtVND && <Badge>Tiết kiệm {formatVND(product.compareAtVND - product.priceVND)}</Badge>}
      </div>

      <div>
        <h3 style={{ margin:"2px 0 6px", fontSize:22 }}>{product.title}</h3>
        <div style={{ color:"var(--muted)", fontSize:14, lineHeight:1.6 }}>{product.subtitle}</div>
      </div>

      <div style={{ display:"flex", alignItems:"baseline", gap:10 }}>
        <div style={{ fontSize:22, fontWeight:950 }}>{formatVND(product.priceVND)}</div>
        {product.compareAtVND && <div style={{ color:"var(--muted)", textDecoration:"line-through" }}>{formatVND(product.compareAtVND)}</div>}
      </div>

      <ul style={{ margin:0, paddingLeft:18, color:"var(--muted)", lineHeight:1.85 }}>
        {product.highlights.map(h => <li key={h}>{h}</li>)}
      </ul>

      {product.description && (
        <p style={{ margin:0, color:"var(--muted)", fontSize:14, lineHeight:1.7, borderTop:"1px solid var(--line)", paddingTop:12 }}>
          {product.description}
        </p>
      )}

      {product.videoLink && (
        <div style={{
          marginTop: 8,
          padding: 14,
          background: "rgba(212,175,55,.08)",
          border: "1px solid rgba(212,175,55,.25)",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          gap: 12
        }}>
          <div style={{
            width: 80,
            height: 80,
            background: "white",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            border: "2px solid var(--gold)",
            overflow: "hidden",
            position: "relative"
          }}>
            {product.qrCodeUrl ? (
              <img 
                src={product.qrCodeUrl} 
                alt="QR Code"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            ) : (
              <div style={{
                fontSize: 10,
                color: "#999",
                textAlign: "center",
                padding: 8,
                lineHeight: 1.4
              }}>
                Chèn ảnh QR code vào đây
              </div>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ 
              color: "var(--gold2)", 
              fontSize: 13, 
              fontWeight: 700, 
              marginBottom: 6,
              display: "flex",
              alignItems: "center",
              gap: 6
            }}>
              🎬 Xem video giới thiệu
            </div>
            <a 
              href={product.videoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: "var(--gold)",
                fontSize: 13,
                textDecoration: "underline",
                wordBreak: "break-all",
                display: "block",
                lineHeight: 1.5
              }}
            >
              {product.videoLink}
            </a>
            <div style={{ 
              color: "var(--muted)", 
              fontSize: 11, 
              marginTop: 6,
              fontStyle: "italic"
            }}>
              Quét mã QR hoặc nhấp vào link để xem
            </div>
          </div>
        </div>
      )}

      <div style={{ marginTop:"auto", display:"grid", gap:10 }}>
        <Button variant="primary" full onClick={addToCart}>Thêm vào giỏ</Button>
        <Button full onClick={() => { addToCart(); dispatch({ type: "OPEN" }); }}>Mua nhanh →</Button>
      </div>
    </article>
  );
}
