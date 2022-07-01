import create from "zustand"
import { Product } from "../types"

type UseCart = {
  products: Product[]
  addToCart: (product: Product) => void
  deleteToCart: (product: Product) => void
}

export const useCart = create<UseCart>((set) => ({
  products: [],
  addToCart: (product) => set((state) => ({ products: [...state.products, product] })),
  deleteToCart: (product) => {
    product.status = "delete"
    set((state) => ({ products: [...state.products, product] }))
  },
}))
