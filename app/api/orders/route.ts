import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    orders: [],
    message: "Đã tắt lưu đơn vào database. Đơn hàng hiện được gửi qua email quản trị.",
  });
}
