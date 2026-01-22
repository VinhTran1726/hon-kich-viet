import { TheaterHeader } from "../../src/fe/components/TheaterHeader";
import { TheaterFooter } from "../../src/fe/components/TheaterFooter";
import { CartDrawer } from "../../src/fe/components/CartDrawer";

export default function CaiLuongPage() {
  return (
    <div id="top" style={{ 
      background: "#D4A650", // Vàng ấm miền Nam
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
            background: "radial-gradient(circle at center, rgba(212, 166, 80, 0.7), rgba(212, 166, 80, 0.9))"
          }} />
          
          <div style={{ position: "relative", textAlign: "center", color: "var(--ink-beige)" }}>
            <h1 style={{
              margin: "0 0 16px 0",
              fontSize: "42px",
              fontWeight: 700,
              fontFamily: "'Patrick Hand', 'Caveat', cursive",
              textShadow: "0 4px 12px rgba(0,0,0,0.8)"
            }}>
              Cải Lương Miền Nam
            </h1>
            <p style={{
              margin: "0 auto 24px auto",
              fontSize: "16px",
              lineHeight: 1.8,
              maxWidth: "500px",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)"
            }}>
              Cải lương là loại hình sân khấu dân gian Nam Bộ, 
              nổi tiếng với giai điệu da diết, cảm xúc sâu lắng và câu chuyện đời thường.
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
                { title: "Giai điệu da diết", desc: "Âm nhạc buồn thảm mang âm hưởng miền Nam đồng bằng sông Cửu Long" },
                { title: "Cảm xúc sâu lắng", desc: "Thể hiện nỗi đau, niềm vui của cuộc đời qua lời ca tiếng hát" },
                { title: "Câu chuyện đời thường", desc: "Phản ánh tình yêu, gia đình và số phận con người" },
                { title: "Trang phục dân gian", desc: "Áo bà ba, khăn rằn đặc trưng miền Nam Việt Nam" }
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
