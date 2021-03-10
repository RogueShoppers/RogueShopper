import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {editProduct} from '../../store/products'

const EditProduct = props => {
  const {selectedProduct} = props.location.state
  const [setProduct] = useState(null)
  //   console.log( 'props', selectedProduct)

  useEffect(() => {
    editProduct()
  }, [])

  useEffect(
    () => {
    //   handleChange().setProduct()

      //    const handleChange = (event) => {
      //         setProduct({product: ({
      //             [event.target.name]: event.target.defaultValue
      //           })})
      //         }
      //         console.log('product in handle change', setProduct)
      //         return handleChange
      console.log('inside handle change useEffect', setProduct)
    },
    [setProduct]
  )

  const handleChange = event => {
    return {[event.target.name]: event.target.value}
  }

  const handleSubmit = event => {
    event.preventDefault()
    editProduct({...selectedProduct})
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
    setProduct: state.setProduct
  }
}

const mapDispatch = dispatch => {
  return {
    editProduct: product => dispatch(editProduct(product))
  }
}

export default connect(mapState, mapDispatch)(EditProduct)
