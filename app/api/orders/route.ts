import { NextResponse } from "next/server";
import connectDB from "../../../src/be/db/mongodb";
import Order from "../../../src/be/models/Order";

export async function GET() {
  try {
    await connectDB();
    
    // Lấy tất cả orders, sắp xếp theo thời gian tạo mới nhất
    const orders = await Order.find({}).sort({ createdAt: -1 }).lean();
    
    return NextResponse.json({ ok: true, orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { ok: false, message: "Không thể lấy danh sách đơn hàng" },
      { status: 500 }
    );
  }
}
