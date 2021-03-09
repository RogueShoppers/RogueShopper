import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {editProduct} from '../../store/products'

const EditProduct = props => {
  const {selectedProduct} = props

  useEffect(() => {
    editProduct()
  }, [])

  const handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    editProduct({...product, ...selectedProduct})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" onChange={handleChange} value={name} />

        <label>Short Description:</label>
        <input
          name="shortDescription"
          onChange={handleChange}
          value={shortDescription}
        />

        <label>Long Description:</label>
        <input
          name="longDescription"
          onChange={handleChange}
          value={longDescription}
        />

        <label>Price:</label>
        <input name="price" onChange={handleChange} value={price} />

        <label>Inventory Quantity:</label>
        <input name="quantity" onChange={handleChange} value={quantity} />

        <button>Submit</button>
      </form>
    </div>
  )
}

const mapState = state => {
  return {
    selectedProduct: state.selected
  }
}

const mapDispatch = dispatch => {
  return {
    editProduct: product => dispatch(editProduct(product))
  }
}

export default connect(mapState, mapDispatch)(EditProduct)
