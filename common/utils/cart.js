import { cartPromotionSelector } from "common/state/selectors"

export const getTotalCart = (cart) => {
  const totalCart = cart.reduce((acc, product) => {
    acc += product.salePrice
    return acc
  }, 0)

  return totalCart
}

export const applyPromotion = (cart, totalCart) => {
  if (totalCart >= 250) {
    const cartWithPromotion = cart.map((product) => {
      const hasPromotion = product.salePrice >= 200
      const updatePrice = hasPromotion
        ? product.salePrice * 0.5
        : product.salePrice

      return { ...product, salePrice: updatePrice, hasPromotion }
    })

    const upatedTotalPrice = getTotalCart(cartWithPromotion)

    return { cart: cartWithPromotion, totalCart: upatedTotalPrice }
  }

  return { cart, totalCart }
}
