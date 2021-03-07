import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchMyCompletedOrder} from '../store/orders'
import {Link} from 'react-router-dom'
import moment from 'moment'

class OrderHistoryDetails extends Component {
  componentDidMount() {
    this.props.fetchMyCompletedOrder()
  }
  render() {
    const allClosedOrders = this.props.allClosedOrders
    const orderId = this.props.match.params.orderId

    const order = allClosedOrders.filter(
      orderObj => orderObj.id === Number(orderId)
    )

    return (
      <div>
        <h4>Order Details</h4>
        <h6>Order Number: {order[0].id}</h6>
        <h7>Order Date: {moment(order[0].updatedAt).format('LL')}</h7>
        <div className="divider" />
        <table className="highlight">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {order[0].products.map(item => {
              return (
                <tr key={item.index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item['order-product'].orderQuantity}</td>
                </tr>
              )
            })}
            <td>
              <Link to="/me">
                <button type="submit" className="btn blue lighten-1">
                  Back to My Account
                </button>
              </Link>
            </td>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allClosedOrders: state.orders.allClosedOrders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMyCompletedOrder: () => dispatch(fetchMyCompletedOrder())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryDetails)
