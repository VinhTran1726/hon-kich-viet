import { Header } from "../../src/fe/components/Header";
import { Footer } from "../../src/fe/components/Footer";
import { CheckoutForm } from "../../src/fe/components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div>
      <Header />
      <main style={{ padding:"34px 0" }}>
        <div className="container">
          <CheckoutForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
