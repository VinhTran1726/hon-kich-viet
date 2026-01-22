import { TheaterHeader } from "../../src/fe/components/TheaterHeader";
import { TheaterFooter } from "../../src/fe/components/TheaterFooter";
import { CartDrawer } from "../../src/fe/components/CartDrawer";

export default function TuongPage() {
  return (
    <div id="top" style={{ 
      background: "#8B1E1E", // Đỏ truyền thống
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
            background: "radial-gradient(circle at center, rgba(139, 30, 30, 0.7), rgba(139, 30, 30, 0.9))"
          }} />
          
          <div style={{ position: "relative", textAlign: "center", color: "var(--ink-beige)" }}>
            <h1 style={{
              margin: "0 0 16px 0",
              fontSize: "42px",
              fontWeight: 700,
              fontFamily: "'Patrick Hand', 'Caveat', cursive",
              textShadow: "0 4px 12px rgba(0,0,0,0.8)"
            }}>
              Nghệ Thuật Tuồng Cổ
            </h1>
            <p style={{
              margin: "0 0 24px 0",
              fontSize: "16px",
              lineHeight: 1.8,
              maxWidth: "500px",
              margin: "0 auto",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)"
            }}>
              Tuồng, hay Hát bội, là loại hình nghệ thuật sân khấu cổ truyền Việt Nam, 
              mang đậm phong cách hoàng gia với trang phục rực rỡ, động tác võ thuật và âm nhạc trang trọng.
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
                { title: "Trang phục rực rỡ", desc: "Áo mão hoa lệ, trang sức tinh xảo thể hiện đẳng cấp nhân vật" },
                { title: "Âm nhạc trang trọng", desc: "Nhạc cụ truyền thống kết hợp tạo không gian hoành tráng" },
                { title: "Võ thuật đẹp mắt", desc: "Động tác võ thuật biểu diễn uyển chuyển, mạnh mẽ" },
                { title: "Nội dung lịch sử", desc: "Kể về anh hùng, danh tướng và sự kiện lịch sử Việt Nam" }
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
                    color: "var(--maroon)",
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
              background: "rgba(139, 30, 30, 0.08)",
              borderRadius: "12px",
              border: "2px solid rgba(139, 30, 30, 0.2)",
              textAlign: "center"
            }}>
              <p style={{
                margin: 0,
                color: "var(--ink-brown)",
                fontSize: "15px",
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
