export type OrderDraft = {
  customerName: string;
  phone: string;
  address: string;
  note?: string;
  items: Array<{ productId: string; qty: number }>;
};

export type OrderResponse =
  | { ok: true; orderId: string }
  | { ok: false; message: string; field?: "customerName" | "phone" | "address" };
