import { create } from "zustand";

interface CartStore {
  cartCount: number;
  balance: number;
  itemsArray: cartItem[];
  updateBalance: (price: number) => void;
  addItem: (cartItem: cartItem) => void;
  removeItem: (index: number) => void;
}

interface cartItem {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const useCartStore = create<CartStore>((set) => ({
  cartCount: 0,
  balance: 1000.0,
  itemsArray: [],
  updateBalance: (price: number) =>
    set((state) => ({
      balance: state.balance - price,
    })),
  addItem: (cartItem: cartItem) =>
    set((state) => ({
      cartCount: state.cartCount + 1,
      itemsArray: [...state.itemsArray, cartItem],
    })),
  removeItem: (index: number) =>
    set((state) => ({
      cartCount: state.cartCount - 1,
      itemsArray: state.itemsArray.filter((_, i) => i !== index),
    })),
}));

export default useCartStore;
