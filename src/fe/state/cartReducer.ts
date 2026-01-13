import type { CartAction, CartState } from "./cartTypes";

export const initialCartState: CartState = { isOpen: false, items: [] };

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "OPEN": return { ...state, isOpen: true };
    case "CLOSE": return { ...state, isOpen: false };
    case "TOGGLE": return { ...state, isOpen: !state.isOpen };

    case "ADD_ITEM": {
      const ex = state.items.find(i => i.productId === action.payload.productId);
      if (ex) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map(i =>
            i.productId === ex.productId ? { ...i, qty: Math.min(99, i.qty + action.payload.qty) } : i
          ),
        };
      }
      return { ...state, isOpen: true, items: [...state.items, action.payload] };
    }

    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(i => i.productId !== action.payload.productId) };

    case "SET_QTY": {
      const qty = Math.max(1, Math.min(99, action.payload.qty));
      return { ...state, items: state.items.map(i => i.productId === action.payload.productId ? { ...i, qty } : i) };
    }

    case "CLEAR": return { ...state, items: [] };
    default: return state;
  }
}
