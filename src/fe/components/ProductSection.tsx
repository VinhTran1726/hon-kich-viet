import type { Product } from "../data/products";
import { ProductCard } from "./ProductCard";

export function ProductSection({ products }: { products: Product[] }) {
  return (
    <section id="san-pham" style={{ padding:"48px 0" }}>
      <div className="container">
        <div style={{ display:"flex", alignItems:"end", justifyContent:"space-between", gap:18, flexWrap:"wrap" }}>
          <div>
            <div style={{ color:"var(--muted)", fontSize:13 }}>Cửa hàng</div>
            <h2 style={{ margin:"8px 0 0", fontSize:34 }}>Chọn phiên bản bạn muốn</h2>
          </div>
          <div style={{ color:"var(--muted)", maxWidth:520, lineHeight:1.6 }}>
            Mỗi cuốn sách là một hành trình khám phá nghệ thuật sân khấu dân gian Việt Nam. Chọn phiên bản phù hợp với nhu cầu của bạn.
          </div>
        </div>

        <div className="hr" />

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:16 }}>
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
