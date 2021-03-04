import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchAllOpenOrders} from '../store/orders'

const MyCart = props => {
  const {myOrder, getAllOpenOrders} = props

  useEffect(() => {
    getAllOpenOrders()
  }, [])

  const calculateTotalQty = () => {
    return myOrder.products.reduce((acc, product) => {
      return acc + product['order-product'].orderQuantity
    }, 0)
  }

  const calculateTotalPrice = () => {
    return myOrder.products.reduce((acc, product) => {
      return acc + product.price * product['order-product'].orderQuantity
    }, 0)
  }

  const cartNotEmpty = myOrder.id && myOrder.products.length !== 0
  const disabled = myOrder.id && myOrder.products.length === 0

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
                  <span>Price: {product.price}</span>
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
    myOrder: state.orders.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllOpenOrders: () => dispatch(fetchAllOpenOrders())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyCart)
