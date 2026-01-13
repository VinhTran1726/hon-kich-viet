import mongoose, { Schema, models } from "mongoose";

export interface IOrder {
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  note?: string;
  items: Array<{
    productId: string;
    qty: number;
  }>;
  createdAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    items: [
      {
        productId: { type: String, required: true },
        qty: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

// Dùng models để tránh OverwriteModelError trong dev mode
const Order = models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
