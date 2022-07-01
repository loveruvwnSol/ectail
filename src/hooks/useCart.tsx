import create, { useStore } from "zustand"
import { nanoid } from "nanoid"
import { Product } from "../types"
import { filter } from "@chakra-ui/react"

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
