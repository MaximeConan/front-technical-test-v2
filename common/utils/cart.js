export const getTotalCart = (cart) => {
  const totalCart = cart.reduce((acc, product) => {
    acc += product.salePrice
    return acc
  }, 0)

  return totalCart
}
