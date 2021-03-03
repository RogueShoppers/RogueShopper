import {render} from 'enzyme'
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/products'

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
              <img src={product.imageURL} />
              <h2>{product.name}</h2>
              <p>{product.shortDescription}</p>
              <h3>{product.price}</h3>
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
