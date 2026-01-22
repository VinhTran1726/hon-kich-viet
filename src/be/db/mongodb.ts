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
      serverSelectionTimeoutMS: 30000, // Tăng timeout lên 30s
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 2,
      retryWrites: true,
      retryReads: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ MongoDB connected successfully");
      return mongoose;
    }).catch((error) => {
      console.error("❌ MongoDB connection error:", error.message);
      console.error("💡 Hướng dẫn:");
      console.error("   1. Vào MongoDB Atlas → Network Access");
      console.error("   2. Click 'Add IP Address'");
      console.error("   3. Chọn 'Allow Access from Anywhere' (0.0.0.0/0)");
      console.error("   4. Hoặc thêm IP hiện tại của bạn");
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
