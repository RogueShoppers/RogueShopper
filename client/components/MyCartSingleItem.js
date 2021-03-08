import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {editCartQuantity} from '../store/orders'

const MyCartSingleItem = props => {
  const {
    product,
    initialQty,
    removeItemFromCart,
    editQuantity,
    orderError
  } = props
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setQuantity(initialQty)
  }, [])

  // could we combine before and after into one function since they do a similar thing?
  const beforeQtyOptions = currentQty => {
    let arr = []
    for (let i = 1; i < currentQty; i++) {
      arr.push(
        <option key={i} value={i}>
          Qty: {i}
        </option>
      )
    }
    return arr
  }

  const afterQtyOptions = currentQty => {
    let arr = []
    for (let i = currentQty + 1; i <= 20; i++) {
      arr.push(
        <option key={i} value={i}>
          Qty: {i}
        </option>
      )
    }
    return arr
  }
  const handleChangeQty = event => {
    const orderInfo = {
      quantity: event.target.value,
      productId: product.id
    }
    editQuantity(orderInfo)
    setQuantity(event.target.value)
  }

  const outOfStock = product.quantity === 0
  const stockStatus = outOfStock ? (
    <p className="red-text">Sorry, this item is currently out of stock</p>
  ) : product.quantity <= 10 ? (
    <p className="orange-text text-darken-1">{`Hurry! Only ${
      product.quantity
    } items left!`}</p>
  ) : (
    <p className="teal-text">In Stock!</p>
  )

  return (
    <li key={product.id} className="collection-item" id="cartItem">
      <img src={product.imageURL} />
      <div id="cart-content">
        <Link to={`/products/${product.id}`}>{product.name}</Link>
        <p>Price: ${product.price}</p>
        <div id="edit-delete">
          <select
            className="browser-default"
            value={quantity}
            onChange={handleChangeQty}
          >
            {beforeQtyOptions(initialQty)}
            <option value={initialQty}>Qty: {initialQty}</option>
            {afterQtyOptions(initialQty)}
            {initialQty}
          </select>
          <button
            type="button"
            className="waves-effect waves-light btn-small"
            onClick={() => removeItemFromCart(product.id)}
          >
            Remove
          </button>
          <div>{stockStatus}</div>
        </div>
        <div>
          {orderError.data && orderError.data.includes(product.name) ? (
            <p className="red-text">*{orderError.data}</p>
          ) : (
            ''
          )}
        </div>
      </div>
    </li>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    editQuantity: orderInfo => dispatch(editCartQuantity(orderInfo))
  }
}

export default connect(null, mapDispatchToProps)(MyCartSingleItem)
