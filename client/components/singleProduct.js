import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {addProduct, fetchSingleProduct} from '../store/products'

const singleProduct = props => {
  const {product, addToCart, getSingleProduct} = props
  const {name, longDescription, imageUrl, price, tags} = product
  //tags will be in array form? (Natalie)

  useEffect(() => {
    getSingleProduct(props.match.params.productId)
  }, [])

  const [quantity, setQuantity] = useState(0)
  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }
  const handleDecrease = () => {
    if (quantity === 0) {
      setQuantity(0)
    } else {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
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
  console.log('STATE', quantity)

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
    product: state.products.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: id => dispatch(fetchSingleProduct(id))
    // addToCart: (productToAdd) => dispatch(addProduct(productToAdd)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(singleProduct)
