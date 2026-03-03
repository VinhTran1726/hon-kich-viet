// Test MongoDB connection
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ Thiếu MONGODB_URI trong environment");
  process.exit(1);
}

console.log("🔄 Đang kiểm tra kết nối MongoDB...");
console.log("📍 URI:", MONGODB_URI.replace(/:[^:@]+@/, ":****@")); // Ẩn password

mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log("✅ KẾT NỐI THÀNH CÔNG!");
    console.log("✅ MongoDB Atlas đã hoạt động bình thường");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ KẾT NỐI THẤT BẠI!");
    console.error("❌ Lỗi:", error.message);
    console.error("\n💡 CÁCH SỬA:");
    console.error("1. Truy cập: https://cloud.mongodb.com/");
    console.error("2. Chọn project → Cluster0");
    console.error("3. Bên trái chọn: Network Access");
    console.error("4. Click: ADD IP ADDRESS");
    console.error("5. Chọn: ALLOW ACCESS FROM ANYWHERE");
    console.error("6. Click: Confirm");
    console.error("7. Đợi 1-2 phút để active");
    console.error("\n💡 HOẶC kiểm tra:");
    console.error("- Password user DB đúng chưa?");
    console.error("- Cluster có đang chạy không?");
    process.exit(1);
  });
