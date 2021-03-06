import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/products'
import {createNewOpenOrder} from '../store/orders'

const singleProduct = props => {
  const {product, addToCart, getSingleProduct} = props
  const {name, longDescription, imageURL, price, tags} = product
  const productId = props.match.params.productId
  //tags will be in array form? (Natalie)

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

  return (
    <div className="container" id="singleProduct">
      <h1 className="center-align">{name}</h1>
      <div id="singleProduct-content">
        <img src={imageURL} alt="product image" id="singleProduct-img" />
        <div id="singleProduct-detail">
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
              className="btn waves-effect waves-light btn-small"
            >
              Add To Cart
            </button>
          </div>
          <p>{longDescription}</p>
          <div>#Placeholder{tags}</div>
        </div>
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
