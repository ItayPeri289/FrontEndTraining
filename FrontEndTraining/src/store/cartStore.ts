import { create } from "zustand";

interface CartStore {
  cartCount: number;
  balance: number;
  itemsArray: cartItem[];
  updateBalance: (price: number) => void;
  addItem: (cartItem: cartItem) => void;
  //removeItem: (cartItem: cartItem) => void;
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
  //   removeItem: (cartItem: cartItem) =>
  //     set((state) => ({
  //       cartCount: state.cartCount - 1,
  //       itemsArray: state.itemsArray.slice(0, -1),
  //     })),
}));

export default useCartStore;
