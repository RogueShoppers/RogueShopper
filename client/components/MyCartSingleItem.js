import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {editCartQuantity} from '../store/orders'

const MyCartSingleItem = props => {
  const {product, initialQty, removeItemFromCart, user, editQuantity} = props
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
    editQuantity(user.id, orderInfo)
    setQuantity(event.target.value)
  }

  return (
    <li key={product.id}>
      <div className="row">
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </div>
      <div className="row">Price: ${product.price}</div>
      <div className="row">
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
      </div>
      <div className="row">
        <button
          type="button"
          className="waves-effect waves-light btn-small"
          onClick={() => removeItemFromCart(user.id, product.id)}
        >
          Remove {product.name}
        </button>
      </div>
    </li>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    editQuantity: (userId, orderInfo) =>
      dispatch(editCartQuantity(userId, orderInfo))
  }
}

export default connect(null, mapDispatchToProps)(MyCartSingleItem)
