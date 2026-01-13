"use client";
import { useEffect, useState } from "react";

export function FloatingPuppets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hiện sau 1s để không làm gián đoạn load trang
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Bên trái - từ trên xuống */}
      
      {/* Mặt nạ tuồng - trên cùng */}
      <div
        style={{
          position: "fixed",
          left: 30,
          top: "20%",
          zIndex: 20,
          animation: "float-left 4s ease-in-out infinite",
          opacity: 0.8,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: 64,
            filter: "drop-shadow(0 4px 12px rgba(212,175,55,.4))",
            transform: "rotate(-8deg)",
          }}
        >
          🎭
        </div>
      </div>

      {/* Đàn truyền thống - giữa trên */}
      <div
        style={{
          position: "fixed",
          left: 30,
          top: "45%",
          zIndex: 20,
          animation: "float-left 5s ease-in-out infinite 1s",
          opacity: 0.75,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: 56,
            filter: "drop-shadow(0 3px 8px rgba(212,175,55,.3))",
            transform: "rotate(-10deg)",
          }}
        >
          🪕
        </div>
      </div>

      {/* Quạt giấy - giữa dưới */}
      <div
        style={{
          position: "fixed",
          left: 30,
          top: "70%",
          zIndex: 20,
          animation: "float-left 4.5s ease-in-out infinite 2s",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: 48,
            filter: "drop-shadow(0 3px 8px rgba(212,175,55,.3))",
            transform: "rotate(-12deg)",
          }}
        >
          🪭
        </div>
      </div>

      {/* Bên phải - từ trên xuống */}
      
      {/* Rối nước - trên cùng */}
      <div
        style={{
          position: "fixed",
          right: 30,
          top: "20%",
          zIndex: 20,
          animation: "float-right 5s ease-in-out infinite",
          opacity: 0.8,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: 64,
            filter: "drop-shadow(0 4px 12px rgba(184,46,46,.4))",
            transform: "rotate(12deg)",
          }}
        >
          🎎
        </div>
      </div>

      {/* Đèn lồng - giữa trên */}
      <div
        style={{
          position: "fixed",
          right: 30,
          top: "45%",
          zIndex: 20,
          animation: "float-right 4.5s ease-in-out infinite 0.5s",
          opacity: 0.75,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: 56,
            filter: "drop-shadow(0 3px 8px rgba(184,46,46,.3))",
            transform: "rotate(10deg)",
          }}
        >
          🏮
        </div>
      </div>

      {/* Trống - giữa dưới */}
      <div
        style={{
          position: "fixed",
          right: 30,
          top: "70%",
          zIndex: 20,
          animation: "float-right 5.5s ease-in-out infinite 1.5s",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: 48,
            filter: "drop-shadow(0 3px 8px rgba(184,46,46,.3))",
            transform: "rotate(8deg)",
          }}
        >
          🥁
        </div>
      </div>

      <style jsx>{`
        @keyframes float-left {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(-8deg);
          }
          50% {
            transform: translateY(-20px) translateX(8px) rotate(-5deg);
          }
        }

        @keyframes float-right {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-25px) translateX(-8px) rotate(8deg);
          }
        }
      `}</style>
    </>
  );
}
