import "./api/globals.css";
import { CartProvider } from "../src/fe/state/CartProvider";

export const metadata = {
  title: "Hồn Kịch Việt",
  description: "Sách văn hoá nghệ thuật – tông tối & đỏ sẫm",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
