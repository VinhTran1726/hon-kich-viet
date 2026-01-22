import { Header } from "../src/fe/components/Header";
import { Hero } from "../src/fe/components/Hero";
import { ProductSection } from "../src/fe/components/ProductSection";
import { CartDrawer } from "../src/fe/components/CartDrawer";
import { Footer } from "../src/fe/components/Footer";
import { PRODUCTS } from "../src/fe/data/products";

export default function Page() {
  return (
    <div id="top">
      <Header />
      <Hero />

      <section id="gioi-thieu" style={{ padding:"52px 0", background:"rgba(10,6,5,.60)" }}>
        <div className="container" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
          <div style={{ border:"1px solid var(--line)", borderRadius:22, background:"rgba(212,175,55,.04)", padding:20 }}>
            <h2 style={{ margin:"6px 0 14px", fontSize:32, fontWeight:700, color:"var(--gold2)" }}>Vì sao là “Hồn Kịch Việt”?</h2>
            <p style={{ margin:0, color:"var(--muted)", lineHeight:1.9, fontSize:15.5 }}>
              Trong mỗi vần điệu chèo, tuồng, cải lương là tiếng nói của tổ tiên, là tinh thần bất khuất của dân tộc. 
              Chúng tôi trân trọng lưu giữ và lan tỏa những giá trị nghệ thuật quý báu ấy, để thế hệ hôm nay 
              và mai sau không quên cội nguồn, không mất gốc trong dòng chảy thời gian.
            </p>
          </div>

          <div style={{
            border:"1px solid var(--line)", borderRadius:22,
            background:
              "radial-gradient(720px 260px at 30% 25%, rgba(184,46,46,.25), transparent 62%)," +
              "radial-gradient(600px 220px at 70% 70%, rgba(212,175,55,.12), transparent 60%)," +
              "linear-gradient(135deg, rgba(212,175,55,.06), rgba(184,46,46,.03))",
            padding:20, minHeight:220
          }}>
            <div style={{ color:"var(--gold)", fontSize:14, fontWeight:700 }}>Trái tim chúng tôi dành cho bạn</div>
            <ul style={{ margin:"14px 0 0", paddingLeft:20, color:"var(--muted)", lineHeight:2, fontSize:15 }}>
              <li>Nội dung chọn lọc từ tâm huyết, gìn giữ giá trị xưa</li>
              <li>Gói ghém cẩn trọng từng trang sách, trao gửi khắp ba miền</li>
              <li>Lắng nghe và hỗ trợ tận tình như người thân</li>
              <li>Cùng nhau gìn giữ hồn Việt, lưu truyền di sản ngàn đời</li>
            </ul>
          </div>
        </div>
      </section>

      <ProductSection products={PRODUCTS} />
      <Footer />
      <CartDrawer />
    </div>
  );
}
