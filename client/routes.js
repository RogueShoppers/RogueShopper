import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {LogIn, SignUp, Home, MyUserAccount, EditMyAccount} from './components'
import {getMe} from './store'
import AllProducts from './components/allproducts'
import SingleProduct from './components/singleProduct'
import allUsers from './components/allUsers'
import MyCart from './components/MyCart'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/home" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/products" component={AllProducts} />
        <Route path="/products/:productId" component={SingleProduct} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={Home} />
            <Route exact path="/me" component={MyUserAccount} />
            <Route path="/me/edit" component={EditMyAccount} />
            <Route path="/mycart" component={MyCart} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={LogIn} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.users.selected.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(getMe())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
