import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {editProduct} from '../../store/products'

const EditProduct = props => {
  const {selectedProduct} = props.location.state
  let [product, setProduct] = useState([])

  useEffect(
    () => {
      setProduct(product)
    },
    [setProduct]
  )

  const handleChange = event => {
    product = {id: selectedProduct.id, [event.target.name]: event.target.value}
  }

  setProduct = product => {
    return product.map(p => {
      {
        p.name, p.shortDescription, p.longDescription, p.price, p.quantity
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    editProduct({...product})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          onChange={handleChange}
          defaultValue={selectedProduct.name}
        />

        <label>Short Description:</label>
        <input
          name="shortDescription"
          onChange={handleChange}
          defaultValue={selectedProduct.shortDescription}
        />

        <label>Long Description:</label>
        <input
          name="longDescription"
          onChange={handleChange}
          defaultValue={selectedProduct.longDescription}
        />

        <label>Price:</label>
        <input
          name="price"
          onChange={handleChange}
          defaultValue={selectedProduct.price}
        />

        <label>Inventory Quantity:</label>
        <input
          name="quantity"
          onChange={handleChange}
          defaultValue={selectedProduct.quantity}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

const mapState = state => {
  return {
    selectedProduct: state.selected,
    setProduct: state.products.selected
  }
}

const mapDispatch = dispatch => {
  return {
    editProduct: product => dispatch(editProduct(product))
  }
}

export default connect(mapState, mapDispatch)(EditProduct)
