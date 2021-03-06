import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchMyCompletedOrder} from '../store/orders'
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
    myClosedOrder: state.orders.myOrder,
    user: state.users.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getMe()),
    getMyClosedOrder: userId => dispatch(fetchMyCompletedOrder(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
