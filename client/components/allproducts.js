import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/products'
import {Link} from 'react-router-dom'
import FilterProducts from './FilterProducts'

const AllProducts = props => {
  const {products, getProducts} = props

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <div className="row container">
        <h1 className="header">All Products</h1>
        <FilterProducts />
        <div className="row">
          {products.length !== 0
            ? products.map(product => (
                <div key={product.id}>
                  <div className="col s12 m3">
                    <div className="card medium">
                      <div className="center card-image">
                        <img
                          src={product.imageURL}
                          alt="product img"
                          style={{height: 200, width: 200}}
                        />
                      </div>
                      <Link to={`/products/${product.id}`}>
                        <h2 className="center card-title">{product.name}</h2>
                      </Link>
                      <div className="center card-content">
                        <h5>${product.price}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : 'No Products on Database'}
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
