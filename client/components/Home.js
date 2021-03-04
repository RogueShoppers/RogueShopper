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
      <div>
        <div className="parallax-container">
          <div className="parallax">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/happy-and-cheerful-dog-playing-fetch-with-toy-bone-royalty-free-image-1590068781.jpg"
              alt=""
              className="responsive-img"
            />
          </div>
        </div>

        <div>
          <div className="section white">
            <div className="row container">
              <h4 className="header">Featured Products</h4>
              <div className="row">
                {products
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 4)
                  .map(product => {
                    return (
                      <div key={product.id}>
                        <div className="col s12 m3">
                          <div className="card ">
                            <div className="card-image">
                              <img
                                src={product.imageURL}
                                alt="product img"
                                style={{height: 200, width: 200}}
                              />
                              <a className="halfway-fab btn-floating pink pulse">
                                <i className="material-icons">
                                  favorite_border
                                </i>
                              </a>
                            </div>
                            <div className="card-content">
                              <Link to={`/products/${product.id}`}>
                                <span className="card-title">
                                  {product.name}
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className="parallax-container">
          <div className="parallax">
            <img
              src="https://www.kongcompany.com/img/vignette/dog-running.jpg"
              alt=""
              className="responsive-img"
            />
          </div>
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
