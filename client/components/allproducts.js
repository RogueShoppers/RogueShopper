import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/products'
import {Link} from 'react-router-dom'

const AllProducts = props => {
  const {products, getProducts} = props

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <div className="section white">
        <div className="row container">
          <h1>All Products</h1>
          <div className="row">
            {products.length !== 0
              ? products.map(product => (
                  <div key={product.id}>
                    <div className="row">
                      <div className="col s12 m7">
                        <div className="card">
                          <div className="card-image">
                            <img
                              src={product.imageURL}
                              alt="product img"
                              style={{height: 200, width: 200}}
                            />
                          </div>
                          <Link to={`/products/${product.id}`}>
                            <h2 className="card-title">{product.name}</h2>
                          </Link>
                          <div className="card-content">
                            <p>{product.shortDescription}</p>
                            <h4>${product.price}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : 'No Products on Database'}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.all
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(fetchAllProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
