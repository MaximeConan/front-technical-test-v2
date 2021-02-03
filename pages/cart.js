import Link from "next/link"
import { isEmpty } from "lodash"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import Header from "../common/components/Header"

import { cartAtom } from "../common/state/atoms"
import { cartSelector } from "../common/state/selectors"

const Cart = () => {
  const setCart = useSetRecoilState(cartAtom)
  const { cart, totalCart } = useRecoilValue(cartSelector)

  const onRemoveProduct = (productId) => {
    setCart((oldCart) =>
      oldCart.filter((product) => productId !== product.objectID)
    )
  }

  return (
    <div>
      <Header />
      <div>
        {isEmpty(cart) ? (
          <p>
            Your cart is actually empty. Go to{" "}
            <Link href="/">
              <a className="text-green-500">home</a>
            </Link>{" "}
            to add some products.
          </p>
        ) : (
          <div className="p-5">
            <ul>
              {cart.map((product) => {
                return (
                  <li
                    className="flex border-2 justify-between items-center p-4 mb-4 rounded-md"
                    key={product.objectID}
                  >
                    {`${product.name} - ${product.salePrice}$`}
                    <button
                      className="btn-primary"
                      onClick={() => onRemoveProduct(product.objectID)}
                    >
                      Remove from cart
                    </button>
                  </li>
                )
              })}
            </ul>
            <p>Total cart : {totalCart}$</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
