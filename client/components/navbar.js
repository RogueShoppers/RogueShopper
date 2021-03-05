import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import {logout} from '../store'
import {fetchMyOpenOrder} from '../store/orders'

const Navbar = ({
  handleClick,
  isLoggedIn,
  getMyOpenOrder,
  myOrder,
  loggedInUser
}) => {
  useEffect(
    () => {
      getMyOpenOrder(loggedInUser.id)
    },
    [loggedInUser]
  )

  const calculateTotalQty = () => {
    if (myOrder.id) {
      return myOrder.products.reduce((total, product) => {
        return total + product['order-product'].orderQuantity
      }, 0)
    } else {
      return 0
    }
  }

  return (
    <div>
      <h1>RogueShopper</h1>
      <nav className="nav-wrapper grey darken-2">
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/mycart">My Cart ({calculateTotalQty()})</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <NavLink to="/me" className="btn btn-floating pink lighten-1">
              {loggedInUser.firstName[0] + loggedInUser.lastName[0]}
            </NavLink>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  // console.log('state in Navbar', state)
  return {
    isLoggedIn: !!state.users.selected.id,
    loggedInUser: state.users.selected,
    myOrder: state.orders.myOrder
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    getMyOpenOrder: userId => dispatch(fetchMyOpenOrder(userId))
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
