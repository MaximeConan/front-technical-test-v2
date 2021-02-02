import Link from "next/link"
import { useRecoilValue } from "recoil"

import { totalCartPriceSelector } from "common/state/selectors"

const Header = () => {
  const totalCart = useRecoilValue(totalCartPriceSelector)
  return (
    <header className="bg-gray-100 p-3">
      <nav className="flex justify-between">
        <ul className="flex items-center justify-center">
          <li className="p-2">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </li>
        </ul>
        <div>Price in your cart : {totalCart}$.</div>
      </nav>
    </header>
  )
}

export default Header
