import { NextResponse } from "next/server";
import type { OrderDraft, OrderResponse } from "../../../src/be/contracts/order";
import { isValidVNPhone, required } from "../../../src/fe/utils/validators";
import connectDB from "../../../src/be/db/mongodb";
import Order from "../../../src/be/models/Order";

export async function POST(req: Request) {
  const body = (await req.json()) as OrderDraft;

  // Basic validation
  if (!required(body.customerName)) {
    const resp: OrderResponse = { ok: false, message: "Thiếu họ tên.", field: "customerName" };
    return NextResponse.json(resp, { status: 400 });
  }
  if (!isValidVNPhone(body.phone)) {
    const resp: OrderResponse = { ok: false, message: "SĐT không hợp lệ.", field: "phone" };
    return NextResponse.json(resp, { status: 400 });
  }
  if (!required(body.address)) {
    const resp: OrderResponse = { ok: false, message: "Thiếu địa chỉ.", field: "address" };
    return NextResponse.json(resp, { status: 400 });
  }
  if (!body.items?.length) {
    const resp: OrderResponse = { ok: false, message: "Giỏ hàng trống." };
    return NextResponse.json(resp, { status: 400 });
  }

  try {
    // Kết nối MongoDB
    await connectDB();

    // Tạo orderId duy nhất
    const orderId = "HKV-" + Math.random().toString(16).slice(2, 10).toUpperCase();

    // MOCK MODE - Nếu dùng fallback database
    if (process.env.USE_MOCK_DB === "true") {
      console.log("⚠️  MOCK ORDER - Không lưu vào database:", orderId);
      const resp: OrderResponse = { 
        ok: true, 
        orderId,
        message: "⚠️ ĐẶT HÀNG THÀNH CÔNG (Mock mode - không lưu thật)" 
      };
      return NextResponse.json(resp);
    }

    // Lưu order vào database
    const order = await Order.create({
      orderId,
      customerName: body.customerName,
      phone: body.phone,
      address: body.address,
      note: body.note,
      items: body.items,
    });

    const resp: OrderResponse = { ok: true, orderId: order.orderId };
    return NextResponse.json(resp);
  } catch (error) {
    console.error("Error creating order:", error);
    const resp: OrderResponse = { ok: false, message: "Có lỗi khi tạo đơn hàng. Vui lòng thử lại." };
    return NextResponse.json(resp, { status: 500 });
  }
}
