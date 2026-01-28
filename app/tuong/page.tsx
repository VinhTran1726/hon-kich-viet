"use client";

import { TheaterHeader } from "../../src/fe/components/TheaterHeader";
import { TheaterFooter } from "../../src/fe/components/TheaterFooter";
import { CartDrawer } from "../../src/fe/components/CartDrawer";
import { FloatingCloudsTuong } from "../../src/fe/components/FloatingCloudsTuong";
import Image from "next/image";

export default function TuongPage() {
  return (
    <div
      id="top"
      style={{
        backgroundImage: "url('/images/QR-Tuong/nen-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        minHeight: "100vh",
        position: "relative",
        overflow: "auto", // Cho phép scroll
      }}
    >
      {/* Floating clouds decoration */}
      <FloatingCloudsTuong />

      {/* Green border decoration at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "150px",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/QR-Tuong/boder.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          priority
        />
      </div>

      {/* Green border decoration at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "150px",
          zIndex: 2,
          pointerEvents: "none",
          transform: "rotate(180deg)",
        }}
      >
        <Image
          src="/images/QR-Tuong/boder.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      
      {/* Main content wrapper */}
      <div style={{ 
        width: "100%", 
        maxWidth: "600px", 
        margin: "0 auto", 
        position: "relative", 
        zIndex: 3,
        minHeight: "100vh" // Đảm bảo chiếm đủ chiều cao
      }}>
        <TheaterHeader />
        
        {/* Hero Section */}
        <section style={{
          padding: "48px 16px",
          minHeight: "300px", // Giảm xuống để thấy được background
          position: "relative",
          background: "transparent" // Transparent để thấy background
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(139, 30, 30, 0.3), rgba(139, 30, 30, 0.5))", // Giảm opacity
            borderRadius: "12px"
          }} />
          
          <div style={{ position: "relative", textAlign: "center", color: "var(--ink-beige)" }}>
            <h1 style={{
              margin: "0 0 16px 0",
              fontSize: "clamp(32px, 8vw, 42px)",
              fontWeight: 700,
              fontFamily: "'Patrick Hand', 'Caveat', cursive",
              textShadow: "0 4px 12px rgba(0,0,0,0.8)"
            }}>
              Hát Bội - Tuồng Cổ Truyền
            </h1>
            <p style={{
              margin: "0 auto 24px auto",
              fontSize: "clamp(14px, 3.5vw, 16px)",
              lineHeight: 1.8,
              maxWidth: "500px",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
              padding: "0 8px"
            }}>
              Hát bội (Tuồng) là loại hình nghệ thuật sân khấu truyền thống Trung Bộ và Nam Bộ, 
              xuất hiện từ thế kỷ XII. Với trang phục hoa lệ, động tác võ thuật và âm nhạc 
              uy nghiêm trang, Tuồng mang dấu ấn của nghệ thuật cung đình phương Bắc.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{
          background: "rgba(254, 248, 200, 0.92)", // Giảm opacity xuống
          backdropFilter: "blur(8px)",
          padding: "32px 16px",
          borderRadius: "12px",
          margin: "16px 8px 80px 8px" // Thêm margin bottom để thấy background phía dưới
        }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{
              margin: "0 0 20px 0",
              color: "var(--ink-brown)",
              fontSize: "clamp(24px, 6vw, 28px)",
              fontWeight: 700,
              fontFamily: "'Patrick Hand', 'Caveat', cursive"
            }}>
              Đặc điểm nổi bật
            </h2>

            <div style={{
              display: "grid",
              gap: "12px"
            }}>
              {[
                { title: "Trang phục hoàng gia", desc: "Áo mão hoa lệ, mũ kim tuyến, mặt nạ sơn dầu thể hiện phẩm chất nhân vật" },
                { title: "Động tác võ thuật", desc: "Kết hợp võ cổ truyền với điệu bộ, biểu diễn phiêu dã và mạnh mẽ" },
                { title: "Âm nhạc trang nghiêm", desc: "Trống chiêng, kèn, đàn nhị tạo không gian uy nghiêm, hùng tráng" },
                { title: "Câu chuyện lịch sử", desc: "Kể về anh hùng, danh tướng, truyền thuyết và sự kiện lịch sử" },
                { title: "Nghệ thuật biểu cảm", desc: "Tay chân, ánh mắt, nghệ thuật mã hóa truyền tải cảm xúc nhân vật" },
                { title: "Di sản quốc gia", desc: "Được công nhận là Di sản văn hóa phi vật thể quốc gia" }
              ].map((item, i) => (
                <div key={i} style={{
                  padding: "16px",
                  background: "rgba(255, 255, 255, 0.95)", // Thêm rgba để có độ trong suốt nhẹ
                  border: "2px solid var(--ink-brown)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(137, 75, 52, 0.1)"
                }}>
                  <h3 style={{
                    margin: "0 0 8px 0",
                    color: "var(--maroon)",
                    fontSize: "clamp(16px, 4vw, 18px)",
                    fontWeight: 700
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: "var(--ink-brown)",
                    fontSize: "clamp(13px, 3vw, 14px)",
                    lineHeight: 1.7,
                    opacity: 0.85
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "24px",
              padding: "20px 16px",
              background: "rgba(139, 30, 30, 0.08)",
              borderRadius: "12px",
              border: "2px solid rgba(139, 30, 30, 0.2)",
              textAlign: "center"
            }}>
              <p style={{
                margin: 0,
                color: "var(--ink-brown)",
                fontSize: "clamp(14px, 3.5vw, 15px)",
                lineHeight: 1.8,
                fontStyle: "italic"
              }}>
                "Tuồng không chỉ là nghệ thuật biểu diễn, mà còn là cách ghi nhớ 
                và tôn vinh lịch sử dân tộc qua từng nhân vật, từng màn diễn."
              </p>
            </div>
          </div>
        </section>

        <TheaterFooter />
      </div>
      <CartDrawer />
    </div>
  );
}
