import { NextResponse } from "next/server";
import type { OrderDraft, OrderResponse } from "../../../src/be/contracts/order";
import { isValidVNPhone, required } from "../../../src/fe/utils/validators";
import nodemailer from "nodemailer";
import { PRODUCTS } from "../../../src/fe/data/products";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAIL_TO_DEFAULT = "vinhtran5114@gmail.com";

function getEnvValue(key: string) {
  const fromProcess = process.env[key];
  if (fromProcess && fromProcess.trim().length > 0) {
    return fromProcess.trim();
  }

  try {
    const envPath = path.join(process.cwd(), ".env.local");
    if (!fs.existsSync(envPath)) return undefined;

    const envRaw = fs.readFileSync(envPath, "utf8");
    const lines = envRaw.split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const eqIndex = trimmed.indexOf("=");
      if (eqIndex === -1) continue;

      const k = trimmed.slice(0, eqIndex).trim();
      if (k !== key) continue;

      const value = trimmed.slice(eqIndex + 1).trim().replace(/^['\"]|['\"]$/g, "");
      return value.length > 0 ? value : undefined;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function createTransporter() {
  const host = getEnvValue("SMTP_HOST") || "smtp.gmail.com";
  const port = Number(getEnvValue("SMTP_PORT") || 587);
  const user = getEnvValue("SMTP_USER");
  const pass = getEnvValue("SMTP_PASS")?.replace(/\s+/g, "");
  const rejectUnauthorized = (getEnvValue("SMTP_TLS_REJECT_UNAUTHORIZED") || "true").toLowerCase() !== "false";

  if (!user || !pass) {
    throw new Error("Thiếu SMTP_USER hoặc SMTP_PASS trong .env.local");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    tls: {
      rejectUnauthorized,
    },
  });
}

function buildOrderEmail(payload: OrderDraft, orderId: string) {
  const itemLines = payload.items.map((item) => {
    const product = PRODUCTS.find((p) => p.id === item.productId);
    const title = product?.title ?? item.productId;
    const unitPrice = product?.priceVND ?? 0;
    const lineTotal = unitPrice * item.qty;

    return {
      text: `- ${title} | SL: ${item.qty} | Đơn giá: ${unitPrice.toLocaleString("vi-VN")}đ | Thành tiền: ${lineTotal.toLocaleString("vi-VN")}đ`,
      html: `<li><b>${title}</b> | SL: ${item.qty} | Đơn giá: ${unitPrice.toLocaleString("vi-VN")}đ | Thành tiền: <b>${lineTotal.toLocaleString("vi-VN")}đ</b></li>`,
      lineTotal,
    };
  });

  const total = itemLines.reduce((sum, line) => sum + line.lineTotal, 0);

  const text = [
    `ĐƠN HÀNG MỚI - ${orderId}`,
    "",
    `Khách hàng: ${payload.customerName}`,
    `SĐT: ${payload.phone}`,
    `Địa chỉ: ${payload.address}`,
    `Ghi chú: ${payload.note || "(không có)"}`,
    "",
    "Sản phẩm:",
    ...itemLines.map((line) => line.text),
    "",
    `Tổng tiền: ${total.toLocaleString("vi-VN")}đ`,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
      <h2>🛒 Đơn hàng mới - ${orderId}</h2>
      <p><b>Khách hàng:</b> ${payload.customerName}</p>
      <p><b>SĐT:</b> ${payload.phone}</p>
      <p><b>Địa chỉ:</b> ${payload.address}</p>
      <p><b>Ghi chú:</b> ${payload.note || "(không có)"}</p>
      <h3>Sản phẩm</h3>
      <ul>
        ${itemLines.map((line) => line.html).join("")}
      </ul>
      <p><b>Tổng tiền:</b> ${total.toLocaleString("vi-VN")}đ</p>
    </div>
  `;

  return { text, html };
}

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
    // Tạo orderId duy nhất
    const orderId = "HKV-" + Math.random().toString(16).slice(2, 10).toUpperCase();

    const transporter = createTransporter();
    const mailTo = getEnvValue("MAIL_TO") || MAIL_TO_DEFAULT;
    const mailFrom = getEnvValue("MAIL_FROM") || getEnvValue("SMTP_USER") || mailTo;
    const { text, html } = buildOrderEmail(body, orderId);

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: `[Hồn Kịch Việt] Đơn hàng mới ${orderId}`,
      text,
      html,
    });

    const resp: OrderResponse = { ok: true, orderId, message: "Đơn hàng đã gửi về email quản trị." };
    return NextResponse.json(resp);
  } catch (error) {
    console.error("Error sending order email:", error);
    const resp: OrderResponse = { ok: false, message: "Không gửi được email đơn hàng. Vui lòng kiểm tra SMTP và thử lại." };
    return NextResponse.json(resp, { status: 500 });
  }
}
