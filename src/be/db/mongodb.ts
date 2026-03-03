import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";
const USE_MOCK_DB = process.env.USE_MOCK_DB === "true"; // Fallback mode

if (!MONGODB_URI && !USE_MOCK_DB) {
  throw new Error("Vui lòng định nghĩa MONGODB_URI trong .env.local");
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalWithMongoose = globalThis as typeof globalThis & { mongoose?: MongooseCache };

const cached: MongooseCache = globalWithMongoose.mongoose ?? { conn: null, promise: null };
globalWithMongoose.mongoose = cached;

let listenersRegistered = false;

function registerConnectionListeners() {
  if (listenersRegistered) return;

  mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB connected");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("🔄 MongoDB reconnected");
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ MongoDB disconnected");
  });

  mongoose.connection.on("error", (error) => {
    console.error("❌ MongoDB runtime error:", error.message);
  });

  listenersRegistered = true;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function connectWithRetry(maxAttempts = 3) {
  const opts = {
    bufferCommands: false,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 10000,
    maxPoolSize: 20,
    minPoolSize: 1,
    retryWrites: true,
    retryReads: true,
    family: 4,
  };

  let lastError: unknown = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const conn = await mongoose.connect(MONGODB_URI, opts);
      return conn;
    } catch (error) {
      lastError = error;
      const backoffMs = attempt * 1500;
      console.warn(`⚠️ MongoDB connect attempt ${attempt}/${maxAttempts} failed. Retrying in ${backoffMs}ms...`);

      if (attempt < maxAttempts) {
        await sleep(backoffMs);
      }
    }
  }

  throw lastError;
}

async function connectDB() {
  // Fallback mode - Không cần MongoDB
  if (USE_MOCK_DB) {
    console.log("⚠️  MOCK DATABASE MODE - Không lưu data thực");
    return { connection: { readyState: 1 } }; // Mock connection
  }

  registerConnectionListeners();

  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = connectWithRetry(3).catch((error) => {
      console.error("\n❌ MongoDB connection error:");
      console.error("   Error:", error instanceof Error ? error.message : String(error));
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
