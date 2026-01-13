"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../state/CartProvider";
import { Button } from "./Button";
import { formatVND } from "../utils/formatMoney";
import { isValidVNPhone, required } from "../utils/validators";
import type { OrderDraft, OrderResponse } from "../../be/contracts/order";

export function CheckoutForm() {
  const router = useRouter();
  const { state, dispatch } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const total = useMemo(
    () => state.items.reduce((s, i) => s + i.unitPriceVND * i.qty, 0),
    [state.items]
  );

  const canSubmit = state.items.length > 0;

  async function submit() {
    setError(null);

    // FE validation
    if (!required(customerName)) return setError("Vui lòng nhập họ tên.");
    if (!isValidVNPhone(phone)) return setError("Số điện thoại phải đúng 10 số và bắt đầu bằng 0.");
    if (!required(address)) return setError("Vui lòng nhập địa chỉ giao hàng.");

    const payload: OrderDraft = {
      customerName: customerName.trim(),
      phone: phone.replace(/\s+/g, ""),
      address: address.trim(),
      note: note.trim() || undefined,
      items: state.items.map(i => ({ productId: i.productId, qty: i.qty })),
    };

    setSubmitting(true);
    try {
      // BE placeholder: hiện tại chỉ giả lập tạo "orderId"
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as OrderResponse;

      if (!data.ok) {
        setError(data.message);
        return;
      }

      // thành công → clear cart + sang trang success
      dispatch({ type: "CLEAR" });
      router.push(`/success?orderId=${encodeURIComponent(data.orderId)}`);
    } catch {
      setError("Có lỗi mạng. Vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, alignItems:"start" }}>
      {/* Form */}
      <div style={{ border:"1px solid var(--line)", borderRadius:22, background:"rgba(255,255,255,.02)", padding:16 }}>
        <h2 style={{ margin:"6px 0 10px", fontSize:28 }}>Thông tin mua hàng</h2>
        <p style={{ margin:"0 0 14px", color:"var(--muted)", lineHeight:1.7 }}>
          Vui lòng để lại <b>Họ tên</b>, <b>SĐT</b>, <b>Địa chỉ</b> để tiến hành đặt hàng.
        </p>

        <div style={{ display:"grid", gap:12 }}>
          <label style={{ display:"grid", gap:6, color:"var(--muted)", fontSize:13 }}>
            Họ tên
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="VD: Nguyễn Văn A"
              style={inputStyle}
            />
          </label>

          <label style={{ display:"grid", gap:6, color:"var(--muted)", fontSize:13 }}>
            Số điện thoại
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              inputMode="numeric"
              placeholder="VD: 09xxxxxxxx"
              style={inputStyle}
            />
          </label>

          <label style={{ display:"grid", gap:6, color:"var(--muted)", fontSize:13 }}>
            Địa chỉ giao hàng
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành"
              style={{ ...inputStyle, resize:"vertical" }}
            />
          </label>

          <label style={{ display:"grid", gap:6, color:"var(--muted)", fontSize:13 }}>
            Ghi chú (tuỳ chọn)
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="Khung giờ nhận hàng, yêu cầu đóng gói..."
              style={{ ...inputStyle, resize:"vertical" }}
            />
          </label>

          {error && (
            <div style={{ border:"1px solid rgba(160,18,30,.35)", background:"rgba(160,18,30,.12)", borderRadius:16, padding:12, color:"var(--text)" }}>
              {error}
            </div>
          )}

          <Button
            variant="primary"
            full
            disabled={!canSubmit || submitting}
            style={{ opacity: canSubmit ? 1 : 0.6 }}
            onClick={submit}
          >
            {submitting ? "Đang tạo đơn..." : "Đặt hàng"}
          </Button>

          <div style={{ color:"var(--muted)", fontSize:12, lineHeight:1.6 }}>
            * Hiện tại BE đang là placeholder để demo flow. Khi nối Shopify, bước này sẽ tạo checkout và đơn sẽ nằm trong Admin Shopify.
          </div>
        </div>
      </div>

      {/* Summary */}
      <div style={{ border:"1px solid var(--line)", borderRadius:22, background:"linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.015))", padding:16 }}>
        <h3 style={{ margin:"6px 0 10px" }}>Tóm tắt đơn hàng</h3>

        {state.items.length ? (
          <div style={{ display:"grid", gap:10 }}>
            {state.items.map(i => (
              <div key={i.productId} style={{ display:"flex", justifyContent:"space-between", gap:10, color:"var(--muted)" }}>
                <div style={{ minWidth:0 }}>
                  <div style={{ color:"var(--text)", fontWeight:850 }}>{i.title}</div>
                  <div style={{ fontSize:12 }}>{i.badge ?? ""} • SL: {i.qty}</div>
                </div>
                <div style={{ color:"var(--text)", fontWeight:900 }}>{formatVND(i.unitPriceVND * i.qty)}</div>
              </div>
            ))}

            <div className="hr" />

            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div style={{ color:"var(--muted)" }}>Tạm tính</div>
              <div style={{ fontWeight:950, fontSize:18 }}>{formatVND(total)}</div>
            </div>
          </div>
        ) : (
          <div style={{ color:"var(--muted)", lineHeight:1.7 }}>
            Giỏ hàng đang trống. Quay lại trang chủ để chọn sản phẩm.
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 14,
  border: "1px solid var(--line)",
  background: "rgba(0,0,0,.18)",
  color: "var(--text)",
  outline: "none",
};
