import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchMyOpenOrders} from '../store/orders'
import {getMe} from '../store/user'

const MyCart = props => {
  const {myOrders, getMyOpenOrders, getUser, user} = props

  useEffect(() => {
    getUser()
  }, [])

  useEffect(
    () => {
      getMyOpenOrders(user.id)
    },
    [user]
  )

  console.log('MY ORDERS', myOrders)

  const calculateTotalQty = () => {
    return myOrders.reduce((total, order) => {
      const subTotal = order.products.reduce((subTotal, product) => {
        return subTotal + product['order-product'].orderQuantity
      }, 0)
      return total + subTotal
    }, 0)
  }

  const calculateTotalPrice = () => {
    return myOrders.reduce((total, order) => {
      const subTotal = order.products.reduce((subTotal, product) => {
        return subTotal + product.price * product['order-product'].orderQuantity
      }, 0)
      return total + subTotal
    }, 0)
  }

  const cartNotEmpty = myOrders.length !== 0
  const disabled = myOrders.length === 0

  return (
    <div>
      <h1>My Cart</h1>
      {cartNotEmpty ? (
        <div>
          <h2>
            Cart subtotal ({calculateTotalQty()} items): $
            {calculateTotalPrice()}
          </h2>
          <ol>
            {myOrders.map(order => {
              return (
                <li key={order.id}>
                  {order.products.map(product => {
                    return (
                      <div key={product.id}>
                        <span>
                          Product Name:<a> {product.name}</a>
                        </span>
                        <br />
                        <span>Price: {product.price}</span>
                        <br />
                        <span>
                          Qty: {product['order-product'].orderQuantity}
                        </span>
                      </div>
                    )
                  })}
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
    </div>
  )
}

const mapStateToProps = state => {
  return {
    myOrders: state.orders.all,
    user: state.users.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getMe()),
    getMyOpenOrders: userId => dispatch(fetchMyOpenOrders(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)
