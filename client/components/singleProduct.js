import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/products'
import {postNewOrder} from '../store/orders'
import MyCart from './MyCart'

const singleProduct = props => {
  const {product, addToCart, getSingleProduct} = props
  const {name, longDescription, imageUrl, price, tags} = product
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
    addToCart(productId, quantity)
  }

  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt="product image" />
      <div>Price: ${price}</div>
      <div>
        Quantity: {quantity}
        <button type="button" onClick={handleIncrease}>
          +
        </button>
        <button type="button" onClick={handleDecrease}>
          -
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

const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addToCart: (productId, quantity) =>
      dispatch(postNewOrder(productId, quantity))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(singleProduct)
