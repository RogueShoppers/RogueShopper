import React, {Component, useState} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/products'
import {Link} from 'react-router-dom'
import M from 'materialize-css'

class Home extends Component {
  componentDidMount() {
    let elements = document.querySelectorAll('.parallax')
    M.Parallax.init(elements)
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
              alt="homepage background_1"
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

        <footer className="page-footer grey darken-2">
          <div className="container">
            <div className="row">
              <div className="col s12 16">
                <h4>Contact Us</h4>
                <a className="btn-floating btn-small blue-grey darken-4">
                  <i className="fas fa-phone" />
                </a>
                <a className="btn-floating btn-small blue-grey darken-4">
                  <i className="material-icons">email</i>
                </a>
                <a className="btn-floating btn-small blue-grey darken-4">
                  <i className="fab fa-instagram" />
                </a>
                <a className="btn-floating btn-small blue-grey darken-4">
                  <i className="fab fa-facebook" />
                </a>
                <a className="btn-floating btn-small blue-grey darken-4">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </footer>
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
