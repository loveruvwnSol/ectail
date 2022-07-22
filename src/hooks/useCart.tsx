import create from "zustand"
import { Product } from "../types"
import { Favs } from "../types"

type UseCart = {
  products: Product[]
  favs: Favs[]
  addToCart: (product: Product) => void
  addToFav: (fav: Favs) => void
  deleteToCart: (product: Product) => void
  deleteToFav: (fav: Favs) => void
}

export const useCart = create<UseCart>((set) => ({
  products: [],
  favs: [],
  addToCart: (product) => {
    if (product.size !== undefined) {
      set((state) => ({ products: [...state.products, product] }))
    } else {
      alert("サイズを選んでください")
    }
  },
  addToFav: (fav) => set((state) => ({ favs: [...state.favs, fav] })),
  deleteToCart: (product) => {
    product.status = "delete"
    set((state) => ({ products: [...state.products, product] }))
    console.log(product)
  },
  deleteToFav: (fav) => {
    fav.status = "delete"
    set((state) => ({ favs: [...state.favs, fav] }))
  },
}))
