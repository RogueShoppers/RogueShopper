import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchMyCompletedOrder} from '../../store/orders'
import {getMe} from '../../store/user'
import {Link} from 'react-router-dom'

const Confirmation = props => {
  const {getUser, getMyClosedOrder, user, myClosedOrder, guestInfo} = props

  console.log('USER', user)
  console.log('props', props)

  useEffect(() => {
    getUser()
    getMyClosedOrder()
  }, [])

  return (
    <div className="container" id="confirmation">
      {!user ? (
        <div>
          <h2>Thanks for your order {guestInfo.firstName}!</h2>
          <p>
            Your order confirmation number is{' '}
            <Link to="/me">{myClosedOrder.id}</Link>
          </p>
          <p>
            Please check <span id="confirmation-email">{guestInfo.email}</span>{' '}
            for a confirmation!
          </p>
          <p>
            Create an account <Link to="/signup">here</Link> to receive special
            discounts!
          </p>
          <p>
            or keep shopping <Link to="/products">our stock!</Link>
          </p>
        </div>
      ) : (
        <div>
          <h2>Thanks for your order {user.firstName}!</h2>
          <p>
            Your order confirmation number is{' '}
            <Link to="/me">{myClosedOrder.id}</Link>
          </p>
          <p>
            Please check <span id="confirmation-email">{user.email}</span> for a
            confirmation!
          </p>
          <p>
            or keep shopping <Link to="/products">our stock!</Link>
          </p>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    myClosedOrder: state.orders.myClosedOrder,
    user: state.users.selected,
    guestInfo: state.orders.guestInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getMe()),
    getMyClosedOrder: () => dispatch(fetchMyCompletedOrder())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
