// src/context/CartContext.tsx
import React, { createContext, useContext, useState } from "react";
import { ProductEntity } from "../domain/entity/product_entity";

type CartContextType = {
  cartItems: ProductEntity[];
  addToCart: (product: ProductEntity) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductEntity[]>([]);

  const addToCart = (product: ProductEntity) => {
    setCartItems((prev) => [...prev, product]);
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
