import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMe} from '../store/user'
import {Link} from 'react-router-dom'
import {fetchMyCompletedOrder} from '../store/orders'

class MyUserAccount extends Component {
  componentDidMount() {
    this.props.getMe()
    this.props.fetchMyCompletedOrder()
  }
  render() {
    const {firstName, lastName, preferredName, address, email} = this.props.user
    const {allClosedOrders} = this.props
    return (
      <div className="container">
        <h2>Hi {!preferredName ? firstName : preferredName}!</h2>
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Profile</span>
                <div>
                  <p>First Name: {firstName}</p>
                  <p>Last Name: {lastName}</p>
                  <p>Preferred Name: {preferredName}</p>
                  <p>Address: {address}</p>
                  <p>Email: {email}</p>
                  <p>Password: ******</p>
                </div>
              </div>
              <div className="card-action">
                <Link to="/me/edit">Edit</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <h5>Order History</h5>
        <table className="highlight">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Total</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            {allClosedOrders.map(closedOrder => {
              return (
                <tr key={closedOrder.id}>
                  <td>{closedOrder.id}</td>
                  <td>
                    $
                    {closedOrder.products.reduce((aggregator, product) => {
                      return (
                        aggregator +
                        product.price * product['order-product'].orderQuantity
                      )
                    }, 0)}
                  </td>
                  <td>
                    <Link to={`/orders/${closedOrder.id}`}>
                      <button type="submit" className="btn blue lighten-1">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.selected,
    allClosedOrders: state.orders.allClosedOrders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMe: () => dispatch(getMe()),
    fetchMyCompletedOrder: () => dispatch(fetchMyCompletedOrder())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyUserAccount)
