import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {
  fetchMyOpenOrder,
  removeItemFromOrder,
  closeOpenOrder,
  saveGuestToUser
} from '../../store/orders'
import {Link} from 'react-router-dom'
import MyCartSingleItem from './MyCartSingleItem'
import {getMe} from '../../store/user'
import CartItemCount from '../../utils/CartItemCount'
import OrderTotalPrice from '../../utils/OrderTotalPrice'

const MyCart = props => {
  const {
    myOpenOrder,
    getMyOpenOrder,
    removeItemFromCart,
    checkout,
    orderError,
    getUser,
    user,
    setGuestToUser
  } = props

  useEffect(() => {
    getMyOpenOrder()
    getUser()
    if (user.id && myOpenOrder.id && myOpenOrder.products.length !== 0) {
      setGuestToUser(myOpenOrder.id, user.id)
    }
  }, [])

  const handleCheckout = event => {
    event.preventDefault()
    checkout(myOpenOrder)
  }

  const cartNotEmpty = myOpenOrder.id && myOpenOrder.products.length !== 0
  const disabled = cartNotEmpty ? '' : 'disabled'

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
                Subtotal (<CartItemCount myOrder={myOpenOrder} /> items):{' '}
                <span id="totalPrice">
                  $<OrderTotalPrice myOrder={myOpenOrder} />
                </span>
              </h2>
              <ul className="collection">
                {myOpenOrder.products.map(product => {
                  const initialQty = product['order-product'].orderQuantity
                  return (
                    <MyCartSingleItem
                      key={product.id}
                      product={product}
                      initialQty={initialQty}
                      removeItemFromCart={removeItemFromCart}
                      orderError={orderError}
                    />
                  )
                })}
              </ul>
            </div>
          ) : (
            <div id="emptyCart" className="row">
              <img
                src="https://previews.123rf.com/images/a41cats/a41cats1203/a41cats120300065/12764556-pomeranian-dog-next-to-an-empty-shopping-cart-over-white.jpg"
                className="col s6"
              />
              <h2 className="col s6">Your cart is empty...</h2>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col s4">
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
        {!user ? (
          <>
            <div className="col s4">
              <Link to="/signup">
                <button
                  className="right btn btn-large waves-effect waves-light blue white-text"
                  type="button"
                >
                  Create an Account
                </button>
              </Link>
            </div>
            <div className="col s4">
              <Link to="/guestcheckout">
                <button
                  className={`right btn btn-large waves-effect waves-light #ff8a80 red accent-1 ${disabled}`}
                  type="button"
                >
                  Checkout as Guest
                  <i className="material-icons right">send</i>
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="col s8">
            <button
              className={`right btn btn-large waves-effect waves-light #ff8a80 red accent-1 ${disabled}`}
              type="submit"
              onClick={handleCheckout}
            >
              Checkout
              <i className="material-icons right">send</i>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    myOpenOrder: state.orders.myOpenOrder,
    orderError: state.orders.orderError,
    user: state.users.selected
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    getMyOpenOrder: () => dispatch(fetchMyOpenOrder()),
    removeItemFromCart: productId => dispatch(removeItemFromOrder(productId)),
    checkout: myOrder => dispatch(closeOpenOrder(myOrder, history)),
    getUser: () => dispatch(getMe()),
    setGuestToUser: (orderId, userId) =>
      dispatch(saveGuestToUser(orderId, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)
