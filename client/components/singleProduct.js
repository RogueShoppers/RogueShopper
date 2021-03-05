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
    <div>
      <h1>{name}</h1>
      <img src={imageURL} alt="product image" />
      <div>Price: ${price}</div>
      <div>
        Quantity: {quantity}
        <button type="button" onClick={handleDecrease}>
          -
        </button>
        <button type="button" onClick={handleIncrease}>
          +
        </button>
      </div>
      <p>{longDescription}</p>
      <div>#{tags}</div>
      <button type="submit" onClick={handleAddToCart}>
        Add To Cart
      </button>
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
