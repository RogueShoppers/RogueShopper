import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import {logout} from '../store'
import {fetchMyOpenOrder} from '../store/orders'
import CartItemCount from './utils/CartItemCount'

const Navbar = props => {
  const {
    handleClick,
    isLoggedIn,
    getMyOpenOrder,
    myOpenOrder,
    loggedInUser,
    isAdmin
  } = props
  useEffect(
    () => {
      getMyOpenOrder()
    },
    [loggedInUser]
  )

  return (
    <div>
      <img
        id="logo"
        src="https://lh3.googleusercontent.com/P3QIPoCWXRY0B8nEqsWpiK9wUp57rW75xNwrJ66CwwfctW7mepYZTZPkumsbVaXY9kFUudSyJ3Y0wAZLf2_tpXfTlUShhcVZ8Z0VAZxal8M_xy33MDHsNS7yEi8fhZ3nz4S6sJ-tx48=s250-p-k"
      />
      <nav className="nav-wrapper grey darken-2">
        {isLoggedIn && isAdmin ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/mycart">
              My Cart (<CartItemCount myOrder={myOpenOrder} />)
            </Link>
            {/*The navbar will show these links if you are admin*/}
            <Link to="/me/dashboard">Admin Dashboard</Link>
            <NavLink to="/me" className="btn btn-floating indigo lighten-1">
              {loggedInUser.firstName[0] + loggedInUser.lastName[0]}
            </NavLink>
            <div className="right">
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          </div>
        ) : isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>

            {/* <Link to="/mycart">
              My Cart <i className="material-icons right">shopping_cart</i>(
              {`${calculateTotalQty()}`})
            </Link> */}

            <Link to="/mycart">
              My Cart (<CartItemCount myOrder={myOpenOrder} />)
            </Link>
            <NavLink to="/me" className="btn btn-floating pink lighten-1">
              {loggedInUser.firstName[0] + loggedInUser.lastName[0]}
            </NavLink>
            <div className="right">
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/mycart">
              My Cart (<CartItemCount myOrder={myOpenOrder} />)
            </Link>
            <div className="right">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
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
  return {
    isLoggedIn: !!state.users.selected.id,
    loggedInUser: state.users.selected,
    myOpenOrder: state.orders.myOpenOrder,
    isAdmin: state.users.selected.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    getMyOpenOrder: () => dispatch(fetchMyOpenOrder())
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
  // isAdmin: PropTypes.bool.isRequired
}
