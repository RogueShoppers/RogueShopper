import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/products'

class ProductDashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllProducts()
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
    const products = this.props.products
    return (
      <div>
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
    )
  }
}

const mapState = state => {
  return {
    products: state.products.all,
    selectedProduct: state.selected
  }
}

const mapDispatch = dispatch => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    editProduct: product => dispatch(editProduct(product, history))
  }
}

export default connect(mapState, mapDispatch)(ProductDashboard)
