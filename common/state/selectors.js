import { selector } from "recoil"

import { cartAtom } from "./atoms"
import { getTotalCart } from "../utils/cart"

export const totalCartPriceSelector = selector({
  key: "totalCartPriceSelector",
  get: ({ get }) => {
    const cart = get(cartAtom)

    const totalPrice = getTotalCart(cart)
    return totalPrice
  },
})
