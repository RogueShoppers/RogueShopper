import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchMyOpenOrder} from '../store/orders'
import {getMe} from '../store/user'
import {Link} from 'react-router-dom'

const MyCart = props => {
  const {myOrder, getMyOpenOrder, getUser, user} = props
  // const [quantity, setQuantity] = useState(0)

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
  console.log('USER', user)

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
      arr.push(<option>Qty:{i}</option>)
    }
    return arr
  }

  const afterQtyOptions = currentQty => {
    let arr = []
    for (let i = currentQty + 1; i <= 10; i++) {
      arr.push(<option>Qty: {i}</option>)
    }
    return arr
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
              const currentQty = product['order-product'].orderQuantity
              return (
                <li key={product.id}>
                  <div className="row">
                    Product Name:
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </div>
                  <div className="row">Price: ${product.price}</div>
                  <div className="row">InitialQty: {currentQty}</div>
                  <div className="row">
                    <select className="browser-default" value={currentQty}>
                      {beforeQtyOptions(currentQty)}
                      <option selected>Qty: {currentQty}</option>
                      {afterQtyOptions(currentQty)}
                      {currentQty}
                    </select>
                  </div>
                  <div className="row">
                    <button
                      type="button"
                      className="waves-effect waves-light btn-small"
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
    myOrder: state.orders.openOrder,
    user: state.users.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getMe()),
    getMyOpenOrder: userId => dispatch(fetchMyOpenOrder(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)
