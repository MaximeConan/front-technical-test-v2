import { useMemo } from "react"
import { isEmpty, isNil } from "lodash"
import PropTypes from "prop-types"

const Hit = ({ cart, totalCart, hit, onAddProduct, onRemoveProduct }) => {
  const isInCart = useMemo(
    () => cart.find((product) => product.objectID === hit.objectID),
    [cart]
  )

  const productFromCart = useMemo(() => {
    const product = cart.find((product) => product.objectID === hit.objectID)
    return { price: product?.salePrice, hasPromotion: product?.hasPromotion }
  }, [cart])

  const _removeProduct = () => {
    onRemoveProduct(hit.objectID)
  }

  const _onAddProduct = () => {
    onAddProduct({
      name: hit.name,
      salePrice: productFromCart.hasPromotion
        ? productFromCart.price
        : hit.salePrice,
      objectID: hit.objectID,
    })
  }

  return (
    <div className="border-2 p-4 h-full rounded-md flex flex-col items-center	">
      <img className="h-24 w-auto mb-5" src={hit.image} />
      <div className="text-center">
        <p className="mb-5">{hit.name}</p>
        <div className="flex justify-center items-center">
          <p className="mr-4">
            {productFromCart.hasPromotion
              ? `${productFromCart.price}$ instead of ${hit.salePrice}`
              : `${hit.salePrice}$`}
          </p>
          {isInCart ? (
            <button onClick={_removeProduct} className="btn-primary">
              Remove from cart
            </button>
          ) : (
            <button onClick={_onAddProduct} className="btn-primary">
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

Hit.propTypes = {
  /* Defines the current cart */
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      /* Defines the name of the product */
      name: PropTypes.string.isRequired,
      /* Defines the price of the product */
      salePrice: PropTypes.number.isRequired,
      /* Defines the uniq ID of the product */
      objectID: PropTypes.string.isRequired,
    })
  ).isRequired,
  /* Defines the total cart price */
  totalCart: PropTypes.number.isRequired,
  /* Defines the handler to trigger on remove product click */
  onRemoveProduct: PropTypes.func.isRequired,
  /* Defines the handler to trigger on add product click */
  onAddProduct: PropTypes.func.isRequired,
  /* Defines the shape of each hit*/
  hit: PropTypes.shape({
    /* Defines the image to display */
    image: PropTypes.string.isRequired,
    /* Defines the price to display */
    salePrice: PropTypes.number.isRequired,
    /* Defines the price to display */
    name: PropTypes.string.isRequired,
  }),
}

Hit.defaultProps = {
  cart: null,
  totalCart: null,
  onRemoveProduct: null,
  onAddProduct: null,
  hit: null,
}

export default Hit
