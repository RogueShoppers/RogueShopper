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

  return (
    <div className="container" id="myCart">
      <div className="row">
        <div className="col s12">
          <h1>My Cart</h1>
        </div>
        <div className="row">
          {cartNotEmpty ? (
            <div>
              <h2 className="right-align">
                Subtotal ({calculateTotalQty()} items):{' '}
                <span id="totalPrice">${calculateTotalPrice()}</span>
              </h2>
              <ul className="collection">
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
              </ul>
            </div>
          ) : (
            <h2>Your Cart is Empty</h2>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <Link to="/products">
            <button
              className="left btn btn-large waves-effect waves-light #e3f2fd blue lighten-5 blue-text"
              type="button"
            >
              Continue Shopping
              <i className="material-icons left">arrow_back</i>
            </button>
          </Link>
        </div>
        <div className="col s6">
          <button
            className="right btn btn-large waves-effect waves-light #ff8a80 red accent-1"
            type="button"
          >
            Checkout
            <i className="material-icons right">send</i>
          </button>
        </div>
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
