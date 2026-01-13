"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { formatVND } from "../../src/fe/utils/formatMoney";
import { PRODUCTS } from "../../src/fe/data/products";

interface Order {
  _id: string;
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  note?: string;
  items: Array<{ productId: string; qty: number }>;
  createdAt: string;
}

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setOrders(data.orders);
        } else {
          setError(data.message);
        }
      })
      .catch(() => setError("Không thể tải danh sách đơn hàng"))
      .finally(() => setLoading(false));
  }, []);

  const getProductName = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    return product ? product.title : productId;
  };

  const calculateTotal = (items: Array<{ productId: string; qty: number }>) => {
    return items.reduce((sum, item) => {
      const product = PRODUCTS.find((p) => p.id === item.productId);
      return sum + (product ? product.priceVND * item.qty : 0);
    }, 0);
  };

  if (loading) {
    return (
      <main style={{ padding: "54px 0", minHeight: "80vh" }}>
        <div className="container">
          <div style={{ textAlign: "center", color: "var(--muted)", fontSize: 16 }}>
            Đang tải đơn hàng...
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main style={{ padding: "54px 0", minHeight: "80vh" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              color: "var(--red2)",
              fontSize: 16,
              padding: 24,
              border: "1px solid var(--red)",
              borderRadius: 12,
              background: "rgba(184,46,46,.1)",
            }}
          >
            {error}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: "42px 0 60px", minHeight: "100vh", background: "rgba(10,6,5,.5)" }}>
      <div className="container" style={{ maxWidth: 1280 }}>
        {/* Header */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: 36,
          padding: "24px 28px",
          background: "rgba(212,175,55,.08)",
          border: "1px solid rgba(212,175,55,.25)",
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,.3)"
        }}>
          <div>
            <h1 style={{ margin: "0 0 10px", fontSize: 32, color: "var(--gold)", fontWeight: 700, letterSpacing: 0.5 }}>
              📊 Quản lý đơn hàng
            </h1>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <div style={{ 
                padding: "6px 14px", 
                background: "rgba(212,175,55,.15)", 
                borderRadius: 20,
                fontSize: 14,
                fontWeight: 600
              }}>
                Tổng: <span style={{ color: "var(--gold)", fontSize: 16 }}>{orders.length}</span> đơn
              </div>
              {orders.length > 0 && (
                <div style={{ color: "var(--muted)", fontSize: 13 }}>
                  📅 Cập nhật: {new Date().toLocaleString("vi-VN", { 
                    day: "2-digit", 
                    month: "2-digit", 
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </div>
              )}
            </div>
          </div>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 22px",
              borderRadius: 999,
              background: "linear-gradient(180deg, var(--red2), var(--red))",
              boxShadow: "0 6px 20px var(--redGlow)",
              border: "1px solid rgba(212,175,55,.2)",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            ← Về trang chủ
          </Link>
        </div>

        {orders.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: 64,
              border: "1px solid var(--line)",
              borderRadius: 16,
              background: "rgba(255,255,255,.02)",
            }}
          >
            <div style={{ fontSize: 72, marginBottom: 20, opacity: 0.4 }}>📦</div>
            <p style={{ color: "var(--muted)", margin: 0, fontSize: 16 }}>Chưa có đơn hàng nào</p>
            <p style={{ color: "var(--muted)", margin: "8px 0 0", fontSize: 14 }}>
              Đơn hàng mới sẽ xuất hiện ở đây
            </p>
          </div>
        ) : (
          <div style={{ display: "grid", gap: 20 }}>
            {orders.map((order, index) => (
              <div
                key={order._id}
                style={{
                  border: "1px solid rgba(212,175,55,.2)",
                  borderRadius: 16,
                  background: "linear-gradient(135deg, rgba(255,255,255,.03) 0%, rgba(212,175,55,.02) 100%)",
                  padding: 24,
                  boxShadow: "0 4px 16px rgba(0,0,0,.2)",
                  transition: "all 0.2s",
                }}
              >
                {/* Header Card */}
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "start",
                  marginBottom: 20,
                  paddingBottom: 16,
                  borderBottom: "2px solid rgba(212,175,55,.15)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, var(--red2), var(--red))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--gold)",
                      boxShadow: "0 4px 12px var(--redGlow)"
                    }}>
                      #{index + 1}
                    </div>
                    <div>
                      <div style={{ color: "var(--muted)", fontSize: 12, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>
                        Mã đơn hàng
                      </div>
                      <div
                        style={{
                          fontFamily: "monospace",
                          fontWeight: 700,
                          color: "var(--gold)",
                          fontSize: 18,
                          letterSpacing: 1,
                        }}
                      >
                        {order.orderId}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    padding: "8px 16px",
                    background: "rgba(139,30,30,.2)",
                    border: "1px solid rgba(139,30,30,.4)",
                    borderRadius: 20,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--gold2)"
                  }}>
                    🕐 {new Date(order.createdAt).toLocaleString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>

                {/* Customer Info */}
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr 1fr", 
                  gap: 20,
                  marginBottom: 20,
                  padding: 16,
                  background: "rgba(10,6,5,.3)",
                  borderRadius: 12
                }}>
                  <div>
                    <div style={{ 
                      color: "var(--gold2)", 
                      fontSize: 12, 
                      marginBottom: 8, 
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: 0.5
                    }}>
                      👤 Khách hàng
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{order.customerName}</div>
                    <div style={{ fontSize: 14, color: "var(--muted)" }}>📞 {order.phone}</div>
                  </div>
                  <div>
                    <div style={{ 
                      color: "var(--gold2)", 
                      fontSize: 12, 
                      marginBottom: 8,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: 0.5
                    }}>
                      📍 Địa chỉ giao hàng
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7 }}>{order.address}</div>
                  </div>
                </div>

                {order.note && (
                  <div style={{ 
                    marginBottom: 20,
                    padding: 14,
                    background: "rgba(212,175,55,.08)",
                    borderLeft: "3px solid var(--gold)",
                    borderRadius: "0 8px 8px 0"
                  }}>
                    <div style={{ color: "var(--gold2)", fontSize: 12, marginBottom: 6, fontWeight: 600 }}>
                      💬 Ghi chú
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.6, fontStyle: "italic", color: "var(--muted)" }}>
                      "{order.note}"
                    </div>
                  </div>
                )}

                {/* Products */}
                <div
                  style={{
                    padding: 18,
                    background: "rgba(212,175,55,.06)",
                    borderRadius: 12,
                    border: "1px solid rgba(212,175,55,.2)",
                  }}
                >
                  <div style={{ 
                    color: "var(--gold2)", 
                    fontSize: 13, 
                    marginBottom: 14, 
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                  }}>
                    📦 Sản phẩm đặt mua
                  </div>
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 15,
                        marginBottom: 10,
                        padding: "10px 12px",
                        background: "rgba(0,0,0,.2)",
                        borderRadius: 8,
                      }}
                    >
                      <span style={{ fontWeight: 500 }}>
                        {getProductName(item.productId)} 
                        <span style={{ 
                          marginLeft: 8,
                          padding: "2px 8px",
                          background: "var(--red)",
                          borderRadius: 12,
                          fontSize: 13,
                          fontWeight: 700
                        }}>
                          ×{item.qty}
                        </span>
                      </span>
                      <span style={{ fontWeight: 700, color: "var(--gold2)" }}>
                        {formatVND(
                          (PRODUCTS.find((p) => p.id === item.productId)?.priceVND || 0) * item.qty
                        )}
                      </span>
                    </div>
                  ))}
                  <div
                    style={{
                      borderTop: "2px solid rgba(212,175,55,.3)",
                      marginTop: 14,
                      paddingTop: 14,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontWeight: 700,
                      fontSize: 18,
                    }}
                  >
                    <span style={{ color: "var(--gold2)" }}>💰 Tổng cộng</span>
                    <span style={{ 
                      color: "var(--gold)", 
                      fontSize: 20,
                      textShadow: "0 2px 8px var(--goldGlow)"
                    }}>
                      {formatVND(calculateTotal(order.items))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
