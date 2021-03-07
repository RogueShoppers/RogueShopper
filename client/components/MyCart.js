import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {
  fetchMyOpenOrder,
  removeItemFromOrder,
  closeOpenOrder
} from '../store/orders'
import {Link} from 'react-router-dom'
import MyCartSingleItem from './MyCartSingleItem'

const MyCart = props => {
  const {
    myOpenOrder,
    getMyOpenOrder,
    removeItemFromCart,
    checkout,
    orderError
  } = props

  useEffect(() => {
    getMyOpenOrder()
  }, [])

  console.log('PROPS', props)

  const calculateTotalQty = () => {
    return myOpenOrder.products.reduce((total, product) => {
      return total + product['order-product'].orderQuantity
    }, 0)
  }

  const calculateTotalPrice = () => {
    return myOpenOrder.products.reduce((total, product) => {
      return total + product.price * product['order-product'].orderQuantity
    }, 0)
  }

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
                Subtotal ({calculateTotalQty()} items):{' '}
                <span id="totalPrice">${calculateTotalPrice()}</span>
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
            className={`right btn btn-large waves-effect waves-light #ff8a80 red accent-1 ${disabled}`}
            type="submit"
            onClick={handleCheckout}
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
    myOpenOrder: state.orders.myOpenOrder,
    orderError: state.orders.orderError
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    getMyOpenOrder: () => dispatch(fetchMyOpenOrder()),
    removeItemFromCart: productId => dispatch(removeItemFromOrder(productId)),
    checkout: myOrder => dispatch(closeOpenOrder(myOrder, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)
