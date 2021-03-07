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
      <h1>All Products</h1>
      {products.length !== 0
        ? products.map(product => (
            <div key={product.id}>
              <img
                src={product.imageURL}
                alt="product img"
                style={{height: 200, width: 200}}
              />
              <Link to={`/products/${product.id}`}>
                <h2>{product.name}</h2>
              </Link>
              <p>{product.shortDescription}</p>
              <h3>${product.price}</h3>
            </div>
          ))
        : 'No Products on Database'}
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
