import { TheaterHeader } from "../../src/fe/components/TheaterHeader";
import { TheaterFooter } from "../../src/fe/components/TheaterFooter";
import { CartDrawer } from "../../src/fe/components/CartDrawer";
import { FloatingCloudsDonCa } from "../../src/fe/components/FloatingCloudsDonCa";
import Image from "next/image";

export default function CaiLuongPage() {
  return (
    <div
      id="top"
      style={{
        backgroundImage: "url('/images/QR-Doncataitu/nen-1-don-ca-tai-tu.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating clouds decoration */}
      <FloatingCloudsDonCa />

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
          src="/images/QR-Doncataitu/boder.png"
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
          src="/images/QR-Doncataitu/boder.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 3 }}>
        <TheaterHeader />
        
        {/* Hero Section */}
        <section style={{
          padding: "48px 24px",
          minHeight: "400px",
          position: "relative"
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(212, 166, 80, 0.4), rgba(212, 166, 80, 0.6))",
            borderRadius: "12px"
          }} />
          
          <div style={{ position: "relative", textAlign: "center", color: "var(--ink-beige)" }}>
            <h1 style={{
              margin: "0 0 16px 0",
              fontSize: "42px",
              fontWeight: 700,
              fontFamily: "'Patrick Hand', 'Caveat', cursive",
              textShadow: "0 4px 12px rgba(0,0,0,0.8)"
            }}>
              Đờn Ca Tài Tử Nam Bộ
            </h1>
            <p style={{
              margin: "0 auto 24px auto",
              fontSize: "16px",
              lineHeight: 1.8,
              maxWidth: "500px",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)"
            }}>
              Đờn ca tài tử là loại hình âm nhạc dân gian cổ truyền Nam Bộ, hình thành từ cuối thế kỷ XIX.
              Với giai điệu ngâu nga, du dương và sự kết hợp hoa hợp giữa nhạc cụ dân tộc,
              Đờn ca tài tử thể hiện vẻ đẹp tâm hồn con người miền Nam.
            </p>
          </div>
        </section>

        {/* Featured Image Section */}
        <section style={{
          padding: "24px",
        }}>
          <div style={{
            position: "relative",
            width: "100%",
            height: "300px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "3px solid var(--ink-brown)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
          }}>
            <img 
              src="/images/don-ca-cover.png" 
              alt="Đờn Ca Tài Tử"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "16px",
              background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
              color: "var(--paper)",
              textAlign: "center"
            }}>
              <p style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: 600,
                fontStyle: "italic"
              }}>
                Đờn Ca Tài Tử - Âm nhạc dân gian Nam Bộ
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{
          background: "rgba(254, 248, 200, 0.85)",
          backdropFilter: "blur(10px)",
          padding: "48px 24px",
          borderRadius: "12px",
          margin: "24px 0"
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
                { title: "Nhạc cụ truyền thống", desc: "Đàn kìm, đàn tranh, đàn bầu, sóng loan, bầu, phách, trống" },
                { title: "Giai điệu du dương", desc: "20 bài hát truyền thống với giai điệu ngâu nga, ấm áp" },
                { title: "Nghệ thuật ngẫu hứng", desc: "Người chơi tự do biểu hiện, nhất ấm nhất kiến trong tập thể" },
                { title: "Văn hóa dân gian", desc: "Phản ánh cuộc sống dân dã, tình cảm con người miền Nam" },
                { title: "Di sản UNESCO", desc: "Danh hiệu Di sản văn hóa phi vật thể đại diện của nhân loại" },
                { title: "Không gian thưởng thức", desc: "Biểu diễn trong nhà vườn, nhà thờ, lễ hội và tấu nhạc" }
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
                    color: "#D4A650",
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
              background: "rgba(212, 166, 80, 0.08)",
              borderRadius: "12px",
              border: "2px solid rgba(212, 166, 80, 0.2)",
              textAlign: "center"
            }}>
              <p style={{
                margin: 0,
                color: "var(--ink-brown)",
                fontSize: "15px",
                lineHeight: 1.8,
                fontStyle: "italic"
              }}>
                "Cải lương là tiếng khóc của đồng bằng, là lời ca của tình yêu 
                và số phận đan xen trong từng vần thơ, từng giai điệu."
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
