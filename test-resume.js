// Test sau khi Resume cluster
const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://honkichviet:loploplop@cluster0.l5x63em.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

console.log("🔄 Đợi cluster khởi động...");
console.log("⏱️  Timeout: 60 giây\n");

let attempts = 0;
const maxAttempts = 12; // 12 x 5s = 60s

function testConnection() {
  attempts++;
  console.log(`[Lần ${attempts}/${maxAttempts}] Thử kết nối...`);

  mongoose
    .connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 5000,
    })
    .then(() => {
      console.log("\n✅✅✅ THÀNH CÔNG! ✅✅✅");
      console.log("✅ Cluster đã hoạt động trở lại!");
      console.log("\n📝 BÂY GIỜ HÃY:");
      console.log("1. Mở file: .env.local");
      console.log("2. Đổi: USE_MOCK_DB=false");
      console.log("3. Restart server: Ctrl+C và npm run dev");
      process.exit(0);
    })
    .catch((error) => {
      if (attempts >= maxAttempts) {
        console.log("\n❌ HẾT THỜI GIAN CHỜ");
        console.log("💡 Có thể cluster chưa khởi động xong");
        console.log("💡 Đợi thêm 1-2 phút rồi chạy lại: node test-resume.js");
        process.exit(1);
      } else {
        console.log(`   → Chưa sẵn sàng, thử lại sau 5 giây...`);
        setTimeout(testConnection, 5000);
      }
    });
}

// Bắt đầu test
setTimeout(testConnection, 2000);
