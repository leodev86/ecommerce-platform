import { useContext } from "react";
import {
  CartContext,
  type CartContextType,
} from "./CartContext";

export function useCart(): CartContextType {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart debe utilizarse dentro de CartProvider",
    );
  }

  return context;
}