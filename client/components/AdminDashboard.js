import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editMe} from '../store/user'
import fetchAllUsers from '../store/user'
import fetchAllProducts from '../store/products'

class AdminDashboard extends Component {
  constructor(props) {
    super(props)

    console.log('props', props)

    this.state = {
      users: [],
      products: [],
      orders: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount() {
  //   this.props.fetchAllUsers()
  //   this.props.fetchAllProducts()
  // }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    let users = this.state.users
    let products = this.state.products
    let orders = this.state.orders

    return (
      <div className="container">
        <div id="adminSearch">
          <form onSubmit={this.handleSubmit}>
            <label>Search:</label>
            <input type="text" id="searchFor" />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div id="adminUsersTable">
          <h3>Users</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Admin Status</th>
              </tr>
            </thead>
            <tbody>
              {users.length !== 0 &&
                users.map(user => (
                  <tr key={user.id}>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{String(user.isAdmin)}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div id="adminProductsTable">
          <h3>Products</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Short Description</th>
                <th>Long Description</th>
                <th>Price</th>
                <th>Inventory Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.length !== 0 &&
                products.map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.shortDescription}</td>
                    <td>{product.longDescription}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div id="adminOrdersTable">
          <h3>Orders</h3>
          <table>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length !== 0 &&
                orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{String(order.completed)}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('state', state)
  return {
    users: state.users.all,
    products: state.products.all,
    orders: state.orders.all
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    //user related dispatches
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    editMe: user => dispatch(editMe(user, history)),
    //product related dispatches
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    editProduct: product => dispatch(editProduct(product, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
