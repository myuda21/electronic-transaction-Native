// src/core/stores/useCartStore.ts
import { create } from 'zustand';
import { ProductEntity } from '../../domain/entity/product_entity';

type CartItem = ProductEntity & { quantity: number };

type CartState = {
  items: CartItem[];
  addToCart: (product: ProductEntity) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void;
  totalPrice: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product) => {
    const existing = get().items.find((item) => item.id === product.id);
    if (existing) {
      set({
        items: get().items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      set({ items: [...get().items, { ...product, quantity: 1 }] });
    }
  },
  removeFromCart: (id) =>
    set({ items: get().items.filter((item) => item.id !== id) }),
  updateQty: (id, qty) =>
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      ),
    }),
  clearCart: () => set({ items: [] }),
  totalPrice: () =>
    get().items.reduce((total, item) => total + item.price * item.quantity, 0),
}));
