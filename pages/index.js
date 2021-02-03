import Head from "next/head"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Configure,
  HitsPerPage,
} from "react-instantsearch-dom"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import CustomHits from "../common/components/CustomHits"
import Hit from "../common/components/Hit"
import Header from "../common/components/Header"

import { cartAtom } from "common/state/atoms"
import { useCallback } from "react"
import { cartSelector } from "common/state/selectors"

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
)

export default function Home() {
  const setCart = useSetRecoilState(cartAtom)
  const { cart, totalCart } = useRecoilValue(cartSelector)

  const onAddProduct = useCallback((product) => {
    setCart((oldCart) => [...oldCart, product])
  }, [])

  const onRemoveProduct = useCallback((productId) => {
    setCart((oldCart) =>
      oldCart.filter((product) => product.objectID !== productId)
    )
  }, [])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Welcome to La Fourche Frontend Technical Test v2 !</h1>
        <InstantSearch indexName="bestbuy" searchClient={searchClient}>
          <div>
            <SearchBox searchAsYouType={true} />
            <CustomHits
              cart={cart}
              totalCart={totalCart}
              onRemoveProduct={onRemoveProduct}
              onAddProduct={onAddProduct}
              hitComponent={(hit) => <Hit hit={hit} />}
            />
            <Pagination />
            <Configure hitsPerPage={20} />
          </div>
        </InstantSearch>
      </main>
    </div>
  )
}
