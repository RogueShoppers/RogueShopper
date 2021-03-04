import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchMyOpenOrder} from '../store/orders'
import {getMe} from '../store/user'

const MyCart = props => {
  const {myOrder, getMyOpenOrder, getUser, user} = props

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
  console.log(myOrder.id)

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
            {myOrder.products.map(product => {
              return (
                <li key={product.id}>
                  <span>
                    Product Name:<a> {product.name}</a>
                  </span>
                  <br />
                  <span>Price: ${product.price}</span>
                  <br />
                  <span>Qty: {product['order-product'].orderQuantity}</span>
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
