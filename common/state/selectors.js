import { selector } from "recoil"

import { cartAtom } from "./atoms"
import { applyPromotion, getTotalCart } from "../utils/cart"

export const cartSelector = selector({
  key: "cartSelector",
  get: ({ get }) => {
    const cart = get(cartAtom)

    const totalCart = getTotalCart(cart)
    const updatedCart = applyPromotion(cart, totalCart)

    return { cart: updatedCart.cart, totalCart: updatedCart.totalCart }
  },
})
