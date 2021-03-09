import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../../store/products'
import {_toggleEdit} from '../../store/products'
import {EditProduct} from './EditProduct'

const ProductDashboard = props => {
  const {products, getProducts, toggleEdit, isEditing} = props
  const [offset, setOffset] = useState(0)
  const [perPage] = useState(10)

  useEffect(
    () => {
      getProducts()
    },
    [offset]
  )

  const handlePageClick = event => {
    const selectedPage = event.selected
    setOffset(selectedPage + 1)
  }

  const handleEditClick = event => {
    toggleEdit()
  }

  return (
    <div>
      <h3>Products</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Short Description</th>
            <th>Long Description</th>
            <th>Price</th>
            <th>Inventory Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.length !== 0 &&
            products.slice(offset, offset + perPage).map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.shortDescription}</td>
                <td>{product.longDescription}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button value={product.id} onClick={handleEditClick}>
                    Edit
                  </button>
                </td>
                <td>{isEditing ? EditProduct : null}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel="prev"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={Math.ceil(products.length / perPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="center pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </div>
  )
}

const mapState = state => {
  console.log(state)
  return {
    products: state.products.all,
    selectedProduct: state.selected,
    isEditing: state.products.isEditing
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchAllProducts()),
    toggleEdit: () => dispatch(_toggleEdit())
    // editProduct: product => dispatch(editProduct(product, history))
  }
}

export default connect(mapState, mapDispatch)(ProductDashboard)
