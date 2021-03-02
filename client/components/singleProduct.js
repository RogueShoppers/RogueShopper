import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../store'

const singleProduct = props => {
  const {product, addToCart} = props
  const {name, longDescription, imageUrl, price, tags} = product
  //tags will be in array form? (Natalie)

  const [quantity, setQuantity] = useState(0)
  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }
  const handleDecrease = () => {
    setQuantity(prevQuantity => prevQuantity - 1)
  }
  const handleAddToCart = event => {
    const productToAdd = {
      name,
      imageUrl,
      price,
      quantity
    }
    addToCart(productToAdd)
    setQuantity(0)
  }

  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt="product image" />
      <div>Price: {price}</div>
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
      <button type="button" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    product: state.selected.product
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: productToAdd => dispatch(addProduct(productToAdd))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(singleProduct)
