import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/products'
import {Link} from 'react-router-dom'

class Home extends Component {
  componentDidMount() {
    this.props.getAllProducts()
  }
  render() {
    const {products} = this.props
    return (
      <div className="container">
        <h4>Featured Products</h4>

        <div className="row">
          {products
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map(product => {
              return (
                <div key={product.id}>
                  <div className="col s12 m3">
                    <div className="card">
                      <div className="card-image">
                        <img src={product.imageURL} alt="product img" />
                        <a className="halfway-fab btn-floating pink pulse">
                          <i className="material-icons">favorite_border</i>
                        </a>
                      </div>
                      <div className="card-content">
                        <Link to={`/products/${product.id}`}>
                          <span className="card-title">{product.name}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.all
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(fetchAllProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
