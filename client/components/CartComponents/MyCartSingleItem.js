import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import StockStatus from '../../utils/StockStatus'
import {editCartQuantity} from '../../store/orders'

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
          <div>
            <StockStatus product={product} />
          </div>
        </div>
        <div>
          {orderError &&
          orderError.data &&
          orderError.data.includes(product.name) ? (
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
