import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchMyOpenOrder, removeItemFromOrder} from '../store/orders'
import {getMe} from '../store/user'
import {Link} from 'react-router-dom'

const MyCart = props => {
  const {myOrder, getMyOpenOrder, getUser, user, removeItemFromCart} = props
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    getUser()
  }, [])

  useEffect(
    () => {
      getMyOpenOrder(user.id)
    },
    [user]
  )

  console.log('MY ORDER', myOrder)

  const calculateTotalQty = () => {
    return myOrder.products.reduce((total, product) => {
      return total + product['order-product'].orderQuantity
    }, 0)
  }

  const calculateTotalPrice = () => {
    return myOrder.products.reduce((total, product) => {
      return total + product.price * product['order-product'].orderQuantity
    }, 0)
  }

  const cartNotEmpty = myOrder.id && myOrder.products.length !== 0
  const disabled = myOrder.id ? false : true || myOrder.products.length === 0

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
  }

  return (
    <div>
      <h1>My Cart</h1>
      {cartNotEmpty ? (
        <div>
          <h2>
            Subtotal ({calculateTotalQty()} items): ${calculateTotalPrice()}
          </h2>
          <ol className="container">
            {myOrder.products.map(product => {
              const initialQty = product['order-product'].orderQuantity
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
            })}
          </ol>
        </div>
      ) : (
        <h2>Your Cart is Empty</h2>
      )}

      <button type="button" disabled={disabled}>
        Checkout
      </button>
      <div>
        <h4>
          <Link to="/products">Continue Shopping</Link>
        </h4>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    myOrder: state.orders.myOrder,
    user: state.users.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getMe()),
    getMyOpenOrder: userId => dispatch(fetchMyOpenOrder(userId)),
    removeItemFromCart: (userId, productId) =>
      dispatch(removeItemFromOrder(userId, productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)
