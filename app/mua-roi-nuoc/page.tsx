import { TheaterHeader } from "../../src/fe/components/TheaterHeader";
import { TheaterFooter } from "../../src/fe/components/TheaterFooter";
import { CartDrawer } from "../../src/fe/components/CartDrawer";
import { FloatingCloudsMuaRoi } from "../../src/fe/components/FloatingCloudsMuaRoi";
import Image from "next/image";

export default function MuaRoiNuocPage() {
  return (
    <div
      id="top"
      style={{
        backgroundImage: "url('/images/QR-Muaroinuoc/nen-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating clouds decoration */}
      <FloatingCloudsMuaRoi />

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
          src="/images/QR-Muaroinuoc/boder.png"
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
          src="/images/QR-Muaroinuoc/boder.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 3 }}>
        <TheaterHeader />
        
        {/* Hero Section */}
        <section style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
          padding: "48px 24px",
          minHeight: "400px",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.9))"
          }} />
          
          <div style={{ position: "relative", textAlign: "center", color: "var(--ink-beige)" }}>
            <h1 style={{
              margin: "0 0 16px 0",
              fontSize: "42px",
              fontWeight: 700,
              fontFamily: "'Patrick Hand', 'Caveat', cursive",
              textShadow: "0 4px 12px rgba(0,0,0,0.8)"
            }}>
              Múa Rối Nước Việt Nam
            </h1>
            <p style={{
              margin: "0 auto 24px auto",
              fontSize: "16px",
              lineHeight: 1.8,
              maxWidth: "500px",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)"
            }}>
              Múa rối nước là loại hình nghệ thuật biểu diễn độc đáo của Việt Nam, ra đời từ 
              thế kỷ XI tại đồng bằng Bắc Bộ. Nghệ thuật kết hợp điêu khắc gỗ, âm nhạc dân gian 
              và kỹ thuật điều khiển rối dưới nước, tạo nên màn trình diễn kỳ thú.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{
          background: "var(--paper)",
          padding: "48px 24px"
        }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{
              margin: "0 0 20px 0",
              color: "var(--ink-brown)",
              fontSize: "28px",
              fontWeight: 700,
              fontFamily: "'Patrick Hand', 'Caveat', cursive"
            }}>
              Đặc điểm nổi bật
            </h2>

            <div style={{
              display: "grid",
              gap: "16px"
            }}>
              {[
                { title: "Biểu diễn trên nước", desc: "Rối được điều khiển từ dưới nước bằng cơ chế giấu sau màn tre" },
                { title: "Nghệ thuật điêu khắc", desc: "Rối gỗ được điêu khắc tinh xảo từ gỗ sung, gỗ trầm" },
                { title: "Câu chuyện dân gian", desc: "Phản ánh đời sống nông thôn: cày cấy, chăn trau, đánh cá, lễ hội" },
                { title: "Âm nhạc truyền thống", desc: "Trống, sao, sáo, đàn nhị kết hợp với tiếng hát dân gian" },
                { title: "Di sản UNESCO", desc: "Công nhận Di sản văn hóa phi vật thể đại diện của nhân loại (2008)" },
                { title: "Nghệ thuật độc đáo", desc: "Hình thức biểu diễn rối trên mặt nước không có ở nước ngoài" }
              ].map((item, i) => (
                <div key={i} style={{
                  padding: "20px",
                  background: "white",
                  border: "2px solid var(--ink-brown)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(137, 75, 52, 0.1)"
                }}>
                  <h3 style={{
                    margin: "0 0 8px 0",
                    color: "#8B4513",
                    fontSize: "18px",
                    fontWeight: 700
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: "var(--ink-brown)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    opacity: 0.85
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "32px",
              padding: "24px",
              background: "rgba(139, 69, 19, 0.08)",
              borderRadius: "12px",
              border: "2px solid rgba(139, 69, 19, 0.2)",
              textAlign: "center"
            }}>
              <p style={{
                margin: 0,
                color: "var(--ink-brown)",
                fontSize: "15px",
                lineHeight: 1.8,
                fontStyle: "italic"
              }}>
                "Múa rối nước là một linh hồn, một màn diễn là một câu chuyện về cuộc sống, 
                về con người Việt Nam."
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
