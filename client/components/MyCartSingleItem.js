import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {editCartQuantity} from '../store/orders'
import MyCart from './MyCart'

const MyCartSingleItem = props => {
  const {product, initialQty, removeItemFromCart, user} = props
  const [quantity, setQuantity] = useState(0)

  console.log('SELECTED QTY', quantity)
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
    for (let i = currentQty + 1; i <= 10; i++) {
      arr.push(
        <option key={i} value={i}>
          Qty: {i}
        </option>
      )
    }
    return arr
  }
  const handleChangeQty = event => {
    setQuantity(event.target.value)
    console.log(quantity)
  }

  return (
    <li key={product.id}>
      <div className="row">
        Product Name:
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </div>
      <div className="row">Price: ${product.price}</div>
      <div className="row">InitialQty: {initialQty}</div>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     editQuantity: (productId) => dispatch(editCartQuantity(productId)),
//   }
// }

// export default connect(mapDispatchToProps)(MyCartSingleItem)

export default MyCartSingleItem
