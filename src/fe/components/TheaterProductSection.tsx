"use client";

import type { Product } from "../data/products";
import { WavyDivider } from "./WavyDivider";
import { useState } from "react";
import { useCart } from "../state/CartProvider";
import { formatVND } from "../utils/formatMoney";

function Cover({ kind, imageUrl }: { kind: Product["coverKind"]; imageUrl?: string }) {
  if (imageUrl) {
    return (
      <div style={{ height: 200, borderRadius: "8px", border: "2px solid var(--ink-brown)", overflow: "hidden", position: "relative", marginBottom: "16px" }}>
        <img 
          src={imageUrl} 
          alt="Cover" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(137, 75, 52, 0.3))" }} />
      </div>
    );
  }

  const bg = kind === "combo"
    ? "linear-gradient(135deg, rgba(137, 75, 52, 0.1), rgba(137, 75, 52, 0.05))"
    : "linear-gradient(135deg, rgba(137, 75, 52, 0.08), rgba(137, 75, 52, 0.03))";

  return (
    <div style={{ height: 200, borderRadius: "8px", border: "2px solid var(--ink-brown)", background: bg, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-brown)", fontSize: "18px", fontWeight: 600, opacity: 0.4, marginBottom: "16px" }}>
      HỒN KỊCH VIỆT
    </div>
  );
}

export function TheaterProductSection({ products }: { products: Product[] }) {
  return (
    <section
      id="san-pham"
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

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            margin: "0 0 12px 0",
            textAlign: "center",
            color: "var(--ink-brown)",
            fontSize: "28px",
            fontWeight: 700,
            fontFamily: "'Patrick Hand', 'Caveat', cursive",
          }}
        >
          Chọn phiên bản bạn muốn
        </h2>
        <p style={{ margin: "0 0 32px 0", textAlign: "center", color: "var(--ink-brown)", fontSize: "14px", opacity: 0.8 }}>
          Mỗi cuốn sách là một hành trình khám phá nghệ thuật sân khấu dân gian Việt Nam
        </p>

        {/* Products Grid */}
        <div style={{ display: "grid", gap: "20px" }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Bottom wavy divider */}
      <div style={{ position: "absolute", bottom: "-12px", left: 0, right: 0 }}>
        <WavyDivider />
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  const discount = product.compareAtVND
    ? Math.round(((product.compareAtVND - product.priceVND) / product.compareAtVND) * 100)
    : 0;

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        productId: product.id,
        title: product.title,
        unitPriceVND: product.priceVND,
        qty: quantity,
        badge: product.badge,
      },
    });
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "white",
        border: "2px solid var(--ink-brown)",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(137, 75, 52, 0.1)",
      }}
    >
      {/* Cover Image */}
      <Cover kind={product.coverKind} imageUrl={product.imageUrl} />

      {/* Badge */}
      {product.badge && (
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              background: "var(--ink-brown)",
              color: "var(--paper)",
              fontSize: "12px",
              fontWeight: 700,
              borderRadius: "6px",
            }}
          >
            {product.badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          margin: "0 0 8px 0",
          color: "var(--ink-brown)",
          fontSize: "22px",
          fontWeight: 700,
        }}
      >
        {product.title}
      </h3>

      {/* Subtitle */}
      <p
        style={{
          margin: "0 0 16px 0",
          color: "var(--ink-brown)",
          fontSize: "14px",
          opacity: 0.8,
          lineHeight: 1.6,
        }}
      >
        {product.subtitle}
      </p>

      {/* Price */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
          <span
            style={{
              color: "var(--ink-brown)",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            {product.priceVND.toLocaleString("vi-VN")}đ
          </span>
          {product.compareAtVND && (
            <>
              <span
                style={{
                  color: "var(--ink-brown)",
                  fontSize: "18px",
                  textDecoration: "line-through",
                  opacity: 0.5,
                }}
              >
                {product.compareAtVND.toLocaleString("vi-VN")}đ
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  background: "var(--maroon)",
                  color: "var(--paper)",
                  fontSize: "13px",
                  fontWeight: 700,
                  borderRadius: "6px",
                }}
              >
                -{discount}%
              </span>
            </>
          )}
        </div>
      </div>

      {/* Highlights */}
      {product.highlights && product.highlights.length > 0 && (
        <div style={{ marginBottom: "16px" }}>
          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              color: "var(--ink-brown)",
              fontSize: "14px",
              lineHeight: 1.8,
              opacity: 0.85,
            }}
          >
            {product.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Quantity Selector */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ color: "var(--ink-brown)", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
          Số lượng
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            style={{
              width: "36px",
              height: "36px",
              border: "2px solid var(--ink-brown)",
              borderRadius: "6px",
              background: "white",
              color: "var(--ink-brown)",
              fontSize: "18px",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            −
          </button>
          <span
            style={{
              minWidth: "40px",
              textAlign: "center",
              color: "var(--ink-brown)",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            style={{
              width: "36px",
              height: "36px",
              border: "2px solid var(--ink-brown)",
              borderRadius: "6px",
              background: "white",
              color: "var(--ink-brown)",
              fontSize: "18px",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={addToCart}
        style={{
          width: "100%",
          padding: "14px 20px",
          background: "var(--maroon)",
          color: "var(--ink-beige)",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: 700,
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--maroon-dark)";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(137, 46, 45, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--maroon)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Thêm vào giỏ hàng
      </button>

      {/* Description */}
      {product.description && (
        <div style={{ marginTop: "16px", padding: "14px", background: "rgba(137, 75, 52, 0.04)", borderRadius: "8px", border: "1px solid rgba(137, 75, 52, 0.1)" }}>
          <p style={{ margin: 0, color: "var(--ink-brown)", fontSize: "14px", lineHeight: 1.7, opacity: 0.85 }}>
            {product.description}
          </p>
        </div>
      )}

      {/* Video Link with QR Code */}
      {product.videoLink && (
        <div style={{
          marginTop: 12,
          padding: 14,
          background: "rgba(137, 75, 52, 0.08)",
          border: "1px solid rgba(137, 75, 52, 0.2)",
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
            border: "2px solid var(--maroon)",
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
              color: "var(--maroon)", 
              fontSize: 13, 
              fontWeight: 700, 
              marginBottom: 6,
              display: "flex",
              alignItems: "center",
              gap: 6
            }}>
              {product.qrTargetUrl ? "📱 Quét QR để tìm hiểu thêm" : "🎬 Xem video giới thiệu"}
            </div>
            <a 
              href={product.qrTargetUrl || product.videoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: "var(--ink-brown)",
                fontSize: 12,
                textDecoration: "underline",
                wordBreak: "break-all",
                display: "block",
                lineHeight: 1.5
              }}
            >
              {product.qrTargetUrl 
                ? `hon-kich-viet.vercel.app${product.qrTargetUrl}` 
                : product.videoLink}
            </a>
            <div style={{ 
              color: "rgba(137, 75, 52, 0.6)", 
              fontSize: 11, 
              marginTop: 6,
              fontStyle: "italic"
            }}>
              Quét mã QR để {product.qrTargetUrl ? "khám phá nội dung đặc biệt" : "xem video"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
