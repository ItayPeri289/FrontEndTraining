import { create } from "zustand";

interface CartStore {
  cartCount: number;
  balance: number;
  itemsList: StoreCard[];
  addToCounter: () => void;
  removeFromCounter: () => void;
  updateBalance: (price: number) => void;
}

interface StoreCard {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const useCartStore = create<CartStore>((set) => ({
  cartCount: 0,
  balance: 1000.0,
  itemsList: [],
  addToCounter: () =>
    set((state) => ({
      cartCount: state.cartCount + 1,
    })),
  removeFromCounter: () =>
    set((state) => ({
      cartCount: state.cartCount - 1,
    })),
  updateBalance: (price: number) =>
    set((state) => ({
      balance: state.balance - price,
    })),
}));

export default useCartStore;
