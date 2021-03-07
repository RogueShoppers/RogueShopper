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
      products: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    //need to define action prior to calling fetch all users
    fetchAllUsers().then(response => {
      this.setState({
        users: response.users.all
      })
    })

    fetchAllProducts().then(response => {
      this.setState({
        products: response.products.all
      })
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    console.log('state in render', this.state)
    let users = this.state.users
    let products = this.state.products

    return (
      <div className="container">
        <div id="adminSearch">
          <form onSubmit={this.handleSubmit}>
            <label>Search:</label>
            <input type="text" id="searchFor" />
            <label>
              Type of Search:
              <select value="" onChange={this.handleChange}>
                <option value="Users">Users</option>
                <option value="Product">Products</option>
                <option value="Global" />
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div id="adminUsersTable">
          <h1>Users</h1>
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
          <h1>Products</h1>
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
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   console.log('state', state)
//   return {
//     state
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    // getUsers: () => dispatch(fetchAllUsers()),
    editMe: user => dispatch(editMe(user)),
    editProduct: product => dispatch(editProduct(product))
  }
}

export default connect(null, mapDispatchToProps)(AdminDashboard)
