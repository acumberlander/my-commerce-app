'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { Product } from "../models/Product";

export interface CartContextProps {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useSearch must be used within a CartContext');
  }
  return context;
};

export const CartContextProvider = ({children}: {children: ReactNode}) => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

