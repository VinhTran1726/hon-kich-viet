import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";
const USE_MOCK_DB = process.env.USE_MOCK_DB === "true"; // Fallback mode

if (!MONGODB_URI && !USE_MOCK_DB) {
  throw new Error("Vui lòng định nghĩa MONGODB_URI trong .env.local");
}

// Global cache để tránh tạo nhiều connection trong dev mode
// @ts-ignore
let cached = global.mongoose;

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  // Fallback mode - Không cần MongoDB
  if (USE_MOCK_DB) {
    console.log("⚠️  MOCK DATABASE MODE - Không lưu data thực");
    return { connection: { readyState: 1 } }; // Mock connection
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
  bufferCommands: false,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  maxPoolSize: 10,
  minPoolSize: 2,
  retryWrites: true,
  retryReads: true,
  // dbName: "honkichviet",  // ❌ bỏ
};


    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ MongoDB connected successfully to database: honkichviet");
      return mongoose;
    }).catch((error) => {
      console.error("\n❌ MongoDB connection error:");
      console.error("   Error:", error.message);
      console.error("\n💡 HƯỚNG DẪN FIX:");
      console.error("   ================================");
      console.error("   1. Vào: https://cloud.mongodb.com");
      console.error("   2. Chọn project 'Cluster0'");
      console.error("   3. Menu bên trái → Click 'Network Access'");
      console.error("   4. Click nút 'ADD IP ADDRESS'");
      console.error("   5. Chọn 'ALLOW ACCESS FROM ANYWHERE'");
      console.error("   6. Click 'Confirm'");
      console.error("   7. Đợi ~2 phút để Atlas update");
      console.error("   8. Restart server: Ctrl+C và chạy 'npm run dev'");
      console.error("   ================================\n");
      cached.promise = null;
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
