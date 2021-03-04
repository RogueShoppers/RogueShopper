import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/products'
import {createNewOpenOrder} from '../store/orders'
import {getMe} from '../store/user'

const singleProduct = props => {
  const {product, addToCart, getSingleProduct, getUser, user} = props
  const {name, longDescription, imageURL, price, tags} = product
  const productId = props.match.params.productId
  //tags will be in array form? (Natalie)

  useEffect(() => {
    getSingleProduct(productId)
    getUser()
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
    console.log('USER ID', user.id)
    console.log('ORDER INFO', orderInfo)
    addToCart(user.id, orderInfo)
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
    product: state.products.selected,
    user: state.users.selected
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    getUser: () => dispatch(getMe()),
    getSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addToCart: (productId, quantity) =>
      dispatch(createNewOpenOrder(productId, quantity, history))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(singleProduct)
