"use client";

import Image from "next/image";

export function TheaterHeader() {
  return (
    <header
      style={{
        background: "var(--maroon)",
        padding: "32px 24px 28px",
        position: "relative",
        overflow: "visible" // Thay đổi để đám mây không bị cắt
      }}
    >
      {/* Ảnh nền header - Có thể thay đổi */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity: 0.15 // Độ mờ để không che chữ
      }}>
        <Image
          src="/images/green-border.png"
          alt=""
          fill
          style={{ 
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </div>

      {/* Đám mây góc trái trên - TO HƠN */}
      <div style={{
        position: "absolute",
        top: -30, // Đẩy lên trên để không bị cắt
        left: -30, // Đẩy sang trái
        width: "100px", // Tăng kích thước
        height: "200px",
        zIndex: 1,
        pointerEvents: "none"
      }}>
        <Image
          src="/images/cloud-large.png"
          alt=""
          fill
          style={{ 
            objectFit: "contain",
            objectPosition: "left top"
          }}
        />
      </div>

      {/* Đám mây góc phải trên - TO HƠN */}
      <div style={{
        position: "absolute",
        top: -30, // Đẩy lên trên để không bị cắt
        right: -60, // Đẩy sang phải
        width: "100px", // Tăng kích thước
        height: "200px",
        zIndex: 1,
        pointerEvents: "none"
      }}>
        <Image
          src="/images/cloud-small.png"
          alt=""
          fill
          style={{ 
            objectFit: "contain",
            objectPosition: "right top"
          }}
        />
      </div>

      {/* Border decoration at top */}
      <div style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        right: 0,
        height: "80px",
        zIndex: 1
      }}>
        <Image
          src="/images/green-border.png"
          alt=""
          fill
          style={{ 
            objectFit: "contain",
            objectPosition: "center top"
          }}
        />
      </div>

      {/* Content */}
      <div style={{ 
        position: "relative", 
        zIndex: 2,
        textAlign: "center" 
      }}>
        {/* Logo Hồn Kịch Việt */}
        <div style={{
          width: "80px",
          height: "80px",
          margin: "0 auto 16px auto",
          position: "relative"
        }}>
          <Image
            src="/images/logo.png"
            alt="Hồn Kịch Việt"
            fill
            style={{ 
              objectFit: "contain"
            }}
            priority
          />
        </div>

        <h1 style={{
          margin: "0 0 8px 0",
          color: "var(--ink-beige)",
          fontSize: "32px",
          fontWeight: 700,
          fontFamily: "'Patrick Hand', 'Caveat', cursive"
        }}>
          Hồn Kịch Việt
        </h1>
        
        <p style={{
          margin: "0 0 20px 0",
          color: "var(--ink-beige)",
          fontSize: "15px",
          opacity: 0.9
        }}>
          Hồn kịch lưu phương - Văn hoá truyền thế
        </p>

        {/* Button */}
        <a
          href="#products"
          style={{
            display: "inline-block",
            padding: "12px 32px",
            background: "transparent",
            border: "2px solid var(--ink-beige)",
            borderRadius: "8px",
            color: "var(--ink-beige)",
            fontSize: "16px",
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.3s ease"
          }}
        >
          Tìm hiểu ngay
        </a>
      </div>
    </header>
  );
}
