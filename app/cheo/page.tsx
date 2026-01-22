import { TheaterHeader } from "../../src/fe/components/TheaterHeader";
import { TheaterFooter } from "../../src/fe/components/TheaterFooter";
import { CartDrawer } from "../../src/fe/components/CartDrawer";

export default function CheoPage() {
  return (
    <div id="top" style={{ 
      background: "#2D5A3D", // Xanh lục truyền thống
      minHeight: "100vh" 
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <TheaterHeader />
        
        {/* Hero Section */}
        <section style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
          padding: "48px 24px",
          minHeight: "400px",
          position: "relative",
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(45, 90, 61, 0.7), rgba(45, 90, 61, 0.9))"
          }} />
          
          <div style={{ position: "relative", textAlign: "center", color: "var(--ink-beige)" }}>
            <h1 style={{
              margin: "0 0 16px 0",
              fontSize: "42px",
              fontWeight: 700,
              fontFamily: "'Patrick Hand', 'Caveat', cursive",
              textShadow: "0 4px 12px rgba(0,0,0,0.8)"
            }}>
              Hát Chèo Dân Gian
            </h1>
            <p style={{
              margin: "0 0 24px 0",
              fontSize: "16px",
              lineHeight: 1.8,
              maxWidth: "500px",
              margin: "0 auto",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)"
            }}>
              Chèo là nghệ thuật sân khấu dân gian miền Bắc Việt Nam, 
              gần gũi với đời sống nông thôn, giàu tính hài hước và châm biếm xã hội.
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
                { title: "Gần gũi dân dã", desc: "Xuất phát từ lễ hội làng, thể hiện tâm tư người nông dân" },
                { title: "Hài hước châm biếm", desc: "Sử dụng trò đùa, lời nói dí dỏm để phê phán thực tại" },
                { title: "Âm nhạc dân gian", desc: "Giai điệu quen thuộc, gần gũi với dân ca quan họ, chầu văn" },
                { title: "Trang phục giản dị", desc: "Trang phục đơn giản, phản ánh cuộc sống thường ngày" }
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
                    color: "#2D5A3D",
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
              background: "rgba(45, 90, 61, 0.08)",
              borderRadius: "12px",
              border: "2px solid rgba(45, 90, 61, 0.2)",
              textAlign: "center"
            }}>
              <p style={{
                margin: 0,
                color: "var(--ink-brown)",
                fontSize: "15px",
                lineHeight: 1.8,
                fontStyle: "italic"
              }}>
                "Hát chèo là tiếng cười của người dân, là gương phản chiếu 
                cuộc sống thường nhật với cả niềm vui lẫn nỗi buồn."
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
