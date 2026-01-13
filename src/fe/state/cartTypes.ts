export type CartItem = {
  productId: string;
  title: string;
  unitPriceVND: number;
  qty: number;
  badge?: "Sách" | "Combo";
};

export type CartState = {
  isOpen: boolean;
  items: CartItem[];
};

export type CartAction =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "TOGGLE" }
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { productId: string } }
  | { type: "SET_QTY"; payload: { productId: string; qty: number } }
  | { type: "CLEAR" };
