import { create } from "zustand";

interface CartStore {
  cartCount: number;
  balance: number;
  addToCart: () => void;
}

interface StoreCard {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const useCartStore = create<CartStore>((set) => ({
  cartCount: 0,
  balance: 1000,
  addToCart: () =>
    set((state) => ({
      cartCount: state.cartCount + 1,
    })),
  updateBalance: (price: number) =>
    set((state) => ({
      balance: state.balance - price,
    })),
}));

export default useCartStore;
