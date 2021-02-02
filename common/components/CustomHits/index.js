import { connectHits } from "react-instantsearch-dom"
import PropTypes from "prop-types"
import Hit from "common/components/Hit"

const CustomHits = ({
  hits,
  cart,
  totalCart,
  onAddProduct,
  onRemoveProduct,
}) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {hits.map((hit) => (
        <li key={hit.objectID}>
          <Hit
            cart={cart}
            totalCart={totalCart}
            hit={hit}
            onAddProduct={onAddProduct}
            onRemoveProduct={onRemoveProduct}
          />
        </li>
      ))}
    </ul>
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
  /* Defines the list of hits to display */
  hits: PropTypes.arrayOf(
    /* Defines the shape of each hit*/
    PropTypes.object
  ),
}

Hit.defaultProps = {
  cart: null,
  totalCart: null,
  onAddProduct: null,
  hits: null,
}

export default connectHits(CustomHits)
