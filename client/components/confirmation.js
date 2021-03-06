import React, {useEffect} from 'react'
import {connect} from 'react-redux'
// import {fetchMyOpenOrder, removeItemFromOrder} from '../store/orders'
import {getMe} from '../store/user'
import {Link} from 'react-router-dom'

const Confirmation = props => {
  const {getUser, user} = props

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <h2>Thanks for your order {user.firstName}!</h2>
      <p>Your order confirmation number is #PLACEHOLDER#</p>
      <p>Please check {user.email} for a confirmation!</p>
      <p>
        or keep shopping <Link to="/products">our stock!</Link>
      </p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    myOrder: state.orders.myOrder,
    user: state.users.selected
  }
}

export default connect(mapStateToProps)(Confirmation)
