import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import StockStatus from '../../utils/StockStatus'
import {fetchSingleProduct} from '../../store/products'
import {createNewOpenOrder} from '../../store/orders'
import MoreLikeThis from './MoreLikeThis'
import TagChip from './TagChip'

const singleProduct = props => {
  const {product, addToCart, getSingleProduct} = props
  const {name, longDescription, imageURL, price, tags} = product
  const productId = props.match.params.productId

  useEffect(() => {
    getSingleProduct(productId)
  }, [])

  const [quantity, setQuantity] = useState(1)
  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }
  const handleDecrease = () => {
    if (quantity === 1) {
      setQuantity(1)
    } else {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
  }
  const handleAddToCart = event => {
    event.preventDefault()
    const orderInfo = {
      productId,
      quantity
    }
    addToCart(orderInfo)
  }

  const outOfStock = product.quantity === 0
  const disableAddToCart = outOfStock ? 'disabled' : ''

  return (
    <div className="container" id="singleProduct">
      <div className="row" id="singleProductMain">
        <h1 className="center-align">{name}</h1>
        <div id="singleProduct-content">
          <img
            src={imageURL}
            alt="product image"
            id="singleProduct-img"
            style={{height: 500, width: 350}}
          />
          <div id="singleProduct-detail">
            <div>
              <StockStatus product={product} />
            </div>
            <p id="singleProduct-price">Price: ${price}</p>
            <div id="singleProduct-quantityButton">
              <p>
                Quantity:
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="btn btn-small waves-effect waves-light white teal-text"
                  id="decrease-button"
                >
                  -
                </button>
                {quantity}
                <button
                  type="button"
                  onClick={handleIncrease}
                  className="btn btn-small waves-effect waves-light white teal-text"
                  id="increase-button"
                >
                  +
                </button>
              </p>
              <button
                type="submit"
                onClick={handleAddToCart}
                className={`btn waves-effect waves-light btn-small ${disableAddToCart}`}
              >
                Add To Cart
              </button>
            </div>

            <p>{longDescription}</p>
            <div>
              {tags &&
                tags.map(tag => {
                  return <TagChip key={tag.id} tag={tag} />
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="similarProducts">
        <MoreLikeThis tags={tags} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    product: state.products.selected
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    getSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addToCart: orderInfo => dispatch(createNewOpenOrder(orderInfo, history))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(singleProduct)
