import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchAllOrders} from '../store/orders'

// const orders = [
//   {id: 1, name: 'test', price: 30, quantity: 2},
//   {id: 2, name: 'test2', price: 20, quantity: 1},
//   {id: 3, name: 'test3', price: 10, quantity: 5},
// ]

const MyChart = props => {
  const {orders, getAllOrders} = props

  useEffect(() => {
    getAllOrders()
  }, [])

  const cartNotEmpty = orders.length !== 0
  const disabled = orders.length === 0
  return (
    <div>
      <h1>My Cart</h1>
      <ul>
        {cartNotEmpty ? (
          <div>
            <h2>Cart subtotal (total count): Total Price</h2>
            {orders.map(order => {
              return (
                <li key={order.id}>
                  <span>
                    Product Name:<a> {order.name}</a>
                  </span>
                  <br />
                  <span>Price: {order.price}</span>
                  <br />
                  <span>Qty: {order.quantity}</span>
                </li>
              )
            })}
          </div>
        ) : (
          <h2>Your Cart is Empty</h2>
        )}
      </ul>
      <button type="button" disabled={disabled}>
        Checkout
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    orders: state.orders.all
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllOrders: () => dispatch(fetchAllOrders())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyChart)
