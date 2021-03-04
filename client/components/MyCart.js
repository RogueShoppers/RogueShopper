import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchMyOpenOrder, removeItemFromOrder} from '../store/orders'
import {getMe} from '../store/user'
import {Link} from 'react-router-dom'
import MyCartSingleItem from './MyCartSingleItem'

const MyCart = props => {
  const {myOrder, getMyOpenOrder, getUser, user, removeItemFromCart} = props

  useEffect(() => {
    getUser()
  }, [])

  useEffect(
    () => {
      getMyOpenOrder(user.id)
    },
    [user]
  )

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
                <MyCartSingleItem
                  key={product.id}
                  product={product}
                  initialQty={initialQty}
                  removeItemFromCart={removeItemFromCart}
                  user={user}
                />
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
