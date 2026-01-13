"use client";
import { useRouter } from "next/navigation";
import { useCart } from "../state/CartProvider";
import { Button } from "./Button";
import { QuantityStepper } from "./QuantityStepper";
import { formatVND } from "../utils/formatMoney";

export function CartDrawer() {
  const router = useRouter();
  const { state, dispatch } = useCart();
  const total = state.items.reduce((s, i) => s + i.unitPriceVND * i.qty, 0);

  if (!state.isOpen) return null;

  return (
    <div style={{ position:"fixed", inset:0, zIndex:60 }}>
      <div onClick={() => dispatch({ type:"CLOSE" })} style={{ position:"absolute", inset:0, background:"rgba(0,0,0,.62)" }} />
      <aside style={{
        position:"absolute", right:0, top:0, height:"100%", width:"min(460px, 92vw)",
        background:"linear-gradient(180deg, var(--panel2), var(--panel))",
        borderLeft:"1px solid var(--line)", boxShadow:"var(--shadow)",
        display:"flex", flexDirection:"column"
      }}>
        <div style={{ padding:16, borderBottom:"1px solid var(--line)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ fontWeight:950, fontSize:18 }}>Giỏ hàng</div>
            <div style={{ color:"var(--muted)", fontSize:13, marginTop:4 }}>
              {state.items.length ? "Nhập thông tin để đặt hàng" : "Chưa có sản phẩm"}
            </div>
          </div>
          <Button onClick={() => dispatch({ type:"CLOSE" })}>Đóng</Button>
        </div>

        <div style={{ padding:16, display:"grid", gap:12, overflow:"auto" }}>
          {state.items.map(item => (
            <div key={item.productId} style={{ border:"1px solid var(--line)", borderRadius:18, background:"rgba(255,255,255,.02)", padding:12, display:"grid", gap:10 }}>
              <div style={{ display:"flex", justifyContent:"space-between", gap:12 }}>
                <div style={{ minWidth:0 }}>
                  <div style={{ fontWeight:900 }}>{item.title}</div>
                  <div style={{ color:"var(--muted)", fontSize:13, marginTop:4 }}>
                    {formatVND(item.unitPriceVND)} • {item.badge ?? ""}
                  </div>
                </div>
                <Button variant="danger" onClick={() => dispatch({ type:"REMOVE_ITEM", payload:{ productId:item.productId } })} style={{ height:40 }}>
                  Xóa
                </Button>
              </div>

              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:12 }}>
                <QuantityStepper
                  qty={item.qty}
                  onChange={(next) => dispatch({ type:"SET_QTY", payload:{ productId:item.productId, qty:next } })}
                />
                <div style={{ fontWeight:950 }}>{formatVND(item.unitPriceVND * item.qty)}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding:16, borderTop:"1px solid var(--line)" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
            <div style={{ color:"var(--muted)" }}>Tạm tính</div>
            <div style={{ fontWeight:950, fontSize:18 }}>{formatVND(total)}</div>
          </div>

          <Button
            variant="primary"
            full
            disabled={!state.items.length}
            style={{ opacity: state.items.length ? 1 : 0.6 }}
            onClick={() => {
              dispatch({ type:"CLOSE" });
              router.push("/checkout");
            }}
          >
            Nhập thông tin & đặt hàng →
          </Button>

          <div style={{ marginTop:10 }}>
            <Button full disabled={!state.items.length} style={{ opacity: state.items.length ? 1 : 0.6 }} onClick={() => dispatch({ type:"CLEAR" })}>
              Xóa giỏ
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}
