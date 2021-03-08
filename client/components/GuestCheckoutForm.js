import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchMyOpenOrder, closeOpenOrder, setGuestInfo} from '../store/orders'

const GuestCheckoutForm = props => {
  const {checkout, myOpenOrder, getMyOpenOrder, saveGuestInfo} = props
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    getMyOpenOrder()
  }, [])

  const handleCheckout = event => {
    event.preventDefault()
    const guestInfo = {
      firstName,
      lastName,
      address,
      email
    }
    saveGuestInfo(guestInfo)
    checkout(myOpenOrder)
  }
  console.log('guest order', myOpenOrder)

  return (
    <div className="container">
      <h1>Checkout Information</h1>
      <p>Please fill out following information to complete checkout</p>
      <form>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={evt => setFirstName(evt.target.value)}
          />
          {!firstName ? (
            <span className="helper-text red-text text-accent-1">
              *Required
            </span>
          ) : (
            ''
          )}
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={evt => setLastName(evt.target.value)}
          />
          {!lastName ? (
            <span className="helper-text red-text text-accent-1">
              *Required
            </span>
          ) : (
            ''
          )}
        </div>

        <div className="input-field">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            onChange={evt => setAddress(evt.target.value)}
          />
          {!address ? (
            <span className="helper-text red-text text-accent-1">
              *Required
            </span>
          ) : (
            ''
          )}
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={evt => setEmail(evt.target.value)}
          />
          {!email ? (
            <span className="helper-text red-text text-accent-1">
              *Required
            </span>
          ) : (
            ''
          )}
        </div>
        <div>
          <button
            type="submit"
            className="btn blue lighten-1"
            onClick={handleCheckout}
          >
            Complete Checkout
          </button>
        </div>
      </form>
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
    checkout: myOrder => dispatch(closeOpenOrder(myOrder, history)),
    saveGuestInfo: guestInfo => dispatch(setGuestInfo(guestInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestCheckoutForm)
